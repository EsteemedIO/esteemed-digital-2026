import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BrainCircuit,
  FileCheck,
  Globe,
  BarChart3,
  Headphones,
  CheckCircle,
  ArrowRight,
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
      "Esteemed Intelligence analyzes requirements, team dynamics, and project scope to surface the best-fit candidates.",
  },
  {
    icon: FileCheck,
    title: "Streamlined Hiring",
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              By Role
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              For HR teams
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Source vetted technical talent, streamline hiring workflows, and
              manage your contingent workforce at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products/colleagues"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Explore Colleagues
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Talk to Recruiting
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="HR team reviewing candidates"
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
            Simplify technical hiring
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

      {/* Engagement models */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/talent-jobs.webp"
                alt="Hiring workflow and talent matching"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Flexible engagement models
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Whether you need to fill a single role or staff an entire project
                team, Esteemed scales with your needs and supports every
                engagement model.
              </p>
              <ul className="space-y-4">
                {engagementModels.map((item) => (
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
            Simplify your hiring
          </h2>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Explore Colleagues &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
