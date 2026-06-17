import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Settings,
  BarChart3,
  Check,
  ArrowRight,
  Layers,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Mid-Market Solutions | Esteemed",
  description:
    "Growing companies need flexible talent and scalable technology. Esteemed provides the platform to hire smarter, manage workforce operations, and accelerate growth.",
};

const features = [
  {
    icon: Users,
    title: "Scalable Hiring",
    description:
      "Ramp up or scale down your workforce with on-demand access to 35,000+ vetted professionals. Contract, contract-to-hire, or direct placement.",
  },
  {
    icon: Settings,
    title: "Workforce Management",
    description:
      "Centralize onboarding, time tracking, project management, and offboarding in one platform built for growing teams.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk",
    description:
      "Stay ahead of labor laws, benefits regulations, and data privacy requirements with built-in compliance monitoring.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Recruitment",
    description:
      "Machine learning algorithms match candidates to roles faster and more accurately, reducing time-to-fill and improving quality of hire.",
  },
];

const operationsBullets = [
  {
    title: "Integrated ATS & Sourcing",
    description:
      "Post jobs, source candidates, and manage your pipeline from a single dashboard.",
  },
  {
    title: "Automated Onboarding",
    description:
      "Streamline new hire paperwork, background checks, and first-day setup in one workflow.",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track hiring velocity, workforce costs, and team performance with live dashboards.",
  },
  {
    title: "Employer of Record",
    description:
      "Hire in new markets without establishing local entities. We handle payroll, taxes, and benefits.",
  },
];

const scaleBullets = [
  "Reduce time-to-hire by up to 60% with AI matching",
  "Eliminate compliance gaps across multi-state operations",
  "Consolidate vendors into a single workforce platform",
  "Access fractional leadership and specialized talent on demand",
  "Scale from 50 to 500 employees without changing systems",
];

export default function MidMarketPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Mid-Market
            </p>
            <h1 className="heading-3">Mid-Market Solutions</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Growing companies need flexible talent and scalable technology.
              Esteemed provides the platform to hire smarter, manage workforce
              operations, and accelerate growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-feature.webp"
              alt="Mid-market team collaboration"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">Built for Growing Companies</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Enterprise capabilities without enterprise complexity. The tools you
            need to scale your workforce and operations.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── Streamlined Operations ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Talent and jobs platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Streamlined Workforce Operations</h2>
            <ul className="space-y-6">
              {operationsBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="icon-badge icon-badge-md mt-1">
                    <ClipboardCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="text-ink/70">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Scale With Confidence ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Scale With Confidence</h2>
            <p className="text-lg text-ink/70">
              Mid-market companies face enterprise complexity without enterprise
              resources. Esteemed bridges that gap with a unified platform that
              grows with you.
            </p>
            <ul className="space-y-4">
              {scaleBullets.map((b) => (
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
              src="/images/segments/colleagues-exp.webp"
              alt="Colleagues experience"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Platform Integrations ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">One Platform, Complete Control</h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-ink/60">
            Consolidate your workforce tech stack into one platform that handles
            hiring, management, compliance, and analytics.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Layers,
                title: "Unified Workforce Platform",
                text: "Hiring, onboarding, payroll, and management in one place.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                text: "Real-time analytics and reporting on workforce performance and costs.",
              },
              {
                icon: TrendingUp,
                title: "Growth-Ready",
                text: "Built to scale from 50 to 5,000 employees without switching tools.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
                >
                  <span className="icon-badge icon-badge-lg mx-auto mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
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
            Scale smarter with Esteemed
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            See how Esteemed helps mid-market companies do more with less.
            Schedule a personalized demo today.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
