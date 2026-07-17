/**
 * Commerce Provision API
 *
 * Provisions an Esteemed Commerce (Medusa) instance on DigitalOcean.
 * Called by the Stripe webhook after checkout, or manually for testing.
 *
 * Flow:
 * 1. Validate request (auth + payload)
 * 2. Call DigitalOcean API to deploy Medusa container from DOCR
 * 3. Set up database (Postgres managed DB) and Redis
 * 4. Register the app in cloud_apps via cloud-console
 * 5. Return provisioning status
 *
 * Env vars:
 * - DO_API_TOKEN — DigitalOcean API token
 * - DOCR_REGISTRY — Container registry name (e.g., "esteemed")
 * - COMMERCE_MEDUSA_IMAGE — Image tag (e.g., "esteemed/medusa-starter:latest")
 * - WOO_IMAGE — WooCommerce-ready image tag (defaults to esteemed/woocommerce:latest)
 * - DRUPAL_IMAGE — Drupal Commerce-ready image tag (defaults to esteemed/drupal-commerce:latest)
 * - CMS_FILES_S3_* — object storage settings for WordPress/Drupal files
 * - CREATE_CLOUD_CONSOLE_URL — Cloud console base URL for app registration
 */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  COMMERCE_PLATFORMS,
  DEFAULT_PLATFORM_IMAGES,
  generateAppSpec,
  isInternalProvisionRequest,
  platformDefaults,
  stableProvisioningId,
  validateCmsStorageConfig,
} from "@/lib/commerce-provisioning";

const DO_API = "https://api.digitalocean.com/v2";

async function doRequest(method, path, body, token) {
  const resp = await fetch(`${DO_API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(data.message || `DO API ${method} ${path} failed: ${resp.status}`);
  }
  return data;
}

async function findExistingAppByName(name, token) {
  const result = await doRequest("GET", "/apps?per_page=200", null, token);
  return (result.apps || []).find((app) => app?.spec?.name === name || app?.name === name) || null;
}

export async function POST(request) {
  // Auth: either internal webhook call (no auth needed if from webhook handler)
  // or authenticated user request
  const isInternal = isInternalProvisionRequest(request.headers, process.env.COMMERCE_PROVISIONER_TOKEN);

  if (!isInternal) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const doToken = process.env.DO_API_TOKEN;

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    appId: requestedAppId,
    tier = "develop",
    tenantSlug,
    email,
    platform = "commerce",
    framework: requestedFramework,
    image: requestedImage,
    cmsStorage: requestedCmsStorage,
    stripeSessionId,
    stripeSubscriptionId,
  } = body;

  if (!COMMERCE_PLATFORMS.has(platform)) {
    return NextResponse.json({ error: "Unsupported commerce platform" }, { status: 400 });
  }

  const framework = requestedFramework || platformDefaults(platform).framework;
  const appId =
    requestedAppId ||
    stableProvisioningId({
      platform,
      sessionId: stripeSessionId,
      subscriptionId: stripeSubscriptionId,
      tier,
    });

  if (!tenantSlug) {
    return NextResponse.json({ error: "tenantSlug is required" }, { status: 400 });
  }

  const registry = process.env.DOCR_REGISTRY || "dockerhub";
  const defaultImages = {
    commerce: process.env.COMMERCE_MEDUSA_IMAGE || DEFAULT_PLATFORM_IMAGES.commerce,
    wordpress: process.env.WOO_IMAGE || DEFAULT_PLATFORM_IMAGES.wordpress,
    drupal: process.env.DRUPAL_IMAGE || DEFAULT_PLATFORM_IMAGES.drupal,
  };
  const image = requestedImage || defaultImages[platform] || defaultImages.commerce;

  const cmsStorage = {
    bucket: requestedCmsStorage?.bucket || process.env.CMS_FILES_S3_BUCKET,
    region: requestedCmsStorage?.region || process.env.CMS_FILES_S3_REGION,
    endpoint: requestedCmsStorage?.endpoint || process.env.CMS_FILES_S3_ENDPOINT,
    accessKeyId: requestedCmsStorage?.accessKeyId || process.env.CMS_FILES_S3_ACCESS_KEY_ID,
    secretAccessKey: requestedCmsStorage?.secretAccessKey || process.env.CMS_FILES_S3_SECRET_ACCESS_KEY,
    prefix: requestedCmsStorage?.prefix || `${platform}/${tenantSlug}`,
  };

  if (platform === "wordpress" || platform === "drupal") {
    const missing = validateCmsStorageConfig(cmsStorage);
    if (missing.length > 0) {
      const productName = platform === "wordpress" ? "WooCommerce" : "Drupal Commerce";
      return NextResponse.json(
        {
          ok: false,
          status: "not-configured",
          error: `${productName} provisioning requires object storage for persistent files.`,
          missing,
        },
        { status: 501 },
      );
    }
  }

  if (!doToken) {
    console.warn("[commerce-provision] DO_API_TOKEN not configured");
    return NextResponse.json({
      ok: true,
      status: "pending-provisioner",
      message: "DigitalOcean API token not configured. Instance logged for manual provisioning.",
    });
  }

  try {
    // Generate DO App Platform spec
    const spec = generateAppSpec({ appId, tenantSlug, tier, registry, image, platform, cmsStorage });

    console.log(`[${platform}-provision] Creating DO app:`, spec.name);

    const existingApp = await findExistingAppByName(spec.name, doToken);
    if (existingApp) {
      console.log(`[${platform}-provision] Existing DO app found:`, existingApp.id);
      return NextResponse.json({
        ok: true,
        status: "provisioning",
        existing: true,
        appId,
        tenantSlug,
        doAppId: existingApp.id,
        deployUrl: existingApp.live_url || existingApp.default_ingress || "",
        region: spec.region,
        tier,
      });
    }

    // Create the app on DigitalOcean App Platform
    const result = await doRequest("POST", "/apps", { spec }, doToken);
    const app = result.app;

    console.log(`[${platform}-provision] DO app created:`, app?.id, "URL:", app?.live_url);

    // Register in cloud-console
    const cloudConsoleUrl = process.env.CREATE_CLOUD_CONSOLE_URL;
    if (cloudConsoleUrl) {
      try {
        await fetch(new URL(`/api/cloud/apps/${appId}/register`, cloudConsoleUrl), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            environment: "production",
            deployUrl: app?.live_url || app?.default_ingress || `https://${tenantSlug}.${platform}.esteemed.io`,
            provider: "digitalocean",
            region: spec.region,
            framework,
            source: platform,
            doAppId: app?.id,
            tier,
            email,
            stripeSessionId,
            stripeSubscriptionId,
          }),
        });
        console.log(`[${platform}-provision] Registered in cloud_apps`);
      } catch (regErr) {
        console.error(`[${platform}-provision] Cloud registration failed:`, regErr.message);
      }
    }

    return NextResponse.json({
      ok: true,
      status: "provisioning",
      appId,
      tenantSlug,
      doAppId: app?.id,
      deployUrl: app?.live_url || app?.default_ingress || "",
      region: spec.region,
      tier,
    });
  } catch (err) {
    console.error("[commerce-provision] Failed:", err.message);
    return NextResponse.json(
      { ok: false, error: err.message, status: "failed" },
      { status: 502 }
    );
  }
}
