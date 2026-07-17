import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Globe,
  Palette,
  BarChart3,
  Bot,
  Rocket,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Launch a Marketing Site | Esteemed",
  description:
    "Go from idea to live marketing site in minutes with AI-powered site generation, one-click publishing, and expert support from Esteemed.",
};

const features = [
  {
    icon: Zap,
    title: "AI-Powered Site Generation",
    desc: "Describe your brand, audience, and goals in plain language. Esteemed Create generates pages, copy, imagery, and responsive layout in minutes. No wireframes, no engineering tickets, no waiting on agency timelines. You get a working site, not a mockup.",
  },
  {
    icon: Globe,
    title: "One-Click Publishing",
    desc: "Deploy instantly on Esteemed Cloud with managed hosting, SSL, a global CDN, and automatic daily backups. Point your domain and you are live. No DevOps, no server configuration, no separate hosting provider to manage.",
  },
  {
    icon: Palette,
    title: "Brand-Consistent Design",
    desc: "Create generates designs that respect your brand palette, typography, and tone of voice. Upload a style guide or existing site, and AI matches it automatically. Every page stays on-brand without manual design reviews.",
  },
  {
    icon: BarChart3,
    title: "SEO & AI Visibility Built In",
    desc: "Every page ships with clean semantic markup, structured data, optimized meta tags, and fast load times. Our AI Visibility service ensures your content is indexed by both traditional search engines and AI-powered discovery platforms.",
  },
  {
    icon: Bot,
    title: "AI Content Agents",
    desc: "Esteemed Agents maintain your content on autopilot. Publish blog posts in your brand voice, manage social media schedules, and keep landing pages fresh without adding headcount. Agents learn your style and improve over time.",
  },
  {
    icon: Rocket,
    title: "Campaign Page Factory",
    desc: "Spin up landing pages for product launches, events, seasonal promotions, and ad campaigns in minutes. Test variations, measure performance, and iterate without waiting on dev teams or design queues.",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe your site",
    desc: "Share your brand, audience, and goals in plain language. Upload an existing site, a brief, or just a paragraph. Create uses it to generate your first version.",
  },
  {
    number: "02",
    title: "AI generates your site",
    desc: "In minutes, you get a fully responsive, SEO-ready marketing site with real copy, imagery, and structure. Review it, tweak it, and make it yours.",
  },
  {
    number: "03",
    title: "Publish to Cloud",
    desc: "One click deploys your site to Esteemed Cloud with SSL, CDN, and managed backups. Point your domain and you are live.",
  },
  {
    number: "04",
    title: "Refine with experts",
    desc: "Need custom design, brand photography, or conversion optimization? Connect with vetted designers and strategists from the Esteemed Colleagues network.",
  },
];

