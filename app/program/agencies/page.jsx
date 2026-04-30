import Link from "next/link";

export const metadata = {
  title: "Agency Program",
  description: "Smart workforce solutions for agencies. Access pre-vetted talent and streamline hiring with Esteemed.",
};

export default function AgencyProgramPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed for Agencies
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Smart workforce solutions for agencies. Access pre-vetted professionals and seamless hiring solutions to scale on demand.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Why Agencies Choose Esteemed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Pre-Vetted Talent", desc: "Access 35,000+ professionals our recruiting team has been curating for over a decade." },
              { title: "Scale on Demand", desc: "Ramp up or down seamlessly without the overhead of traditional hiring." },
              { title: "AI-Powered Tools", desc: "Use Esteemed Create and Agents to accelerate delivery for your clients." },
              { title: "White-Label Ready", desc: "Deliver enterprise-grade solutions under your own brand." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-ink mb-4">How It Works</h2>
          <p>
            The Esteemed Agency Program combines talent acquisition, global hiring capabilities, and AI-driven development tools to help creative and tech agencies grow efficiently. Whether you need a single developer for a project or an entire team, our platform streamlines the process from sourcing to onboarding.
          </p>
          <p>
            Leverage <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> to prototype client projects in minutes, then scale with <Link href="/products/colleagues" className="text-blue-600 hover:underline">Colleagues</Link> when you need human expertise to bring it across the finish line.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your agency?</h2>
          <p className="text-zinc-400 mb-8">Join our agency partner program and unlock on-demand talent.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
