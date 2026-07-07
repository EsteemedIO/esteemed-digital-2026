import {
  Phone, Share2, FileText, Mail, Sparkles,
  Code, Search, Send, Megaphone, BarChart3, HeadphonesIcon, UserSearch,
} from "lucide-react";

// Pricing catalog v2. Stripe code must use lookupKey, never raw price ids.
export const perSeatProducts = [
  {
    key: "acquire",
    name: "Acquire",
    description: "CRM/TRM for client and talent acquisition.",
    tiers: [
      { key: "free", name: "Free", monthly: 0, annual: 0, lookupKey: "acquire_free", basis: "1 user" },
      { key: "starter", name: "Starter", monthly: 149, annual: 1490, founding: 99, lookupKey: "acquire_starter_monthly", annualLookupKey: "acquire_starter_annual", foundingLookupKey: "acquire_starter_founding_monthly", basis: "per seat" },
      { key: "pro", name: "Pro", monthly: 249, annual: 2490, founding: 199, lookupKey: "acquire_pro_monthly", annualLookupKey: "acquire_pro_annual", foundingLookupKey: "acquire_pro_founding_monthly", basis: "per seat", recommended: true },
      { key: "enterprise", name: "Enterprise", monthly: null, annual: null, lookupKey: "acquire_enterprise_custom", basis: "custom" },
    ],
  },
  {
    key: "hire",
    name: "Hire",
    description: "Applicant tracking system powered by Colleagues and Intelligence.",
    tiers: [
      { key: "free", name: "Free", monthly: 0, annual: 0, lookupKey: "hire_free", basis: "1 user" },
      { key: "starter", name: "Starter", monthly: 149, annual: 1490, founding: 99, lookupKey: "hire_starter_monthly", annualLookupKey: "hire_starter_annual", foundingLookupKey: "hire_starter_founding_monthly", basis: "per seat" },
      { key: "pro", name: "Pro", monthly: 249, annual: 2490, founding: 199, lookupKey: "hire_pro_monthly", annualLookupKey: "hire_pro_annual", foundingLookupKey: "hire_pro_founding_monthly", basis: "per seat", recommended: true },
      { key: "enterprise", name: "Enterprise", monthly: null, annual: null, lookupKey: "hire_enterprise_custom", basis: "custom" },
    ],
  },
];

export const suiteProduct = {
  key: "suite",
  name: "Suite",
  description: "Acquire + Hire Pro bundle.",
  tiers: [
    { key: "bundle", name: "Bundle", monthly: 399, annual: 3990, founding: 319, lookupKey: "suite_bundle_monthly", annualLookupKey: "suite_bundle_annual", foundingLookupKey: "suite_bundle_founding_monthly", basis: "per seat", savings: "$99/seat/mo vs separate Pro plans" },
  ],
};

export const intelligenceProduct = {
  key: "intelligence",
  name: "Intelligence",
  description: "Deep substrate upgrade: persistent memory, coherence, and custom domain intelligence.",
  tiers: [
    { key: "monthly", name: "Monthly", monthly: 199, annual: 1990, lookupKey: "intelligence_monthly", annualLookupKey: "intelligence_annual", basis: "flat per tenant" },
  ],
};

export const curateTiers = [
  { key: "starter", name: "Starter", monthly: 49, annual: 490, founding: 39, lookupKey: "curate_starter_monthly", annualLookupKey: "curate_starter_annual", foundingLookupKey: "curate_starter_founding_monthly", basis: "1 site, ~3 editors", features: ["Managed Curate workspace", "Core CMS", "Content workflow", "Managed Curate hosting"] },
  { key: "pro", name: "Pro", monthly: 299, annual: 2990, founding: 199, lookupKey: "curate_pro_monthly", annualLookupKey: "curate_pro_annual", foundingLookupKey: "curate_pro_founding_monthly", basis: "up to 5 sites, ~10 editors", recommended: true, features: ["AI content hub", "Content agents included", "Connect/RAG included", "SSO and publishing workflows"] },
  { key: "enterprise", name: "Enterprise", monthly: null, annual: null, lookupKey: "curate_enterprise_custom", basis: "dedicated cloud", features: ["Dedicated Esteemed Cloud", "Unlimited sites", "Custom SLA", "Advanced RAG/domain training"] },
];

