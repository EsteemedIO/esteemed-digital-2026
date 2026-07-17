import { expect, test } from "@playwright/test";
import {
  generateAppSpec,
  isInternalProvisionRequest,
  parseDockerImage,
  stableProvisioningId,
} from "../lib/commerce-provisioning.js";
import { verifyWebhookSignature } from "../lib/stripe-webhook.js";

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
  expect(medusa.services[0].name).toBe("medusa-backend");
  expect(medusa.services[0].http_port).toBe(9000);
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
