"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import LoginFork from "@/components/LoginFork";
import { hostingTiers, agents, agentSuite, customAgents, migrateFAQ, anchorReferences } from "@/lib/data";

export default function MigratePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Talk to your website. Watch it change.
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Move your WordPress or Drupal site to Esteemed App and you stop fighting your CMS. Tell us what to change. It changes. That's it.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See if your site qualifies
          </button>
          <p className="mt-4 text-sm text-zinc-500">
            Trusted by {anchorReferences.map((r) => r.name).join(", ")}.
          </p>
        </div>
      </section>

      {/* Demo placeholder */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="aspect-video rounded-2xl bg-zinc-100 flex items-center justify-center">
            <p className="text-zinc-400 text-sm">Demo video — coming soon</p>
          </div>
          <p className="text-center text-xs text-zinc-400 mt-3">Real footage. No edits. This is what your website becomes.</p>
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
                Add Voice Agent and your site answers missed calls. Add Social Agent and it writes posts in your voice. Add Blog Agent and it drafts newsletters that sound like you wrote them. None of this comes with a WordPress agency.
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
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">The migration is the part you don't have to think about</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "We look at your current site", desc: "You give us your URL on a 15-minute call. We give you an honest assessment — what migrates cleanly, what needs work, what the fixed price will be." },
              { step: "2", title: "We rebuild it, you approve", desc: "Most small business sites: 1-3 weeks. We build a working version, send you a private preview link, you tell us what to change." },
              { step: "3", title: "We migrate your content", desc: "Same URL. No SEO loss. We handle redirects from your old URLs so search rankings stay put." },
              { step: "4", title: "You start talking to your site", desc: "That's it. You're done with WordPress. Or Drupal. Or whatever it was." },
            ].map((s) => (
              <div key={s.step}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-ink text-sm font-bold mb-4">{s.step}</span>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-8">Most migrations are included with a 12-month hosting agreement. Larger sites are flat-priced after the free assessment.</p>
        </div>
      </section>

      {/* Hosting Tiers */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">What it costs after you're moved</h2>
          <p className="text-zinc-600 mb-10">Most customers move from a more expensive WordPress agency to one of these and pay less for a better product.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingTiers.map((tier) => (
              <div key={tier.key} className={`rounded-2xl border p-8 relative ${tier.recommended ? "border-accent" : "border-zinc-200"}`}>
                {tier.recommended && (
                  <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">Recommended</span>
                )}
                <h3 className="text-xl font-bold text-ink mb-1">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-ink">${tier.price}</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                      <Check className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-6">All tiers include the prompt-driven editing experience. No surprise charges.</p>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Add real intelligence when you're ready</h2>
          <p className="text-zinc-600 mb-10">Most customers add Voice Agent first because the ROI is immediate — every missed call becomes a captured lead.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((a) => (
              <div key={a.key} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-lg font-bold text-ink mb-1">{a.name} — +${a.price}/mo</h3>
                <p className="text-sm text-zinc-600">{a.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-accent p-6">
              <h3 className="text-lg font-bold text-ink mb-1">{agentSuite.name} — ${agentSuite.price}/mo</h3>
              <p className="text-sm text-zinc-600">All four bundled. Save ${agentSuite.savings}/mo vs a la carte.</p>
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
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The 15-minute call</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Book a 15-minute call. Send us your current site URL ahead of time. We'll come to the call with an honest assessment. If we're not a fit, we'll tell you that too.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
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