// Create tiers
export const createTiers = [
  {
    key: "free", name: "Free", monthly: 0, annual: 0, lookupKey: "create_free",
    credits: "30 + 5 daily credits",
    description: "Try it, build a small static site",
    features: [
      "1 project",
      "Publish to esteemed.app subdomain",
      "Studio IDE included",
      "Community support",
    ],
    cta: "Try free", ctaStyle: "secondary", recommended: false,
  },
  {
    key: "core", name: "Core", monthly: 39, annual: 29, lookupKey: "create_core_monthly", annualLookupKey: "create_core_annual",
    credits: "100 credits/mo",
    description: "Build and launch one real site",
    features: [
      "Unlimited projects",
      "Custom domain + SSL",
      "Studio IDE + code editing",
      "Colleagues marketplace access",
      "Agent add-ons available",
      "Hosting included at publish",
      "Email support",
    ],
    cta: "Get started", ctaStyle: "primary", recommended: true,
  },
  {
    key: "pro", name: "Pro", monthly: 79, annual: 59, lookupKey: "create_pro_monthly", annualLookupKey: "create_pro_annual",
    credits: "300 credits/mo",
    description: "Build, iterate, multi-site",
    features: [
      "Everything in Core",
      "Multi-site management",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (up to 3)",
      "Credit top-ups at reduced rate",
    ],
    cta: "Get started", ctaStyle: "secondary", recommended: false,
  },
  {
    key: "business", name: "Business", monthly: 169, annual: 129, lookupKey: "create_business_monthly", annualLookupKey: "create_business_annual",
    credits: "800 credits/mo",
    description: "Heavy iteration, team collaboration",
    features: [
      "Everything in Pro",
      "Team collaboration (up to 10)",
      "Agents+ eligible",
      "Dedicated onboarding",
      "SSO authentication",
      "Premium support",
    ],
    cta: "Get started", ctaStyle: "secondary", recommended: false,
  },
  {
    key: "enterprise", name: "Enterprise", monthly: null, annual: null, lookupKey: "create_enterprise_custom",
    credits: "Custom credits",
    description: "Tailored allowance, dedicated team",
    features: [
      "Everything in Business",
      "Custom credit allowance",
      "Dedicated account team",
      "Custom SLAs",
      "On-premises deployment option",
      "Advanced security controls",
      "Volume pricing",
    ],
    cta: "Contact us", ctaStyle: "secondary", recommended: false,
  },
];

// Self-serve Cloud tiers. Standalone Hosting is for non-Curate sites.
export const cloudTiers = [
  {
    key: "basic", name: "Cloud Basic", monthly: 9.99, annual: 99, lookupKey: "cloud_basic_monthly", annualLookupKey: "cloud_basic_annual",
    description: "One bring-your-own site with SSL included.",
  },
  {
    key: "plus", name: "Cloud Plus", monthly: 14.99, annual: 149, lookupKey: "cloud_plus_monthly", annualLookupKey: "cloud_plus_annual",
    description: "One site with staging and CDN.",
  },
  {
    key: "pro", name: "Cloud Pro", monthly: 19.99, annual: 199, lookupKey: "cloud_pro_monthly", annualLookupKey: "cloud_pro_annual",
    description: "One site with priority support.",
  },
  {
    key: "multi", name: "Cloud Multi", monthly: 39.99, annual: 399, lookupKey: "cloud_multi_monthly", annualLookupKey: "cloud_multi_annual",
    description: "Up to five hosted sites.",
  },
];

