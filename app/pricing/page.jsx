"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Tab, Tabs } from "@heroui/react";
import { ArrowRight, Check, ChevronDown, Cloud, Code2, Server, ShieldCheck, Sparkles } from "lucide-react";
import { cloudTiers, managedHostingTiers, pricingFAQ } from "@/lib/data";
import { checkoutHref, formatMoney } from "@/lib/pricing-catalog";
import ProductIcon from "@/components/ProductIcon";

const modernPromos = {
  basic: { amount: 9.99, regular: 19.99, savePercent: 50, term: "For first 3-yr term" },
  plus: { amount: 14.99, regular: 29.99, savePercent: 50, term: "For first 3-yr term" },
  pro: { amount: 19.99, regular: 34.99, savePercent: 43, term: "For first 3-yr term" },
  multi: { amount: 39.99, regular: 66.99, savePercent: 40, term: "For first 3-yr term" },
};

const cmsTiers = [
  {
    key: "cms-basic",
    name: "Hosting for WordPress & Drupal Basic",
    monthly: 6.99,
    promo: { amount: 6.99, regular: 14.99, savePercent: 53, term: "For first 1-yr term" },
    description: "Best for hosting simple CMS websites.",
    features: ["1 website", "10 GB NVMe storage", "WordPress or Drupal", "Admin dashboard included", "Free SSL Certificate", "Weekly backups", "Core update support", "Automated malware scans and removal"],
  },
  {
    key: "cms-deluxe",
    name: "Hosting for WordPress & Drupal Deluxe",
    monthly: 10.99,
    promo: { amount: 10.99, regular: 19.99, savePercent: 45, term: "For first 1-yr term" },
    description: "Ideal as you grow, with upgraded resources.",
    recommended: true,
    features: ["1 website (add up to 99 sites)", "20 GB NVMe storage", "WordPress or Drupal", "Free SSL Certificate", "Daily backups", "Core update support", "Up to 2x faster performance with CDN", "Enhanced security with DDoS protection", "Staging site"],
  },
  {
    key: "cms-ultimate",
    name: "Hosting for WordPress & Drupal Ultimate",
    monthly: 14.99,
    promo: { amount: 14.99, regular: 26.99, savePercent: 44, term: "For first 1-yr term" },
    description: "Our best single-site CMS plan. Plus, sell online.",
    features: ["1 website (add up to 99 sites)", "30 GB NVMe storage", "WordPress or Drupal", "Free SSL Certificate", "Daily backups", "SEO optimizer", "WooCommerce or Drupal Commerce ready", "Priority Support", "PHP version control", "Git integration"],
  },
];

function cloudFeatures(tier) {
  const common = ["Custom domain + SSL", "Daily backups", "Global CDN", "Git-based deploys", "30-day money-back guarantee"];
  if (tier.key === "basic") return ["1 JavaScript website", "Node + React runtime", "25 GB NVMe storage", ...common];
  if (tier.key === "plus") return ["3 JavaScript websites", "Node + React runtime", "50 GB NVMe storage", "Staging site", "Security monitoring", ...common];
  if (tier.key === "pro") return ["5 JavaScript websites", "Node + React runtime", "100 GB NVMe storage", "Priority support", "Application monitoring", "Enhanced security with DDoS protection", ...common];
  return ["Up to 10 JavaScript websites", "Node + React runtime", "200 GB NVMe storage", "Staging sites", "Priority support", "Application monitoring", ...common];
}

function managedFeatures(tier) {
  if (tier.monthly === null) {
    return ["Multi-site hosting", "Dedicated infrastructure", "Custom SLA", "Custom support model"];
  }
  return ["Done-for-you hosting", "Free Create rebuild with 12-month term", `${tier.supportHours} support hrs/mo included`, "SSL, monitoring, and backups", "Support overage available"];
}

