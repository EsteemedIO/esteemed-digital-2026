import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BrainCircuit,
  FileCheck,
  Globe,
  BarChart3,
  Headphones,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Solutions for HR Teams | Esteemed",
  description:
    "Source vetted technical talent, streamline hiring workflows, and manage your contingent workforce at scale with Esteemed.",
};

const features = [
  {
    icon: Users,
    title: "Pre-Vetted Talent Network",
    description:
      "Access 35,000+ IT professionals our recruiting team has been vetting since 2015. Better candidates, faster placements.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Matching",
    description:
      "Esteemed Intelligence analyzes requirements, team dynamics, and project scope to surface the best-fit candidates automatically.",
  },
  {
    icon: FileCheck,
    title: "Streamlined Hiring Workflow",
    description:
      "From job posting and candidate screening to onboarding and payroll for contingent workers -- all in one platform.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description:
      "EOR and PEO services handle local labor laws, contracts, payroll, and benefits across 130+ countries.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Track hiring velocity, retention rates, and workforce composition with built-in Intelligence dashboards.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Support",
    description:
      "A dedicated team manages the relationship from requisition to placement to ongoing performance.",
  },
];

const engagementModels = [
  "Contract staffing for project-based needs",
  "Contract-to-hire with built-in evaluation periods",
  "Direct placement for permanent roles",
  "Managed teams for ongoing delivery",
  "Fractional leadership for strategic guidance",
  "Global EOR for international hiring without entities",
];

export default function HRTeamsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              By Role
            </p>
            <h1 className="heading-3">For HR Teams</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Source vetted technical talent, streamline hiring workflows, and
              manage your contingent workforce at scale.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/colleagues"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Explore Colleagues
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Talk to Recruiting
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="HR team reviewing candidates"
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
          <h2 className="heading-2 mb-4">Simplify Technical Hiring</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed combines a decade of recruiting expertise with AI to
            deliver better hires in less time.
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

      {/* Engagement Models */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Hiring workflow and talent matching"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Flexible Engagement Models</h2>
            <p className="text-lg text-ink/70">
              Whether you need to fill a single role or staff an entire project
              team, Esteemed scales with your needs and supports every
              engagement model.
            </p>
            <ul className="space-y-4">
              {engagementModels.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{item}</span>
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
            Simplify your hiring
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Access vetted technical talent through the Colleagues network.
          </p>
          <Link
            href="/products/colleagues"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Explore Colleagues
          </Link>
        </div>
      </section>
    </main>
  );
}
