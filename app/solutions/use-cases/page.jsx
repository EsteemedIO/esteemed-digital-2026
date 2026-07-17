import Image from "next/image";
import Link from "next/link";
import { Rocket, Wrench, Users, RefreshCw } from "lucide-react";

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

export default function UseCasesPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:pt-36 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-4">
            Use Cases
          </p>
          <h1 className="heading-2 mb-6">What Are You Building?</h1>
          <p className="subtitle mx-auto max-w-2xl text-ink/70">
            Whether you need to ship a marketing site this week or modernize a
            decade-old platform, Esteemed has the tools and talent to get it
            done.
          </p>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <Link
                  key={uc.name}
                  href={uc.href}
                  className="group rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg hover:border-ink/30"
                >
                  <span className="icon-badge icon-badge-lg mb-5">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{uc.name}</h3>
                  <p className="text-ink/70 mb-4">{uc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {uc.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-ink/60"
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

      {/* How It Works */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Every use case follows the same pattern: AI builds the first
            version, humans refine and scale it.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Describe your goal",
                desc: "Tell us what you are building, who it is for, and what success looks like.",
              },
              {
                step: "02",
                title: "AI generates a starting point",
                desc: "Esteemed Create builds your site, tool, or workflow in minutes using AI.",
              },
              {
                step: "03",
                title: "Experts help you grow",
                desc: "Connect with vetted professionals through Colleagues for design, strategy, and ongoing support.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-ink font-bold text-lg mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-ink/70">{s.desc}</p>
              </div>
            ))}
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
            Talk to our team and we will help you find the right approach.
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
