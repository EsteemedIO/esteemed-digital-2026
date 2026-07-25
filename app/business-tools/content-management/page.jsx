import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, FileText, Palette, Globe, Shield, Zap, Code2 } from "lucide-react";

export const metadata = {
  title: "Content Management | Esteemed",
  description:
    "Manage your website content with Esteemed. Open source CMS solutions built on WordPress, Drupal, and Esteemed Curate — our AI-native content cloud.",
};

const features = [
  { icon: FileText, title: "Content Authoring", desc: "Create, edit, and publish pages, posts, and media with intuitive editorial workflows." },
  { icon: Palette, title: "Themes & Design", desc: "Beautiful, responsive themes and layouts — customizable to match your brand identity." },
  { icon: Zap, title: "AI-Powered Publishing", desc: "Draft, summarize, and optimize content with AI agents grounded in your brand knowledge." },
  { icon: Globe, title: "Publish to Cloud", desc: "Deploy your CMS to Esteemed Cloud with SSL, CDN, backups, and global edge delivery included." },
];

const platforms = [
  {
    key: "wordpress",
    name: "WordPress",
    tagline: "The world's most popular CMS.",
    desc: "WordPress powers over 40% of the web. Thousands of plugins and themes, a massive developer community, and complete ownership of your content. Managed on Esteemed Cloud with SSL, backups, and support.",
    color: "#21759B",
    href: "/business-tools/content-management/wordpress",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/wordpress.svg" alt="WordPress" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
    features: ["40%+ of all websites", "Thousands of plugins & themes", "Full content ownership", "Massive developer ecosystem"],
  },
  {
    key: "drupal",
    name: "Drupal",
    tagline: "Enterprise-grade content management.",
    desc: "Drupal is the open source CMS for organizations that need complex content architectures, multi-language, granular permissions, and deeply customized editorial workflows.",
    color: "#0678BE",
    href: "/business-tools/content-management/drupal",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/drupal.svg" alt="Drupal" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
    features: ["Complex content architectures", "Multi-language & multi-site", "Granular permissions", "Enterprise scalability"],
  },
  {
    key: "curate",
    name: "Esteemed Curate",
    tagline: "AI-native CMS, built for the future.",
    desc: "Our AI-native content cloud with RAG grounding, agent-assisted publishing, and managed media storage. Your approved content powers conversational AI across your website, agents, and internal tools.",
    color: "#B89D1F",
    href: "/business-tools/content-management/curate",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        <ProductIcon product="curate" className="w-8 h-8" />
      </div>
    ),
    features: ["AI-native with RAG grounding", "Agent-assisted publishing", "Managed media storage", "Connect integration included"],
  },
];

export default function ContentManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ProductIcon product="curate" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
            Content Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 max-w-3xl mx-auto">
            Your content, your CMS, your choice.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Run your content on the platform that fits your team. WordPress, Drupal, or our AI-native Curate — all hosted on Esteemed Cloud with SSL, backups, and expert support included.
          </p>
        </div>
      </section>

      {/* Platform selection cards */}
      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Open Source CMS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Choose the CMS that fits your business
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mx-auto" style={{ maxWidth: 780 }}>
              We believe in open source with no vendor lock-in and ultimate flexibility. Our content management solutions are used by the biggest brands in the world and supported by top experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-zinc-200 bg-white p-8 flex flex-col hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="mb-4">{p.logo}</div>
                <h3 className="text-xl font-bold text-ink mb-1">{p.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: p.color }}>
                  {p.tagline}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
                <ul className="space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-700">
                      <TickRounded className="w-7 h-7" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href={p.href}
                    className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-zinc-500">
              Not sure which CMS is right? <Link href="/contact?interest=cms" className="font-bold text-ink hover:underline">Talk to our content team</Link> — we&apos;ll recommend the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Hosting pricing CTA */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
            Hosting & Infrastructure
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            One hosting platform for every CMS
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-4">
            WordPress, Drupal, or Curate — all run on Esteemed Cloud with the same predictable pricing. SSL, backups, monitoring, and CDN included. No renewal price hikes, ever.
          </p>
          <p className="text-base font-semibold text-ink mb-8">
            Self-serve from $8.25/mo &middot; Managed from $149/mo
          </p>
          <Link
            href="/websites/hosting#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See Plans
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything you need to manage content
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From authoring to publishing to growth — we handle the infrastructure so you can focus on your content.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-zinc-200">
                <item.icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform integration breakout */}
      <section className="px-6 py-10">
        <div className="mx-auto rounded-3xl overflow-hidden" style={{ maxWidth: 1800, background: "#1A1A1A" }}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "#FEE546" }}>
                The Esteemed Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Content that powers your entire business.
              </h2>
              <p className="text-base text-white/75 leading-relaxed mb-8 max-w-lg">
                Integrate your CMS with our CRM, AI Agents, and Business Intelligence layer. Your content becomes the foundation for conversational AI, automated outreach, and data-driven decisions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "CRM integration — unified customer and content insights",
                  "AI Agents — automated publishing, social, and marketing",
                  "Intelligence layer — content performance that improves over time",
                  "Connect — RAG grounding so AI uses your approved content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Explore the platform
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating on content strategy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Open source commitment */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                Our commitment
              </p>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Open source means you&apos;re in control
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Every CMS we build on is open source. That means no vendor lock-in,
                no surprise fees, and full ownership of your content, your data, and
                your code. We contribute back to the communities that power these
                tools — because better open source means better content for everyone.
              </p>
              <ul className="space-y-3">
                {[
                  "No proprietary lock-in — migrate anytime",
                  "Community-driven platforms with global support",
                  "Full code access and customization",
                  "Transparent pricing, no hidden platform fees",
                  "Expert implementation from our 35,000+ network",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "WordPress", bg: "#DCEEF7", icon: "W" },
                { label: "Drupal", bg: "#E0E9F2", icon: "D" },
                { label: "Curate", bg: "#FFF8D6", icon: "C" },
                { label: "Your Content", bg: "#DCEDE0", icon: "+" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ background: card.bg, aspectRatio: "1" }}
                >
                  <span className="text-3xl font-bold mb-2">{card.icon}</span>
                  <span className="text-sm font-bold text-ink">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Ready to manage your content?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Talk to our team about the right CMS for your business — or explore our hosting plans to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/websites/hosting#plans"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors"
            >
              See Hosting Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
