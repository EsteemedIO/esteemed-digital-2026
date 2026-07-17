import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BrainCircuit,
  Clock,
  ShieldCheck,
  Globe,
  BarChart3,
  Check,
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
      "Esteemed Intelligence analyzes your requirements, team dynamics, and project scope to surface the best-fit candidates automatically.",
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
      "Skip the weeks of agency proposals and job board noise. Get matched with qualified candidates within days, not months.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Hire across time zones with EOR support for international placements. Build distributed teams without compliance headaches.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Engagement Models",
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
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Use Case
            </p>
            <h1 className="heading-3">Hire Technical Talent</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Access 35,000+ vetted IT professionals. AI-powered matching gets
              you the right person faster than any job board.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/colleagues"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Browse Talent
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
              alt="Technical professionals collaborating"
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
          <h2 className="heading-2 mb-4">Smarter Hiring, Faster Results</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed combines a decade of recruiting expertise with AI-powered
            tools to deliver better matches in less time.
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

      {/* Roles */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Roles We Fill</h2>
            <p className="text-lg text-ink/70">
              Our recruiting infrastructure has been running since 2015. Whether
              you need one specialist or an entire project team, the Colleagues
              network has you covered.
            </p>
            <ul className="space-y-4">
              {roles.map((role) => (
                <li key={role} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Talent search and matching"
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
            Find your next hire
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Search the Colleagues network or tell us what you need.
          </p>
          <Link
            href="/products/colleagues"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
