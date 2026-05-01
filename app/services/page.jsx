"use client";

import { useState } from "react";
import Link from "next/link";
import LoginFork from "@/components/LoginFork";
import { cloudTiers, humanServices, agents, agentFleet } from "@/lib/data";
import { Check } from "lucide-react";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Everything you need to run your website.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            One team replaces your hosting provider, your agency, and your AI tools. Build, host, grow — all in one place.
          </p>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">AI agents</h2>
          <p className="text-zinc-600 mb-10">Add-on agents that handle real work. Our team helps you set each one up.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {agents.map((agent) => (
              <div key={agent.key} className="rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
                <agent.icon className="w-6 h-6 text-ink mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-ink mb-1">{agent.name}</h3>
                <p className="text-lg font-bold text-ink mb-2">+${agent.price}/mo</p>
                <p className="text-sm text-zinc-600">{agent.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-accent p-8">
            <h3 className="text-xl font-bold text-ink mb-1">{agentFleet.name} — ${agentFleet.price}/mo</h3>
            <p className="text-zinc-600">All four agents bundled. Save ${agentFleet.savings}/mo vs a la carte. <Link href="/pricing" className="underline underline-offset-4 hover:no-underline">See pricing</Link></p>
          </div>
        </div>
      </section>

      {/* Hosting & Support */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Hosting & support</h2>
          <p className="text-zinc-600 mb-10">Every tier includes prompt-driven editing, SSL, backups, and monitoring.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudTiers.filter((t) => t.annual !== null).map((tier) => (
              <div key={tier.key} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-xl font-bold text-ink mb-1">{tier.name}</h3>
                <div className="mb-4">
                  {tier.fromPrice && <span className="text-sm text-zinc-500">From </span>}
                  <span className="text-3xl font-bold text-ink">${tier.annual}</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <p className="text-sm text-zinc-600">{tier.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/pricing" className="text-sm font-medium text-ink underline underline-offset-4 hover:no-underline">
              Full pricing details
            </Link>
          </div>
        </div>
      </section>

      {/* Human Services */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Human services</h2>
          <p className="text-zinc-600 mb-10">Real professionals from our 35,000-person network. AI builds it; humans help you grow it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanServices.map((svc) => (
              <div key={svc.key} className="rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition-shadow">
                <svc.icon className="w-6 h-6 text-ink mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-ink mb-2">{svc.name}</h3>
                <p className="text-sm text-zinc-600 mb-3">{svc.blurb}</p>
                <p className="text-sm font-semibold text-ink">{svc.priceNote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">Migration</h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Moving from WordPress, Drupal, or another CMS? Most standard migrations are free with a 12-month hosting agreement. We handle content, redirects, and SEO — you approve before anything goes live.
          </p>
          <Link href="/migrate" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors">
            Learn about migration
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tell us what you need.</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get started
          </button>
        </div>
      </section>

      <LoginFork isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
