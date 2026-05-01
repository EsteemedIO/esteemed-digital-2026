"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import {
  createTiers,
  creditPacks,
  agents,
  agentFleet,
  agentsPlus,
  customAgents,
  supportTiers,
  cloudTiers,
  pricingFAQ,
} from "@/lib/data";

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-zinc-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-6 text-left"
          >
            <span className="text-lg font-semibold text-ink pr-8">{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>
          {openIndex === i && (
            <p className="pb-6 text-zinc-600 leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">Pricing</h1>
          <p className="text-lg text-zinc-600">Start free. Scale as you grow.</p>

          {/* Monthly / Yearly toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${!annual ? "bg-ink text-paper" : "text-zinc-500 hover:text-ink"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${annual ? "bg-ink text-paper" : "text-zinc-500 hover:text-ink"}`}
            >
              Yearly
              <span className="text-xs bg-accent text-ink px-2 py-0.5 rounded-full font-bold">Save</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. Create Pricing — Tier Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-3 text-center">Esteemed Create</h2>
          <p className="text-zinc-600 mb-10 text-center max-w-2xl mx-auto">
            AI-powered building with Studio IDE. Every paid plan includes Colleagues marketplace access, agent upgrades, and hosting at publish.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {createTiers.map((tier) => {
              const price = annual ? tier.annual : tier.monthly;
              return (
                <div
                  key={tier.key}
                  className={`rounded-2xl border p-6 flex flex-col relative transition-shadow hover:shadow-lg ${
                    tier.recommended ? "border-accent" : "border-zinc-200"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-sm font-medium text-zinc-500">{tier.name}</h3>
                  <div className="mt-1 mb-1">
                    {price === null ? (
                      <span className="text-2xl font-bold text-ink">Custom</span>
                    ) : price === 0 ? (
                      <span className="text-3xl font-bold text-ink">Free</span>
                    ) : (
                      <>
                        {annual && tier.monthly > 0 && (
                          <span className="text-sm text-zinc-400 line-through mr-2">${tier.monthly}</span>
                        )}
                        <span className="text-3xl font-bold text-ink">${price}</span>
                        <span className="text-zinc-500 text-sm">/mo</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{tier.credits}</p>
                  <p className="text-sm text-zinc-600 mb-4 mt-2">{tier.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <Check className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                      tier.ctaStyle === "primary"
                        ? "bg-accent text-ink hover:bg-accent-hover"
                        : "border-2 border-ink text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credit Packs */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold text-ink mb-2 text-center">Need more credits?</h3>
          <p className="text-zinc-600 mb-6 text-center text-sm">Buy credit packs any time. No subscription required.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {creditPacks.map((pack) => (
              <div key={pack.credits} className="rounded-2xl border border-zinc-200 p-6 text-center">
                <p className="text-2xl font-bold text-ink">{pack.credits} credits</p>
                <p className="text-lg font-bold text-ink mt-1">${pack.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-20 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold text-ink mb-6 text-center">What&apos;s included in every paid plan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {[
              "Studio IDE",
              "Colleagues marketplace access",
              "Agent upgrades",
              "Hosting at publish",
              "SSL included",
              "Export your data any time",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                <Check className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Agents */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-3">Agents</h2>
          <p className="text-zinc-600 mb-10">Add AI agents to any paid plan. Each agent works in your voice.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {agents.map((agent) => (
              <div key={agent.key} className="rounded-2xl border border-zinc-200 p-6">
                <agent.icon className="w-6 h-6 text-ink mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-ink mb-1">{agent.name}</h3>
                <p className="text-2xl font-bold text-ink mb-2">
                  +${agent.price}<span className="text-sm text-zinc-500 font-normal">/mo</span>
                </p>
                <p className="text-sm text-zinc-600">{agent.tagline}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-accent p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{agentFleet.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">
                +${agentFleet.price}<span className="text-sm text-zinc-500 font-normal">/mo</span>
              </p>
              <p className="text-sm text-zinc-600">All four agents. Save ${agentFleet.savings}/mo vs a la carte.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{customAgents.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">{customAgents.priceDisplay}</p>
              <p className="text-sm text-zinc-600">{customAgents.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Agents+ */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-ink mb-2">{agentsPlus.name}</h2>
            <p className="text-3xl font-bold text-ink mb-3">
              +${agentsPlus.price}<span className="text-sm text-zinc-500 font-normal">/mo</span>
            </p>
            <p className="text-zinc-600 max-w-lg mx-auto">{agentsPlus.description}</p>
          </div>
        </div>
      </section>

      {/* 4. Colleagues */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">Colleagues</h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Access our marketplace of 35,000 vetted professionals. Designers, developers, strategists, and specialists ready to help you build, launch, and grow.
          </p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
          >
            Explore Colleagues &rarr;
          </Link>
        </div>
      </section>

      {/* 5. Support */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-3">Support</h2>
          <p className="text-zinc-600 mb-10">Every plan includes support. Upgrade for faster response times and dedicated help.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-4 pr-4 font-semibold text-ink">Tier</th>
                  <th className="text-left py-4 px-4 font-semibold text-ink">What you get</th>
                  <th className="text-right py-4 pl-4 font-semibold text-ink">Price</th>
                </tr>
              </thead>
              <tbody>
                {supportTiers.map((tier) => (
                  <tr key={tier.key} className="border-b border-zinc-100">
                    <td className="py-4 pr-4 font-medium text-ink">{tier.name}</td>
                    <td className="py-4 px-4 text-zinc-600">{tier.description}</td>
                    <td className="py-4 pl-4 text-right font-medium text-ink">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-500 mt-6">
            Specialty work (custom development, integrations, migrations) is scoped and quoted separately.
          </p>
        </div>
      </section>

      {/* 6. Cloud */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-3">Cloud</h2>
          <p className="text-zinc-600 mb-10">Already have a site? Host it here.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudTiers.map((tier) => {
              const price = tier.annual === null ? null : annual ? tier.annual : tier.monthly;
              return (
                <div key={tier.key} className="rounded-2xl border border-zinc-200 p-6">
                  <h3 className="font-bold text-ink mb-1">{tier.name}</h3>
                  <div className="mb-3">
                    {price === null ? (
                      <span className="text-2xl font-bold text-ink">Custom</span>
                    ) : (
                      <>
                        {tier.fromPrice && <span className="text-sm text-zinc-500">From </span>}
                        {annual && tier.monthly && !tier.fromPrice && (
                          <span className="text-sm text-zinc-400 line-through mr-2">${tier.monthly}</span>
                        )}
                        <span className="text-2xl font-bold text-ink">${price}</span>
                        <span className="text-zinc-500 text-sm">/mo</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-zinc-600">{tier.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4 text-center">Frequently asked questions</h2>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something Esteemed?</h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start building free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
