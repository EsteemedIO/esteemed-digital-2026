import Link from "next/link";
import {
  Rocket,
  Wrench,
  Users,
  RefreshCw,
  MessageSquare,
  Bot,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Solutions by Use Case | Esteemed",
  description:
    "Launch marketing sites, build internal tools, hire technical talent, and modernize legacy systems with Esteemed.",
};

const useCases = [
  {
    icon: Rocket,
    name: "Launch a Marketing Site",
    href: "/solutions/launch-marketing-site",
    desc: "Go from idea to live site in minutes with AI, then grow it with expert support.",
    products: ["Create", "Cloud", "Agents"],
  },
  {
    icon: Wrench,
    name: "Build an Internal Tool",
    href: "/solutions/build-internal-tool",
    desc: "Turn team workflows into lightweight apps without consuming engineering cycles.",
    products: ["Create", "Cloud", "Intelligence"],
  },
  {
    icon: Users,
    name: "Hire Technical Talent",
    href: "/solutions/hire-technical-talent",
    desc: "Access 35,000+ vetted professionals through the Colleagues network.",
    products: ["Colleagues", "Hire", "Intelligence"],
  },
  {
    icon: RefreshCw,
    name: "Modernize a Legacy Site",
    href: "/solutions/modernize-legacy-site",
    desc: "Migrate older sites to a faster, modern stack with expert guidance.",
    products: ["Create", "Cloud", "Colleagues"],
  },
];

const steps = [
  {
    number: "01",
    title: "Describe your goal",
    desc: "Tell us what you are building, who it is for, and what success looks like.",
  },
  {
    number: "02",
    title: "AI generates a starting point",
    desc: "Esteemed Create builds your site, tool, or workflow in minutes using AI.",
  },
  {
    number: "03",
    title: "Experts help you grow",
    desc: "Connect with vetted professionals through Colleagues for design, strategy, and ongoing support.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block bg-zinc-100 px-6 py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Use Cases
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              What are you building?
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed max-w-lg mx-auto">
              Whether you need to ship a marketing site this week or modernize a
              decade-old platform, Esteemed has the tools and talent to get it done.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <Link
                  key={uc.name}
                  href={uc.href}
                  className="group bg-white rounded-xl border border-zinc-200 p-8 hover:border-zinc-400 transition-colors"
                >
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-ink mb-2">{uc.name}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    {uc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uc.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              How it works
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Every use case follows the same pattern: AI builds the first
              version, humans refine and scale it.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-extrabold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Not sure where to start?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
