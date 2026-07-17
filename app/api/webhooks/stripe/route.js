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
import { DEFAULT_PLATFORM_IMAGES, stableProvisioningId, tenantSlugFromEmail } from "@/lib/commerce-provisioning";
import { verifyWebhookSignature } from "@/lib/stripe-webhook";

const COMMERCE_LOOKUP_PREFIXES = ["commerce_"];
const WOO_LOOKUP_PREFIXES = ["woo_"];
const DRUPAL_LOOKUP_PREFIXES = ["drupal_"];
const CLOUD_LOOKUP_PREFIXES = ["cloud_", "managed_"];
const CURATE_LOOKUP_PREFIXES = ["curate_"];

export const dynamic = "force-dynamic";

function classifyLookupKeys(keys) {
  const types = new Set();
  for (const key of keys) {
    if (COMMERCE_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("commerce");
    if (WOO_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("woocommerce");
    if (DRUPAL_LOOKUP_PREFIXES.some((p) => key.startsWith(p))) types.add("drupal");
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

function extractTierByPrefix(lookupKeys, prefix) {
  for (const key of lookupKeys) {
    const re = new RegExp(`^${prefix}(\\w+?)_(monthly|annual)$`);
    const match = key.match(re);
    if (match) return match[1];
  }
  return "starter";
}

async function provisionCMS({ session, tier, lookupKeys, platform, framework, image }) {
  const cloudConsoleUrl = process.env.CREATE_CLOUD_CONSOLE_URL;
  const customerEmail = session.customer_details?.email || session.customer_email || "";
  const customerName = session.customer_details?.name || "";
  const appId = stableProvisioningId({
    platform,
    sessionId: session.id,
    subscriptionId: session.subscription,
    customerId: session.customer,
    tier,
  });
  const tenantSlug = tenantSlugFromEmail(customerEmail, appId.slice(0, 20));

  const payload = {
    product: platform,
    appId,
    tier,
    tenantSlug,
    email: customerEmail,
    name: customerName,
    framework,
    image,
    stripeSessionId: session.id,
    stripeCustomerId: session.customer,
    stripeSubscriptionId: session.subscription,
    lookupKeys,
  };

  console.log(`[${platform}-provision] Provisioning:`, JSON.stringify(payload));

  // Call the commerce provisioner with platform-specific params
  const provisionerUrl = process.env.COMMERCE_PROVISIONER_URL;
  if (provisionerUrl) {
    try {
      const provisionerToken = process.env.COMMERCE_PROVISIONER_TOKEN;
      const resp = await fetch(provisionerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(provisionerToken ? { Authorization: `Bearer ${provisionerToken}` } : {}),
          ...(provisionerToken ? { "x-internal-token": provisionerToken } : {}),
        },
        body: JSON.stringify(payload),
      });
      const result = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        console.error(`[${platform}-provision] Provisioner error:`, result);
        return { ok: false, error: result.error || "Provisioner rejected" };
      }

      // Register in cloud_apps
      if (cloudConsoleUrl) {
        try {
          await fetch(new URL(`/api/cloud/apps/${appId}/register`, cloudConsoleUrl), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              environment: "production",
              deployUrl: result.deployUrl || `https://${tenantSlug}.${platform}.esteemed.io`,
              provider: "digitalocean",
              region: result.region || "nyc3",
              framework,
              source: platform,
            }),
          });
        } catch (e) {
          console.error(`[${platform}-provision] Cloud registration failed:`, e.message);
        }
      }

      return { ok: true, appId, tenantSlug, ...result };
    } catch (err) {
      console.error(`[${platform}-provision] Provisioner unreachable:`, err.message);
      return { ok: false, error: "Provisioner unreachable" };
    }
  }

  console.warn(`[${platform}-provision] No provisioner configured. Logged for manual provisioning.`);
  return { ok: true, appId, tenantSlug, status: "pending-provisioner" };
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

  const appId = stableProvisioningId({
    platform: "commerce",
    sessionId: session.id,
    subscriptionId: session.subscription,
    customerId: session.customer,
    tier,
  });
  const tenantSlug = tenantSlugFromEmail(customerEmail, appId.slice(0, 20));

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
          ...(provisionerToken ? { "x-internal-token": provisionerToken } : {}),
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
  if (webhookSecret) {
    if (!signatureHeader) {
      console.error("[stripe-webhook] Missing Stripe signature");
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
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

  // Auto-provision WooCommerce
  if (productTypes.has("woocommerce")) {
    const tier = extractTierByPrefix(lookupKeys, "woo_");
    results.woocommerce = await provisionCMS({
      session, tier, lookupKeys,
      platform: "wordpress",
      framework: "wordpress",
      image: process.env.WOO_IMAGE || DEFAULT_PLATFORM_IMAGES.wordpress,
    });
  }

  // Auto-provision Drupal Commerce
  if (productTypes.has("drupal")) {
    const tier = extractTierByPrefix(lookupKeys, "drupal_");
    results.drupal = await provisionCMS({
      session, tier, lookupKeys,
      platform: "drupal",
      framework: "drupal",
      image: process.env.DRUPAL_IMAGE || DEFAULT_PLATFORM_IMAGES.drupal,
    });
  }

  if (productTypes.has("cloud")) {
    console.log("[stripe-webhook] Cloud subscription activated — manual provisioning for now");
    results.cloud = { status: "logged" };
  }

  if (productTypes.has("curate")) {
    console.log("[stripe-webhook] Curate subscription activated — uses separate provisioner");
    results.curate = { status: "logged" };
  }

  const failures = Object.entries(results).filter(([, result]) => result?.ok === false);
  if (failures.length > 0) {
    return NextResponse.json(
      { received: false, retry: true, results },
      { status: 502 },
    );
  }

  return NextResponse.json({ received: true, results });
}
