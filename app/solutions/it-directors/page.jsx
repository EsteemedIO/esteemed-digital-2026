import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Globe,
  ShieldCheck,
  Users,
  Bot,
  Headphones,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Solutions for IT Directors | Esteemed",
  description:
    "Modernize infrastructure, augment teams on demand, and deploy AI-powered tools with enterprise-grade security.",
};

const features = [
  {
    icon: Globe,
    title: "Managed Cloud Infrastructure",
    description:
      "Esteemed Cloud provides hosting with built-in security, monitoring, and compliance -- reducing operational burden on your team.",
  },
  {
    icon: Cpu,
    title: "Internal Tool Builder",
    description:
      "Empower business users to build portals and dashboards with Create, freeing engineering cycles for core systems.",
  },
  {
    icon: Users,
    title: "On-Demand Engineers",
    description:
      "Scale your team for migrations, new projects, or production incidents with vetted engineers from the Colleagues network.",
  },
  {
    icon: Bot,
    title: "AI for IT Operations",
    description:
      "Esteemed Agents automate IT service desk tasks, monitor infrastructure, and provide self-service tools for your users.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "SOC 2-aligned controls, role-based access, and audit-ready reporting across all Esteemed tools and infrastructure.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Esteemed Support provides expert human help for anything running on our platform -- from Cloud to Create to custom tools.",
  },
];

const capabilities = [
  "Managed hosting with 99.9% uptime SLA",
  "Cloud migrations and infrastructure modernization",
  "Staff augmentation with vetted DevOps and engineering talent",
  "AI-powered IT service desk automation",
  "Auditable AI deployment with Intelligence",
  "Ongoing monitoring, patching, and incident response",
];

export default function ITDirectorsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              By Role
            </p>
            <h1 className="heading-3">For IT Directors</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Modernize infrastructure, augment your team on demand, and deploy
              AI-powered tools with enterprise-grade security.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/websites/hosting"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Explore Cloud
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/engineer-monitoring.webp"
              alt="IT director reviewing infrastructure"
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
          <h2 className="heading-2 mb-4">Deliver More With Less</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed helps IT teams reduce operational burden, modernize systems,
            and deploy AI in a controlled, auditable way.
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

      {/* Capabilities */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Enterprise IT Capabilities</h2>
            <p className="text-lg text-ink/70">
              Whether you are managing a cloud migration, scaling your team for a
              new initiative, or deploying AI across the organization, Esteemed
              has the tools and talent to support it.
            </p>
            <ul className="space-y-4">
              {capabilities.map((item) => (
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
              src="/images/segments/tech-team.webp"
              alt="Engineering team at work"
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
            Modernize your IT operations
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            See how Esteemed can help your team deliver more with less.
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