export default function LaunchMarketingSitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero — split layout matching hire-experts pattern */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E8EDE4" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Use Case
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Launch a marketing site that actually converts.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Marketing teams lose weeks waiting on engineering and agencies to ship simple pages.
              Esteemed Create lets you go from brief to live marketing site in minutes with AI, then
              grow it with expert design, SEO, and content support from the Colleagues network.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "AI generates your site from a simple description",
                "One-click deploy with SSL, CDN, and managed hosting",
                "Expert designers and content strategists on demand",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing professional launching a site with Esteemed Create"
              variant="usecase-launch"
              objectPosition="center top"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "5 min", l: "Average time to first site" },
              { n: "35,000+", l: "Experts in Colleagues network" },
              { n: "3X", l: "Faster than agency timelines" },
              { n: "99.9%", l: "Cloud uptime SLA" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-extrabold text-2xl md:text-3xl tracking-tight text-accent">
                  {s.n}
                </div>
                <div className="text-sm text-white/70 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational block — "Why marketing sites stall" */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Why marketing site launches stall
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Most marketing teams do not lack ideas. They lack a fast path from concept to live page. Engineering has its own roadmap. Agencies take weeks for scoping alone. And the DIY page builders that promise speed end up producing sites that look generic and perform poorly in search.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                The result? Campaigns launch late, landing pages get recycled instead of purpose-built, and your brand presence falls behind competitors who can ship faster. Meanwhile, the cost of a missed launch window compounds: lost leads, stale content, and a marketing calendar that is always playing catch-up.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed solves this with a different model. AI handles the heavy lifting of site generation, responsive design, and SEO fundamentals. When you need human expertise for custom design, brand strategy, or conversion optimization, vetted professionals from the Colleagues network step in without the overhead of agency retainers or long procurement cycles.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/colleagues-feature.webp"
                alt="Marketing team collaborating on a site launch"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything you need to launch
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From AI generation to expert refinement, every tool you need for a high-performing marketing site is included.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-8 border border-zinc-200"
                >
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — stepped */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From idea to live in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              No scoping calls, no SOWs, no months-long timelines. Describe what you need, and start building today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-extrabold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split section — outcomes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                What you walk away with
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Every project delivers a production-ready marketing site backed by Esteemed infrastructure and, when you need it, expert talent from the Colleagues network.
              </p>
              <ul className="space-y-4">
                {[
                  "A responsive, SEO-optimized marketing site live on your domain",
                  "Managed hosting with SSL, CDN, and daily backups on Esteemed Cloud",
                  "AI agents maintaining content, blog posts, and social media",
                  "Access to vetted designers and content strategists for ongoing refinement",
                  "Campaign landing pages you can spin up in minutes, not weeks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/woman-working-coffee.webp", label: "AI Generation" },
                { src: "/images/segments/colleagues-feature.webp", label: "Expert Design" },
                { src: "/images/segments/office-worker.webp", label: "Publish & Launch" },
                { src: "/images/segments/talent-jobs.webp", label: "Scale with Agents" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="relative rounded-xl overflow-hidden"
                  style={{ aspectRatio: "1" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "How much does it cost to launch a marketing site?", a: "Esteemed Create is free to start. You can generate and preview your site at no cost. Hosting on Esteemed Cloud starts at $9.99/month with SSL, CDN, and daily backups included. Expert design and content services are available through Colleagues on an hourly or project basis." },
        { q: "How fast can I go live?", a: "Most teams have a working site within minutes of their first prompt. After reviewing and refining, you can publish to Esteemed Cloud with one click. End-to-end, many marketing sites go from idea to live in under a day." },
        { q: "Can I update the site myself after launch?", a: "Yes. Esteemed Create gives you a visual editor for ongoing changes. You can also use AI Agents to automate content updates, blog publishing, and social media. For larger redesigns, Colleagues designers are available on demand." },
        { q: "What about SEO?", a: "Every site generated by Create includes clean semantic HTML, structured data, optimized meta tags, image compression, and fast load times. Our AI Visibility service can further optimize your content for both traditional search engines and AI-powered discovery platforms." },
        { q: "Do I need a designer?", a: "Not for the initial launch. Create generates brand-consistent designs from your description or existing brand assets. When you want custom illustration, photography, or advanced UX, you can connect with vetted designers through the Colleagues network." },
        { q: "What platforms do you support?", a: "Create generates modern, framework-agnostic sites optimized for performance. If you have an existing WordPress, Drupal, or Webflow site, our migration tools and Colleagues developers can help you transition to a modern stack." },
        { q: "Can I build campaign landing pages after launch?", a: "Absolutely. One of the biggest advantages of Create is the ability to spin up purpose-built landing pages for campaigns, events, and promotions in minutes. No need to go back to engineering or an agency for every new campaign." },
      ]} />

      {/* Bottom CTA — dark band */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to launch
                <br />
                your marketing site?
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Describe your site and get a working version in minutes. Refine with experts when you need them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/websites/website-builder/start"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hire-experts/website-design"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "AI site generation from a simple text prompt",
                  "Managed hosting from $9.99/mo with SSL & backups",
                  "Expert designers available from the Colleagues network",
                  "AI Agents for ongoing content and social media",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-white font-medium text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
