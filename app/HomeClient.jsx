"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Cloud, Bot, Brain, Users, Headphones, ClipboardCheck, Target, MessageSquare, Check } from "lucide-react";
import ChatHero from "@/components/ChatHero";
import HeroCarousel from "@/components/HeroCarousel";
import CascadingCards from "@/components/CascadingCards";
import ParallaxFrost from "@/components/ParallaxFrost";
import PromptToSite from "@/components/builder-visuals/PromptToSite";
import DragAndDrop from "@/components/builder-visuals/DragAndDrop";
import CascadingAgent from "@/components/builder-visuals/CascadingAgent";
import MultiDevice from "@/components/builder-visuals/MultiDevice";
import DomainSearchBar from "@/components/DomainSearchBar";

const products = [
  {
    name: "Esteemed Create",
    description: "Build websites and apps by talking to AI. Edit by conversation, publish in one click.",
    href: "/websites/website-builder",
    icon: Sparkles,
  },
  {
    name: "Esteemed Cloud",
    description: "Hosting that scales with you. Built for what you build.",
    href: "/websites/hosting",
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
    description: "Talent and opportunity marketplace. Post opportunities and hire contract or direct employees.",
    href: "/products/colleagues",
    icon: Users,
  },
  {
    name: "Esteemed Support",
    description: "Get expert human help with what you build or existing apps.",
    href: "/hire-experts/web-support",
    icon: Headphones,
  },
  {
    name: "Esteemed Hire",
    description: "Applicant tracking that integrates with Colleagues and Intelligence.",
    href: "/products/hire",
    icon: ClipboardCheck,
  },
  {
    name: "Esteemed Acquire",
    description: "CRM for client and talent acquisition, powered by Intelligence.",
    href: "/products/acquire",
    icon: Target,
  },
  {
    name: "HCMGPT",
    description: "The preeminent domain-specific AI for human capital management.",
    href: "https://hcmgpt.com",
    icon: MessageSquare,
    external: true,
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


const clientLogos = [
  {
    name: "New York Life",
    mark: "NEW YORK LIFE",
    className: "font-serif tracking-[0.08em]",
  },
  {
    name: "FrankCrum",
    mark: "FrankCrum",
    className: "font-sans tracking-normal",
  },
  {
    name: "Alvernia University",
    mark: "ALVERNIA UNIVERSITY",
    className: "font-serif tracking-[0.12em]",
  },
  {
    name: "MDVIP",
    mark: "MDVIP",
    className: "font-sans tracking-[0.14em]",
  },
  {
    name: "Astound Broadband",
    mark: "astound",
    className: "font-sans tracking-normal lowercase",
  },
];

function ClientLogoBand() {
  return (
    <section className="border-y border-zinc-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
          Join leading organizations that work with us
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex min-h-16 items-center justify-center">
              <span
                aria-label={logo.name}
                className={`text-center text-xl font-black leading-none text-ink md:text-2xl ${logo.className}`}
              >
                {logo.mark}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const [tab, setTab] = useState("self");

  const selfPlans = [
    { name: "Basic", price: "$9.99", desc: "1 site, 25 GB, SSL, CDN", features: ["Custom domain + SSL", "Daily backups", "Global CDN"] },
    { name: "Plus", price: "$14.99", desc: "1 site, 50 GB, staging", features: ["Everything in Basic", "Staging site", "Security monitoring"], rec: true },
    { name: "Pro", price: "$19.99", desc: "1 site, 100 GB, priority", features: ["Everything in Plus", "Priority support", "App monitoring"] },
    { name: "Multi", price: "$39.99", desc: "Up to 5 sites, 200 GB", features: ["Everything in Pro", "Up to 5 websites", "Custom domains"] },
  ];

  const managedPlans = [
    { name: "Essential", price: "$149", desc: "5-page rebuild, 3 hrs/mo", features: ["Done-for-you hosting", "Free 5-page rebuild", "3 support hrs/mo", "SSL + monitoring"] },
    { name: "Growth", price: "$249", desc: "12-page rebuild, 6 hrs/mo", features: ["Everything in Essential", "Free 12-page rebuild", "6 support hrs/mo"], rec: true },
    { name: "Business", price: "$499", desc: "Full site, 10 hrs/mo", features: ["Everything in Growth", "Full standard site", "10 support hrs/mo", "Enterprise quote available"] },
  ];

  const plans = tab === "self" ? selfPlans : managedPlans;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            Hosting that grows with you.
          </h2>
          <p className="subtitle max-w-2xl mx-auto mb-8">
            SSL, backups, CDN, and monitoring included with every plan. No renewal price hikes.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setTab("self")}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${tab === "self" ? "bg-ink text-paper" : "text-zinc-500 hover:text-ink"}`}
            >
              Self-Managed
            </button>
            <button
              onClick={() => setTab("managed")}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${tab === "managed" ? "bg-ink text-paper" : "text-zinc-500 hover:text-ink"}`}
            >
              Managed
            </button>
          </div>
        </div>

        <div
          key={tab}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 animate-[fadeIn_0.3s_ease-in-out] ${plans.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3 max-w-5xl mx-auto"}`}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col relative transition-shadow hover:shadow-lg ${
                plan.rec ? "bg-ink text-white" : "bg-accent text-ink"
              }`}
            >
              {plan.rec && (
                <span className="absolute -top-3 left-6 bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className={`text-sm font-medium ${plan.rec ? "text-zinc-400" : "text-ink/60"}`}>{plan.name}</h3>
              <div className="mt-1 mb-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.rec ? "text-zinc-400" : "text-ink/60"}`}>/mo</span>
              </div>
              <p className={`text-sm mb-4 mt-2 ${plan.rec ? "text-zinc-300" : "text-ink/80"}`}>{plan.desc}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${plan.rec ? "text-zinc-300" : "text-ink/80"}`}>
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.rec ? "text-accent" : "text-ink"}`} strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/hosting#plans"
                  className={`block text-center py-3 rounded-full text-sm font-bold transition-colors ${
                    plan.rec
                      ? "bg-accent text-ink hover:bg-accent-hover"
                      : "bg-ink text-white hover:bg-ink/90"
                  }`}
                >
                  See Plans
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="text-sm font-bold text-ink underline underline-offset-4 hover:no-underline"
          >
            See all products and plans &rarr;
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
      {/* Section 1: Hero Carousel */}
      <HeroCarousel
        slides={[
          {
            label: "Website Builder",
            eyebrow: "Esteemed Website Builder",
            title: "Build your website by talking to AI.",
            body: "Describe what you want in plain English. Esteemed Create builds a complete, working site in minutes — then publish instantly to our secure, scalable cloud.",
            cta: "Try Create free",
            href: "/websites/website-builder/start",
            video: "/videos/homepage-hero.mp4",
          },
          {
            label: "Hire Experts",
            eyebrow: "Esteemed Colleagues",
            title: "AI builds it. Experts grow it.",
            body: "Quality and skill alignment are our priority. We match you with vetted professionals from our 35,000-strong network — on demand.",
            cta: "Hire an Expert",
            href: "/hire-experts",
            video: "/videos/homepage-colleagues.mp4",
          },
          {
            label: "Managed Hosting",
            eyebrow: "Esteemed Cloud",
            title: "Hosting that scales with your business.",
            body: "Managed hosting for Next.js, WordPress, and Drupal. Pricing is always straightforward, with expert support available for businesses of all sizes.",
            bodyBold: "Get a free website build with any annual plan.",
            cta: "Claim your Free Website",
            href: "/websites/hosting?billing=monthly#managed-hosting",
            cta2: "Talk to Us",
            href2: "/contact",
            bg: "#282828",
          },
        ]}
      />

      <ClientLogoBand />

      {/* Domain Search Bar */}
      <section className="bg-ink py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-3">Find Your Domain</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get the perfect domain for your business</h2>
          <DomainSearchBar variant="dark" />
          <p className="mt-4 text-sm text-white/40">
            .com from $19.99/yr &middot; .io from $49.99/yr &middot; .dev from $16.99/yr
          </p>
        </div>
      </section>

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
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-ink text-sm font-bold">
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
              href="/websites/website-builder"
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
              ctaHref: "/websites/website-builder",
              visual: <PromptToSite />,
              bgColor: "ink",
            },
            {
              label: "CUSTOMIZE",
              heading: "Refine.",
              description: "Tailor your site by chatting with the agent — no templates to fight.",
              cta: "See the editor →",
              ctaHref: "/websites/website-builder",
              visual: <DragAndDrop />,
              bgColor: "grey",
            },
            {
              label: "MANAGE",
              heading: "Ship.",
              description: "You focus on the business, count on us for responsive design, hosting, daily backups, fast everywhere, all included.",
              cta: "Watch it work →",
              ctaHref: "/websites/hosting",
              visual: <CascadingAgent />,
              bgColor: "ink",
            },
            {
              label: "GROW",
              heading: "Supported by humans.",
              description: "You create it. Real experts from our 35,000-strong network help you grow and support what you build.",
              cta: "Hire an expert →",
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
                Post a Job ↗
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
            {products.map((p) => {
              const Tag = p.external ? "a" : Link;
              const extraProps = p.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Tag
                  key={p.name}
                  href={p.href}
                  {...extraProps}
                  className="p-8 hover:shadow-lg transition-shadow block"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <div className="flex items-start gap-4">
                    <p.icon className="w-6 h-6 text-ink flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-2">
                        {p.name}
                        {p.external && <span className="ml-1 text-ink/40 text-sm">↗</span>}
                      </h3>
                      <p className="text-sm text-zinc-600">{p.description}</p>
                    </div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax: Pairing you with the best */}
      <section className="py-20">
        <div className="mx-auto px-6 text-center" style={{ maxWidth: 1260 }}>
          <h3 className="heading-3 mb-12 text-center">Quality and skill alignment are our priority.</h3>
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
            <h3 className="heading-3 text-center">Endorsed by innovators</h3>
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
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-2 !text-ink mb-6">
            Ready to build something Esteemed?
          </h2>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-[20px] font-bold hover:bg-zinc-800 transition-colors"
          >
            Start &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
