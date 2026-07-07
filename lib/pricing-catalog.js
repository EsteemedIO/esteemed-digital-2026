import {
  agents,
  agentFleet,
  cloudTiers,
  createTiers,
  curateTiers,
  intelligenceProduct,
  hostingPageOverage,
  managedHostingTiers,
  migrationPackages,
  perSeatProducts,
  suiteProduct,
} from "@/lib/data";

export const productIconPaths = {
  acquire: "/product-icons/Acquire.svg",
  agents: "/product-icons/Assist.svg",
  assist: "/product-icons/Assist.svg",
  cloud: "/product-icons/Esteemed%20Cloud.svg",
  connect: "/product-icons/Connect.svg",
  create: "/product-icons/Create.svg",
  curate: "/product-icons/Curate.svg",
  colleagues: "/product-icons/Colleagues.svg",
  hire: "/product-icons/Hire.svg",
  hcmgpt: "/product-icons/HCMGPT%20(1).svg",
  intelligence: "/product-icons/Intelligence.svg",
  support: "/product-icons/Support.svg",
  suite: "/product-icons/Assist.svg",
};

export function formatMoney(value, options = {}) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    ...options,
  }).format(value);
}

export function checkoutHref({
  lookupKey,
  quantity = 1,
  successPath = "/thanks",
  cancelPath,
} = {}) {
  if (!lookupKey) return "/contact";
  const params = new URLSearchParams();
  params.set("lookup_key", lookupKey);
  params.set("quantity", String(Math.max(1, Number(quantity) || 1)));
  params.set("success_path", successPath);
  if (cancelPath) params.set("cancel_path", cancelPath);
  return `/api/checkout?${params.toString()}`;
}

export function checkoutItemsHref(items, { successPath = "/thanks", cancelPath } = {}) {
  const normalized = items
    .filter((item) => item.lookupKey)
    .map((item) => `${item.lookupKey}:${Math.max(1, Number(item.quantity) || 1)}`);

  if (normalized.length === 0) return "/contact";

  const params = new URLSearchParams();
  params.set("items", normalized.join(","));
  params.set("success_path", successPath);
  if (cancelPath) params.set("cancel_path", cancelPath);
  return `/api/checkout?${params.toString()}`;
}

function concreteLookupKeysFromTier(tier) {
  if (tier.monthly === null) return [];
  return [tier.lookupKey, tier.annualLookupKey, tier.foundingLookupKey].filter(Boolean);
}

export function getAllowedLookupKeys() {
  return new Set([
    ...perSeatProducts.flatMap((product) => product.tiers.flatMap(concreteLookupKeysFromTier)),
    ...suiteProduct.tiers.flatMap(concreteLookupKeysFromTier),
    ...intelligenceProduct.tiers.flatMap(concreteLookupKeysFromTier),
    ...curateTiers.flatMap(concreteLookupKeysFromTier),
    "curate_editor_seat_monthly",
    "curate_site_addon_monthly",
    ...createTiers.flatMap(concreteLookupKeysFromTier),
    ...cloudTiers.flatMap(concreteLookupKeysFromTier),
    ...managedHostingTiers.flatMap(concreteLookupKeysFromTier),
    hostingPageOverage.lookupKey,
    ...agents.map((agent) => agent.lookupKey).filter(Boolean),
    agentFleet.lookupKey,
    ...migrationPackages
      .filter((pkg) => !pkg.lookupKey?.includes("_custom"))
      .map((pkg) => pkg.lookupKey)
      .filter(Boolean),
  ]);
}