export const managedHostingTiers = [
  {
    key: "essential", name: "Managed Essential", monthly: 149, annual: 1490, lookupKey: "managed_essential_monthly", annualLookupKey: "managed_essential_annual",
    supportHours: 2, pageAllowance: 5, pageOverageApplies: true, pageOverageLookupKey: "hosting_page_overage",
    description: "Done-for-you hosting for one site with two support hours per month and a 5-page Create rebuild allowance.",
  },
  {
    key: "growth", name: "Managed Growth", monthly: 249, annual: 2490, lookupKey: "managed_growth_monthly", annualLookupKey: "managed_growth_annual",
    supportHours: 5, pageAllowance: 12, pageOverageApplies: true, pageOverageLookupKey: "hosting_page_overage",
    description: "Managed hosting plus five support hours per month and a 12-page Create rebuild allowance.",
  },
  {
    key: "business", name: "Managed Business", monthly: 399, annual: 3990, lookupKey: "managed_business_monthly", annualLookupKey: "managed_business_annual",
    supportHours: 10, pageAllowance: "unlimited_standard", pageOverageApplies: false, pageSoftCap: 30,
    description: "Managed hosting plus ten support hours per month and a full standard-site Create rebuild.",
  },
  {
    key: "enterprise", name: "Managed Enterprise", monthly: null, annual: null, lookupKey: "managed_enterprise_custom",
    supportHours: null, pageAllowance: "bespoke", pageOverageApplies: false,
    description: "Multi-site, dedicated infrastructure, SLA, and custom support.",
  },
];

export const HOSTING_BUSINESS_SOFT_CAP = 30;

export const hostingBusinessEnterpriseTripConditions = [
  "More than about 30 pages",
  "Multi-location or multi-site scope",
  "Logged-in areas, portals, member systems, or account systems",
  "Non-trivial commerce beyond a simple store",
  "Dedicated infrastructure or SLA requirements",
];

export const hostingPageOverage = {
  key: "page-overage",
  name: "Hosting Page Overage",
  price: 100,
  priceDisplay: "$100/page",
  lookupKey: "hosting_page_overage",
  type: "one-time",
  scope: "One-time page overage for Managed Essential and Managed Growth rebuilds.",
};

// AI agents — launch-gated standalone add-ons. Curate Pro includes content agents by SKU entitlement.
export const agents = [
  { key: "receptionist", name: "AI Receptionist", price: 99, annual: 990, lookupKey: "agent_receptionist_monthly", annualLookupKey: "agent_receptionist_annual", tagline: "Star call-answering for hosted sites", icon: Phone, description: "Answers calls, captures intent, and routes follow-up.", launchGated: true },
  { key: "social", name: "Social", price: 129, annual: 1290, lookupKey: "agent_social_monthly", annualLookupKey: "agent_social_annual", tagline: "Repurposes and schedules social content", icon: Share2, description: "Repurposes approved content for social channels.", launchGated: true },
  { key: "blogger", name: "Blogger", price: 149, annual: 1490, lookupKey: "agent_blogger_monthly", annualLookupKey: "agent_blogger_annual", tagline: "Writes in your voice with SOnA training", icon: FileText, description: "Drafts posts, articles, and newsletters in your voice.", launchGated: true },
  { key: "marketer", name: "Marketer", price: 149, annual: 1490, lookupKey: "agent_marketer_monthly", annualLookupKey: "agent_marketer_annual", tagline: "Campaigns and marketing operations", icon: Mail, description: "Creates campaign drafts and campaign operations.", launchGated: true },
  { key: "recruiter", name: "Recruiter", price: 149, annual: 1490, lookupKey: "agent_recruiter_monthly", annualLookupKey: "agent_recruiter_annual", tagline: "Sources and engages talent", icon: UserSearch, description: "Sources and engages talent in your voice.", launchGated: true },
  { key: "publicist", name: "Publicist", price: 149, annual: 1490, lookupKey: "agent_publicist_monthly", annualLookupKey: "agent_publicist_annual", tagline: "PR and public communications", icon: Share2, description: "Manages public communications drafts in your voice.", launchGated: true },
];

