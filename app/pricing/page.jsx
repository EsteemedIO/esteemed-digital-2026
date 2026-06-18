"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Tab, Tabs } from "@heroui/react";
import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  agents,
  agentFleet,
  cloudTiers,
  curateTiers,
  intelligenceProduct,
  migrationPackages,
  perSeatProducts,
  pricingFAQ,
  suiteProduct,
} from "@/lib/data";

const productIcons = {
  acquire: "/images/apps/acquire.svg",
  hire: "/images/apps/hire.svg",
  suite: "/images/apps/assist.svg",
  curate: "/images/apps/curate.svg",
  intelligence: "/images/apps/intelligence.svg",
  connect: "/images/apps/connect.svg",
  support: "/images/apps/support.svg",
  cloud: "/images/apps/cloud.svg",
};

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

function priceLabel(tier, annual) {
  if (tier.monthly === null) return "Custom";
  if (tier.monthly === 0) return "Free";
  const amount = annual && tier.annual ? tier.annual : tier.monthly;
  const suffix = annual && tier.annual ? "/yr" : "/mo";
  return `${formatMoney(amount)}${suffix}`;
}

function introPrice(tier, annual, preferredIntro, discountRate, promo) {
  if (tier.monthly === null || tier.monthly === 0) {
    return null;
  }

  if (promo) {
    return {
      amount: promo.amount,
      regular: promo.regular,
      term: promo.term,
      savePercent: promo.savePercent,
    };
  }

  if (preferredIntro === "founding" && tier.founding) {
    const regular = discountRate ? tier.founding / (1 - discountRate) : tier.monthly;
    return {
      amount: tier.founding,
      regular,
      term: "For first 12 months",
    };
  }

  const amount = annual && tier.annual ? tier.annual / 12 : tier.monthly;
  const regular = discountRate ? amount / (1 - discountRate) : tier.monthly;

  if (annual && tier.annual) {
    return {
      amount,
      regular,
      term: "For first annual term",
    };
  }

  return {
    amount,
    regular,
    term: "Renews monthly",
  };
}

function hostingFeatures(tier) {
  if (tier.key === "basic") {
    return [
      "1 JavaScript website",
      "Node + React runtime",
      "25 GB NVMe storage",
      "Custom domain + SSL",
      "Daily backups",
      "Global CDN",
      "Git-based deploys",
      "30-day money-back guarantee",
    ];
  }

  if (tier.key === "plus") {
    return [
      "3 JavaScript websites",
      "Node + React runtime",
      "50 GB NVMe storage",
      "Custom domain + SSL",
      "Daily backups",
      "Up to 2x faster performance with CDN",
      "Staging site",
      "Security monitoring",
      "Git-based deploys",
      "30-day money-back guarantee",
    ];
  }

  if (tier.key === "pro") {
    return [
      "5 JavaScript websites",
      "Node + React runtime",
      "100 GB NVMe storage",
      "Custom domain + SSL",
      "Daily backups",
      "Up to 2x faster performance with CDN",
      "Staging site",
      "Enhanced security with DDoS protection",
      "Priority support",
      "Application monitoring",
      "Git-based deploys",
    ];
  }

  return [
    "Up to 10 JavaScript websites",
    "Node + React runtime",
    "200 GB NVMe storage",
    "Custom domains + SSL",
    "Daily backups",
    "Up to 2x faster performance with CDN",
    "Staging sites",
    "Enhanced security with DDoS protection",
    "Priority support",
    "Application monitoring",
    "Global data centers",
    "Git-based deploys",
  ];
}

