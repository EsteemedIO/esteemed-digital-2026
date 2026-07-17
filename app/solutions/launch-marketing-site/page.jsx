import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Palette,
  Globe,
  BarChart3,
  Bot,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Launch a Marketing Site | Esteemed",
  description:
    "Go from idea to live marketing site in minutes with Esteemed Create. AI builds the first version, real experts help you grow it.",
};

const features = [
  {
    icon: Zap,
    title: "AI-Powered Site Generation",
    description:
      "Describe your brand and goals. Esteemed Create generates pages, copy, and layout in minutes -- no engineering tickets required.",
  },
  {
    icon: Globe,
    title: "One-Click Publishing",
    description:
      "Deploy instantly on Esteemed Cloud with managed hosting, SSL, CDN, and automatic backups built in.",
  },
  {
    icon: Palette,
    title: "Expert Design Support",
    description:
      "Need custom design or brand refinement? Connect with vetted designers through Colleagues who can take your site to the next level.",
  },
  {
    icon: BarChart3,
    title: "SEO & AI Visibility",
    description:
      "Built-in SEO fundamentals plus AI Visibility services so your site ranks in both traditional search and AI-powered discovery.",
  },
  {
    icon: Bot,
    title: "AI Content Agents",
    description:
      "Esteemed Agents maintain your content, publish blog posts, and manage social media -- trained on your brand voice.",
  },
  {
    icon: Rocket,
    title: "Campaign Pages on Demand",
    description:
      "Spin up landing pages for campaigns, events, and product launches without waiting on dev teams.",
  },
];

const steps = [
  "Describe your site in plain language or upload a brief",
  "Create generates a responsive, SEO-ready site in minutes",
  "Publish to Cloud with one click -- SSL and CDN included",
  "Refine with expert designers and content strategists from Colleagues",
  "Scale with AI Agents for content, social, and engagement",
];

export default function LaunchMarketingSitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Use Case
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Launch a marketing site
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Go from idea to live marketing site in minutes. AI builds the
              first version, real experts help you grow it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/websites/website-builder"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Try Create free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hire-experts/website-design"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Hire a Designer
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing professional building a website"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            Everything you need to launch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-zinc-200 p-8"
                >
                  <Icon
                    className="w-8 h-8 text-ink mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/colleagues-feature.webp"
                alt="Team collaborating on a marketing site"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                From idea to live in five steps
              </h2>
              <ul className="space-y-4">
                {steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to launch?
          </h2>
          <Link
            href="/websites/website-builder/start"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started Free &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