export const curateAgents = agents.filter(a => a.addOnFor === "curate");
export const acquireAgents = agents.filter(a => a.addOnFor === "acquire");

export const agentFleet = {
  name: "Custom / multi-agent bundle",
  price: 199,
  annual: 1990,
  alacarte: null,
  savings: null,
  lookupKey: "agents_bundle_monthly",
  annualLookupKey: "agents_bundle_annual",
  includesKeys: ["social", "blogger", "marketer", "recruiter", "publicist"],
};

export const agentsPlus = {
  name: "Agents+",
  price: 199,
  description: "Shared memory and coherence across your agent fleet — powered by Esteemed Intelligence",
};

export const customAgents = {
  name: "Custom Agents",
  priceFrom: 199,
  priceDisplay: "From $199/mo",
  description: "Our team builds the agent with you. Tell us what your business needs done; we design, build, train, and maintain it.",
};

// Credit packs
export const creditPacks = [
  { credits: 50, price: 19 },
  { credits: 200, price: 59 },
  { credits: 500, price: 119 },
];

// Support tiers
export const supportTiers = [
  {
    key: "two-hour", name: "2-Hour Support Pack",
    description: "Light help for fixes, content updates, troubleshooting, and small requests",
    hours: 2,
    rate: 85,
    monthly: 170,
    price: "$170/mo",
  },
  {
    key: "five-hour", name: "5-Hour Support Pack",
    description: "Priority support for active sites, app configuration, and recurring operational help",
    hours: 5,
    rate: 80,
    monthly: 400,
    price: "$400/mo",
    recommended: true,
  },
  {
    key: "ten-hour", name: "10-Hour Support Pack",
    description: "Best for teams that need ongoing technical support, optimization, and managed requests",
    hours: 10,
    rate: 75,
    monthly: 750,
    price: "$750/mo",
  },
  {
    key: "enterprise", name: "Enterprise",
    description: "Custom SLA, dedicated team, phone support, and scoped delivery retainers",
    hours: null,
    rate: null,
    monthly: null,
    price: "Custom",
  },
];

// Migration packages
export const migrationPackages = [
  { key: "care", name: "Care", price: 399, priceDisplay: "$399/mo", lookupKey: "migration_care_monthly", type: "subscription", scope: "Managed bridge on your current platform while you decide when to migrate." },
  { key: "smb-standard", name: "SMB Migration — Standard", price: 6500, priceDisplay: "$6,500", lookupKey: "migration_smb_standard", type: "one-time", scope: "Up to 50 pages onto Curate." },
  { key: "smb-plus", name: "SMB Migration — Plus", price: 9500, priceDisplay: "$9,500", lookupKey: "migration_smb_plus", type: "one-time", scope: "Up to 150 pages, commerce, or membership onto Curate." },
  { key: "mid-pro", name: "Mid Migration — Pro", price: 18500, priceDisplay: "$18,500", lookupKey: "migration_mid_pro", type: "one-time", scope: "Up to 500 pages and multilingual support onto Curate." },
  { key: "mid-proplus", name: "Mid Migration — Pro+", price: 32500, priceDisplay: "$32,500", lookupKey: "migration_mid_proplus", type: "one-time", scope: "Up to 1,500 pages plus WCAG 2.2 AA work onto Curate." },
  { key: "enterprise-discovery", name: "Enterprise Discovery", price: 7500, priceDisplay: "$7,500", lookupKey: "migration_discovery", type: "one-time", scope: "Refundable against an enterprise migration project." },
  { key: "enterprise", name: "Enterprise Migration", priceFrom: 75000, priceDisplay: "Custom from $75,000", lookupKey: "migration_enterprise_custom", type: "one-time", scope: "Complex enterprise migration scoped through discovery." },
];

