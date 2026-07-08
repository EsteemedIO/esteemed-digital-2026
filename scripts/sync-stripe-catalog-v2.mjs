const API_BASE = "https://api.stripe.com/v1";

const apiKey = process.env.STRIPE_API_KEY || process.env.STRIPE_RESTRICTED_KEY || process.env.STRIPE_SECRET_KEY;
const dryRun = process.argv.includes("--dry-run");

if (!apiKey) {
  console.error("STRIPE_API_KEY, STRIPE_RESTRICTED_KEY, or STRIPE_SECRET_KEY is required.");
  process.exit(1);
}

const products = [
  { name: "Esteemed Acquire", module: "acquire", notes: "CRM/TRM, dual pipeline" },
  { name: "Esteemed Hire", module: "hire", notes: "Applicant tracking system" },
  { name: "Esteemed Suite", module: "suite", notes: "Acquire + Hire Pro bundle" },
  { name: "Esteemed Intelligence", module: "intelligence", notes: "Per-tenant substrate add-on" },
  { name: "Esteemed Curate", module: "curate", notes: "Per-workspace CMS / content hub" },
  { name: "Esteemed Create", module: "create", notes: "AI-assisted website and app builder with Studio IDE" },
  { name: "Esteemed Cloud - Sites", module: "hosting", notes: "Self-serve and managed website hosting for sites" },
  { name: "Esteemed Support", module: "support", notes: "Monthly human support hour subscriptions" },
  { name: "Esteemed Migration", module: "migration", notes: "One-time migration service plus Care bridge" },
  { name: "Esteemed Agents", module: "agents", notes: "AI add-ons, launch-gated standalone SKUs" },
];

