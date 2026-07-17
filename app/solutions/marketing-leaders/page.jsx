import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  Zap,
  PenTool,
  BarChart3,
  Bot,
  Eye,
  CheckCircle,
  ArrowRight,
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              By Role
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              For marketing leaders
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Launch sites faster, hire creative talent on demand, and automate
              repetitive tasks with AI.
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
                href="/hire-experts/content-strategy"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Hire Content Experts
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/woman-working-coffee.webp"
              alt="Marketing leader planning a campaign"
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
            Move faster without sacrificing quality
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

      {/* Outcomes */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                What marketing teams achieve
              </h2>
              <ul className="space-y-4">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/colleagues-feature.webp"
                alt="Marketing team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Accelerate your marketing
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to Us &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
