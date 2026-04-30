import Link from "next/link";

export const metadata = {
  title: "Business Resource Center",
  description: "Guides, whitepapers, and tools to help you build better websites, hire smarter, and grow your business with Esteemed.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Business Resource Center
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Guides, whitepapers, and tools to help you build better websites, hire smarter, and grow your business.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/blog/career-catalyst" className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-2">Career Catalyst Blog</h3>
              <p className="text-sm text-zinc-500">Career-focused insights and stories from the Esteemed community.</p>
            </Link>
            <Link href="/newsroom" className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-2">Newsroom</h3>
              <p className="text-sm text-zinc-500">Press releases and company updates.</p>
            </Link>
            <Link href="/resources/events" className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-2">Events</h3>
              <p className="text-sm text-zinc-500">Upcoming webinars, meetups, and conferences.</p>
            </Link>
            <Link href="/help" className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-2">Documentation</h3>
              <p className="text-sm text-zinc-500">Guides and technical docs for all Esteemed products.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need help choosing the right solution?</h2>
          <p className="text-zinc-400 mb-8">Our team can guide you to the right products and services for your needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
