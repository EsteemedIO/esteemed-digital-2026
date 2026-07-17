import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Layout,
  ShieldCheck,
  Database,
  Bot,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Build an Internal Tool | Esteemed",
  description:
    "Turn team workflows into lightweight apps with Esteemed Create. No engineering tickets, no months-long backlogs.",
};

const features = [
  {
    icon: Layout,
    title: "Visual Builder",
    description:
      "Esteemed Create lets business users design forms, dashboards, and portals visually -- no code required.",
  },
  {
    icon: Database,
    title: "Connect Your Data",
    description:
      "Pull from existing databases, APIs, and spreadsheets. Intelligence provides shared memory and context across tools.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description:
      "Deploy on Esteemed Cloud with role-based access, SSL, and enterprise-grade infrastructure controls.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Add Esteemed Agents to automate approvals, notifications, and data processing inside your tool.",
  },
  {
    icon: Users,
    title: "Expert Dev Support",
    description:
      "Need custom logic or integrations? Colleagues engineers can extend your tool without disrupting your core team.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    description:
      "Esteemed Support plans keep your internal tools updated, monitored, and running smoothly.",
  },
];

const useCases = [
  "Employee onboarding portals and checklists",
  "Project intake forms with automated routing",
  "Internal knowledge bases and documentation hubs",
  "Client-facing status dashboards",
  "Inventory and asset tracking tools",
  "Approval workflows for procurement and expenses",
];

export default function BuildInternalToolPage() {
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
              Build an internal tool
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Turn team workflows into lightweight apps without consuming
              engineering cycles. Ship in days, not quarters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/websites/website-builder"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hire-experts"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Hire a Developer
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/engineer-monitoring.webp"
              alt="Engineer building an internal tool"
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
            Build without the backlog
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

      {/* What teams are building */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                What teams are building
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                From HR to operations to client services, teams across every
                department use Esteemed to replace spreadsheets and manual
                processes with purpose-built tools.
              </p>
              <ul className="space-y-4">
                {useCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/tech-team.webp"
                alt="Team using internal tools"
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
            Stop waiting on the backlog
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
