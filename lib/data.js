import {
  Phone, Share2, FileText, Mail, Sparkles,
  Code, Search, Send, Megaphone, BarChart3, HeadphonesIcon, UserSearch,
} from "lucide-react";

// Create tiers
export const createTiers = [
  {
    key: "free", name: "Free", monthly: 0, annual: 0,
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
    key: "core", name: "Core", monthly: 39, annual: 29,
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
    key: "pro", name: "Pro", monthly: 79, annual: 59,
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
    key: "business", name: "Business", monthly: 169, annual: 129,
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
    key: "enterprise", name: "Enterprise", monthly: null, annual: null,
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

// Cloud tiers
export const cloudTiers = [
  {
    key: "static", name: "Static", monthly: 12, annual: 9,
    description: "Brochure sites, marketing pages, portfolios",
  },
  {
    key: "standard", name: "Standard", monthly: 25, annual: 19,
    description: "Forms, basic CMS, simple integrations",
  },
  {
    key: "app-container", name: "App Container", monthly: 52, annual: 39,
    description: "Login, user accounts, dashboards",
  },
  {
    key: "ecommerce", name: "E-commerce", monthly: 89, annual: 69,
    description: "Storefronts with payments and inventory",
  },
  {
    key: "multi-container", name: "Multi-Container", monthly: 169, annual: 129, fromPrice: true,
    description: "Complex apps with database + cache + worker tiers",
  },
  {
    key: "institutional", name: "Institutional", monthly: null, annual: null,
    description: "Custom SLAs, dedicated infrastructure, compliance",
  },
];

// AI agents — add-ons for Curate (content) and Acquire (business)
export const agents = [
  { key: "publicist", name: "Publicist", price: 129, tagline: "Manages social presence, PR, and public communications", icon: Share2, description: "Manages social presence, PR, and public communications in your voice.", addOnFor: "curate" },
  { key: "writer", name: "Writer", price: 149, tagline: "Writes posts, articles, and newsletters in your voice", icon: FileText, description: "Writes posts, articles, and newsletters in your voice.", addOnFor: "curate" },
  { key: "marketer", name: "Marketer", price: 199, tagline: "Email campaigns, automation, drip sequences in your voice", icon: Mail, description: "Email campaigns, automation, drip sequences in your voice.", addOnFor: "acquire" },
  { key: "recruiter", name: "Recruiter", price: 199, tagline: "Sources and engages talent in your voice (paired with Colleagues)", icon: UserSearch, description: "Sources and engages talent in your voice (paired with Colleagues).", addOnFor: "acquire" },
];

export const curateAgents = agents.filter(a => a.addOnFor === "curate");
export const acquireAgents = agents.filter(a => a.addOnFor === "acquire");

export const agentFleet = {
  name: "Agent Fleet",
  price: 599,
  alacarte: 676,
  savings: 77,
  includesKeys: ["publicist", "writer", "marketer", "recruiter"],
};

export const agentsPlus = {
  name: "Agents+",
  price: 199,
  description: "Shared memory and coherence across your agent fleet — powered by Esteemed Intelligence",
};

export const customAgents = {
  name: "Custom Agents",
  priceFrom: 299,
  priceDisplay: "From $299/mo",
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
    key: "starter", name: "Starter",
    description: "Community forums, docs, email support",
    price: "Included",
  },
  {
    key: "plus", name: "Plus",
    description: "Priority email, faster response times",
    price: "Included with Pro+",
  },
  {
    key: "pro", name: "Pro",
    description: "Dedicated CSM, monthly review, priority queue",
    price: "Included with Business+",
  },
  {
    key: "enterprise", name: "Enterprise",
    description: "Custom SLA, dedicated team, phone support",
    rate: 110,
    price: "$110/hr",
  },
];

// Migration packages
export const migrationPackages = [
  { key: "standard", name: "Standard", price: 0, priceDisplay: "Free with 12-mo agreement", scope: "Up to 50 pages, content + media, basic forms, redirect map. WordPress or Drupal source." },
  { key: "plus", name: "Plus", price: 3500, priceDisplay: "$3,500", scope: "Up to 150 pages, e-commerce or membership, one custom integration." },
  { key: "pro", name: "Pro", price: 12500, priceDisplay: "$12,500", scope: "Up to 500 pages, multilingual, two integrations, accessibility audit, six-month managed support." },
  { key: "enterprise", name: "Enterprise", priceFrom: 25000, priceDisplay: "From $25,000", scope: "Multi-site, complex permissions, deep integrations. Starts with $5K paid discovery." },
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
  { q: "Is there a contract?", a: "All hosting agreements are 12-month commitments. Month-to-month is available at +50% pricing if requested." },
  { q: "Can I cancel?", a: "You can cancel at the end of your agreement term. We give you an export of your content and help you move." },
  { q: "What are credits?", a: "Credits are used each time the AI builds, edits, or iterates on your project. Different actions use different amounts. Credit packs are available if you need more." },
  { q: "Do you offer discounts?", a: "Annual billing saves up to 25% vs monthly. Agent Fleet saves $77/mo vs a la carte. Volume discounts for multi-site customers are available — contact us." },
  { q: "What if I need more than Business?", a: "Enterprise plans include tailored credit allowances, a dedicated team, and custom pricing. Contact us for a discovery conversation." },
];

// FAQ for /migrate
export const migrateFAQ = [
  { q: "Is the migration really free?", a: "For most small business websites moving onto a 12-month hosting agreement, yes. Larger sites (more than ~150 pages, complex e-commerce, multiple integrations) get a fixed-price quote after the free assessment." },
  { q: "What if I want to leave later?", a: "You can. We give you an export of your content and help you move to wherever you're going. We don't believe in lock-in through hostage data." },
  { q: "Will my SEO survive the migration?", a: "Yes. We map every old URL to a new one with proper 301 redirects, preserve your meta tags, your structured data, your alt text, all of it." },
  { q: "Can I still have a designer make custom changes?", a: "Yes. The prompt-driven editor handles content and layout changes. Your designer handles brand work, custom illustration, anything that needs a human eye." },
  { q: "What happens to my domain and email?", a: "Your domain stays yours. Your email stays where it is. We only host your website." },
  { q: "WordPress or Drupal — which do you handle?", a: "All of them. WordPress (any version), Drupal 7 through 11, plus older custom CMSes." },
  { q: "How long does a migration take?", a: "Most small business sites: 1-3 weeks. Larger sites: 4-8 weeks. We'll give you a real timeline after the free assessment." },
  { q: "What's the catch?", a: "The catch is the 12-month hosting agreement. We make our money on hosting and support, not on migration project fees." },
];
