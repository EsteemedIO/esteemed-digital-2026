import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getDomainPrice, getDomainTld, normalizeDomainName } from "@/lib/opensrs";

const STRIPE_API_BASE = "https://api.stripe.com/v1";

function getRequestOrigin(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

  if (forwardedHost) {
    return `${forwardedProto.split(",")[0]}://${forwardedHost.split(",")[0]}`;
  }

  const host = request.headers.get("host");
  if (host) {
    const protocol = host.includes("localhost") ? "http" : "https";
    return `${protocol}://${host}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const secretKey =
    process.env.STRIPE_SECRET_KEY || process.env.STRIPE_RESTRICTED_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    );
  }

  try {
    const { domains } = await request.json();

    if (!domains || !Array.isArray(domains) || domains.length === 0) {
      return NextResponse.json(
        { error: "At least one domain is required." },
        { status: 400 }
      );
    }
    if (domains.length > 10) {
      return NextResponse.json(
        { error: "Domain checkout is limited to 10 domains at a time." },
        { status: 400 }
      );
    }

    const normalizedDomains = [];
    for (const d of domains) {
      const domain = normalizeDomainName(d?.domain);
      const tld = getDomainTld(domain);
      const price = tld ? getDomainPrice(tld) : null;
      if (!domain || !tld || price === null) {
        return NextResponse.json(
          { error: "Each domain must have a valid supported name." },
          { status: 400 }
        );
      }
      normalizedDomains.push({ domain, tld, price });
    }

    const origin = getRequestOrigin(request);
    const successUrl = `${origin}/dashboard/domains?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/dashboard/domains?checkout=cancelled`;

    // Build Stripe checkout session with price_data for each domain
    const body = new URLSearchParams();
    body.set("mode", "subscription");
    body.set("success_url", successUrl);
    body.set("cancel_url", cancelUrl);
    body.set("allow_promotion_codes", "true");
    body.set(
      "metadata[domains]",
      normalizedDomains.map((d) => d.domain).join(",")
    );
    body.set(
      "metadata[type]",
      "domain_registration"
    );
    body.set("metadata[module]", "domains");
    body.set("metadata[entitlement]", "module.domains");
    if (token.sub) body.set("metadata[user_id]", token.sub);
    if (token.email) body.set("metadata[user_email]", token.email);
    body.set("subscription_data[metadata][type]", "domain_registration");
    body.set("subscription_data[metadata][module]", "domains");
    body.set("subscription_data[metadata][entitlement]", "module.domains");
    body.set("subscription_data[metadata][domains]", normalizedDomains.map((d) => d.domain).join(","));
    if (token.sub) body.set("subscription_data[metadata][user_id]", token.sub);
    if (token.email) body.set("subscription_data[metadata][user_email]", token.email);

    normalizedDomains.forEach((d, i) => {
      const unitAmount = Math.round(d.price * 100);

      body.set(`line_items[${i}][price_data][currency]`, "usd");
      body.set(`line_items[${i}][price_data][unit_amount]`, String(unitAmount));
      body.set(`line_items[${i}][price_data][recurring][interval]`, "year");
      body.set(
        `line_items[${i}][price_data][product_data][name]`,
        `Domain: ${d.domain}`
      );
      body.set(
        `line_items[${i}][price_data][product_data][description]`,
        `1-year registration for ${d.domain}`
      );
      body.set(`line_items[${i}][price_data][product_data][metadata][module]`, "domains");
      body.set(`line_items[${i}][price_data][product_data][metadata][entitlement]`, "module.domains");
      body.set(`line_items[${i}][price_data][product_data][metadata][interval]`, "year");
      body.set(`line_items[${i}][price_data][product_data][metadata][seat_type]`, "licensed_per_seat");
      body.set(`line_items[${i}][price_data][product_data][metadata][founding]`, "false");
      body.set(`line_items[${i}][price_data][product_data][metadata][tld]`, d.tld);
      body.set(`line_items[${i}][quantity]`, "1");
    });

    const response = await fetch(`${STRIPE_API_BASE}/checkout/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const session = await response.json();

    if (!response.ok) {
      throw new Error(
        session?.error?.message || "Failed to create checkout session."
      );
    }

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("[domains/checkout]", error.message);
    return NextResponse.json(
      { error: error.message || "Checkout failed." },
      { status: 502 }
    );
  }
}
