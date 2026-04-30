import Link from "next/link";

export const metadata = {
  title: "Government, Education & Non-Profit | Esteemed",
  description:
    "Digital solutions for government agencies, schools, universities, and non-profit organizations. Accessible, compliant websites built by Esteemed.",
};

export default function GovernmentEducationNonProfitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Government, Education &amp; Non-Profit
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Public-serving organizations need websites that are accessible,
            secure, and easy to maintain. We help agencies, schools, and
            non-profits deliver digital services their communities can rely on.
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
                Build ADA-compliant websites, constituent portals, and program
                landing pages that meet Section 508 and WCAG standards.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Tap into professionals experienced with government RFPs, .edu
                platforms, and the unique requirements of mission-driven
                organizations.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Agents</h3>
              <p className="text-sm text-zinc-600">
                Automate event calendars, grant deadline reminders, and content
                publishing workflows to keep your public-facing information
                current.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                Ongoing accessibility audits, security patching, and uptime
                monitoring so your site serves constituents without interruption.
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
                Agency &amp; department sites
              </h3>
              <p className="text-sm">
                Multi-department sites with clear navigation, document
                libraries, and public notice sections that comply with
                government web standards.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                University &amp; school district portals
              </h3>
              <p className="text-sm">
                Admissions pages, course catalogs, and faculty directories built
                for easy content updates by non-technical staff.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-bold text-ink mb-2">
                Non-profit fundraising &amp; advocacy
              </h3>
              <p className="text-sm">
                Donation pages, volunteer sign-up flows, and campaign
                microsites that tell your story and drive action.
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
