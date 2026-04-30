import Link from "next/link";

export const metadata = {
  title: "Financial Services | Esteemed",
  description:
    "Digital solutions for banks, fintech, insurance, and financial advisory firms. Secure, compliant websites built by Esteemed.",
};

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Financial Services
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Trust starts with your digital presence. We help banks, fintech
            startups, insurance companies, and advisory firms build secure,
            compliant websites that inspire confidence.
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
                Launch client portals, product landing pages, and investor
                relations sites with enterprise-grade security baked in.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Staff projects with developers experienced in financial services
                compliance, ADA accessibility, and secure application
                architecture.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Agents</h3>
              <p className="text-sm text-zinc-600">
                Automate regulatory content updates, rate-table publishing, and
                lead nurture workflows without manual intervention.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                24/7 monitoring, SSL management, and rapid incident response to
                meet the uptime expectations of financial customers.
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
                Client onboarding portals
              </h3>
              <p className="text-sm">
                Secure, branded portals for account opening, document
                collection, and KYC workflows that reduce friction and improve
                conversion.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Investor relations sites
              </h3>
              <p className="text-sm">
                Publish earnings reports, SEC filings, and shareholder
                communications on a fast, accessible, and always-current
                platform.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Product &amp; rate comparison pages
              </h3>
              <p className="text-sm">
                Dynamic pages for mortgage rates, insurance quotes, and
                financial product comparisons that update automatically and rank
                in search.
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
