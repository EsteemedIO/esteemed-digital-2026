import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Palette,
  Globe,
  BarChart3,
  Bot,
  Zap,
  Check,
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
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Use Case
            </p>
            <h1 className="heading-3">Launch a Marketing Site</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Go from idea to live marketing site in minutes. AI builds the
              first version, real experts help you grow it.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/websites/website-builder"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Try Create Free
              </Link>
              <Link
                href="/hire-experts/website-design"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Hire a Designer
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing professional building a website"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">Everything You Need to Launch</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            From first draft to ongoing growth, Esteemed covers the full
            lifecycle of your marketing site.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg"
                >
                  <span className="icon-badge icon-badge-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-ink/70">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-feature.webp"
              alt="Team collaborating on a marketing site"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">From Idea to Live in Five Steps</h2>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Ready to launch?
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Start building your marketing site today with Esteemed Create.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
