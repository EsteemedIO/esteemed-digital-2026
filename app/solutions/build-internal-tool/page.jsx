import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Layout,
  ShieldCheck,
  Database,
  Bot,
  Users,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Build an Internal Tool | Esteemed",
  description:
    "Turn team workflows into lightweight apps with Esteemed Create. No engineering tickets, no months-long backlogs.",
};

const features = [
  {
    icon: Layout,
    title: "Drag-and-Drop Builder",
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
    title: "AI-Powered Automation",
    description:
      "Add Esteemed Agents to automate approvals, notifications, and data processing inside your tool.",
  },
  {
    icon: Users,
    title: "Expert Development Support",
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
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Use Case
            </p>
            <h1 className="heading-3">Build an Internal Tool</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Turn team workflows into lightweight apps without consuming
              engineering cycles. Ship in days, not quarters.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/websites/website-builder"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Start Building
              </Link>
              <Link
                href="/hire-experts"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Hire a Developer
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/engineer-monitoring.webp"
              alt="Engineer building an internal tool"
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
          <h2 className="heading-2 mb-4">Build Without the Backlog</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Esteemed gives non-technical teams the power to build, and technical
            teams the freedom to focus on core product.
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

      {/* Common Use Cases */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">What Teams Are Building</h2>
            <p className="text-lg text-ink/70">
              From HR to operations to client services, teams across every
              department use Esteemed to replace spreadsheets and manual
              processes with purpose-built tools.
            </p>
            <ul className="space-y-4">
              {useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{uc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/tech-team.webp"
              alt="Team using internal tools"
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
            Stop waiting on the backlog
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Build the tool your team needs today with Esteemed Create.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
