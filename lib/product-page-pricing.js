import {
  agents,
  agentFleet,
  cloudTiers,
  commerceTiers,
  createTiers,
  drupalCommerceTiers,
  wooCommerceTiers,
  curateTiers,
  intelligenceProduct,
  managedHostingTiers,
  perSeatProducts,
  suiteProduct,
  supportTiers,
} from "@/lib/data";

const perSeatFeatures = {
  free: [
    "1 user workspace",
    "Core records and pipeline",
    "Basic notes and activity tracking",
    "Esteemed account included",
  ],
  starter: [
    "Multi-user workflow",
    "Full pipeline management",
    "Analytics and reporting",
    "Chat-level AI drafting",
    "No onboarding fee",
  ],
  pro: [
    "Everything in Starter",
    "Full Star Assist AI",
    "AI sourcing and outreach drafts",
    "Generative screening summaries",
    "Human approval workflow",
  ],
  enterprise: [
    "SSO and advanced controls",
    "Deep integrations",
    "Dedicated support",
    "Custom domain Intelligence",
    "Autonomous Star execution options",
  ],
};

const hireFeatureOverrides = {
  free: ["1 user workspace", "Basic job tracking", "Candidate notes", "Esteemed account included"],
  starter: ["Applicant tracking pipeline", "Job and candidate records", "Team hiring workflows", "Analytics and parsing", "Chat-level AI drafting"],
  pro: ["Everything in Starter", "Full Star Assist AI", "AI candidate matching", "Generative screening summaries", "Colleagues-powered sourcing context"],
  enterprise: ["Custom hiring workflows", "Workday/Bullhorn/BambooHR integrations", "SSO and compliance review", "Dedicated support", "Autonomous Star execution options"],
};

export function appPricingPlans(productKey) {
  const product = perSeatProducts.find((item) => item.key === productKey);
  if (!product) return [];
  const featureSet = productKey === "hire" ? hireFeatureOverrides : perSeatFeatures;
  return product.tiers.map((tier) => ({
    ...tier,
    description: tier.basis,
    features: featureSet[tier.key] || [],
  }));
}

export function suitePricingPlans() {
  return suiteProduct.tiers.map((tier) => ({
    ...tier,
    description: "Acquire Pro + Hire Pro in one shared seat.",
    features: [
      "Acquire Pro included",
      "Hire Pro included",
      "Shared workspace and account model",
      "Full Star Assist AI",
      tier.savings,
    ],
    recommended: true,
  }));
}

export function createPricingPlans() {
  return createTiers.map((tier) => ({
    ...tier,
    annual: typeof tier.annual === "number" ? tier.annual * 12 : tier.annual,
    description: `${tier.description}${tier.credits ? ` · ${tier.credits}` : ""}`,
  }));
}

export function curatePricingPlans() {
  return curateTiers.map((tier) => ({
    ...tier,
    name: `Curate ${tier.name}`,
    description: tier.basis,
    features:
      tier.key === "starter"
        ? [
            "1 site",
            "Approximately 3 editor seats",
            "Managed Curate workspace",
            "Core CMS and media management",
            "Draft, review, approve, publish workflow",
          ]
        : tier.key === "pro"
          ? [
              "Up to 5 sites",
              "Approximately 10 editor seats",
              "AI content hub",
              "Content agents included by entitlement",
              "Connect/RAG included",
              "SSO and publishing workflows",
            ]
          : tier.features,
  }));
}

export function intelligencePricingPlans() {
  return intelligenceProduct.tiers.map((tier) => ({
    ...tier,
    name: "Intelligence",
    description: tier.basis,
    features: [
      "Persistent memory depth",
      "Continual learning",
      "Coherence at scale",
      "Custom domain memory",
      "Attachable to any paid tier",
    ],
  }));
}

