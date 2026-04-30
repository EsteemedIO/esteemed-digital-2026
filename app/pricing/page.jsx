"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { agents, agentSuite, customAgents, pricingFAQ } from "@/lib/data";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    description: "For exploring what's possible.",
    features: [
      "5 build credits",
      "1 project",
      "Community support",
      "Esteemed App subdomain",
    ],
    cta: "Sign up",
    recommended: false,
    ctaStyle: "secondary",
  },
  {
    name: "Starter",
    monthly: 149,
    annual: 134,
    description: "For small businesses ready to launch.",
    features: [
      "50 build credits / mo",
      "Unlimited projects",
      "Custom domain",
      "SSL, backups, monitoring",
      "1 hr managed edits / mo",
      "Basic SEO setup",
      "Email support",
    ],
    cta: "Get started",
    recommended: false,
    ctaStyle: "secondary",
  },
  {
    name: "Growth",
    monthly: 249,
    annual: 224,
    description: "For businesses replacing their agency.",
    features: [
      "150 build credits / mo",
      "Everything in Starter",
      "3 hrs managed edits / mo",
      "Quarterly review",
      "Analytics dashboard",
      "Priority support",
      "Agent add-ons available",
    ],
    cta: "Get started",
    recommended: true,
    ctaStyle: "primary",
  },
  {
    name: "Pro",
    monthly: 399,
    annual: 359,
    description: "For businesses that want their site doing real work.",
    features: [
      "Unlimited build credits",
      "Everything in Growth",
      "6 hrs managed edits / mo",
      "Monthly review",
      "A/B testing & CRO",
      "Dedicated CSM",
      "All add-ons available",
    ],
    cta: "Get started",
    recommended: false,
    ctaStyle: "secondary",
  },
];

const comparisonRows = [
  { category: "Building", features: [] },
  { feature: "Build credits / mo", values: ["5", "50", "150", "Unlimited"] },
  { feature: "Projects", values: ["1", "Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Custom domain", values: [false, true, true, true] },
  { feature: "Remove Esteemed badge", values: [false, true, true, true] },
  { category: "Hosting & Support", features: [] },
  { feature: "SSL & daily backups", values: [false, true, true, true] },
  { feature: "24/7 monitoring", values: [false, true, true, true] },
  { feature: "Managed edits / mo", values: ["—", "1 hr", "3 hrs", "6 hrs"] },
  { feature: "Priority support", values: [false, false, true, true] },
  { feature: "Dedicated CSM", values: [false, false, false, true] },
  { category: "Growth & Optimization", features: [] },
  { feature: "Basic SEO setup", values: [false, true, true, true] },
  { feature: "Analytics dashboard", values: [false, false, true, true] },
  { feature: "Quarterly review", values: [false, false, true, true] },
  { feature: "Monthly review", values: [false, false, false, true] },
  { feature: "A/B testing & CRO", values: [false, false, false, true] },
  { category: "AI Agents", features: [] },
  { feature: "Voice Agent (+$99/mo)", values: [false, false, true, true] },
  { feature: "Social Agent (+$129/mo)", values: [false, false, true, true] },
  { feature: "Blog Agent (+$149/mo)", values: [false, false, true, true] },
  { feature: "Marketing Agent (+$199/mo)", values: [false, false, true, true] },
  { feature: "Custom Agents", values: [false, false, false, true] },
];

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
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">Pricing</h1>
          <p className="text-lg text-zinc-600">Choose the best plan for you.</p>

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
              <span className="text-xs bg-accent text-ink px-2 py-0.5 rounded-full font-bold">Save 10%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const price = annual ? plan.annual : plan.monthly;
              return (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-8 flex flex-col relative transition-shadow hover:shadow-lg ${
                    plan.recommended ? "border-accent" : "border-zinc-200"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-sm font-medium text-zinc-500">{plan.name}</h3>
                  <div className="mt-1 mb-1">
                    {price === 0 ? (
                      <span className="text-4xl font-bold text-ink">Free</span>
                    ) : (
                      <>
                        {annual && plan.monthly > 0 && (
                          <span className="text-sm text-zinc-400 line-through mr-2">${plan.monthly}</span>
                        )}
                        <span className="text-4xl font-bold text-ink">${price}</span>
                        <span className="text-zinc-500 text-sm"> per month{annual ? ", billed annually" : ""}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-zinc-600 mb-6 mt-2">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                        <Check className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                      plan.ctaStyle === "primary"
                        ? "bg-accent text-ink hover:bg-accent-hover"
                        : "border-2 border-ink text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">Compare all features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left py-4 pr-4 font-normal text-zinc-500 w-1/3"></th>
                  {["Free", "Starter", "Growth", "Pro"].map((name) => (
                    <th key={name} className="text-center py-4 px-4 font-semibold text-ink">{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  if (row.category) {
                    return (
                      <tr key={i} className="bg-zinc-50">
                        <td colSpan={5} className="py-3 px-4 font-semibold text-ink text-sm">{row.category}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i} className="border-b border-zinc-100">
                      <td className="py-3 pr-4 text-zinc-600">{row.feature}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className="py-3 px-4 text-center">
                          {val === true ? (
                            <Check className="w-4 h-4 text-ink mx-auto" strokeWidth={2} />
                          ) : val === false ? (
                            <span className="text-zinc-300">—</span>
                          ) : (
                            <span className="text-ink">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agent Add-ons */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-3">Agent add-ons</h2>
          <p className="text-zinc-600 mb-10">Add AI agents to any paid plan. Our team helps you set each one up.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {agents.map((agent) => (
              <div key={agent.key} className="rounded-2xl border border-zinc-200 p-6">
                <agent.icon className="w-6 h-6 text-ink mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-ink mb-1">{agent.name}</h3>
                <p className="text-2xl font-bold text-ink mb-2">+${agent.price}<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
                <p className="text-sm text-zinc-600">{agent.tagline}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-accent p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{agentSuite.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">+${agentSuite.price}<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
              <p className="text-sm text-zinc-600">All four agents. Save ${agentSuite.savings}/mo vs a la carte.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{customAgents.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">{customAgents.priceDisplay}</p>
              <p className="text-sm text-zinc-600">{customAgents.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration callout */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">Migrating from WordPress or Drupal?</h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Standard migrations (up to 50 pages) are free with any 12-month plan. Larger sites get a flat-price quote after a free 15-minute assessment.
          </p>
          <Link href="/migrate" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors">
            Learn about migration
          </Link>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">Enterprise</h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Custom SLAs, multi-environment, compliance scope, institutional hosting from $1,499/mo. We scope these per engagement.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors">
            Contact us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4 text-center">Frequently asked questions</h2>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something Esteemed?</h2>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
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
