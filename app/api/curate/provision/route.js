import { NextResponse } from "next/server";

const RESERVED_SLUGS = new Set([
  "admin",
  "api",
  "app",
  "assets",
  "billing",
  "curate",
  "dashboard",
  "help",
  "login",
  "signup",
  "support",
  "www",
]);

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function slugify(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(body) {
  const firstName = cleanText(body.firstName);
  const lastName = cleanText(body.lastName);
  const email = cleanText(body.email).toLowerCase();
  const organizationName = cleanText(body.organizationName);
  const tenantSlug = slugify(body.requestedSlug || organizationName);
  const tier = cleanText(body.tier || "starter");

  const errors = {};
  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!email || !isEmail(email)) errors.email = "A valid email is required.";
  if (!organizationName) errors.organizationName = "Organization name is required.";
  if (!tenantSlug || tenantSlug.length < 3) errors.requestedSlug = "Workspace URL must be at least 3 characters.";
  if (RESERVED_SLUGS.has(tenantSlug)) errors.requestedSlug = "That workspace URL is reserved.";
  if (!["free", "starter", "pro", "business", "enterprise"].includes(tier)) errors.tier = "Invalid tier.";

  return {
    data: { firstName, lastName, email, organizationName, tenantSlug, tier },
    errors,
  };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { data, errors } = validatePayload(body || {});
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", fields: errors }, { status: 400 });
  }

  const tenantDomain = `${data.tenantSlug}.curate.esteemed.io`;
  const adminUrl = `https://${tenantDomain}/admin/login`;
  const provisioningPayload = {
    product: "curate",
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    organizationName: data.organizationName,
    tenantSlug: data.tenantSlug,
    tenantDomain,
    tier: data.tier,
  };

  const provisionerUrl = process.env.CURATE_PROVISIONER_URL;
  const provisionerToken = process.env.CURATE_PROVISIONER_TOKEN;

  if (provisionerUrl) {
    const provisionerResponse = await fetch(provisionerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(provisionerToken ? { Authorization: `Bearer ${provisionerToken}` } : {}),
      },
      body: JSON.stringify(provisioningPayload),
    });

    const result = await provisionerResponse.json().catch(() => ({}));
    if (!provisionerResponse.ok) {
      return NextResponse.json(
        {
          error: "Provisioning request failed.",
          status: "failed",
          detail: result?.error || "The Curate provisioner rejected the request.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      status: result.status || "provisioning",
      tenantSlug: data.tenantSlug,
      tenantDomain,
      adminUrl: result.adminUrl || adminUrl,
      provisioningId: result.provisioningId || result.tenantId || null,
    });
  }

  console.warn("[curate/provision] CURATE_PROVISIONER_URL is not configured; returning pending response.");
  return NextResponse.json({
    ok: true,
    status: "provisioning",
    tenantSlug: data.tenantSlug,
    tenantDomain,
    adminUrl,
    provisioningId: null,
    mode: "pending-provisioner",
  });
}
