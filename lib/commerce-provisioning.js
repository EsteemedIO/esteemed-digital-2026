export const COMMERCE_PLATFORMS = new Set(["commerce", "wordpress", "drupal"]);

export const DEFAULT_PLATFORM_IMAGES = {
  commerce: "medusajs/medusa:latest",
  wordpress: "esteemed/woocommerce:latest",
  drupal: "esteemed/drupal-commerce:latest",
};

export const CMS_STORAGE_ENV_KEYS = [
  "CMS_FILES_S3_BUCKET",
  "CMS_FILES_S3_REGION",
  "CMS_FILES_S3_ENDPOINT",
  "CMS_FILES_S3_ACCESS_KEY_ID",
  "CMS_FILES_S3_SECRET_ACCESS_KEY",
];

export const TIER_SPECS = {
  develop: { instanceSize: "basic-xxs", instanceCount: 1, dbSize: "db-s-1vcpu-1gb", region: "nyc3" },
  launch: { instanceSize: "basic-xs", instanceCount: 2, dbSize: "db-s-1vcpu-2gb", region: "nyc3" },
  scale: { instanceSize: "basic-s", instanceCount: 3, dbSize: "db-s-2vcpu-4gb", region: "nyc3" },
  starter: { instanceSize: "basic-xxs", instanceCount: 1, dbSize: "db-s-1vcpu-1gb", region: "nyc3" },
  growth: { instanceSize: "basic-xs", instanceCount: 1, dbSize: "db-s-1vcpu-2gb", region: "nyc3" },
};

const PLATFORM_DEFAULTS = {
  commerce: {
    serviceName: "medusa-backend",
    domainSegment: "commerce",
    framework: "medusa",
    httpPort: 9000,
    healthPath: "/health",
    healthDelay: 30,
    dbEngine: "PG",
    dbVersion: "16",
    defaultTier: "develop",
  },
  wordpress: {
    serviceName: "wordpress",
    domainSegment: "wordpress",
    framework: "wordpress",
    httpPort: 80,
    healthPath: "/",
    healthDelay: 60,
    dbEngine: "MYSQL",
    dbVersion: "8",
    defaultTier: "starter",
  },
  drupal: {
    serviceName: "drupal",
    domainSegment: "drupal",
    framework: "drupal",
    httpPort: 80,
    healthPath: "/",
    healthDelay: 60,
    dbEngine: "PG",
    dbVersion: "16",
    defaultTier: "starter",
  },
};

export function platformDefaults(platform) {
  return PLATFORM_DEFAULTS[platform] || PLATFORM_DEFAULTS.commerce;
}

export function sanitizeTenantSlug(value, fallback = "commerce") {
  const slug = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);

  return slug || fallback;
}

export function tenantSlugFromEmail(email, fallback) {
  const localPart = String(email || "").split("@")[0];
  return sanitizeTenantSlug(localPart, fallback);
}

export function stableProvisioningId({ platform = "commerce", sessionId, subscriptionId, customerId, tier }) {
  const sourceId = subscriptionId || sessionId || customerId || crypto.randomUUID();
  const suffix = sanitizeTenantSlug(`${sourceId}-${tier || platform}`, "subscription").slice(0, 48);
  return `${platform}-${suffix}`;
}

export function extractBearerToken(headerValue) {
  const match = String(headerValue || "").match(/^Bearer\s+(.+)$/i);
  return match?.[1] || "";
}

export function isInternalProvisionRequest(headers, expectedToken) {
  if (!expectedToken) return false;
  const internalToken = headers.get("x-internal-token");
  const bearerToken = extractBearerToken(headers.get("authorization"));
  return internalToken === expectedToken || bearerToken === expectedToken;
}

export function parseDockerImage(image) {
  const raw = String(image || "").trim();
  if (!raw) {
    throw new Error("Docker image is required");
  }

  const [path, tag = "latest"] = raw.split(":");
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 1) {
    return { registry: "library", repository: parts[0], tag };
  }

  return {
    registry: parts[0],
    repository: parts.slice(1).join("/"),
    tag,
  };
}

export function imageSpec({ registry, image }) {
  if (registry === "dockerhub") {
    return {
      registry_type: "DOCKER_HUB",
      ...parseDockerImage(image),
    };
  }

  const [repository, tag = "latest"] = String(image || "").split(":");
  return {
    registry_type: "DOCR",
    registry,
    repository,
    tag,
  };
}

function medusaEnvs(domain) {
  return [
    { key: "NODE_ENV", value: "production" },
    { key: "MEDUSA_ADMIN_ONBOARDING_TYPE", value: "default" },
    { key: "STORE_CORS", value: `https://${domain}` },
    { key: "ADMIN_CORS", value: `https://${domain}` },
    { key: "AUTH_CORS", value: `https://${domain}` },
    { key: "REDIS_URL", value: "${redis.REDIS_URL}" },
    { key: "DATABASE_URL", value: "${db.DATABASE_URL}" },
    { key: "COOKIE_SECRET", value: crypto.randomUUID() },
    { key: "JWT_SECRET", value: crypto.randomUUID() },
  ];
}

function secretEnv(key, value) {
  return { key, value, type: "SECRET" };
}

