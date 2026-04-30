import {
  Phone, Share2, FileText, Mail, Sparkles,
  Code, Search, Send, Megaphone, BarChart3, HeadphonesIcon,
} from "lucide-react";

// AI agents — generic descriptive names ONLY
export const agents = [
  { key: "voice", name: "Voice Agent", price: 99, tagline: "Your website answers missed calls.", icon: Phone, description: "Answers missed calls, takes messages, qualifies inquiries, sends transcripts to your phone. Trained on your business so it doesn't sound like a robot." },
  { key: "social", name: "Social Agent", price: 129, tagline: "Posts in your voice on every platform.", icon: Share2, description: "Drafts and schedules posts to LinkedIn, Facebook, Instagram in your voice. You approve before it posts. Or you trust it enough to auto-post — your call." },
  { key: "blog", name: "Blog Agent", price: 149, tagline: "Writes posts that sound like you wrote them.", icon: FileText, description: "Trains on your existing writing. Drafts blog posts and newsletters that actually sound like you. Not generic AI. You." },
  { key: "marketing", name: "Marketing Agent", price: 199, tagline: "Email campaigns and automation, on autopilot.", icon: Mail, description: "Email campaigns, automation flows, drip sequences. Drafts, segments, and schedules. You approve before each send." },
];

export const agentSuite = {
  name: "Agent Suite",
  price: 499,
  alacarte: 576,
  savings: 77,
  includesKeys: ["voice", "social", "blog", "marketing"],
};

export const customAgents = {
  name: "Custom Agents",
  priceFrom: 299,
  priceDisplay: "From $299/mo",
  description: "Our team builds the agent with you. Tell us what your business needs done; we design, build, train, and maintain it.",
};

// Hosting tiers
export const hostingTiers = [
  {
    key: "starter", name: "Starter", price: 149, recommended: false, cta: "Choose Starter",
    features: [
      "Hosting, SSL, daily backups, 24/7 monitoring",
      "Prompt-driven editing",
      "1 hour edits/mo",
      "Basic SEO setup",
      "Email support",
    ],
  },
  {
    key: "growth", name: "Growth", price: 249, recommended: true, cta: "Choose Growth",
    features: [
      "Everything in Starter",
      "3 hours edits/mo",
      "Quarterly performance review",
      "Form management & analytics dashboard",
      "Priority support",
    ],
  },
  {
    key: "pro", name: "Pro", price: 399, recommended: false, cta: "Choose Pro",
    features: [
      "Everything in Growth",
      "6 hours edits/mo",
      "Monthly performance review",
      "A/B testing & conversion optimization",
      "Dedicated CSM",
      "AI add-ons available",
    ],
  },
];

export const institutionalHostingNote = "Institutional hosting starts at $1,499/mo with custom SLAs, multi-environment, and compliance scope. Contact us for details.";

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
  { q: "What counts as an edit hour?", a: "Anything our team does on your behalf: content changes, layout updates, form modifications, image swaps. Prompt-driven edits you make yourself are unlimited and don't count." },
  { q: "Do you offer discounts?", a: "Bundles save 14-22% vs a la carte. Annual prepay saves an additional 10%. Volume discounts for multi-site customers are available — contact us." },
  { q: "What if I need more than Pro?", a: "Institutional hosting starts at $1,499/mo with custom SLAs, multi-environment, and compliance scope. Contact us for a discovery conversation." },
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
