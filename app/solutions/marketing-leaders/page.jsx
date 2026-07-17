import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  Zap,
  PenTool,
  BarChart3,
  Bot,
  Eye,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Marketing Leaders | Esteemed",
  description:
    "Launch sites faster, hire creative talent on demand, and automate with AI agents trained on your brand voice.",
};

const features = [
  {
    icon: Zap,
    title: "Launch Pages in Minutes",
    description:
      "Esteemed Create lets your team spin up landing pages, microsites, and campaign pages with AI -- no engineering tickets required.",
  },
  {
    icon: PenTool,
    title: "On-Demand Creative Talent",
    description:
      "Colleagues connects you with vetted designers, copywriters, and content strategists who can hit the ground running.",
  },
  {
    icon: Bot,
    title: "AI Agents for Marketing",
    description:
      "Automate content updates, social media publishing, and customer engagement with agents trained on your brand voice.",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description:
      "Track performance across pages and campaigns with Intelligence dashboards. See what is working and where to invest.",
  },
  {
    icon: Eye,
    title: "AI Visibility & SEO",
    description:
      "Make your brand discoverable in both traditional search and AI-powered discovery with our AI Visibility service.",
  },
  {
    icon: Megaphone,
    title: "Content at Scale",
    description:
      "Combine AI content generation with expert editorial oversight for blogs, emails, social posts, and thought leadership.",
  },
];

const outcomes = [
  "Ship campaign pages in days instead of weeks",
  "Reduce dependency on engineering for marketing site changes",
  "Maintain brand consistency across every digital touchpoint",
  "Automate repetitive content and social media tasks",
  "Access specialized creative talent without agency retainers",
  "Justify ROI with built-in performance tracking",
];

export default function MarketingLeadersPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              By Role
            </p>
            <h1 className="heading-3">For Marketing Leaders</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Launch sites faster, hire creative talent on demand, and automate
              repetitive tasks with AI.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/websites/website-builder"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Try Create Free
              </Link>
              <Link
                href="/hire-experts/content-strategy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Hire Content Experts
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing leader planning a campaign"
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
          <h2 className="heading-2 mb-4">Move Faster Without Sacrificing Quality</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed gives marketing teams the tools and talent to ship
            campaigns quickly and maintain brand consistency.
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

      {/* Outcomes */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">What Marketing Teams Achieve</h2>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-feature.webp"
              alt="Marketing team collaborating"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Accelerate your marketing
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            See how Esteemed can help your team ship faster.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
