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
    icon: MessageSquare,
    title: "Describe your goal",
    description:
      "Tell us what you are building, who it is for, and what success looks like.",
  },
  {
    icon: Bot,
    title: "AI generates a starting point",
    description:
      "Esteemed Create builds your site, tool, or workflow in minutes using AI.",
  },
  {
    icon: Users,
    title: "Experts help you grow",
    description:
      "Connect with vetted professionals through Colleagues for design, strategy, and ongoing support.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block bg-zinc-100 px-6 py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Use Cases
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              What are you building?
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Whether you need to ship a marketing site this week or modernize a
              decade-old platform, Esteemed has the tools and talent to get it done.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <Link
                  key={uc.name}
                  href={uc.href}
                  className="group rounded-2xl border border-zinc-200 bg-white p-8 hover:border-zinc-400 transition-colors"
                >
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-ink mb-2">{uc.name}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
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
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-zinc-200 p-8 text-center"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-ink text-sm font-bold mx-auto mb-4">
                  {i + 1}
                </span>
                <step.icon
                  className="w-8 h-8 text-ink mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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
            Talk to our team and we will help you find the right approach.
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
