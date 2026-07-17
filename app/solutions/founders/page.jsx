import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Zap,
  Users,
  Globe,
  Headphones,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Founders | Esteemed",
  description:
    "Launch MVPs, build your tech team, and scale your stack without the overhead of a full engineering org.",
};

const features = [
  {
    icon: Zap,
    title: "MVP in Minutes",
    description:
      "Esteemed Create builds your first product or website with AI so you can validate ideas before writing a single line of code.",
  },
  {
    icon: Globe,
    title: "Instant Deployment",
    description:
      "Publish to Esteemed Cloud with one click. SSL, CDN, and managed infrastructure included from day one.",
  },
  {
    icon: Users,
    title: "Hire Your First Team",
    description:
      "Colleagues gives you access to 35,000+ vetted professionals -- fractional or full-time, depending on your stage and budget.",
  },
  {
    icon: TrendingUp,
    title: "Scale-Up Support",
    description:
      "Ramp hiring as you close funding rounds. Esteemed handles recruiting, payroll, and compliance so you can focus on product.",
  },
  {
    icon: Headphones,
    title: "Fractional Leadership",
    description:
      "Access fractional CTOs, architects, and technical advisors without the cost of a full-time executive hire.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Services",
    description:
      "From website design to content strategy to SEM, Esteemed experts cover the services founders typically cobble together from five vendors.",
  },
];

const milestones = [
  "Validate your idea with a working prototype in days",
  "Launch a professional website without hiring a developer",
  "Hire your first engineer from a pre-vetted network",
  "Get fractional CTO guidance without full-time overhead",
  "Scale your team from seed stage through Series A and beyond",
  "Access ongoing support as your product and team grow",
];

export default function FoundersPage() {
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
              For founders
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Launch MVPs, build your tech team, and scale your stack -- without
              the overhead of a full engineering org.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/websites/website-builder/start"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/colleagues"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Find Talent
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/office-worker.webp"
              alt="Founder building their startup"
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
            From idea to scale
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

      {/* Milestones */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/colleagues-exp.webp"
                alt="Startup team collaborating"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Milestones we help with
              </h2>
              <ul className="space-y-4">
                {milestones.map((item) => (
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Build your vision
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