const prices = [
  ["acquire", "acquire_free", 0, "month", "flat", "free", "module.acquire", "assist_light"],
  ["acquire", "acquire_starter_monthly", 14900, "month", "licensed_per_seat", "starter", "module.acquire", "assist_light"],
  ["acquire", "acquire_starter_annual", 149000, "year", "licensed_per_seat", "starter", "module.acquire", "assist_light"],
  ["acquire", "acquire_starter_founding_monthly", 9900, "month", "licensed_per_seat", "starter", "module.acquire", "assist_light", true],
  ["acquire", "acquire_pro_monthly", 24900, "month", "licensed_per_seat", "pro", "module.acquire", "star_full"],
  ["acquire", "acquire_pro_annual", 249000, "year", "licensed_per_seat", "pro", "module.acquire", "star_full"],
  ["acquire", "acquire_pro_founding_monthly", 19900, "month", "licensed_per_seat", "pro", "module.acquire", "star_full", true],
  ["hire", "hire_free", 0, "month", "flat", "free", "module.hire", "assist_light"],
  ["hire", "hire_starter_monthly", 14900, "month", "licensed_per_seat", "starter", "module.hire", "assist_light"],
  ["hire", "hire_starter_annual", 149000, "year", "licensed_per_seat", "starter", "module.hire", "assist_light"],
  ["hire", "hire_starter_founding_monthly", 9900, "month", "licensed_per_seat", "starter", "module.hire", "assist_light", true],
  ["hire", "hire_pro_monthly", 24900, "month", "licensed_per_seat", "pro", "module.hire", "star_full"],
  ["hire", "hire_pro_annual", 249000, "year", "licensed_per_seat", "pro", "module.hire", "star_full"],
  ["hire", "hire_pro_founding_monthly", 19900, "month", "licensed_per_seat", "pro", "module.hire", "star_full", true],
  ["suite", "suite_bundle_monthly", 39900, "month", "licensed_per_seat", "bundle", "module.acquire,module.hire", "star_full"],
  ["suite", "suite_bundle_annual", 399000, "year", "licensed_per_seat", "bundle", "module.acquire,module.hire", "star_full"],
  ["suite", "suite_bundle_founding_monthly", 31900, "month", "licensed_per_seat", "bundle", "module.acquire,module.hire", "star_full", true],
  ["intelligence", "intelligence_monthly", 19900, "month", "flat", "addon", "addon.intelligence", "substrate_deep"],
  ["intelligence", "intelligence_annual", 199000, "year", "flat", "addon", "addon.intelligence", "substrate_deep"],
  ["curate", "curate_starter_monthly", 4900, "month", "flat", "starter", "module.curate", "content_basic"],
  ["curate", "curate_starter_annual", 49000, "year", "flat", "starter", "module.curate", "content_basic"],
  ["curate", "curate_starter_founding_monthly", 3900, "month", "flat", "starter", "module.curate", "content_basic", true],
  ["curate", "curate_pro_monthly", 29900, "month", "flat", "pro", "module.curate", "content_ai"],
  ["curate", "curate_pro_annual", 299000, "year", "flat", "pro", "module.curate", "content_ai"],
  ["curate", "curate_pro_founding_monthly", 19900, "month", "flat", "pro", "module.curate", "content_ai", true],
  ["curate", "curate_editor_seat_monthly", 1900, "month", "licensed_per_seat", "addon", "module.curate", ""],
  ["curate", "curate_site_addon_monthly", 3900, "month", "flat", "addon", "module.curate", ""],
  ["create", "create_free", 0, "month", "flat", "free", "module.create", "create_free"],
  ["create", "create_core_monthly", 3900, "month", "flat", "core", "module.create,module.hosting", "create_core"],
  ["create", "create_core_annual", 34800, "year", "flat", "core", "module.create,module.hosting", "create_core"],
  ["create", "create_pro_monthly", 7900, "month", "flat", "pro", "module.create,module.hosting", "create_pro"],
  ["create", "create_pro_annual", 70800, "year", "flat", "pro", "module.create,module.hosting", "create_pro"],
  ["create", "create_business_monthly", 16900, "month", "flat", "business", "module.create,module.hosting", "create_business"],
  ["create", "create_business_annual", 154800, "year", "flat", "business", "module.create,module.hosting", "create_business"],
  ["hosting", "cloud_basic_monthly", 999, "month", "flat", "basic", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_basic_annual", 9900, "year", "flat", "basic", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_plus_monthly", 1499, "month", "flat", "plus", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_plus_annual", 14900, "year", "flat", "plus", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_pro_monthly", 1999, "month", "flat", "pro", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_pro_annual", 19900, "year", "flat", "pro", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_multi_monthly", 3999, "month", "flat", "multi", "module.hosting", "hosting_self_serve"],
  ["hosting", "cloud_multi_annual", 39900, "year", "flat", "multi", "module.hosting", "hosting_self_serve"],
  ["hosting", "managed_essential_monthly", 14900, "month", "flat", "essential", "module.hosting", "hosting_managed", false, { page_allowance: "5", page_overage_applies: "true" }],
  ["hosting", "managed_essential_annual", 149000, "year", "flat", "essential", "module.hosting", "hosting_managed", false, { page_allowance: "5", page_overage_applies: "true" }],
  ["hosting", "managed_growth_monthly", 24900, "month", "flat", "growth", "module.hosting", "hosting_managed", false, { page_allowance: "12", page_overage_applies: "true" }],
  ["hosting", "managed_growth_annual", 249000, "year", "flat", "growth", "module.hosting", "hosting_managed", false, { page_allowance: "12", page_overage_applies: "true" }],
  ["hosting", "managed_business_monthly", 39900, "month", "flat", "business", "module.hosting", "hosting_managed", false, { page_allowance: "unlimited_standard", page_overage_applies: "false", page_soft_cap: "30" }],
  ["hosting", "managed_business_annual", 399000, "year", "flat", "business", "module.hosting", "hosting_managed", false, { page_allowance: "unlimited_standard", page_overage_applies: "false", page_soft_cap: "30" }],
  ["hosting", "hosting_page_overage", 10000, null, "one_time", "addon", "", "", false, { entitlement: "none" }],
  ["support", "support_3_hours_monthly", 25500, "month", "flat", "3_hours", "module.support", "human_support", false, { support_hours: "3", hourly_rate: "85" }],
  ["support", "support_6_hours_monthly", 51000, "month", "flat", "6_hours", "module.support", "human_support", false, { support_hours: "6", hourly_rate: "85" }],
  ["support", "support_8_hours_monthly", 68000, "month", "flat", "8_hours", "module.support", "human_support", false, { support_hours: "8", hourly_rate: "85" }],
  ["support", "support_10_hours_monthly", 85000, "month", "flat", "10_hours", "module.support", "human_support", false, { support_hours: "10", hourly_rate: "85" }],
  ["migration", "migration_care_monthly", 39900, "month", "flat", "care", "module.hosting", ""],
  ["migration", "migration_smb_standard", 650000, null, "one_time", "standard", "", ""],
  ["migration", "migration_smb_plus", 950000, null, "one_time", "plus", "", ""],
  ["migration", "migration_mid_pro", 1850000, null, "one_time", "pro", "", ""],
  ["migration", "migration_mid_proplus", 3250000, null, "one_time", "proplus", "", ""],
  ["migration", "migration_discovery", 750000, null, "one_time", "discovery", "", ""],
  ["agents", "agent_receptionist_monthly", 9900, "month", "flat", "addon", "module.agents", "agent_receptionist"],
  ["agents", "agent_social_monthly", 12900, "month", "flat", "addon", "module.agents", "agent_social"],
  ["agents", "agent_blogger_monthly", 14900, "month", "flat", "addon", "module.agents", "agent_blogger"],
  ["agents", "agent_marketer_monthly", 14900, "month", "flat", "addon", "module.agents", "agent_marketer"],
  ["agents", "agent_recruiter_monthly", 14900, "month", "flat", "addon", "module.agents", "agent_recruiter"],
  ["agents", "agent_publicist_monthly", 14900, "month", "flat", "addon", "module.agents", "agent_publicist"],
  ["agents", "agents_bundle_monthly", 19900, "month", "flat", "addon", "module.agents", "agents_bundle"],
].map(([module, lookupKey, amount, interval, seatType, tier, entitlement, aiLevel, founding = false, extraMetadata = {}]) => ({
  module,
  lookupKey,
  amount,
  interval,
  seatType,
  tier,
  entitlement,
  aiLevel,
  founding,
  extraMetadata,
}));

