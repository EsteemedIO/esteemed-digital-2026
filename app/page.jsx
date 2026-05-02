"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Cloud, Bot, Brain, Users, Headphones, Check } from "lucide-react";
import ChatHero from "@/components/ChatHero";
import CascadingCards from "@/components/CascadingCards";
import ParallaxFrost from "@/components/ParallaxFrost";
import PromptToSite from "@/components/builder-visuals/PromptToSite";
import DragAndDrop from "@/components/builder-visuals/DragAndDrop";
import CascadingAgent from "@/components/builder-visuals/CascadingAgent";
import MultiDevice from "@/components/builder-visuals/MultiDevice";
import { createTiers } from "@/lib/data";

const products = [
  {
    name: "Esteemed Create",
    description: "Build websites and apps by talking to AI. Edit by conversation, publish in one click.",
    href: "/products/create",
    icon: Sparkles,
  },
  {
    name: "Esteemed Cloud",
    description: "Hosting that scales with you. Built for what you build.",
    href: "/products/cloud",
    icon: Cloud,
  },
  {
    name: "Esteemed Agents",
    description: "AI agents that handle the work. Featuring Star.",
    href: "/products/agents",
    icon: Bot,
  },
  {
    name: "Esteemed Intelligence",
    description: "The intelligence layer that powers it all.",
    href: "/products/intelligence",
    icon: Brain,
  },
  {
    name: "Esteemed Colleagues",
    description: "The marketplace for vetted experts. Hire or get hired.",
    href: "/products/colleagues",
    icon: Users,
  },
  {
    name: "Esteemed Support",
    description: "Get expert human help with what you build or existing apps.",
    href: "/services/support",
    icon: Headphones,
  },
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

const previewTiers = createTiers.filter((t) => t.key !== "enterprise");

function PricingPreview() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Start free. Scale as you grow.
          </h2>
          <p className="subtitle max-w-2xl mx-auto mb-8">
            Every plan includes AI-powered building, Studio IDE, and hosting at publish.
          </p>

          <div className="flex items-center justify-center gap-3">
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

        <div
          key={annual ? "annual" : "monthly"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-[fadeIn_0.3s_ease-in-out]"
        >
          {previewTiers.map((tier) => {
            const price = annual ? tier.annual : tier.monthly;
            const isRec = tier.recommended;
            return (
              <div
                key={tier.key}
                className={`rounded-2xl p-8 flex flex-col relative transition-shadow hover:shadow-lg ${
                  isRec ? "bg-ink text-white" : "bg-accent-hover text-ink"
                }`}
              >
                {isRec && (
                  <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <h3 className={`text-sm font-medium ${isRec ? "text-zinc-400" : "text-ink/60"}`}>{tier.name}</h3>
                <div className="mt-1 mb-1">
                  {price === 0 ? (
                    <span className="text-4xl font-bold">Free</span>
                  ) : (
                    <>
                      {annual && tier.monthly > 0 && (
                        <span className={`text-sm line-through mr-2 ${isRec ? "text-zinc-500" : "text-ink/40"}`}>${tier.monthly}</span>
                      )}
                      <span className="text-4xl font-bold">${price}</span>
                      <span className={`text-sm ${isRec ? "text-zinc-400" : "text-ink/60"}`}>/mo</span>
                    </>
                  )}
                </div>
                <p className={`text-sm mt-1 ${isRec ? "text-zinc-400" : "text-ink/70"}`}>{tier.credits}</p>
                <p className={`text-sm mb-4 mt-2 ${isRec ? "text-zinc-300" : "text-ink/80"}`}>{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${isRec ? "text-zinc-300" : "text-ink/80"}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRec ? "text-accent" : "text-ink"}`} strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href="/pricing"
                    className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                      isRec
                        ? "bg-accent text-ink hover:bg-accent-hover"
                        : "bg-ink text-white hover:bg-ink/90"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="text-sm font-bold text-ink underline underline-offset-4 hover:no-underline"
          >
            See all pricing &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

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
            <h2 className="heading-2 mb-4">
              Meet Esteemed Create
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink text-[20px] font-bold hover:bg-accent-hover transition-colors"
            >
              Try Create &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Powered by Colleagues */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Powered by Colleagues
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              AI builds your first version. Real experts from our marketplace
              help you grow.
            </p>
          </div>

          <CascadingCards cards={[
            {
              label: "CREATE",
              heading: "Describe.",
              description: "Tell Create what you need. Using AI it drafts a real, brand-aware site in seconds — copy, layout, photography and all.",
              cta: "Try a prompt →",
              ctaHref: "/products/create",
              visual: <PromptToSite />,
              bgColor: "ink",
            },
            {
              label: "CUSTOMIZE",
              heading: "Refine.",
              description: "Tailor your site by chatting with the agent — no templates to fight.",
              cta: "See the editor →",
              ctaHref: "/products/create",
              visual: <DragAndDrop />,
              bgColor: "grey",
            },
            {
              label: "MANAGE",
              heading: "Ship.",
              description: "You focus on the business, count on us for responsive design, hosting, daily backups, fast everywhere, all included.",
              cta: "Watch it work →",
              ctaHref: "/products/cloud",
              visual: <CascadingAgent />,
              bgColor: "grey",
            },
            {
              label: "GROW",
              heading: "Supported by humans.",
              description: "You create it. Real experts from our 35,000-strong network help you grow and support what you build.",
              cta: "Meet the network →",
              ctaHref: "/products/colleagues",
              visual: <MultiDevice />,
              bgColor: "grey",
            },
          ]} />

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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              Products &amp; Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="p-8 hover:shadow-lg transition-shadow block"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <div className="flex items-start gap-4">
                  <p.icon className="w-6 h-6 text-ink flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">{p.name}</h3>
                    <p className="text-sm text-zinc-600">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax: Pairing you with the best */}
      <section className="py-20">
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 1260 }}>
          <h2 className="heading-2 mb-12">Quality and skill alignment are our priority.</h2>
          <ParallaxFrost
            src="/images/colleague1.jpg"
            alt="Quality and skill alignment"
            height={715}
            maxFrost={0.3}
          />
        </div>
      </section>

      {/* Section 5: Pricing Preview */}
      <PricingPreview />

      {/* Section 6: Testimonials */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">Trusted by builders</p>
            <h2 className="heading-2">Endorsed by innovators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Esteemed matched us with a senior React developer in 48 hours. The quality of talent in their network is exceptional.",
                name: "Engineering Director",
                company: "IEEE",
              },
              {
                quote: "We migrated from Drupal to Esteemed Create and cut our content update time from days to minutes. The AI understands our brand voice.",
                name: "Digital Marketing Lead",
                company: "Alvernia University",
              },
              {
                quote: "Having access to 35,000 vetted professionals means we never wait for talent. Esteemed is our first call for every technical hire.",
                name: "CTO",
                company: "Cambridge Redevelopment Authority",
              },
            ].map((t) => (
              <div key={t.company} className="rounded-2xl border border-zinc-200 p-8">
                <blockquote className="text-[.9375rem] text-ink leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-2 !text-white mb-6">
            Ready to build something Esteemed?
          </h2>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-[20px] font-bold hover:bg-accent-hover transition-colors"
          >
            Start &rarr;
          </button>
        </div>
      </section>
    </>
  );
}
