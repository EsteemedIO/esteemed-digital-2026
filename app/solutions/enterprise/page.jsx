import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  Heart,
  Settings,
  Globe,
  Headphones,
  Check,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  Users,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Global Enterprise Solutions | Esteemed",
  description:
    "Grow your business with integrated talent and HR solutions. Source, hire, and pay employees and contractors in 130 countries.",
};

const features = [
  {
    icon: UserCheck,
    title: "Talent Acquisition",
    description:
      "AI-powered sourcing and matching across a network of 20,000+ vetted professionals. Fill roles faster with better quality candidates.",
  },
  {
    icon: Heart,
    title: "Employee Experience",
    description:
      "Seamless onboarding, benefits administration, and engagement tools that keep your workforce productive and retained.",
  },
  {
    icon: Settings,
    title: "Talent Management",
    description:
      "Performance tracking, skills mapping, and workforce planning tools that scale across your organization.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description:
      "EOR and PEO services in 130+ countries. We handle local labor laws, payroll, taxes, and benefits so you can focus on growth.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description:
      "End-to-end workforce management, IT operations, and digital services delivered by dedicated teams aligned to your goals.",
  },
];

const globalBullets = [
  {
    title: "Employer of Record (EOR)",
    description:
      "Hire employees in 130+ countries without establishing local entities. We handle contracts, payroll, and compliance.",
  },
  {
    title: "Professional Employer Organization (PEO)",
    description:
      "Co-employment services that reduce administrative burden while keeping you in control of your workforce.",
  },
  {
    title: "Process Optimization",
    description:
      "AI-driven workflow automation and process improvement that reduces costs and accelerates outcomes.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "A single point of contact who understands your business and ensures alignment across all Esteemed services.",
  },
];

const scaleBullets = [
  "Community of 20,000+ vetted professionals",
  "Hire and pay in 130+ countries",
  "SOC 2-aligned security controls",
  "Enterprise SLAs with dedicated infrastructure",
  "Full EOR/PEO compliance coverage",
  "AI-powered candidate matching and workforce analytics",
];

const trustedBy = [
  "NY Life Insurance",
  "Alvernia University",
  "Astound Broadband",
];

export default function EnterprisePage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Enterprise
            </p>
            <h1 className="heading-3">Global Enterprise Solutions</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Grow your business with integrated talent and HR solutions. Source,
              hire, and pay employees and contractors in 130 countries.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Contact Enterprise Sales
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                View Plans
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/office-worker.webp"
              alt="Enterprise professional"
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
          <h2 className="heading-2 mb-4">Enterprise-Grade Capabilities</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            A complete workforce platform that meets the security, compliance,
            and scalability requirements of global organizations.
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

      {/* ── Global Operations ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-feature.webp"
              alt="Global team collaboration"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Global Workforce Operations</h2>
            <ul className="space-y-6">
              {globalBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="icon-badge icon-badge-md mt-1">
                    <Globe className="h-3.5 w-3.5" />
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

      {/* ── Why Enterprise Chooses Esteemed ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Why Enterprises Choose Esteemed</h2>
            <p className="text-lg text-ink/70">
              Esteemed has been staffing enterprise IT organizations since 2011.
              Our platform combines AI-powered recruitment with human expertise
              to deliver results at scale.
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
              src="/images/segments/talent-jobs.webp"
              alt="Enterprise talent platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">Trusted by Leading Organizations</h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-ink/60">
            From Fortune 500 companies to government agencies, Esteemed delivers
            workforce solutions that meet the highest standards.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {trustedBy.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
              >
                <span className="text-lg font-bold text-ink/60">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Enterprise solutions, tailored to you
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Talk to our enterprise team about your organization's workforce and
            technology needs.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Contact Enterprise Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
