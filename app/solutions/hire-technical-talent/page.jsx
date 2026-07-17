import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BrainCircuit,
  Clock,
  ShieldCheck,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Hire Technical Talent | Esteemed",
  description:
    "Access 35,000+ vetted IT professionals through the Esteemed Colleagues network. AI-powered matching, flexible engagements, and global reach.",
};

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Matching",
    description:
      "Esteemed Intelligence analyzes your requirements, team dynamics, and project scope to surface the best-fit candidates.",
  },
  {
    icon: Users,
    title: "35,000+ Vetted Professionals",
    description:
      "Developers, designers, DevOps engineers, QA specialists, architects, and project managers -- pre-vetted since 2015.",
  },
  {
    icon: Clock,
    title: "Fast Time to Fill",
    description:
      "Skip the weeks of agency proposals and job board noise. Get matched with qualified candidates within days.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Hire across time zones with EOR support for international placements. Build distributed teams without compliance headaches.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Engagements",
    description:
      "Contract, contract-to-hire, or direct placement. Scale your workforce up or down as your business demands.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Track hiring velocity, retention, and team performance with built-in Intelligence dashboards.",
  },
];

const roles = [
  "Full-stack engineers and frontend developers",
  "Cloud architects and DevOps specialists",
  "UX/UI designers and product managers",
  "QA engineers and automation specialists",
  "Fractional CTOs and technical leadership",
  "Data engineers and machine learning specialists",
];

export default function HireTechnicalTalentPage() {
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
              Hire technical talent
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Access 35,000+ vetted IT professionals. AI-powered matching gets
              you the right person faster than any job board.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products/colleagues"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Browse Talent
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
              alt="Technical professionals collaborating"
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
            Smarter hiring, faster results
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

      {/* Roles we fill */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/talent-jobs.webp"
                alt="Talent search and matching"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Roles we fill
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Our recruiting infrastructure has been running since 2015. Whether
                you need one specialist or an entire project team, the Colleagues
                network has you covered.
              </p>
              <ul className="space-y-4">
                {roles.map((role) => (
                  <li key={role} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{role}</span>
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
            Find your next hire
          </h2>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
