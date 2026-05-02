"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Sparkles, Bot, Users, Headphones, Brain, Zap } from "lucide-react";
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
    <div className="divide-y divide-zinc-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-6 text-left"
          >
            <span className="text-lg font-semibold text-ink pr-8">{item.q}</span>
            <ChevronDown className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} strokeWidth={2} />
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
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">Pricing</h1>
          <p className="text-xl text-zinc-600 mb-10">Start free. Scale as you grow.</p>

          <div className="inline-flex items-center rounded-full border-2 border-zinc-200 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-ink text-white" : "text-zinc-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${annual ? "bg-ink text-white" : "text-zinc-500"}`}
            >
              Yearly
              <span className="text-xs bg-accent text-ink px-2 py-0.5 rounded-full font-bold">Save</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          1. ESTEEMED CREATE — Primary funnel
         ═══════════════════════════════════════════════════ */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-ink" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold text-ink">Esteemed Create</h2>
          </div>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            AI-powered building with Studio IDE. Credits power every prompt, refinement, and rebuild. A typical landing page takes 30–50 credits.
          </p>

          <div
            key={annual ? "a" : "m"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 animate-[fadeIn_0.3s_ease-in-out]"
          >
            {createTiers.map((tier) => {
              const price = annual ? tier.annual : tier.monthly;
              const isRec = tier.recommended;
              return (
                <div
                  key={tier.key}
                  className={`rounded-2xl p-7 flex flex-col relative ${
                    isRec
                      ? "bg-ink text-white ring-2 ring-accent"
                      : "bg-white border-2 border-zinc-200"
                  }`}
                >
                  {isRec && (
                    <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-sm font-semibold uppercase tracking-wide ${isRec ? "text-zinc-400" : "text-zinc-500"}`}>{tier.name}</h3>
                  <div className="mt-2 mb-1">
                    {price === null ? (
                      <span className="text-3xl font-bold">Custom</span>
                    ) : price === 0 ? (
                      <span className="text-4xl font-bold">Free</span>
                    ) : (
                      <>
                        {annual && tier.monthly > 0 && (
                          <span className={`text-sm line-through mr-2 ${isRec ? "text-zinc-500" : "text-zinc-400"}`}>${tier.monthly}</span>
                        )}
                        <span className="text-4xl font-bold">${price}</span>
                        <span className={`text-sm ${isRec ? "text-zinc-400" : "text-zinc-500"}`}>/mo</span>
                      </>
                    )}
                  </div>
                  <p className={`text-sm mt-1 mb-1 font-medium ${isRec ? "text-accent" : "text-ink"}`}>{tier.credits}</p>
                  <p className={`text-sm mb-5 ${isRec ? "text-zinc-400" : "text-zinc-600"}`}>{tier.description}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${isRec ? "text-zinc-300" : "text-zinc-600"}`}>
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRec ? "text-accent" : "text-ink"}`} strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.key === "enterprise" ? "/contact" : "/signup"}
                    className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                      isRec
                        ? "bg-accent text-ink hover:bg-accent-hover"
                        : "border-2 border-ink text-ink hover:bg-ink hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Credit Packs */}
          <div className="mt-12 rounded-2xl border-2 border-zinc-200 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-ink mb-1">Need more credits?</h3>
                <p className="text-sm text-zinc-600">Top up anytime. No subscription change required.</p>
              </div>
              <div className="flex gap-4">
                {creditPacks.map((pack) => (
                  <div key={pack.credits} className="text-center px-6 py-4 rounded-xl bg-zinc-50">
                    <p className="text-lg font-bold text-ink">{pack.credits}</p>
                    <p className="text-xs text-zinc-500">credits</p>
                    <p className="text-base font-bold text-ink mt-1">${pack.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Sparkles, text: "Studio IDE for code editing" },
              { icon: Users, text: "Colleagues marketplace access" },
              { icon: Bot, text: "Agent add-on upgrades" },
              { icon: Zap, text: "Hosting included at publish" },
              { icon: Check, text: "SSL + CDN + daily backups" },
              { icon: Check, text: "Export your data anytime" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 py-3">
                <item.icon className="w-5 h-5 text-ink flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-zinc-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. AGENTS — Add-ons
         ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <Bot className="w-6 h-6 text-ink" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold text-ink">Agents</h2>
          </div>
          <p className="text-zinc-600 mb-10 max-w-2xl">AI agents trained on your content and voice. Add to any paid Create plan.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {agents.map((agent) => (
              <div key={agent.key} className="rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
                <agent.icon className="w-6 h-6 text-ink mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-ink mb-1">{agent.name}</h3>
                <p className="text-2xl font-bold text-ink mb-3">
                  +${agent.price}<span className="text-sm text-zinc-500 font-normal">/mo</span>
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">{agent.tagline}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Fleet */}
            <div className="rounded-2xl bg-accent p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{agentFleet.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">
                ${agentFleet.price}<span className="text-sm font-normal">/mo</span>
              </p>
              <p className="text-sm text-ink/70 mb-4">All four agents. Save ${agentFleet.savings}/mo vs a la carte.</p>
              <ul className="space-y-1">
                {agents.map((a) => (
                  <li key={a.key} className="flex items-center gap-2 text-sm text-ink/80">
                    <Check className="w-4 h-4 text-ink" strokeWidth={2} />
                    {a.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agents+ */}
            <div className="rounded-2xl bg-ink text-white p-8">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-accent" strokeWidth={1.5} />
                <h3 className="text-xl font-bold">{agentsPlus.name}</h3>
              </div>
              <p className="text-3xl font-bold mb-2">
                +${agentsPlus.price}<span className="text-sm text-zinc-400 font-normal">/mo</span>
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">{agentsPlus.description}</p>
            </div>

            {/* Custom */}
            <div className="rounded-2xl bg-white border border-zinc-200 p-8">
              <h3 className="text-xl font-bold text-ink mb-1">{customAgents.name}</h3>
              <p className="text-3xl font-bold text-ink mb-2">{customAgents.priceDisplay}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{customAgents.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. COLLEAGUES & SUPPORT — Human services
         ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colleagues */}
            <div className="rounded-2xl border-2 border-zinc-200 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-ink" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-ink">Colleagues</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Access our marketplace of 35,000+ vetted professionals. Designers, developers, strategists, and specialists ready to help you build, launch, and grow.
              </p>
              <p className="text-sm text-zinc-500 mb-6">DIY at v1 — you search, schedule, hire, and manage talent yourself using the Employer Dashboard.</p>
              <Link
                href="/products/colleagues"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Explore Colleagues →
              </Link>
            </div>

            {/* Support */}
            <div className="rounded-2xl border-2 border-zinc-200 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-6 h-6 text-ink" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-ink">Support</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Productized human services at $110/hr. Dev, SEO, content, design, integrations, growth — hours are fungible across disciplines.
              </p>
              <div className="space-y-3 mb-6">
                {supportTiers.map((tier) => (
                  <div key={tier.key} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-semibold text-ink">{tier.name}</span>
                      <span className="text-zinc-500 ml-2">· {tier.hours}</span>
                    </div>
                    <span className="font-bold text-ink">{tier.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-500 mb-6">No rollover. Overage at $110/hr. Specialty work quoted separately.</p>
              <Link
                href="/services/support"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-white transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. CLOUD — Secondary, for import customers
         ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-3">Already have a site?</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Host it on Esteemed Cloud. Import from WordPress, Drupal, GitHub, or any codebase. Custom domain, SSL, CDN, daily backups, and 99.9% uptime included on every tier.
            </p>
          </div>

          <div
            key={annual ? "ca" : "cm"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-[fadeIn_0.3s_ease-in-out]"
          >
            {cloudTiers.map((tier) => {
              const price = tier.annual === null ? null : annual ? tier.annual : tier.monthly;
              return (
                <div key={tier.key} className="rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-ink mb-1">{tier.name}</h3>
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

          <div className="text-center mt-8">
            <Link href="/migrate" className="text-sm font-bold text-ink underline underline-offset-4 hover:no-underline">
              Migrating from WordPress or Drupal? Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. FAQ
         ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">Frequently asked questions</h2>
          <FAQ items={pricingFAQ} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. FINAL CTA
         ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something Esteemed?</h2>
          <p className="text-zinc-400 mb-8">Start free. No credit card required.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start building free →
          </Link>
        </div>
      </section>
    </div>
  );
}