function cmsStorageEnvs(cmsStorage = {}) {
  const envs = [
    { key: "CMS_FILES_S3_BUCKET", value: cmsStorage.bucket },
    { key: "CMS_FILES_S3_REGION", value: cmsStorage.region },
    { key: "CMS_FILES_S3_ENDPOINT", value: cmsStorage.endpoint },
    { key: "CMS_FILES_S3_PREFIX", value: cmsStorage.prefix },
    secretEnv("CMS_FILES_S3_ACCESS_KEY_ID", cmsStorage.accessKeyId),
    secretEnv("CMS_FILES_S3_SECRET_ACCESS_KEY", cmsStorage.secretAccessKey),
  ];

  return envs.filter((env) => env.value);
}

export function validateCmsStorageConfig(config = {}) {
  const missing = [];
  if (!config.bucket) missing.push("CMS_FILES_S3_BUCKET");
  if (!config.region) missing.push("CMS_FILES_S3_REGION");
  if (!config.endpoint) missing.push("CMS_FILES_S3_ENDPOINT");
  if (!config.accessKeyId) missing.push("CMS_FILES_S3_ACCESS_KEY_ID");
  if (!config.secretAccessKey) missing.push("CMS_FILES_S3_SECRET_ACCESS_KEY");
  return missing;
}

function wordpressEnvs({ cmsStorage, tenantSlug, appSecret, domain } = {}) {
  return [
    { key: "WORDPRESS_DB_HOST", value: "${db.HOSTNAME}:${db.PORT}" },
    { key: "WORDPRESS_DB_USER", value: "${db.USERNAME}" },
    { key: "WORDPRESS_DB_PASSWORD", value: "${db.PASSWORD}" },
    { key: "WORDPRESS_DB_NAME", value: "${db.DATABASE}" },
    { key: "WORDPRESS_TABLE_PREFIX", value: "wp_" },
    { key: "WORDPRESS_SITE_URL", value: `https://${domain}` },
    { key: "WORDPRESS_SITE_TITLE", value: "Esteemed Commerce" },
    secretEnv("WORDPRESS_ADMIN_USER", tenantSlug),
    secretEnv("WORDPRESS_ADMIN_PASSWORD", appSecret),
    { key: "WORDPRESS_ADMIN_EMAIL", value: "support@esteemed.io" },
    ...cmsStorageEnvs(cmsStorage),
  ];
}

function drupalEnvs({ cmsStorage, tenantSlug, appSecret } = {}) {
  return [
    { key: "DRUPAL_DB_DRIVER", value: "pgsql" },
    { key: "DRUPAL_DB_HOST", value: "${db.HOSTNAME}" },
    { key: "DRUPAL_DB_PORT", value: "${db.PORT}" },
    { key: "DRUPAL_DB_USER", value: "${db.USERNAME}" },
    { key: "DRUPAL_DB_PASS", value: "${db.PASSWORD}" },
    { key: "DRUPAL_DB_NAME", value: "${db.DATABASE}" },
    { key: "DRUPAL_SITE_NAME", value: "Esteemed Commerce" },
    secretEnv("DRUPAL_ADMIN_USER", tenantSlug),
    secretEnv("DRUPAL_ADMIN_PASSWORD", appSecret),
    ...cmsStorageEnvs(cmsStorage),
  ];
}

export function generateAppSpec({ appId, tenantSlug, tier, registry, image, platform = "commerce", cmsStorage }) {
  if (!COMMERCE_PLATFORMS.has(platform)) {
    throw new Error(`Unsupported commerce platform: ${platform}`);
  }

  const defaults = platformDefaults(platform);
  const specs = TIER_SPECS[tier] || TIER_SPECS[defaults.defaultTier];
  const appName = `${platform}-${tenantSlug}`;
  const domain = `${tenantSlug}.${defaults.domainSegment}.esteemed.io`;
  const isMedusa = platform === "commerce";
  const appSecret = crypto.randomUUID();

  return {
    name: appName,
    region: specs.region,
    services: [
      {
        name: defaults.serviceName,
        image: imageSpec({ registry, image }),
        instance_size_slug: specs.instanceSize,
        instance_count: specs.instanceCount,
        http_port: defaults.httpPort,
        envs: [
          ...(platform === "commerce"
            ? medusaEnvs(domain)
            : platform === "wordpress"
              ? wordpressEnvs({ cmsStorage, tenantSlug, appSecret, domain })
              : drupalEnvs({ cmsStorage, tenantSlug, appSecret })),
          { key: "APP_URL", value: `https://${domain}` },
          secretEnv("APP_SECRET", crypto.randomUUID()),
          { key: "ESTEEMED_APP_ID", value: appId },
          { key: "ESTEEMED_TENANT", value: tenantSlug },
          { key: "ESTEEMED_TIER", value: tier },
          { key: "ESTEEMED_PLATFORM", value: platform },
        ],
        routes: [{ path: "/" }],
        health_check: {
          http_path: defaults.healthPath,
          initial_delay_seconds: defaults.healthDelay,
          period_seconds: 15,
        },
      },
    ],
    databases: [
      {
        name: "db",
        engine: defaults.dbEngine,
        version: defaults.dbVersion,
        size: specs.dbSize,
        num_nodes: 1,
        production: !["develop", "starter"].includes(tier),
      },
      ...(isMedusa
        ? [
            {
              name: "redis",
              engine: "REDIS",
              version: "7",
              size: "db-s-1vcpu-1gb",
              num_nodes: 1,
              production: false,
            },
          ]
        : []),
    ],
  };
}
