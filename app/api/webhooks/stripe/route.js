/**
 * Stripe Webhook Handler
 *
 * Listens for checkout.session.completed events and triggers
 * auto-provisioning for commerce (and future product) subscriptions.
 *
 * Stripe sends raw body — we must read it as text for signature verification.
 * Next.js App Router: export const dynamic = "force-dynamic" to prevent caching.
 */

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const STRIPE_API_BASE = "https://api.stripe.com/v1";

const COMMERCE_LOOKUP_PREFIXES = ["commerce_"];
const CLOUD_LOOKUP_PREFIXES = ["cloud_", "managed_"];
const CURATE_LOOKUP_PREFIXES = ["curate_"];

function classifyLookupKeys(keys) {
  const types = new Set();
  for (const key of keys) {
    if (COMMERCE_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("commerce");
    if (CLOUD_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("cloud");
    if (CURATE_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("curate");
  }
  return types;
}

function extractTier(lookupKeys) {
  for (const key of lookupKeys) {
    const match = key.match(/^commerce_(\w+?)_(monthly|annual)$/);
    if (match) return match[1];
  }
  return "develop";
}

async function verifyWebhookSignature(rawBody, signatureHeader, secret) {
  // Stripe signature verification using Web Crypto API
  const parts = Object.fromEntries(
    signatureHeader.split(",").map((p) => {
      const [k, v] = p.split("=");
      return [k, v];
    })
  );

  const timestamp = parts.t;
  const expectedSig = parts.v1;
  if (!timestamp || !expectedSig) return false;

  const payload = `${timestamp}.${rawBody}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hex === expectedSig;
}

async function provisionCommerce({ session, tier, lookupKeys }) {
  const provisionerUrl = process.env.COMMERCE_PROVISIONER_URL;
  const cloudConsoleUrl = process.env.CREATE_CLOUD_CONSOLE_URL;

  const customerEmail =
    session.customer_details?.email ||
    session.customer_email ||
    session.metadata?.email ||
    "";

  const customerName =
    session.customer_details?.name ||
    session.metadata?.name ||
    "";

  const appId = `commerce-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const tenantSlug = customerEmail
    ? customerEmail.split("@")[0].replace(/[^a-z0-9]/gi, "").slice(0, 20).toLowerCase()
    : appId.slice(0, 20);

  const payload = {
    product: "commerce",
    appId,
    tier,
    tenantSlug,
    email: customerEmail,
    name: customerName,
    stripeSessionId: session.id,
    stripeCustomerId: session.customer,
    stripeSubscriptionId: session.subscription,
    lookupKeys,
  };

  console.log("[commerce-provision] Provisioning:", JSON.stringify(payload));

  // Step 1: Call provisioner to spin up Medusa container on DOCR
  if (provisionerUrl) {
    const provisionerToken = process.env.COMMERCE_PROVISIONER_TOKEN;
    try {
      const resp = await fetch(provisionerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(provisionerToken ? { Authorization: `Bearer ${provisionerToken}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const result = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        console.error("[commerce-provision] Provisioner error:", result);
        return { ok: false, error: result.error || "Provisioner rejected request" };
      }

      console.log("[commerce-provision] Provisioner response:", JSON.stringify(result));

      // Step 2: Register in cloud_apps via cloud-console
      if (cloudConsoleUrl) {
        try {
          await fetch(new URL(`/api/cloud/apps/${appId}/register`, cloudConsoleUrl), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              environment: "production",
              deployUrl: result.deployUrl || result.url || `https://${tenantSlug}.commerce.esteemed.io`,
              provider: "digitalocean",
              region: result.region || "nyc3",
              framework: "medusa",
              source: "commerce",
            }),
          });
          console.log("[commerce-provision] Registered in cloud_apps:", appId);
        } catch (regErr) {
          console.error("[commerce-provision] Cloud registration failed:", regErr.message);
        }
      }

      return { ok: true, appId, tenantSlug, ...result };
    } catch (err) {
      console.error("[commerce-provision] Provisioner unreachable:", err.message);
      return { ok: false, error: "Provisioner unreachable" };
    }
  }

  // No provisioner configured — log and return pending
  console.warn("[commerce-provision] No COMMERCE_PROVISIONER_URL configured. Logging for manual provisioning.");
  return { ok: true, appId, tenantSlug, status: "pending-provisioner" };
}

export async function POST(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_RESTRICTED_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey) {
    console.error("[stripe-webhook] No Stripe secret key configured");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  // Read raw body for signature verification
  const rawBody = await request.text();
  const signatureHeader = request.headers.get("stripe-signature");

  // Verify signature if webhook secret is configured
  if (webhookSecret && signatureHeader) {
    const valid = await verifyWebhookSignature(rawBody, signatureHeader, webhookSecret);
    if (!valid) {
      console.error("[stripe-webhook] Signature verification failed");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only handle checkout.session.completed
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object;
  const lookupKeysRaw = session.metadata?.lookup_keys || "";
  const lookupKeys = lookupKeysRaw.split(",").map((k) => k.trim()).filter(Boolean);

  if (lookupKeys.length === 0) {
    console.log("[stripe-webhook] No lookup keys in session metadata, skipping");
    return NextResponse.json({ received: true });
  }

  const productTypes = classifyLookupKeys(lookupKeys);
  console.log("[stripe-webhook] Session completed:", session.id, "Products:", [...productTypes], "Keys:", lookupKeys);

  const results = {};

  // Auto-provision commerce
  if (productTypes.has("commerce")) {
    const tier = extractTier(lookupKeys);
    results.commerce = await provisionCommerce({ session, tier, lookupKeys });
  }

  // Future: auto-provision cloud, curate, etc.
  if (productTypes.has("cloud")) {
    console.log("[stripe-webhook] Cloud subscription activated — manual provisioning for now");
    results.cloud = { status: "logged" };
  }

  if (productTypes.has("curate")) {
    console.log("[stripe-webhook] Curate subscription activated — uses separate provisioner");
    results.curate = { status: "logged" };
  }

  return NextResponse.json({ received: true, results });
}