export function agentPricingPlans() {
  return [
    ...agents.map((agent) => ({
      key: agent.key,
      name: agent.name,
      monthly: agent.price,
      annual: agent.annual,
      lookupKey: agent.lookupKey,
      annualLookupKey: agent.annualLookupKey,
      description: agent.tagline,
      features: [
        agent.description,
        "Standalone deployment",
        "Available at launch",
        "Powered by Esteemed Intelligence",
      ],
    })),
    {
      key: "fleet",
      name: agentFleet.name,
      monthly: agentFleet.price,
      annual: agentFleet.annual,
      lookupKey: agentFleet.lookupKey,
      annualLookupKey: agentFleet.annualLookupKey,
      description: "Multi-agent bundle for non-Curate deployments.",
      recommended: true,
      features: [
        "Social, Blogger, Marketer, Recruiter, and Publicist bundle",
        "Shared tenant deployment",
        "Available at launch",
        "From $199/mo",
      ],
    },
  ];
}

export function cloudPricingPlans() {
  return cloudTiers.map((tier) => ({
    ...tier,
    features:
      tier.key === "basic"
        ? ["1 website", "25 GB NVMe storage", "Custom domain + SSL", "Daily backups", "Global CDN", "Git-based deploys"]
        : tier.key === "plus"
          ? ["1 website", "50 GB NVMe storage", "Staging site", "Custom domain + SSL", "Daily backups", "CDN included", "Security monitoring"]
          : tier.key === "pro"
            ? ["1 website", "100 GB NVMe storage", "Priority support", "Staging site", "Enhanced security", "Application monitoring"]
            : ["Up to 5 websites", "200 GB NVMe storage", "Custom domains + SSL", "Daily backups", "Staging sites", "Priority support"],
  }));
}

export function managedHostingPricingPlans() {
  return managedHostingTiers.map((tier) => ({
    ...tier,
    features:
      tier.monthly === null
        ? [
            {
              label: "For a Limited Time",
              text: "Custom rebuild or migration allowance scoped with your hosting agreement",
            },
            "Multi-site hosting",
            "Dedicated infrastructure",
            "Custom SLA",
            "Custom support model",
          ]
        : tier.key === "business"
          ? [
              {
                label: "For a Limited Time",
                text: "Claim a $0 full standard-site rebuild with a 12-month Managed Hosting plan",
              },
              "Done-for-you hosting",
              "Full standard-site Create rebuild included",
              `No page counting up to about ${tier.pageSoftCap} pages`,
              `${tier.supportHours} support hrs/mo included`,
              "SSL, monitoring, and backups",
              "Enterprise quote for portals, commerce, multi-site, or dedicated SLA",
            ]
        : [
            {
              label: "For a Limited Time",
              text: `Claim a $0 Create rebuild up to ${tier.pageAllowance} pages with a 12-month Managed Hosting plan`,
            },
            "Done-for-you hosting",
            `Free Create rebuild up to ${tier.pageAllowance} pages with 12-month term`,
            "$100/page one-time overage beyond allowance",
            `${tier.supportHours} support hrs/mo included`,
            "SSL, monitoring, and backups",
            "Support overage available",
          ],
  }));
}

export function supportPricingPlans() {
  return supportTiers.map((tier) => ({
    key: tier.key,
    name: tier.name,
    monthly: tier.monthly ?? null,
    annual: null,
    lookupKey: tier.lookupKey,
    description: tier.hours ? `${tier.hours} hours/mo at ${tier.rate}/hr` : tier.description,
    recommended: tier.recommended,
    features:
      tier.key === "enterprise"
        ? ["Custom SLA", "Dedicated team", "Phone support", "Hourly support rate"]
        : [
            tier.description,
            "Monthly support subscription",
            "Use hours for Esteemed apps or existing sites",
            "Additional work scoped before it begins",
          ],
  }));
}

export function commercePricingPlans() {
  return commerceTiers.map((tier) => ({
    ...tier,
    description: `${tier.description}${tier.compute ? ` · ${tier.compute}` : ""}`,
  }));
}

export function wooCommercePricingPlans() {
  return wooCommerceTiers.map((tier) => ({ ...tier }));
}

export function drupalCommercePricingPlans() {
  return drupalCommerceTiers.map((tier) => ({ ...tier }));
}