const appTierFeatures = {
  acquire: {
    free: ["1 user workspace", "Basic contact management", "Pipeline visibility", "Esteemed Cloud account"],
    starter: ["Client and talent CRM", "Pipeline stages and follow-ups", "Email-ready workflows", "Core reporting"],
    pro: ["Everything in Starter", "Star Assist AI with human approval", "Advanced segmentation", "Priority product support"],
    enterprise: ["Custom seats and controls", "Enterprise onboarding", "Advanced security review", "Custom workflow design"],
  },
  hire: {
    free: ["1 user workspace", "Basic job and candidate tracking", "Candidate notes", "Esteemed Cloud account"],
    starter: ["Applicant tracking pipeline", "Job and candidate records", "Team hiring workflow", "Core reporting"],
    pro: ["Everything in Starter", "AI candidate matching", "Colleagues and Intelligence powered insights", "Priority product support"],
    enterprise: ["Custom hiring workflows", "Enterprise onboarding", "Security and compliance review", "Custom integrations"],
  },
  suite: {
    bundle: ["Acquire Pro included", "Hire Pro included", "Shared workspace and account model", suiteProduct.tiers[0].savings],
  },
};

const promoDiscounts = {
  cloud: {
    basic: 0.5,
    plus: 0.45,
    pro: 0.45,
    multi: 0.4,
  },
  managed: {
    essential: 0.5,
    growth: 0.45,
    business: 0.4,
  },
  curate: {
    starter: 0.5,
    pro: 0.4,
  },
  acquire: {
    starter: 0.4,
    pro: 0.4,
  },
  hire: {
    starter: 0.4,
    pro: 0.4,
  },
  suite: {
    bundle: 0.4,
  },
};

const modernHostingPromos = {
  basic: { amount: 9.99, regular: 19.99, savePercent: 50, term: "For first 3-yr term" },
  plus: { amount: 14.99, regular: 29.99, savePercent: 50, term: "For first 3-yr term" },
  pro: { amount: 19.99, regular: 34.99, savePercent: 43, term: "For first 3-yr term" },
  multi: { amount: 39.99, regular: 66.99, savePercent: 40, term: "For first 3-yr term" },
};

const cmsHostingTiers = [
  {
    key: "cms-basic",
    name: "Hosting for WordPress & Drupal Basic",
    monthly: 6.99,
    description: "Best for hosting simple CMS websites.",
    promo: { amount: 6.99, regular: 14.99, savePercent: 53, term: "For first 1-yr term" },
    features: [
      "1 website",
      "10 GB NVMe storage",
      "WordPress or Drupal",
      "Admin dashboard included",
      "Free SSL Certificate",
      "Weekly backups",
      "Core update support",
      "AI content assistant ready",
      "Automated malware scans and removal",
      "30-day money-back guarantee",
    ],
  },
  {
    key: "cms-deluxe",
    name: "Hosting for WordPress & Drupal Deluxe",
    monthly: 10.99,
    description: "Ideal as you grow, with upgraded resources.",
    recommended: true,
    promo: { amount: 10.99, regular: 19.99, savePercent: 45, term: "For first 1-yr term" },
    features: [
      "1 website (add up to 99 sites)",
      "20 GB NVMe storage",
      "WordPress or Drupal",
      "Admin dashboard included",
      "Free SSL Certificate",
      "Daily backups",
      "Core update support",
      "Up to 2x faster performance with CDN",
      "Enhanced security with DDoS protection",
      "Staging site",
      "30-day money-back guarantee",
    ],
  },
  {
    key: "cms-ultimate",
    name: "Hosting for WordPress & Drupal Ultimate",
    monthly: 14.99,
    description: "Our best single-site CMS plan. Plus, sell online.",
    promo: { amount: 14.99, regular: 26.99, savePercent: 44, term: "For first 1-yr term" },
    features: [
      "1 website (add up to 99 sites)",
      "30 GB NVMe storage",
      "WordPress or Drupal",
      "Admin dashboard included",
      "Free SSL Certificate",
      "Daily backups",
      "Core update support",
      "Up to 2x faster performance with CDN",
      "Enhanced security with DDoS protection",
      "Staging site",
      "SEO optimizer",
      "WooCommerce or Drupal Commerce ready",
      "Priority Support",
      "PHP version control",
      "Application monitoring",
      "Git integration",
    ],
  },
];

