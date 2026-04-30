import Link from "next/link";

export const metadata = {
  title: "Construction | Esteemed",
  description:
    "Digital solutions for construction firms, contractors, and building trades. Modern websites and automation built by Esteemed.",
};

export default function ConstructionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Construction
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            The construction industry is going digital. We help general
            contractors, specialty trades, and building firms establish a
            professional web presence that wins bids and builds trust.
          </p>
        </div>
      </section>

      {/* How Esteemed Helps */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">
            How Esteemed helps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Create</h3>
              <p className="text-sm text-zinc-600">
                Build project portfolio sites, bid request forms, and safety
                compliance pages that showcase your capabilities.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Access developers and designers who understand the construction
                industry and can integrate with project management tools.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Agents</h3>
              <p className="text-sm text-zinc-600">
                Automate lead capture, project update emails, and content
                publishing so your office team stays focused on active jobs.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                Reliable hosting and quick-response support, because your site
                needs to be up when a project owner is evaluating subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">Use cases</h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Project portfolio sites
              </h3>
              <p className="text-sm">
                Showcase completed builds with photo galleries, client
                testimonials, and project specs that help you win new contracts.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Bid &amp; RFP intake forms
              </h3>
              <p className="text-sm">
                Structured intake forms that capture project details, timelines,
                and budgets — routed directly to your estimating team.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Safety &amp; compliance portals
              </h3>
              <p className="text-sm">
                Publish certifications, insurance documentation, and OSHA
                compliance records in a professional, easily accessible format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to build something Esteemed?
          </h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}