function cardPrice(tier, annual, promo) {
  if (tier.monthly === null) return { headline: "Custom", note: tier.description };
  if (promo) return { headline: formatMoney(promo.amount), regular: promo.regular, savePercent: promo.savePercent, note: promo.term, suffix: "/mo" };
  if (annual && tier.annual) return { headline: formatMoney(tier.annual / 12), note: `Billed ${formatMoney(tier.annual)}/yr`, suffix: "/mo", badge: "2 months free" };
  return { headline: formatMoney(tier.monthly), note: tier.description, suffix: "/mo" };
}

function PricingCard({ tier, annual, promo, features, ctaHref, ctaLabel = "Buy Now", recommended }) {
  const highlighted = recommended || tier.recommended;
  const contact = tier.monthly === null;
  const price = cardPrice(tier, annual, promo);

  return (
    <article className={`relative flex h-full flex-col rounded-lg border bg-white p-7 shadow-sm ${highlighted ? "border-accent ring-4 ring-accent/25" : "border-zinc-200"}`}>
      {highlighted && (
        <div className="absolute inset-x-0 top-0 rounded-t-lg bg-accent px-7 py-3 text-xs font-black uppercase tracking-wide text-ink">Recommended</div>
      )}
      <div className={highlighted ? "pt-8" : ""}>
        <h3 className="text-2xl font-black text-ink">{tier.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{tier.description}</p>
        <div className="mt-5">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {price.badge && <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-black text-ink">{price.badge}</span>}
            {price.savePercent && <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-black text-ink">SAVE {price.savePercent}%</span>}
            {price.regular && <span className="text-sm font-semibold text-zinc-500 line-through">{formatMoney(price.regular)}</span>}
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black text-ink">{price.headline}</span>
            {price.suffix && <span className="pb-1 text-sm font-bold text-zinc-700">{price.suffix}</span>}
          </div>
          {price.note && <p className="mt-1 text-xs font-semibold text-zinc-600">{price.note}</p>}
          {price.regular && <p className="mt-1 text-xs text-zinc-500">Renews at {formatMoney(price.regular)}/mo after the intro term.</p>}
        </div>
      </div>

      <Link href={contact ? "/contact" : ctaHref} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white transition-colors hover:bg-zinc-800">
        {contact ? "Contact Sales" : ctaLabel}
      </Link>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
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
  const [activeCategory, setActiveCategory] = useState("cloud");

  const modernHosting = useMemo(
    () =>
      cloudTiers.map((tier) => ({
        ...tier,
        name:
          {
            basic: "Cloud Website Economy",
            plus: "Cloud Website Deluxe",
            pro: "Cloud Website Ultimate",
            multi: "Cloud Website Multi-Site",
          }[tier.key] || tier.name,
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
          <ProductIcon product="cloud" className="mx-auto mb-5 h-14 w-14" />
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-zinc-500">Esteemed Cloud pricing</p>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight text-ink md:text-6xl">Choose your best hosting solution</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Cloud Website Hosting for Standard Modern JavaScript sites, managed WordPress and Drupal hosting for existing CMS properties, and Managed Hosting when you want us to handle the site.
          </p>
          <div className="mt-9 inline-flex items-center rounded-full border-2 border-zinc-200 bg-white p-1">
            <button onClick={() => setAnnual(false)} className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${!annual ? "bg-ink text-white" : "text-zinc-500"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-colors ${annual ? "bg-ink text-white" : "text-zinc-500"}`}>
              Annual <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-black text-ink">2 months free</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Tabs
            aria-label="Hosting pricing categories"
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
              key="cloud"
              title={
                <div className="text-center">
                  <p className="text-base font-black">Cloud Website Hosting</p>
                  <p className="hidden text-sm opacity-80 md:block">Node + React, faster and more flexible</p>
                </div>
              }
            >
              <div className="mb-8 grid gap-5 rounded-lg bg-zinc-50 p-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="flex gap-4">
                  <Code2 className="mt-1 h-8 w-8 flex-shrink-0 text-ink" />
                  <div>
                    <h2 className="text-2xl font-black text-ink md:text-3xl">Standard Modern hosting</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-zinc-600">Our default hosting path is JavaScript first: Node + React sites with faster delivery, cleaner deployments, and more flexibility than traditional PHP-only hosting.</p>
                  </div>
                </div>
                <Link href="/products/cloud" className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">Hosting details <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {modernHosting.map((tier) => (
                  <PricingCard
                    key={tier.key}
                    tier={tier}
                    annual={annual}
                    promo={!annual ? modernPromos[tier.key] : null}
                    ctaHref={checkoutHref({ lookupKey: annual ? tier.annualLookupKey : tier.lookupKey, successPath: `/thanks?product=cloud&tier=${tier.key}`, cancelPath: "/pricing" })}
                    features={cloudFeatures(tier)}
                    recommended={tier.key === "plus"}
                  />
                ))}
              </div>
            </Tab>

            <Tab
              key="cms"
              title={
                <div className="text-center">
                  <p className="text-base font-black">WordPress & Drupal</p>
                  <p className="hidden text-sm opacity-80 md:block">Managed CMS hosting</p>
                </div>
              }
            >
              <div className="mb-8 rounded-lg bg-zinc-50 p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-8 w-8 flex-shrink-0 text-ink" />
                  <div>
                    <h2 className="text-2xl font-black text-ink md:text-3xl">Hosting for WordPress & Drupal</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-zinc-600">Keep existing WordPress and Drupal sites stable while Esteemed handles updates, backups, monitoring, security, and support. Modern JavaScript hosting remains our standard path for new builds.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {cmsTiers.map((tier) => (
                  <PricingCard key={tier.key} tier={tier} annual={annual} promo={!annual ? tier.promo : null} ctaHref="/contact" ctaLabel="Contact Sales" features={tier.features} />
                ))}
              </div>
            </Tab>

            <Tab
              key="managed"
              title={
                <div className="text-center">
                  <p className="text-base font-black">Managed Hosting</p>
                  <p className="hidden text-sm opacity-80 md:block">Done-for-you with support hours</p>
                </div>
              }
            >
              <div className="mb-8 rounded-lg bg-zinc-50 p-6">
                <div className="flex gap-4">
                  <Server className="mt-1 h-8 w-8 flex-shrink-0 text-ink" />
                  <div>
                    <h2 className="text-2xl font-black text-ink md:text-3xl">Managed Hosting</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-zinc-600">Done-for-you hosting with included support hours. Managed plans can include a $0 Create rebuild with a 12-month hosting agreement.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {managedHostingTiers.map((tier) => (
                  <PricingCard
                    key={tier.key}
                    tier={tier}
                    annual={annual}
                    ctaHref={tier.monthly === null ? "/contact" : checkoutHref({ lookupKey: annual ? tier.annualLookupKey : tier.lookupKey, successPath: `/thanks?product=managed&tier=${tier.key}`, cancelPath: "/pricing" })}
                    features={managedFeatures(tier)}
                    recommended={tier.key === "growth"}
                  />
                ))}
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
            <p className="leading-7 text-zinc-600">Choose Cloud Website Hosting for new JavaScript sites, WordPress & Drupal hosting for existing CMS properties, and Managed Hosting when you want included support hours and a hands-on team.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white hover:bg-zinc-800">Contact Sales</Link>
              <Link href="/products/cloud" className="inline-flex items-center gap-2 rounded-lg border-2 border-ink px-5 py-3 text-sm font-black text-ink hover:bg-ink hover:text-white">Hosting details <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Modern", "Node + React", "Fast, flexible, and clean for new builds.", Code2],
              ["CMS", "WordPress & Drupal", "Managed updates, backups, security, and support.", ShieldCheck],
              ["Managed", "Support included", "Done-for-you hosting with monthly support hours.", Server],
            ].map(([label, title, copy, Icon]) => (
              <div key={label} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
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
        <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">Ready to host with Esteemed?</h2>
        <p className="mb-8 text-zinc-400">Start with Cloud Website Hosting or talk to us about managed hosting.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-black text-ink hover:bg-accent-hover">
          Contact Sales <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
