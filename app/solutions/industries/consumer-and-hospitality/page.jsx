import Link from "next/link";

export const metadata = {
  title: "Consumer & Hospitality | Esteemed",
  description:
    "Digital solutions for consumer brands, retail, restaurants, and hospitality companies. Build standout experiences with Esteemed.",
};

export default function ConsumerAndHospitalityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Consumer &amp; Hospitality
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Your customers expect seamless digital experiences. We help consumer
            brands, retailers, and hospitality companies build fast, beautiful
            websites that convert visitors into loyal customers.
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
                Launch branded storefronts, loyalty program portals, and
                campaign landing pages in days instead of months.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Staff up with vetted developers, designers, and digital
                marketers who understand consumer engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Agents</h3>
              <p className="text-sm text-zinc-600">
                Automate SEO, social scheduling, and content updates so your
                team can focus on the guest experience.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                Get ongoing monitoring, security patches, and performance
                optimization to keep your site fast during peak seasons.
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
                Restaurant &amp; hotel websites
              </h3>
              <p className="text-sm">
                Mobile-first sites with online reservations, menus, and location
                finders that load instantly and rank well in local search.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                E-commerce &amp; DTC brands
              </h3>
              <p className="text-sm">
                High-performance product pages, checkout flows, and promotional
                landing pages that drive conversion during seasonal campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Loyalty &amp; membership portals
              </h3>
              <p className="text-sm">
                Authenticated customer portals that tie into your CRM and reward
                systems, built to scale with your growing member base.
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