// SEO tiers
export const seoTiers = [
  {
    key: "starter", name: "SEO Starter", price: 399,
    features: ["Keyword research (up to 25 terms)", "On-page optimization", "Monthly tracking report", "Google Business Profile management", "Basic local citations"],
  },
  {
    key: "growth", name: "SEO Growth", price: 799,
    features: ["Everything in Starter", "Technical SEO audit (quarterly)", "Content optimization recommendations (4/mo)", "Foundational link building", "Competitor tracking"],
  },
  {
    key: "pro", name: "SEO Pro", price: 1499,
    features: ["Everything in Growth", "Content production (4 articles/mo)", "Advanced link building", "Schema/structured data", "Conversion rate optimization", "Monthly strategy review"],
  },
];

// Email marketing tiers
export const emailTiers = [
  {
    key: "starter", name: "Email Starter", price: 299,
    features: ["ESP setup (Mailchimp / ConvertKit)", "Template design (3 templates)", "List hygiene", "2 campaigns/mo", "Basic reporting"],
  },
  {
    key: "growth", name: "Email Growth", price: 599,
    features: ["Everything in Starter", "4 campaigns/mo", "Automation flows (welcome, abandoned cart, re-engagement)", "A/B subject testing", "Segmentation strategy"],
  },
  {
    key: "pro", name: "Email Pro", price: 1199,
    features: ["Everything in Growth", "8+ campaigns/mo", "Advanced segmentation", "AI-powered personalization", "Drip nurture sequences", "Deliverability monitoring"],
  },
];

// Social tiers
export const socialTiers = [
  {
    key: "ai-only", name: "Social Agent (AI-only)", price: 129, type: "ai",
    features: ["AI drafts, schedules, and posts", "LinkedIn, Facebook, Instagram", "Your voice, your approval flow", "Auto-post mode when trusted"],
  },
  {
    key: "hybrid-starter", name: "Hybrid Starter", price: 499, type: "hybrid",
    features: ["AI drafts, human reviews and posts", "3 platforms, 3 posts/week each", "Light community engagement", "Monthly content calendar"],
  },
  {
    key: "hybrid-growth", name: "Hybrid Growth", price: 999, type: "hybrid",
    features: ["Everything in Starter", "Daily posts", "Full community management", "Monthly performance reporting", "Paid social setup support"],
  },
  {
    key: "hybrid-pro", name: "Hybrid Pro", price: 1799, type: "hybrid",
    features: ["Everything in Growth", "3-5 platforms", "Video content (4/mo)", "Monthly strategy review", "Influencer outreach", "Paid social management"],
  },
];

// Bundles
export const bundles = [
  { key: "starter", name: "Starter Bundle", price: 299, alacarte: 377, savings: "21%", recommended: false, includes: ["Starter Hosting", "Voice Agent", "Social Agent"] },
  { key: "growth", name: "Growth Bundle", price: 899, alacarte: 1148, savings: "22%", recommended: true, includes: ["Growth Hosting", "Agent Suite (all 4)", "SEO Starter"] },
  { key: "pro", name: "Pro Bundle", price: 2399, alacarte: 2795, savings: "14%", recommended: false, includes: ["Pro Hosting", "Agent Suite", "SEO Growth", "Email Growth", "Hybrid Social Starter"] },
];

// Human services
export const humanServices = [
  { key: "custom-dev", name: "Custom Development", icon: Code, blurb: "Hourly or fixed-scope. From web apps to integrations.", priceNote: "From $150/hr" },
  { key: "seo", name: "SEO Strategy & Management", icon: Search, blurb: "Real SEO professionals manage your search presence.", priceNote: "From $399/mo" },
  { key: "email", name: "Email Marketing Operations", icon: Send, blurb: "Campaigns, automation, deliverability, all managed.", priceNote: "From $299/mo" },
  { key: "social", name: "Social Media Management", icon: Megaphone, blurb: "AI drafts, real humans engage and grow.", priceNote: "From $499/mo" },
  { key: "strategy", name: "Digital Strategy Consulting", icon: BarChart3, blurb: "Senior strategists from our 35,000-person network.", priceNote: "Engagement-based" },
  { key: "sales", name: "Sales & Lead Generation", icon: HeadphonesIcon, blurb: "Sales support and lead generation services.", priceNote: "Engagement-based" },
];

