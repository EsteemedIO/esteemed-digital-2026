import Link from "next/link";
import { Megaphone, Rocket, Cpu, Users } from "lucide-react";

export const metadata = {
  title: "Solutions by Role | Esteemed",
  description:
    "Explore how Esteemed serves marketing leaders, founders, IT directors, and HR teams with tailored tools and talent.",
};

const roles = [
  {
    icon: Megaphone,
    name: "Marketing Leaders",
    href: "/solutions/marketing-leaders",
    desc: "Launch pages and campaigns faster, hire creative talent on demand, and automate with AI agents trained on your brand.",
    highlights: ["AI Website Builder", "Content Production", "AI Agents"],
  },
  {
    icon: Rocket,
    name: "Founders",
    href: "/solutions/founders",
    desc: "Build your MVP, assemble your tech team, and scale your stack without the overhead of a full engineering org.",
    highlights: ["Create", "Colleagues", "Cloud"],
  },
  {
    icon: Cpu,
    name: "IT Directors",
    href: "/solutions/it-directors",
    desc: "Modernize infrastructure, augment teams on demand, and deploy AI tools with enterprise-grade security.",
    highlights: ["Cloud Hosting", "Intelligence", "Support"],
  },
  {
    icon: Users,
    name: "HR Teams",
    href: "/solutions/hr-teams",
    desc: "Source vetted technical talent, streamline hiring workflows, and manage your contingent workforce at scale.",
    highlights: ["Colleagues", "Hire ATS", "Intelligence"],
  },
];

export default function RolesPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:pt-36 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-4">
            By Role
          </p>
          <h1 className="heading-2 mb-6">Built for How You Work</h1>
          <p className="subtitle mx-auto max-w-2xl text-ink/70">
            Whatever your role, Esteemed combines AI tools with expert talent to
            help you move faster and deliver more.
          </p>
        </div>
      </section>

      {/* Role Cards */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.name}
                  href={role.href}
                  className="group rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg hover:border-ink/30"
                >
                  <span className="icon-badge icon-badge-lg mb-5">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{role.name}</h3>
                  <p className="text-ink/70 mb-4">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-ink/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">One Platform, Every Team</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-ink/60">
            Marketing, engineering, HR, and leadership all work from the same
            Esteemed platform. Share intelligence, coordinate hiring, and launch
            projects together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
            >
              View Plans
            </Link>
            <Link
              href="/solutions/use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
            >
              Browse Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Talk to our team and we will match you with the right solution for
            your role.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