function form(params) {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") body.append(key, String(value));
  }
  return body;
}

async function stripe(method, path, params) {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: method === "GET" ? undefined : form(params),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(`${method} ${path} failed: ${json.error?.message || response.statusText}`);
  }
  return json;
}

async function listAll(resource) {
  const data = [];
  let startingAfter = "";
  while (true) {
    const url = new URL(`${API_BASE}/${resource}`);
    url.searchParams.set("limit", "100");
    if (startingAfter) url.searchParams.set("starting_after", startingAfter);
    const response = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } });
    const json = await response.json();
    if (!response.ok) throw new Error(`list ${resource} failed: ${json.error?.message || response.statusText}`);
    data.push(...json.data);
    if (!json.has_more || json.data.length === 0) return data;
    startingAfter = json.data.at(-1).id;
  }
}

function metadataForPrice(price) {
  return Object.fromEntries(
    Object.entries({
      module: price.module,
      tier: price.tier,
      interval: price.interval || "one_time",
      seat_type: price.seatType,
      founding: price.founding ? "true" : "false",
      entitlement: price.entitlement,
      ai_level: price.aiLevel,
      catalog: "esteemed-pricing-v2",
      ...price.extraMetadata,
    }).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
}

const existingProducts = await listAll("products");
const existingPrices = await listAll("prices");
const productByModule = new Map(
  existingProducts
    .filter((product) => product.metadata?.catalog === "esteemed-pricing-v2" || product.name?.startsWith("Esteemed "))
    .map((product) => [product.metadata?.module, product]),
);
const priceByLookup = new Map(existingPrices.filter((price) => price.lookup_key).map((price) => [price.lookup_key, price]));

const productIds = new Map();
for (const product of products) {
  const existing = productByModule.get(product.module);
  if (existing) {
    productIds.set(product.module, existing.id);
    console.log(`product exists ${product.module}: ${existing.id} ${existing.name}`);
    continue;
  }

  if (dryRun) {
    productIds.set(product.module, `dry_run_${product.module}`);
    console.log(`would create product ${product.module}: ${product.name}`);
    continue;
  }

  const created = await stripe("POST", "/products", {
    name: product.name,
    description: product.notes,
    "metadata[module]": product.module,
    "metadata[catalog]": "esteemed-pricing-v2",
  });
  productIds.set(product.module, created.id);
  console.log(`created product ${product.module}: ${created.id} ${created.name}`);
}

for (const price of prices) {
  const existing = priceByLookup.get(price.lookupKey);
  if (existing) {
    const nextMetadata = metadataForPrice(price);
    const metadataPatch = Object.fromEntries(
      Object.entries(nextMetadata).filter(([key, value]) => existing.metadata?.[key] !== value),
    );
    if (Object.keys(metadataPatch).length > 0) {
      if (dryRun) {
        console.log(`would update metadata ${price.lookupKey}: ${Object.keys(metadataPatch).join(", ")}`);
      } else {
        await stripe(
          "POST",
          `/prices/${existing.id}`,
          Object.fromEntries(Object.entries(metadataPatch).map(([key, value]) => [`metadata[${key}]`, value])),
        );
        console.log(`updated metadata ${price.lookupKey}: ${existing.id}`);
      }
    }
    console.log(`price exists ${price.lookupKey}: ${existing.id}`);
    continue;
  }

  const productId = productIds.get(price.module);
  if (!productId) throw new Error(`No product for module ${price.module}`);

  if (dryRun) {
    console.log(`would create price ${price.lookupKey}: ${price.amount}`);
    continue;
  }

  const params = {
    product: productId,
    currency: "usd",
    unit_amount: price.amount,
    lookup_key: price.lookupKey,
    ...Object.fromEntries(
      Object.entries(metadataForPrice(price)).map(([key, value]) => [`metadata[${key}]`, value]),
    ),
  };
  if (price.interval) {
    params["recurring[interval]"] = price.interval;
    params["recurring[usage_type]"] = price.seatType === "metered" ? "metered" : "licensed";
  }

  const created = await stripe("POST", "/prices", params);
  console.log(`created price ${price.lookupKey}: ${created.id}`);
}

console.log("Stripe catalog v2 sync complete.");
