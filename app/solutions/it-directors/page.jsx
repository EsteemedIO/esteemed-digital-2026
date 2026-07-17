import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Globe,
  ShieldCheck,
  Users,
  Bot,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Solutions for IT Directors | Esteemed",
  description:
    "Modernize infrastructure, augment teams on demand, and deploy AI-powered tools with enterprise-grade security.",
};

const features = [
  {
    icon: Globe,
    title: "Managed Cloud",
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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              By Role
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              For IT directors
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Modernize infrastructure, augment your team on demand, and deploy
              AI-powered tools with enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/websites/hosting"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Explore Cloud
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/engineer-monitoring.webp"
              alt="IT director reviewing infrastructure"
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
            Deliver more with less
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

      {/* Capabilities */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Enterprise IT capabilities
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Whether you are managing a cloud migration, scaling your team for a
                new initiative, or deploying AI across the organization, Esteemed
                has the tools and talent to support it.
              </p>
              <ul className="space-y-4">
                {capabilities.map((item) => (
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
                src="/images/segments/tech-team.webp"
                alt="Engineering team at work"
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
            Modernize your IT operations
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Schedule a Demo &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
