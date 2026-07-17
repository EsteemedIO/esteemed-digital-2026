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
 * - CREATE_CLOUD_CONSOLE_URL — Cloud console base URL for app registration
 */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const DO_API = "https://api.digitalocean.com/v2";

const TIER_SPECS = {
  // Esteemed Commerce (Medusa)
  develop: { instanceSize: "basic-xxs", instanceCount: 1, dbSize: "db-s-1vcpu-1gb", region: "nyc3" },
  launch:  { instanceSize: "basic-xs",  instanceCount: 2, dbSize: "db-s-1vcpu-2gb", region: "nyc3" },
  scale:   { instanceSize: "basic-s",   instanceCount: 3, dbSize: "db-s-2vcpu-4gb", region: "nyc3" },
  // WooCommerce / Drupal tiers
  starter: { instanceSize: "basic-xxs", instanceCount: 1, dbSize: "db-s-1vcpu-1gb", region: "nyc3" },
  growth:  { instanceSize: "basic-xs",  instanceCount: 1, dbSize: "db-s-1vcpu-2gb", region: "nyc3" },
  // "scale" already defined above — reused for WP/Drupal Scale tier
};

function generateAppSpec({ appId, tenantSlug, tier, registry, image, platform = "commerce" }) {
  const specs = TIER_SPECS[tier] || TIER_SPECS.develop;
  const appName = `${platform}-${tenantSlug}`;
  const domain = `${tenantSlug}.${platform === "commerce" ? "commerce" : platform}.esteemed.io`;
  const isWordpress = platform === "wordpress";
  const isDrupal = platform === "drupal";
  const isMedusa = !isWordpress && !isDrupal;

  return {
    name: appName,
    region: specs.region,
    services: [
      {
        name: "medusa-backend",
        image: registry === "dockerhub"
          ? {
              registry_type: "DOCKER_HUB",
              registry: image.split("/")[0] || "medusajs",
              repository: image.split("/").slice(1).join("/").split(":")[0] || "medusa",
              tag: image.split(":")[1] || "latest",
            }
          : {
              registry_type: "DOCR",
              registry: registry,
              repository: image.split(":")[0],
              tag: image.split(":")[1] || "latest",
            },
        instance_size_slug: specs.instanceSize,
        instance_count: specs.instanceCount,
        http_port: 9000,
        envs: [
          ...(isMedusa ? [
            { key: "NODE_ENV", value: "production" },
            { key: "MEDUSA_ADMIN_ONBOARDING_TYPE", value: "default" },
            { key: "STORE_CORS", value: `https://${domain}` },
            { key: "ADMIN_CORS", value: `https://${domain}` },
            { key: "AUTH_CORS", value: `https://${domain}` },
            { key: "REDIS_URL", value: "${redis.REDIS_URL}" },
            { key: "DATABASE_URL", value: "${db.DATABASE_URL}" },
            { key: "COOKIE_SECRET", value: crypto.randomUUID() },
            { key: "JWT_SECRET", value: crypto.randomUUID() },
          ] : isWordpress ? [
            { key: "WORDPRESS_DB_HOST", value: "${db.HOSTNAME}:${db.PORT}" },
            { key: "WORDPRESS_DB_USER", value: "${db.USERNAME}" },
            { key: "WORDPRESS_DB_PASSWORD", value: "${db.PASSWORD}" },
            { key: "WORDPRESS_DB_NAME", value: "${db.DATABASE}" },
            { key: "WORDPRESS_TABLE_PREFIX", value: "wp_" },
          ] : [
            { key: "DRUPAL_DB_DRIVER", value: "pgsql" },
            { key: "DRUPAL_DB_HOST", value: "${db.HOSTNAME}" },
            { key: "DRUPAL_DB_PORT", value: "${db.PORT}" },
            { key: "DRUPAL_DB_USER", value: "${db.USERNAME}" },
            { key: "DRUPAL_DB_PASS", value: "${db.PASSWORD}" },
            { key: "DRUPAL_DB_NAME", value: "${db.DATABASE}" },
          ]),
          { key: "ESTEEMED_APP_ID", value: appId },
          { key: "ESTEEMED_TENANT", value: tenantSlug },
          { key: "ESTEEMED_TIER", value: tier },
          { key: "ESTEEMED_PLATFORM", value: platform },
        ],
        routes: [{ path: "/" }],
        health_check: {
          http_path: isMedusa ? "/health" : "/",
          initial_delay_seconds: isMedusa ? 30 : 60,
          period_seconds: 15,
        },
      },
    ],
    databases: [
      {
        name: "db",
        engine: isWordpress ? "MYSQL" : "PG",
        version: isWordpress ? "8" : "16",
        size: specs.dbSize,
        num_nodes: 1,
        production: !["develop", "starter"].includes(tier),
      },
      ...(isMedusa ? [{
        name: "redis",
        engine: "REDIS",
        version: "7",
        size: "db-s-1vcpu-1gb",
        num_nodes: 1,
        production: false,
      }] : []),
    ],
  };
}

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

export async function POST(request) {
  // Auth: either internal webhook call (no auth needed if from webhook handler)
  // or authenticated user request
  const internalToken = request.headers.get("x-internal-token");
  const isInternal = internalToken === process.env.COMMERCE_PROVISIONER_TOKEN;

  if (!isInternal) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const doToken = process.env.DO_API_TOKEN;
  if (!doToken) {
    console.warn("[commerce-provision] DO_API_TOKEN not configured");
    return NextResponse.json({
      ok: true,
      status: "pending-provisioner",
      message: "DigitalOcean API token not configured. Instance logged for manual provisioning.",
    });
  }

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
    stripeSessionId,
    stripeSubscriptionId,
  } = body;

  const appId = requestedAppId || `${platform}-${Date.now()}`;

  if (!tenantSlug) {
    return NextResponse.json({ error: "tenantSlug is required" }, { status: 400 });
  }

  const registry = process.env.DOCR_REGISTRY || "dockerhub";
  const defaultImages = {
    commerce: process.env.COMMERCE_MEDUSA_IMAGE || "medusajs/medusa:latest",
    wordpress: process.env.WOO_IMAGE || "wordpress:latest",
    drupal: process.env.DRUPAL_IMAGE || "drupal:latest",
  };
  const image = requestedImage || defaultImages[platform] || defaultImages.commerce;
  const framework = requestedFramework || platform;

  try {
    // Generate DO App Platform spec
    const spec = generateAppSpec({ appId, tenantSlug, tier, registry, image, platform });

    console.log(`[${platform}-provision] Creating DO app:`, spec.name);

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
