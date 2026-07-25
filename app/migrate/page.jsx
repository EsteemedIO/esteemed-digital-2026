"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import LoginFork from "@/components/LoginFork";
import { managedHostingTiers, migrationPackages, curateTiers, agents, agentFleet, customAgents, migrateFAQ, anchorReferences } from "@/lib/data";

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export default function MigratePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Rebuild, host, or migrate your CMS.
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Move from WordPress, Drupal, or another CMS to Esteemed Curate: our
            AI-first, JavaScript-based content system with performance,
            integrated AI, and expert support built in.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See which path fits
          </button>
          <p className="mt-4 text-sm text-zinc-500">
            Trusted by {anchorReferences.map((r) => r.name).join(", ")}.
          </p>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">Three things change when you move</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">You stop waiting on your agency</h3>
              <p className="text-zinc-600 leading-relaxed">
                Right now, every change to your site takes a ticket, a queue, and a markup. After migration, you make changes by talking. Your designer is still there when you need real design work — but you don't pay them to update your hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Your site does work for you</h3>
              <p className="text-zinc-600 leading-relaxed">
                Add Social Manager and it drafts posts in your voice. Add Blogger and it writes newsletters that sound like you. Add Marketer and it runs email campaigns on autopilot. None of this comes with a WordPress agency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">One bill, one team, one platform</h3>
              <p className="text-zinc-600 leading-relaxed">
                Hosting, support, edits, AI features — all from us. Nothing to install. Nothing to update. Nothing to break.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">Two paths, clear boundaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "We assess the current site", desc: "You give us your URL. We identify whether a free Create rebuild or paid CMS migration is the right commercial path." },
              { step: "2", title: "Free rebuild path", desc: "For many simple sites, we build a plain React/Node/Next site and attach it to Managed Hosting with a 12-month term." },
              { step: "3", title: "Paid CMS migration path", desc: "For CMS-driven sites, we migrate content, media, redirects, and workflows onto Esteemed Curate at a fixed public package price." },
              { step: "4", title: "You run on the right product", desc: "Hosting customers pay for Hosting. CMS migration customers pay for Curate. You do not pay both for the same site." },
            ].map((s) => (
              <div key={s.step}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-ink text-sm font-bold mb-4">{s.step}</span>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-8">The free rebuild is not a CMS migration. Paid migrations land on Esteemed Curate.</p>
        </div>
      </section>

      {/* Managed Hosting */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Managed Hosting with optional $0 rebuild</h2>
          <p className="text-zinc-600 mb-10">For sites that do not need a managed CMS. The included rebuild is a plain Create-built site, not a CMS migration.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedHostingTiers.filter((t) => t.monthly !== null).map((tier) => (
              <div key={tier.key} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-xl font-bold text-ink mb-1">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-ink">{formatMoney(tier.monthly)}</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <p className="text-sm text-zinc-600">{tier.description}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{tier.supportHours} support hrs/mo included</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-6">Support overage is billed at market rate beyond included hours.</p>
        </div>
      </section>

      {/* Migration Packages */}
      <section className="py-20 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Paid CMS migration to Esteemed Curate</h2>
          <p className="text-zinc-600 mb-10">
            One-time migration packages for WordPress, Drupal, and other CMS
            sites. A paid migration results in an Esteemed Curate subscription:
            an AI-first, performant JavaScript CMS built on Payload without the
            enterprise pricing model, plus expert integrated support from our
            team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPackages.map((pkg) => (
              <div key={pkg.key} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-ink mb-1">{pkg.priceDisplay}</p>
                <p className="mb-4 text-xs uppercase tracking-wide text-zinc-500">{pkg.type}</p>
                <p className="text-sm text-zinc-600">{pkg.scope}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-bold text-ink mb-3">Esteemed Curate subscription after migration</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {curateTiers.map((tier) => (
                <div key={tier.key} className="rounded-xl bg-zinc-50 p-4">
                  <p className="font-bold text-ink">{tier.name}</p>
                  <p className="text-sm text-zinc-600">{tier.monthly === null ? "Custom" : `${formatMoney(tier.monthly)}/mo`}</p>
                  <p className="mt-1 text-xs text-zinc-500">{tier.basis}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Add real intelligence when you're ready</h2>
          <p className="text-zinc-600 mb-10">Most customers add Social Manager first because the ROI is immediate — consistent posts in your voice across every platform.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((a) => (
              <div key={a.key} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-lg font-bold text-ink mb-1">{a.name} — +${a.price}/mo</h3>
                <p className="text-sm text-zinc-600">{a.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-accent p-6">
              <h3 className="text-lg font-bold text-ink mb-1">{agentFleet.name} — ${agentFleet.price}/mo</h3>
              <p className="text-sm text-zinc-600">All four bundled. Save ${agentFleet.savings}/mo vs a la carte.</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-lg font-bold text-ink mb-1">{customAgents.name} — {customAgents.priceDisplay}</h3>
              <p className="text-sm text-zinc-600">{customAgents.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">We've been doing this for 15 years</h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              Esteemed App has been building, hosting, and supporting websites since 2011, when our founder Chris McGrath started Celebrate Drupal — the company that supported Washington State Veterans Affairs and a generation of state and nonprofit websites. The Drupal Jobs board the community uses today is still operated by us, as a service to the community.
            </p>
            <p>
              Today we host and support sites for IEEE, Alvernia University, and the Cambridge Redevelopment Authority. The team that builds your migration is drawn from Esteemed Colleagues, our network of 35,000 vetted IT professionals.
            </p>
            <p>
              When you migrate to Esteemed App, you're not hiring a freelancer who might disappear in 18 months. You're moving onto infrastructure that powers research institutions and government agencies, supported by a team that has been here for 15 years and isn't going anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">Honest answers to the questions you're going to ask</h2>
          <div className="space-y-8">
            {migrateFAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-ink mb-2">{item.q}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">The 15-minute call</h2>
          <p className="text-zinc-700 mb-8 max-w-2xl mx-auto">
            Book a 15-minute call. Send us your current site URL ahead of time. We'll come to the call with an honest assessment. If we're not a fit, we'll tell you that too.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Book the call
          </button>
          <p className="text-xs text-zinc-500 mt-4">We respond within one business day. We don't share your information.</p>
        </div>
      </section>

      <LoginFork
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
