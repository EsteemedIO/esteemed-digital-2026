"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Briefcase, Brain, Cloud, Database, Rocket, Sparkles, Bot, ArrowRight } from "lucide-react";
import {
  perSeatProducts,
  suiteProduct,
  intelligenceProduct,
  curateTiers,
  cloudTiers,
  managedHostingTiers,
  migrationPackages,
  agents,
  agentFleet,
  pricingFAQ,
} from "@/lib/data";

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

function Card({ children, highlighted = false }) {
  return (
    <div className={`flex h-full flex-col rounded-2xl p-6 ${highlighted ? "bg-ink text-white ring-2 ring-accent" : "border border-zinc-200 bg-white"}`}>
      {children}
    </div>
  );
}

function TierCard({ tier, annual, ctaHref = "/signup" }) {
  const highlighted = tier.recommended;
  return (
    <Card highlighted={highlighted}>
      {highlighted && <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">Recommended</span>}
      <h3 className={`text-lg font-bold ${highlighted ? "text-white" : "text-ink"}`}>{tier.name}</h3>
      <p className={`mt-1 text-sm ${highlighted ? "text-zinc-300" : "text-zinc-500"}`}>{tier.basis}</p>
      <div className="mt-4">
        <span className="text-3xl font-bold">{priceLabel(tier, annual)}</span>
      </div>
      {tier.founding && (
        <p className={`mt-2 text-sm ${highlighted ? "text-accent" : "text-ink"}`}>
          Founding: {formatMoney(tier.founding)}/mo for 12 months
        </p>
      )}
      {tier.savings && <p className={`mt-2 text-sm ${highlighted ? "text-accent" : "text-zinc-600"}`}>{tier.savings}</p>}
      {tier.features && (
        <ul className="mt-5 space-y-2">
          {tier.features.map((feature) => (
            <li key={feature} className={`flex gap-2 text-sm ${highlighted ? "text-zinc-300" : "text-zinc-600"}`}>
              <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${highlighted ? "text-accent" : "text-ink"}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={tier.monthly === null ? "/contact" : ctaHref}
        className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors ${highlighted ? "bg-accent text-ink hover:bg-accent-hover" : "border-2 border-ink text-ink hover:bg-ink hover:text-white"}`}
      >
        {tier.monthly === null ? "Contact sales" : "Get started"}
      </Link>
    </Card>
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

  return (
    <main className="min-h-screen">
      <section className="px-6 pb-12 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">Pricing catalog v2</p>
          <h1 className="mb-4 text-5xl font-bold text-ink md:text-6xl">Transparent pricing for the Esteemed platform.</h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600">
            Acquire, Hire, Curate, Cloud, Migration, Intelligence, and Agents are independent offerings. Buy what you need and compose from there.
          </p>
          <div className="inline-flex items-center rounded-full border-2 border-zinc-200 p-1">
            <button onClick={() => setAnnual(false)} className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${!annual ? "bg-ink text-white" : "text-zinc-500"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${annual ? "bg-ink text-white" : "text-zinc-500"}`}>
              Yearly <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-ink">2 months free</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-ink" />
            <div>
              <h2 className="text-3xl font-bold text-ink">Acquire, Hire, and Suite</h2>
              <p className="text-zinc-600">Per actual user, not company headcount. Pro includes Star Assist AI with human approval.</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {perSeatProducts.map((product) => (
              <Card key={product.key}>
                <h3 className="text-xl font-bold text-ink">{product.name}</h3>
                <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
                <div className="mt-6 grid gap-3">
                  {product.tiers.map((tier) => (
                    <div key={tier.key} className={`rounded-xl border p-4 ${tier.recommended ? "border-accent bg-accent/20" : "border-zinc-200"}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-ink">{tier.name}</p>
                          <p className="text-xs text-zinc-500">{tier.basis}</p>
                        </div>
                        <p className="text-right font-bold text-ink">{priceLabel(tier, annual)}</p>
                      </div>
                      {tier.founding && <p className="mt-2 text-xs font-medium text-zinc-600">Founding {formatMoney(tier.founding)}/seat/mo for 12 months</p>}
                    </div>
                  ))}
                </div>
                <Link href={`/products/${product.key}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink underline underline-offset-4">
                  View {product.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
            <Card highlighted>
              <h3 className="text-xl font-bold text-white">{suiteProduct.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{suiteProduct.description}</p>
              <div className="mt-6 rounded-xl border border-accent/40 bg-white/5 p-4">
                <p className="text-sm text-zinc-300">{suiteProduct.tiers[0].basis}</p>
                <p className="mt-1 text-3xl font-bold">{priceLabel(suiteProduct.tiers[0], annual)}</p>
                <p className="mt-2 text-sm text-accent">{suiteProduct.tiers[0].savings}</p>
                <p className="mt-1 text-sm text-zinc-300">Founding {formatMoney(suiteProduct.tiers[0].founding)}/seat/mo for 12 months</p>
              </div>
              <Link href="/signup" className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-ink hover:bg-accent-hover">Start Suite</Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Database className="h-6 w-6 text-ink" />
            <div>
              <h2 className="text-3xl font-bold text-ink">Curate</h2>
              <p className="text-zinc-600">Per-workspace CMS and content hub. Curate includes hosting for Curate sites.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {curateTiers.map((tier) => <TierCard key={tier.key} tier={tier} annual={annual} ctaHref="/signup?product=curate" />)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Cloud className="h-6 w-6 text-ink" />
            <div>
              <h2 className="text-3xl font-bold text-ink">Esteemed Cloud Hosting</h2>
              <p className="text-zinc-600">Standalone Hosting is for non-Curate sites: bring-your-own, Create-built, React, Node, or Next.</p>
            </div>
          </div>
          <h3 className="mb-4 text-xl font-bold text-ink">Self-serve Cloud</h3>
          <div className="mb-10 grid gap-5 md:grid-cols-4">
            {cloudTiers.map((tier) => <TierCard key={tier.key} tier={tier} annual={annual} />)}
          </div>
          <h3 className="mb-4 text-xl font-bold text-ink">Managed Hosting</h3>
          <div className="grid gap-5 md:grid-cols-4">
            {managedHostingTiers.map((tier) => (
              <TierCard
                key={tier.key}
                tier={{ ...tier, basis: tier.supportHours ? `1 site, ${tier.supportHours} support hrs/mo` : "custom" }}
                annual={annual}
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            Managed Hosting can include a $0 Create rebuild with a 12-month term. That rebuild is a plain React/Node/Next site, not a Curate migration.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Rocket className="h-6 w-6 text-ink" />
            <div>
              <h2 className="text-3xl font-bold text-ink">Migration to Curate</h2>
              <p className="text-zinc-600">One-time migration services. Paid migrations land on a Curate subscription.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {migrationPackages.map((pkg) => (
              <Card key={pkg.key}>
                <h3 className="text-lg font-bold text-ink">{pkg.name}</h3>
                <p className="mt-3 text-3xl font-bold text-ink">{pkg.priceDisplay}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{pkg.type}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{pkg.scope}</p>
              </Card>
            ))}
          </div>
          <Link href="/migrate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink hover:bg-accent-hover">
            Learn about migration <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card highlighted>
            <Brain className="mb-4 h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-white">{intelligenceProduct.name}</h2>
            <p className="mt-3 text-zinc-300">{intelligenceProduct.description}</p>
            <p className="mt-6 text-4xl font-bold">{priceLabel(intelligenceProduct.tiers[0], annual)}</p>
            <p className="mt-2 text-sm text-accent">Flat per tenant add-on</p>
          </Card>
          <Card>
            <div className="mb-5 flex items-center gap-3">
              <Bot className="h-6 w-6 text-ink" />
              <div>
                <h2 className="text-3xl font-bold text-ink">Agents</h2>
                <p className="text-zinc-600">Standalone SKUs are launch-gated. Curate Pro includes content agents through entitlements.</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {agents.map((agent) => (
                <div key={agent.key} className="rounded-xl border border-zinc-200 p-4">
                  <agent.icon className="mb-3 h-5 w-5 text-ink" />
                  <p className="font-bold text-ink">{agent.name}</p>
                  <p className="text-sm font-semibold text-ink">{formatMoney(agent.price)}/mo</p>
                  <p className="mt-2 text-xs text-zinc-600">{agent.tagline}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700">
              {agentFleet.name}: from {formatMoney(agentFleet.price)}/mo for non-Curate deployments.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-center gap-3 text-center">
            <Sparkles className="h-6 w-6 text-ink" />
            <h2 className="text-3xl font-bold text-ink">Frequently Asked Questions</h2>
          </div>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to build something Esteemed?</h2>
        <p className="mb-8 text-zinc-400">Start with the app, CMS, hosting, or migration path that fits.</p>
        <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink hover:bg-accent-hover">
          Get started <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
