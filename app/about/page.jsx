import Link from "next/link";
import { anchorReferences, heritage } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Built on 15 years of staffing the work. Esteemed App is part of the Esteemed family of companies.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Built on 15 years of staffing the work.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p className="text-lg">
            Esteemed App is the website-building product from Esteemed, a staffing company that's been placing IT professionals since 2011.
          </p>
          <p>
            The 35,000-person Esteemed Colleagues network powers everything we build. When you sign up, you're not just getting a website — you're getting access to vetted professionals our recruiting team has been curating for over a decade.
          </p>
          <p>
            This is the difference between us and other AI website builders: AI builds your first version, but real people are there to help you grow it. We've been a staffing company first and an AI company second, and that order matters.
          </p>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-12">Heritage</h2>
          <div className="space-y-8">
            {heritage.map((item) => (
              <div key={item.year} className="flex gap-8">
                <span className="text-xl font-bold text-ink w-20 flex-shrink-0">{item.year}</span>
                <p className="text-zinc-600 leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchor Clients */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Organizations we support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {anchorReferences.map((ref) => (
              <div key={ref.name} className="rounded-2xl border border-zinc-200 p-6">
                <p className="text-lg font-semibold text-ink">{ref.name}</p>
                <p className="text-sm text-zinc-500">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esteemed Colleagues Network */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-6">The Esteemed Colleagues network</h2>
          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              35,000 vetted IT professionals. Full-time recruiting infrastructure that's been running since 2015. When you need SEO, custom development, digital strategy, email marketing, or sales support, we don't subcontract to strangers — we pull from a pool our recruiters have been curating for over a decade.
            </p>
            <p>
              This is the operational moat. Any startup can wrap an AI model in a chat interface. Not everyone has 15 years of recruiting infrastructure and 35,000 professionals ready to deliver on what the AI builds.
            </p>
          </div>
        </div>
      </section>

      {/* Drupal Community */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-6">Drupal community</h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            We've been active in the Drupal community since 2011. The Drupal Jobs board is still operated by Esteemed as a service to the community — no lead gen, no data extraction, just community goodwill. We believe in giving back to the ecosystem that got us here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">Want to talk?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Parent footnote */}
      <div className="py-6 text-center">
        <p className="text-xs text-zinc-400">Esteemed App is part of the Esteemed family of companies.</p>
      </div>
    </div>
  );
}
