import { NextResponse } from "next/server";
import { getAllowedLookupKeys } from "@/lib/pricing-catalog";

const STRIPE_API_BASE = "https://api.stripe.com/v1";

function isTestModeKey(secretKey) {
  return secretKey?.startsWith("sk_test_") || secretKey?.startsWith("rk_test_");
}

function isLiveModeKey(secretKey) {
  return secretKey?.startsWith("sk_live_") || secretKey?.startsWith("rk_live_");
}

function shouldRequireTestMode(requestUrl) {
  const explicitMode = process.env.STRIPE_CHECKOUT_MODE;
  if (explicitMode === "test") return true;
  if (explicitMode === "live") return false;

  const nextAuthUrl = process.env.NEXTAUTH_URL || "";
  const host = new URL(requestUrl).host;
  return host.endsWith(".ondigitalocean.app") || nextAuthUrl.includes(".ondigitalocean.app");
}

function parsePath(value, fallback) {
  if (!value || !value.startsWith("/")) return fallback;
  if (value.startsWith("//")) return fallback;
  return value;
}

function parseItems(url) {
  const lookupKey = url.searchParams.get("lookup_key");
  const itemsParam = url.searchParams.get("items");

  if (itemsParam) {
    return itemsParam
      .split(",")
      .map((item) => {
        const [key, quantity] = item.split(":");
        return {
          lookupKey: key?.trim(),
          quantity: Math.max(1, Number(quantity) || 1),
        };
      })
      .filter((item) => item.lookupKey);
  }

  if (lookupKey) {
    return [
      {
        lookupKey,
        quantity: Math.max(1, Number(url.searchParams.get("quantity")) || 1),
      },
    ];
  }

  return [];
}

function buildReturnUrl(origin, path, fallback, sessionPlaceholder = false) {
  const returnUrl = new URL(parsePath(path, fallback), origin);
  if (sessionPlaceholder) {
    returnUrl.searchParams.set("session_id", "{CHECKOUT_SESSION_ID}");
  }
  return returnUrl.toString();
}

async function stripeRequest(method, path, body, secretKey) {
  const response = await fetch(`${STRIPE_API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...(body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body,
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result?.error?.message || "Stripe request failed.");
  }
  return result;
}

async function getPrices(items, secretKey) {
  const params = new URLSearchParams();
  items.forEach((item) => params.append("lookup_keys[]", item.lookupKey));
  params.set("active", "true");
  params.set("limit", String(Math.max(items.length, 1)));
  const result = await stripeRequest("GET", `/prices?${params.toString()}`, null, secretKey);
  return new Map((result.data || []).map((price) => [price.lookup_key, price]));
}

export async function GET(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_RESTRICTED_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe checkout is not configured." }, { status: 500 });
  }
  if (shouldRequireTestMode(request.url) && isLiveModeKey(secretKey) && !isTestModeKey(secretKey)) {
    return NextResponse.json(
      { error: "Stripe checkout is set to test mode for this environment, but a live Stripe key is configured." },
      { status: 409 },
    );
  }

  const url = new URL(request.url);
  const origin = url.origin;
  const items = parseItems(url);
  const allowedLookupKeys = getAllowedLookupKeys();

  if (items.length === 0) {
    return NextResponse.json({ error: "No checkout item was provided." }, { status: 400 });
  }

  const invalid = items.filter((item) => !allowedLookupKeys.has(item.lookupKey));
  if (invalid.length > 0) {
    return NextResponse.json({ error: "Invalid checkout item." }, { status: 400 });
  }

  try {
    const prices = await getPrices(items, secretKey);
    const missing = items.filter((item) => !prices.has(item.lookupKey));
    if (missing.length > 0) {
      return NextResponse.json({ error: "Stripe price lookup key was not found." }, { status: 404 });
    }

    const hasRecurring = items.some((item) => prices.get(item.lookupKey)?.recurring);
    const body = new URLSearchParams();
    body.set("mode", hasRecurring ? "subscription" : "payment");
    body.set("success_url", buildReturnUrl(origin, url.searchParams.get("success_path"), "/thanks", true));
    body.set("cancel_url", buildReturnUrl(origin, url.searchParams.get("cancel_path"), "/pricing"));
    body.set("allow_promotion_codes", "true");
    body.set("metadata[lookup_keys]", items.map((item) => item.lookupKey).join(","));

    items.forEach((item, index) => {
      body.set(`line_items[${index}][price]`, prices.get(item.lookupKey).id);
      body.set(`line_items[${index}][quantity]`, String(item.quantity));
    });

    const session = await stripeRequest("POST", "/checkout/sessions", body, secretKey);
    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("[checkout]", error);
    return NextResponse.json({ error: "Unable to start Stripe Checkout." }, { status: 502 });
  }
}
