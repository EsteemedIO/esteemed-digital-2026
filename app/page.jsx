"use client";

import Link from "next/link";
import ChatHero from "@/components/ChatHero";

const products = [
  {
    name: "Esteemed Cloud",
    description: "Hosting that scales with you. Built for what you build.",
    href: "/products/cloud",
  },
  {
    name: "Esteemed Agents",
    description: "AI agents that handle the work. Starting with Echo.",
    href: "/products/agents",
  },
  {
    name: "Esteemed Intelligence",
    description: "The intelligence layer that powers it all.",
    href: "/products/intelligence",
  },
  {
    name: "Esteemed Colleagues",
    description: "The marketplace for vetted experts. Hire or get hired.",
    href: "/products/colleagues",
  },
  {
    name: "Esteemed Support",
    description: "Get expert human help with what you build or existing apps.",
    href: "/products/support",
  },
];

const segments = [
  { name: "Personal", href: "/solutions/segments" },
  { name: "Small Business", href: "/solutions/segments" },
  { name: "Enterprise", href: "/solutions/segments" },
];

const steps = [
  {
    num: 1,
    title: "Build",
    text: "Tell Create what you want. AI builds your first version.",
  },
  {
    num: 2,
    title: "Match",
    text: "Need design polish, custom code, SEO, or strategy? We match you with experts from Colleagues.",
  },
  {
    num: 3,
    title: "Work",
    text: "Your expert delivers. You stay in control with project management built in.",
  },
  {
    num: 4,
    title: "Grow",
    text: "Your site is live. Your expert is on call when you need more.",
  },
];

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Section 1: Chat Hero */}
      <ChatHero />

      {/* Section 2: Meet Esteemed Create */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Meet Esteemed Create
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Build websites and apps by talking to AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Describe what you want",
                description:
                  "Tell Create about your project in plain language. What it does, who it's for, how it should look.",
              },
              {
                step: "2",
                title: "AI builds your first version",
                description:
                  "Create generates a working site or app from your description. Structure, content, and design included.",
              },
              {
                step: "3",
                title: "Edit by conversation",
                description:
                  "Change anything by typing what you want. No code, no tickets, no waiting.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-ink text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products/create"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Try Create &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Powered by Esteemed Colleagues */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Powered by Esteemed Colleagues
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              AI builds your first version. Real experts from our marketplace
              help you grow it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <span className="text-5xl font-bold text-accent">{s.num}</span>
                <h3 className="text-xl font-bold text-ink mt-2 mb-2">
                  {s.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-600">
              Already have your app and need expert support?{" "}
              <Link
                href="/products/colleagues"
                className="font-bold text-ink underline underline-offset-4 hover:no-underline"
              >
                Post a Job &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Other products & services */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Products &amp; Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-lg font-bold text-ink mb-2">{p.name}</h3>
                <p className="text-sm text-zinc-600">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Audience segments */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg) => (
              <Link
                key={seg.name}
                href={seg.href}
                className="rounded-2xl border border-zinc-200 p-8 text-center hover:shadow-lg transition-shadow block"
              >
                <h3 className="text-xl font-bold text-ink">{seg.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Heritage */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-zinc-600 leading-relaxed">
            Founded in 2011 as Drupalcontractors.com. Rebranded to Esteemed in
            2019. 35,000+ professionals, real clients including IEEE, Alvernia
            University, and the Cambridge Redevelopment Authority.
          </p>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build something Esteemed?
          </h2>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start &rarr;
          </button>
        </div>
      </section>
    </>
  );
}
