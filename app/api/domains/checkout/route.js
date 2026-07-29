import { NextResponse } from "next/server";
import { getDomainPrice } from "@/lib/opensrs";

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

    // Validate domains
    for (const d of domains) {
      if (!d.domain || typeof d.domain !== "string") {
        return NextResponse.json(
          { error: "Each domain must have a valid name." },
          { status: 400 }
        );
      }
    }

    const origin = getRequestOrigin(request);
    const successUrl = `${origin}/dashboard/domains?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/dashboard/domains?checkout=cancelled`;

    // Build Stripe checkout session with price_data for each domain
    const body = new URLSearchParams();
    body.set("mode", "payment");
    body.set("success_url", successUrl);
    body.set("cancel_url", cancelUrl);
    body.set(
      "metadata[domains]",
      domains.map((d) => d.domain).join(",")
    );
    body.set(
      "metadata[type]",
      "domain_registration"
    );

    domains.forEach((d, i) => {
      const tld = "." + d.domain.split(".").slice(1).join(".");
      const unitAmount = Math.round(getDomainPrice(tld) * 100);

      body.set(`line_items[${i}][price_data][currency]`, "usd");
      body.set(`line_items[${i}][price_data][unit_amount]`, String(unitAmount));
      body.set(
        `line_items[${i}][price_data][product_data][name]`,
        `Domain: ${d.domain}`
      );
      body.set(
        `line_items[${i}][price_data][product_data][description]`,
        `1-year registration for ${d.domain}`
      );
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