function PricingCard({
  tier,
  annual,
  ctaHref = "/signup",
  ctaLabel = "Buy Now",
  features,
  eyebrow,
  recommended = false,
  introTerm,
  preferredIntro,
  discountRate,
  promo,
}) {
  const highlighted = recommended || tier.recommended;
  const contact = tier.monthly === null;
  const intro = introPrice(tier, annual, preferredIntro, discountRate, promo);
  const savePercent = intro?.savePercent ?? (intro?.regular && intro.amount < intro.regular ? Math.round((1 - intro.amount / intro.regular) * 100) : null);

  return (
    <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm ${highlighted ? "border-accent ring-4 ring-accent/25" : "border-zinc-200"}`}>
      {highlighted && (
        <div className="absolute inset-x-0 top-0 rounded-t-2xl bg-accent px-7 py-3 text-xs font-black uppercase tracking-wide text-ink">
          Recommended
        </div>
      )}
      <div className={highlighted ? "pt-8" : ""}>
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-wide text-zinc-500">{eyebrow}</p>}
        <h3 className="text-2xl font-black text-ink">{tier.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{tier.description || tier.basis}</p>
        {tier.monthly === null || tier.monthly === 0 ? (
          <div className="mt-5">
            <span className="text-4xl font-black text-ink">{priceLabel(tier, annual)}</span>
          </div>
        ) : (
          <div className="mt-5">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {savePercent && <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-black text-ink">SAVE {savePercent}%</span>}
              {intro?.regular && <span className="text-sm font-semibold text-zinc-500 line-through">{formatMoney(intro.regular)}</span>}
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-black text-ink">{formatMoney(intro.amount)}</span>
              <span className="pb-1 text-sm font-bold text-zinc-700">/mo</span>
            </div>
            <p className="mt-1 text-xs font-semibold text-zinc-700">{introTerm || intro.term}</p>
            {intro?.regular && (
              <p className="mt-1 text-xs text-zinc-500">Renews at {formatMoney(intro.regular)}/mo after the intro term.</p>
            )}
          </div>
        )}
      </div>

      <Link
        href={contact ? "/contact" : ctaHref}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white transition-colors hover:bg-zinc-800"
      >
        {contact ? "Contact Sales" : ctaLabel}
      </Link>

      <ul className="mt-6 space-y-3">
        {(features || tier.features || []).map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-5 text-zinc-700">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-zinc-200">
              <Check className="h-4 w-4 text-ink" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProductMark({ src, alt = "", className = "h-10 w-10" }) {
  return <img src={src} alt={alt} className={`${className} rounded-md object-contain`} />;
}

function ProductPricingTab({ product, annual }) {
  return (
    <div>
      <CategoryIntro
        icon={Briefcase}
        iconSrc={productIcons[product.key]}
        title={`Esteemed ${product.name}`}
        description={product.description}
      >
        <Link href={`/products/${product.key}`} className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">
          Product details <ArrowRight className="h-4 w-4" />
        </Link>
      </CategoryIntro>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {product.tiers.map((tier) => (
          <PricingCard
            key={tier.key}
            tier={tier}
            annual={annual}
            ctaHref={`/signup?product=${product.key}&tier=${tier.key}`}
            ctaLabel={`Start ${product.name}`}
            features={appTierFeatures[product.key]?.[tier.key]}
            discountRate={promoDiscounts[product.key]?.[tier.key]}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryIntro({ icon: Icon, iconSrc, title, description, children }) {
  return (
    <div className="mb-8 grid gap-5 rounded-2xl bg-zinc-50 p-6 md:grid-cols-[1fr_auto] md:items-center">
      <div className="flex gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-sm">
          {iconSrc ? <ProductMark src={iconSrc} className="h-9 w-9" /> : <Icon className="h-6 w-6" />}
        </span>
        <div>
          <h2 className="text-2xl font-black text-ink md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-3xl leading-7 text-zinc-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="divide-y divide-zinc-200">
      {items.map((item, i) => (
        <div key={item.q}>
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left">
            <span className="pr-8 text-lg font-semibold text-ink">{item.q}</span>
            <ChevronDown className={`h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          {openIndex === i && <p className="pb-6 leading-relaxed text-zinc-600">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [activeCategory, setActiveCategory] = useState("modern");
  const [activeApp, setActiveApp] = useState("acquire");

  const modernHosting = useMemo(
    () =>
      cloudTiers.map((tier) => ({
        ...tier,
        name:
          {
            basic: "Modern Hosting Economy",
            plus: "Modern Hosting Deluxe",
            pro: "Modern Hosting Ultimate",
            multi: "Modern Hosting Multi-Site",
          }[tier.key] || tier.name.replace("Cloud", "Modern"),
        description:
          tier.key === "basic"
            ? "Standard Modern hosting for one Node + React site."
            : tier.description.replace("site", "Node + React site"),
      })),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 pb-14 pt-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-zinc-500">Esteemed pricing</p>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight text-ink md:text-6xl">Choose your best hosting solution</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Start with Standard Modern hosting for JavaScript sites, keep existing WordPress and Drupal properties managed, or migrate into Curate when you are ready.
          </p>
          <div className="mt-9 inline-flex items-center rounded-full border-2 border-zinc-200 bg-white p-1">
            <button onClick={() => setAnnual(false)} className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${!annual ? "bg-ink text-white" : "text-zinc-500"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-colors ${annual ? "bg-ink text-white" : "text-zinc-500"}`}>
              Yearly <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-black text-ink">2 months free</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Tabs
            aria-label="Pricing categories"
            selectedKey={activeCategory}
            onSelectionChange={(key) => setActiveCategory(String(key))}
            classNames={{
              base: "w-full justify-center",
              tabList: "mx-auto mb-10 w-full max-w-5xl gap-0 rounded-full border border-zinc-200 bg-white p-1 shadow-sm",
              cursor: "hidden",
              tab: "h-auto min-h-16 flex-1 rounded-full px-4 py-3 data-[selected=true]:bg-ink",
              tabContent: "text-zinc-800 group-data-[selected=true]:text-white",
              panel: "outline-none",
            }}
            color="default"
          >
            <Tab
              key="modern"
              title={
                <div className="text-center">
                  <p className="text-base font-black">Modern JavaScript Hosting</p>
                  <p className="hidden text-sm opacity-80 md:block">Node + React, faster and more flexible</p>
                </div>
              }
            >
              <CategoryIntro
                icon={Code2}
                iconSrc={productIcons.cloud}
                title="Standard Modern hosting"
                description="Our default hosting path is JavaScript first: Node + React sites with faster delivery, cleaner deployments, and more flexibility than traditional PHP-only hosting."
              >
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">
                  Talk to hosting
                </Link>
              </CategoryIntro>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {modernHosting.map((tier) => (
                  <PricingCard
                    key={tier.key}
                    tier={tier}
                    annual={annual}
                    ctaHref="/signup?product=cloud"
                    features={hostingFeatures(tier)}
                    recommended={tier.key === "plus"}
                    introTerm="For first 3-yr term"
                    promo={modernHostingPromos[tier.key]}
                  />
                ))}
              </div>
            </Tab>

            <Tab
              key="cms"
              title={
                <div className="text-center">
                  <p className="text-base font-black">WordPress & Drupal</p>
                  <p className="hidden text-sm opacity-80 md:block">Managed hosting for CMS sites</p>
                </div>
              }
            >
              <CategoryIntro
                icon={ShieldCheck}
                title="Hosting for WordPress & Drupal"
                description="Keep existing WordPress and Drupal sites stable while Esteemed handles updates, backups, monitoring, security, and support. Modern JavaScript hosting remains our standard path for new builds."
              >
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white hover:bg-zinc-800">
                  Contact Sales
                </Link>
              </CategoryIntro>
              <div className="grid gap-6 md:grid-cols-3">
                {cmsHostingTiers.map((tier) => (
                  <PricingCard
                    key={tier.key}
                    tier={tier}
                    annual={annual}
                    ctaHref="/contact"
                    ctaLabel="Buy Now"
                    features={tier.features}
                    recommended={tier.recommended}
                    introTerm={tier.promo.term}
                    promo={tier.promo}
                  />
                ))}
              </div>
            </Tab>

            <Tab
              key="curate"
              title={
                <div className="text-center">
                  <p className="text-base font-black">Esteemed Curate</p>
                  <p className="hidden text-sm opacity-80 md:block">AI RAG-native content hub</p>
                </div>
              }
            >
              <CategoryIntro
                icon={Database}
                iconSrc={productIcons.curate}
                title="Esteemed Curate subscriptions"
                description="Esteemed Curate is our managed CMS and AI RAG-native content hub. It makes your content conversational, so agents and customer-facing AI can retrieve, reason over, and answer from approved knowledge."
              >
                <Link href="/migrate" className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">
                  Migration options <ArrowRight className="h-4 w-4" />
                </Link>
              </CategoryIntro>
              <div className="grid gap-6 md:grid-cols-3">
                {curateTiers.map((tier) => (
                  <PricingCard
                    key={tier.key}
                    tier={tier}
                    annual={annual}
                    ctaHref="/signup?product=curate"
                    discountRate={promoDiscounts.curate[tier.key]}
                  />
                ))}
              </div>

              <div className="mt-12">
                <CategoryIntro
                  icon={Rocket}
                  title="Migration to Esteemed Curate"
                  description="Paid migrations move WordPress, Drupal, legacy CMS, and custom sites into Esteemed Curate so content becomes structured, searchable, and ready for conversational AI. Enterprise work starts with discovery."
                />
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {migrationPackages.map((pkg) => (
                    <article key={pkg.key} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                      <p className="text-xs font-black uppercase tracking-wide text-zinc-500">{pkg.type}</p>
                      <h3 className="mt-2 text-lg font-black text-ink">{pkg.name}</h3>
                      <p className="mt-3 text-3xl font-black text-ink">{pkg.priceDisplay}</p>
                      <p className="mt-4 text-sm leading-6 text-zinc-600">{pkg.scope}</p>
                      <Link href="/contact" className="mt-5 inline-flex items-center text-sm font-black text-ink underline underline-offset-4">
                        {pkg.key === "care" ? "Start care" : "Contact Sales"}
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </Tab>

            <Tab
              key="apps"
              title={
                <div className="text-center">
                  <p className="text-base font-black">Apps & AI</p>
                  <p className="hidden text-sm opacity-80 md:block">Acquire, Hire, Intelligence, Agents</p>
                </div>
              }
            >
              <CategoryIntro
                icon={Briefcase}
                title="Apps and AI products"
                description="Acquire, Hire, Suite, Intelligence, and Agents remain independent products. Use the sub-tabs to compare full pricing tiers for each app."
              />
              <Tabs
                aria-label="App pricing"
                selectedKey={activeApp}
                onSelectionChange={(key) => setActiveApp(String(key))}
                classNames={{
                  base: "mb-8 w-full justify-center",
                  tabList: "mx-auto w-full max-w-2xl gap-2 rounded-xl bg-zinc-100 p-1",
                  cursor: "hidden",
                  tab: "h-11 flex-1 rounded-lg px-4 data-[selected=true]:bg-white data-[selected=true]:shadow-sm",
                  tabContent: "font-black text-zinc-600 group-data-[selected=true]:text-ink",
                  panel: "outline-none",
                }}
              >
                {perSeatProducts.map((product) => (
                  <Tab
                    key={product.key}
                    title={
                      <span className="inline-flex items-center gap-2">
                        <ProductMark src={productIcons[product.key]} className="h-6 w-6" />
                        {product.name}
                      </span>
                    }
                  >
                    <ProductPricingTab product={product} annual={annual} />
                  </Tab>
                ))}
                <Tab
                  key="suite"
                  title={
                    <span className="inline-flex items-center gap-2">
                      <ProductMark src={productIcons.suite} className="h-6 w-6" />
                      Suite
                    </span>
                  }
                >
                  <CategoryIntro
                    icon={Briefcase}
                    iconSrc={productIcons.suite}
                    title="Esteemed Suite"
                    description={suiteProduct.description}
                  />
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <PricingCard
                      tier={suiteProduct.tiers[0]}
                      annual={annual}
                      ctaHref="/signup?product=suite"
                      ctaLabel="Start Suite"
                      eyebrow={suiteProduct.name}
                      features={appTierFeatures.suite.bundle}
                      discountRate={promoDiscounts.suite.bundle}
                      recommended
                    />
                    <article className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm xl:col-span-2">
                      <h3 className="text-2xl font-black text-ink">What the bundle replaces</h3>
                      <p className="mt-2 leading-7 text-zinc-600">
                        Suite is for teams that need client acquisition and hiring operations in one account. It combines the Pro tiers of Acquire and Hire with shared account structure and a lower seat price than buying both separately.
                      </p>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {["Acquire Pro CRM/TRM", "Hire Pro ATS", "Shared user and account model", "Founding pricing available"].map((feature) => (
                          <div key={feature} className="flex gap-3 rounded-xl border border-zinc-200 p-4 text-sm font-semibold text-zinc-700">
                            <Check className="h-5 w-5 flex-shrink-0 text-ink" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </article>
                  </div>
                </Tab>
              </Tabs>

              <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <article className="rounded-2xl bg-ink p-7 text-white">
                  <ProductMark src={productIcons.intelligence} className="mb-4 h-10 w-10" />
                  <h3 className="text-3xl font-black">{intelligenceProduct.name}</h3>
                  <p className="mt-3 text-zinc-300">{intelligenceProduct.description}</p>
                  <p className="mt-6 text-4xl font-black">{priceLabel(intelligenceProduct.tiers[0], annual)}</p>
                  <p className="mt-2 text-sm font-semibold text-accent">Flat per tenant add-on</p>
                </article>
                <article className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <Bot className="h-6 w-6 text-ink" />
                    <div>
                      <h3 className="text-3xl font-black text-ink">Agents</h3>
                      <p className="text-zinc-600">Standalone SKUs are launch-gated. Curate Pro includes content agents through entitlements.</p>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {agents.map((agent) => {
                      const AgentIcon = agent.icon;
                      return (
                        <div key={agent.key} className="rounded-xl border border-zinc-200 p-4">
                          <AgentIcon className="mb-3 h-5 w-5 text-ink" />
                          <p className="font-black text-ink">{agent.name}</p>
                          <p className="text-sm font-semibold text-ink">{formatMoney(agent.price)}/mo</p>
                          <p className="mt-2 text-xs text-zinc-600">{agent.tagline}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-5 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700">
                    {agentFleet.name}: from {formatMoney(agentFleet.price)}/mo for non-Curate deployments.
                  </p>
                </article>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Cloud className="h-6 w-6 text-ink" />
              <h2 className="text-3xl font-black text-ink">Which hosting path fits?</h2>
            </div>
            <p className="leading-7 text-zinc-600">
              Choose Standard Modern hosting for new JavaScript sites, WordPress & Drupal managed hosting for existing CMS properties, and Curate when the content model needs workflow, agents, or migration support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white hover:bg-zinc-800">
                Contact Sales
              </Link>
              <Link href="/products/cloud" className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">
                Hosting details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Modern", "Node + React", "Fast, flexible, and clean for new builds.", Code2],
              ["CMS", "WordPress & Drupal", "Managed updates, backups, security, and support.", ShieldCheck],
              ["Curate", "AI RAG-native CMS", "Best for structured content, conversational AI, and migration projects.", Headphones],
            ].map(([label, title, copy, Icon]) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Icon className="mb-4 h-6 w-6 text-ink" />
                <p className="text-xs font-black uppercase tracking-wide text-zinc-500">{label}</p>
                <h3 className="mt-1 font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3 text-center">
            <Sparkles className="h-6 w-6 text-ink" />
            <h2 className="text-3xl font-black text-ink">Frequently Asked Questions</h2>
          </div>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">Ready to build something Esteemed?</h2>
        <p className="mb-8 text-zinc-400">Start with hosting, Curate, migration, or the app suite that fits.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-black text-ink hover:bg-accent-hover">
          Contact Sales <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
