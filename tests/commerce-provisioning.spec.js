import { expect, test } from "@playwright/test";
import { checkoutHref } from "../lib/pricing-catalog.js";
import {
  commercePricingPlans,
  drupalCommercePricingPlans,
  wooCommercePricingPlans,
} from "../lib/product-page-pricing.js";
import {
  DEFAULT_PLATFORM_IMAGES,
  generateAppSpec,
  isInternalProvisionRequest,
  parseDockerImage,
  stableProvisioningId,
  validateCmsStorageConfig,
} from "../lib/commerce-provisioning.js";
import { verifyWebhookSignature } from "../lib/stripe-webhook.js";

const setupPlatforms = {
  woocommerce: {
    product: "woocommerce",
    plans: wooCommercePricingPlans().filter((plan) => plan.monthly !== null),
  },
  drupal: {
    product: "drupal",
    plans: drupalCommercePricingPlans().filter((plan) => plan.monthly !== null),
  },
  esteemed: {
    product: "commerce",
    plans: commercePricingPlans().filter((plan) => plan.monthly !== null),
  },
};

async function stripeSignature(body, secret, timestamp) {
  const payload = `${timestamp}.${body}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

test("parses Docker Hub official images without rewriting repository names", () => {
  expect(parseDockerImage("wordpress:latest")).toEqual({
    registry: "library",
    repository: "wordpress",
    tag: "latest",
  });
  expect(parseDockerImage("medusajs/medusa:latest")).toEqual({
    registry: "medusajs",
    repository: "medusa",
    tag: "latest",
  });
});

test("generates platform-specific App Platform specs", () => {
  const medusa = generateAppSpec({
    appId: "commerce-test",
    tenantSlug: "test",
    tier: "develop",
    registry: "dockerhub",
    image: "medusajs/medusa:latest",
    platform: "commerce",
  });
  expect(medusa.services.map((service) => service.name)).toEqual(["medusa-backend", "medusa-storefront"]);
  expect(medusa.services[0].http_port).toBe(9000);
  expect(medusa.services[0].routes).toEqual([
    { path: "/store" },
    { path: "/admin" },
    { path: "/auth" },
    { path: "/health" },
  ]);
  expect(medusa.services[1].http_port).toBe(8000);
  expect(medusa.services[1].image).toEqual({
    registry_type: "DOCKER_HUB",
    registry: "esteemed",
    repository: "medusa-nextjs-starter",
    tag: "latest",
  });
  expect(medusa.services[1].envs).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "NEXT_PUBLIC_MEDUSA_BACKEND_URL", value: "https://test.commerce.esteemed.io" }),
      expect.objectContaining({ key: "ESTEEMED_PLATFORM", value: "medusa-nextjs-starter" }),
    ]),
  );
  expect(medusa.databases.map((db) => db.engine)).toEqual(["PG", "REDIS"]);

  const wordpress = generateAppSpec({
    appId: "wordpress-test",
    tenantSlug: "test",
    tier: "starter",
    registry: "dockerhub",
    image: "wordpress:latest",
    platform: "wordpress",
  });
  expect(wordpress.services[0].name).toBe("wordpress");
  expect(wordpress.services[0].http_port).toBe(80);
  expect(wordpress.services[0].image).toEqual({
    registry_type: "DOCKER_HUB",
    registry: "library",
    repository: "wordpress",
    tag: "latest",
  });
  expect(wordpress.databases).toHaveLength(1);
  expect(wordpress.databases[0].engine).toBe("MYSQL");

  const drupal = generateAppSpec({
    appId: "drupal-test",
    tenantSlug: "test",
    tier: "starter",
    registry: "dockerhub",
    image: "drupal:latest",
    platform: "drupal",
  });
  expect(drupal.services[0].name).toBe("drupal");
  expect(drupal.services[0].http_port).toBe(80);
  expect(drupal.databases[0].engine).toBe("PG");
});

test("generates CMS specs with ecommerce-ready default images and persistent file storage envs", () => {
  const cmsStorage = {
    bucket: "esteemed-commerce-files",
    region: "nyc3",
    endpoint: "https://nyc3.digitaloceanspaces.com",
    accessKeyId: "access-key",
    secretAccessKey: "secret-key",
    prefix: "wordpress/test",
  };

  const wordpress = generateAppSpec({
    appId: "wordpress-test",
    tenantSlug: "test",
    tier: "starter",
    registry: "dockerhub",
    image: DEFAULT_PLATFORM_IMAGES.wordpress,
    platform: "wordpress",
    cmsStorage,
  });
  expect(wordpress.services[0].image.repository).toBe("woocommerce");
  expect(wordpress.services[0].envs).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "CMS_FILES_S3_BUCKET", value: "esteemed-commerce-files" }),
      expect.objectContaining({ key: "CMS_FILES_S3_PREFIX", value: "wordpress/test" }),
      expect.objectContaining({ key: "CMS_FILES_S3_SECRET_ACCESS_KEY", type: "SECRET" }),
      expect.objectContaining({ key: "WORDPRESS_ADMIN_PASSWORD", type: "SECRET" }),
    ]),
  );

  const drupal = generateAppSpec({
    appId: "drupal-test",
    tenantSlug: "test",
    tier: "starter",
    registry: "dockerhub",
    image: DEFAULT_PLATFORM_IMAGES.drupal,
    platform: "drupal",
    cmsStorage: { ...cmsStorage, prefix: "drupal/test" },
  });
  expect(drupal.services[0].image.repository).toBe("drupal-commerce");
  expect(drupal.services[0].envs).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "CMS_FILES_S3_BUCKET", value: "esteemed-commerce-files" }),
      expect.objectContaining({ key: "CMS_FILES_S3_PREFIX", value: "drupal/test" }),
      expect.objectContaining({ key: "CMS_FILES_S3_SECRET_ACCESS_KEY", type: "SECRET" }),
      expect.objectContaining({ key: "DRUPAL_ADMIN_PASSWORD", type: "SECRET" }),
    ]),
  );
});

test("generates platform-specific setup checkout links", () => {
  const cases = [
    {
      platform: "woocommerce",
      plan: "growth",
      expectedLookupKey: "woo_growth_monthly",
      expectedSuccessPath: "/thanks?product=woocommerce&tier=growth",
    },
    {
      platform: "drupal",
      plan: "growth",
      expectedLookupKey: "drupal_growth_monthly",
      expectedSuccessPath: "/thanks?product=drupal&tier=growth",
    },
    {
      platform: "esteemed",
      plan: "launch",
      expectedLookupKey: "commerce_launch_monthly",
      expectedSuccessPath: "/thanks?product=commerce&tier=launch",
    },
  ];

  for (const scenario of cases) {
    const platform = setupPlatforms[scenario.platform];
    const plan = platform.plans.find((item) => item.key === scenario.plan);
    const checkout = new URL(checkoutHref({
      lookupKey: plan.lookupKey,
      successPath: `/thanks?product=${platform.product}&tier=${plan.key}`,
      cancelPath: "/websites/ecommerce",
    }), "http://localhost");

    expect(checkout.pathname).toBe("/api/checkout");
    expect(checkout.searchParams.get("lookup_key")).toBe(scenario.expectedLookupKey);
    expect(checkout.searchParams.get("success_path")).toBe(scenario.expectedSuccessPath);
    expect(checkout.searchParams.get("cancel_path")).toBe("/websites/ecommerce");
  }
});

test("requires complete CMS storage config for managed CMS provisioning", () => {
  expect(validateCmsStorageConfig({})).toEqual([
    "CMS_FILES_S3_BUCKET",
    "CMS_FILES_S3_REGION",
    "CMS_FILES_S3_ENDPOINT",
    "CMS_FILES_S3_ACCESS_KEY_ID",
    "CMS_FILES_S3_SECRET_ACCESS_KEY",
  ]);
  expect(validateCmsStorageConfig({
    bucket: "files",
    region: "nyc3",
    endpoint: "https://nyc3.digitaloceanspaces.com",
    accessKeyId: "key",
    secretAccessKey: "secret",
  })).toEqual([]);
});

test("accepts both internal auth headers for provisioner calls", () => {
  expect(isInternalProvisionRequest(new Headers({ authorization: "Bearer test-token" }), "test-token")).toBe(true);
  expect(isInternalProvisionRequest(new Headers({ "x-internal-token": "test-token" }), "test-token")).toBe(true);
  expect(isInternalProvisionRequest(new Headers({ authorization: "Bearer wrong" }), "test-token")).toBe(false);
});

test("stable provisioning ids are deterministic for Stripe subscriptions", () => {
  const first = stableProvisioningId({
    platform: "commerce",
    sessionId: "cs_test_123",
    subscriptionId: "sub_123",
    tier: "develop",
  });
  const second = stableProvisioningId({
    platform: "commerce",
    sessionId: "cs_test_456",
    subscriptionId: "sub_123",
    tier: "develop",
  });
  expect(first).toBe(second);
});

test("verifies Stripe webhook signatures and rejects stale signatures", async () => {
  const body = JSON.stringify({ type: "checkout.session.completed" });
  const secret = "whsec_test";
  const timestamp = 1_800_000_000;
  const signature = await stripeSignature(body, secret, timestamp);

  await expect(
    verifyWebhookSignature(body, `t=${timestamp},v1=${signature}`, secret, timestamp * 1000),
  ).resolves.toBe(true);
  await expect(
    verifyWebhookSignature(body, `t=${timestamp},v1=${signature}`, "wrong", timestamp * 1000),
  ).resolves.toBe(false);
  await expect(
    verifyWebhookSignature(body, `t=${timestamp},v1=${signature}`, secret, (timestamp + 301) * 1000),
  ).resolves.toBe(false);
});
