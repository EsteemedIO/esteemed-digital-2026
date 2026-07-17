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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block bg-zinc-100 px-6 py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              By Role
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Built for how you work
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Whatever your role, Esteemed combines AI tools with expert talent to
              help you move faster and deliver more.
            </p>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.name}
                  href={role.href}
                  className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-zinc-400 transition-colors"
                >
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-ink mb-2">{role.name}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {role.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500"
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
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            One platform, every team
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Marketing, engineering, HR, and leadership all work from the same
            Esteemed platform. Share intelligence, coordinate hiring, and launch
            projects together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              View Plans
            </Link>
            <Link
              href="/solutions/use-cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
            >
              Browse Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not sure where to start?
          </h2>
          <p className="text-zinc-400 mb-8">
            Talk to our team and we will match you with the right solution for
            your role.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
