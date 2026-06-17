import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Users,
  BrainCircuit,
  Cloud,
  Zap,
  Code,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Built for Startups | Esteemed",
  description:
    "Launch faster with AI-powered tools and on-demand talent. Esteemed gives startups the infrastructure to build, hire, and scale without the overhead.",
};

const features = [
  {
    icon: Code,
    title: "Create",
    description:
      "Build and deploy your first product in minutes with AI-powered site and app generation. Validate ideas before writing a line of code.",
    href: "/products/create",
  },
  {
    icon: Users,
    title: "Colleagues",
    description:
      "Access 35,000+ vetted professionals on demand. Hire a fractional CTO, a contract developer, or a full project team.",
    href: "/products/colleagues",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    description:
      "AI-powered insights that help you make smarter decisions about hiring, technology, and growth strategy.",
    href: "/products/intelligence",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Managed hosting that scales with you — no DevOps overhead. Start small and grow without re-platforming.",
    href: "/products/cloud",
  },
];

const benefits = [
  "Launch an MVP in days, not months",
  "Hire fractional talent at any stage",
  "AI handles the heavy lifting so you focus on customers",
  "Infrastructure that scales from seed to Series C",
  "Founder-friendly pricing and engagement models",
  "Dedicated support from a team that has backed startups since 2011",
];

export default function StartupsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Startups
            </p>
            <h1 className="heading-3">Built for Startups</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Launch faster with AI-powered tools and on-demand talent. Esteemed
              gives startups the infrastructure to build, hire, and scale without
              the overhead.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/tech-team.webp"
              alt="Startup team collaborating"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">Everything You Need to Launch</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            From idea to product-market fit, Esteemed gives you the building
            blocks to move fast and stay lean.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.title}
                  href={f.href}
                  className="group rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg"
                >
                  <span className="icon-badge icon-badge-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-ink/70">{f.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink/50 transition group-hover:text-ink">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Startups Choose Esteemed ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Why Startups Choose Esteemed</h2>
            <p className="text-lg text-ink/70">
              We have been supporting startups and small businesses since 2011.
              We understand the constraints you work within, and our platform is
              designed to be founder-friendly from day one.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Talent and jobs platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Platform ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">One Platform, Every Stage</h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-ink/60">
            Whether you are pre-revenue or scaling past Series B, Esteemed grows
            with you — no re-platforming, no surprise costs.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Rocket,
                stage: "Pre-Seed to Seed",
                text: "Build your MVP with Create and deploy on Cloud. No engineers needed yet.",
              },
              {
                icon: Zap,
                stage: "Seed to Series A",
                text: "Hire your first engineers and designers through Colleagues. Scale your product.",
              },
              {
                icon: BarChart3,
                stage: "Series A and Beyond",
                text: "Full workforce management, managed services, and enterprise-grade infrastructure.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.stage}
                  className="rounded-2xl border border-neutral-200 bg-paper p-8"
                >
                  <span className="icon-badge icon-badge-lg mx-auto mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{s.stage}</h3>
                  <p className="text-ink/70">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Start building today
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Create your first project free with Esteemed Create. No credit card
            required.
          </p>
          <Link
            href="/signup"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