// Anchor references (text-only until logo consent)
export const anchorReferences = [
  { name: "IEEE", description: "Global professional association" },
  { name: "Alvernia University", description: "Higher education" },
  { name: "Cambridge Redevelopment Authority", description: "Massachusetts state agency" },
];

// Heritage timeline for /about
export const heritage = [
  { year: "2011", event: "Chris McGrath founds Celebrate Drupal, supporting WA Veterans Affairs and a generation of state and nonprofit Drupal websites." },
  { year: "2015", event: "Founded the Olympia Drupal meetup. Esteemed staffing launches, serving Fortune 500 IT contingent labor needs." },
  { year: "2024", event: "Esteemed Colleagues network reaches 35,000 active professional profiles." },
  { year: "Today", event: "Esteemed launches the AI + Human gold standard, combining 15 years of staffing infrastructure with AI-driven website building." },
];

// FAQ for /pricing
export const pricingFAQ = [
  { q: "Is there a contract?", a: "Self-serve Cloud can be monthly or annual. Managed Hosting uses a 12-month term when it includes the free rebuild. Per-seat apps can be monthly or annual, with annual billing priced at 10x monthly." },
  { q: "Can I cancel?", a: "You can cancel at the end of your agreement term. We give you an export of your content and help you move." },
  { q: "Do I need Hosting if I buy Curate?", a: "No. Curate includes hosting for Curate sites. Standalone Hosting is for non-Curate sites: bring-your-own, Create-built, or plain React/Node/Next sites." },
  { q: "Do you offer discounts?", a: "Annual billing is 10x monthly, effectively two months free. Founding monthly rates are separate Stripe prices locked for 12 months where offered." },
  { q: "Are agents included in Curate?", a: "Curate Pro includes the content agents through SKU-gated entitlements. Standalone agent SKUs are for non-Curate deployments and are launch-gated." },
  { q: "What if I need more than the published tiers?", a: "Enterprise plans are custom across apps, Curate, Hosting, and Migration. Contact us for a discovery conversation." },
];

// FAQ for /migrate
export const migrateFAQ = [
  { q: "Is the migration really free?", a: "The Tier-2 free rebuild is a $0 Create build bundled with a 12-month Managed Hosting agreement. It is not a paid Curate migration and it does not create a CMS-backed Curate site." },
  { q: "What does paid migration buy?", a: "Paid migration moves your site from WordPress, Drupal, Squarespace, Wix, Joomla, or custom systems onto Curate. After migration, you carry a Curate subscription." },
  { q: "Can I host without migrating?", a: "Yes. Hosting, Curate, Acquire, and Migration are independent. You can host a site with us without migrating it to Curate." },
  { q: "What if I want to leave later?", a: "You can. We give you an export of your content and help you move to wherever you're going. We don't believe in lock-in through hostage data." },
  { q: "Will my SEO survive the migration?", a: "Yes. We map every old URL to a new one with proper 301 redirects, preserve your meta tags, your structured data, your alt text, all of it." },
  { q: "Can I still have a designer make custom changes?", a: "Yes. Managed Hosting support hours and Colleagues experts can handle brand work, custom illustration, and implementation that needs a human eye." },
  { q: "What happens to my domain and email?", a: "Your domain stays yours. Your email stays where it is. We only host your website." },
  { q: "WordPress or Drupal — which do you handle?", a: "All of them. WordPress (any version), Drupal 7 through 11, plus older custom CMSes." },
  { q: "How long does a migration take?", a: "Most small business sites: 1-3 weeks. Larger sites: 4-8 weeks. We'll give you a real timeline after the free assessment." },
  { q: "What's the catch?", a: "There are two separate motions: free rebuilds attach to Managed Hosting, while paid migrations attach to Curate. We keep those boundaries explicit so you do not pay twice for the same site." },
];
