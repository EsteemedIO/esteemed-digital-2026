import Link from "next/link";

export const metadata = {
  title: "Professional & Business Services | Esteemed",
  description:
    "Digital solutions for consulting firms, law practices, accounting firms, and B2B service providers. Polished websites built by Esteemed.",
};

export default function ProfessionalAndBusinessServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Professional &amp; Business Services
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Your website is your first impression. We help consulting firms, law
            practices, accounting firms, and B2B service providers build digital
            presences that reflect the quality of their work.
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
                Build polished firm websites, service pages, and thought
                leadership blogs that establish authority and generate inbound
                leads.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Access designers and copywriters who understand professional
                branding and can translate complex services into clear
                messaging.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Agents</h3>
              <p className="text-sm text-zinc-600">
                Automate blog publishing, email newsletter sends, and SEO
                optimization so your marketing runs while you focus on clients.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                Ongoing performance tuning, uptime monitoring, and content
                updates handled by a team that understands your business.
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
                Consulting &amp; advisory firm sites
              </h3>
              <p className="text-sm">
                Case study showcases, team bios, and service breakdowns that
                communicate expertise and convert prospects into discovery
                calls.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Law firm &amp; accounting practice websites
              </h3>
              <p className="text-sm">
                Practice area pages, attorney or partner profiles, and client
                intake forms designed for trust, clarity, and local search
                visibility.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Thought leadership &amp; content marketing
              </h3>
              <p className="text-sm">
                Blog platforms, white paper download pages, and webinar
                registration flows that position your firm as an industry
                authority.
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
