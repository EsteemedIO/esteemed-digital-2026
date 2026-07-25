import Link from "next/link";

export const metadata = {
  title: "Events",
  description: "Upcoming webinars, meetups, and conferences hosted or sponsored by Esteemed.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Events
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Upcoming webinars, meetups, and conferences hosted or sponsored by Esteemed.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-zinc-500 text-center py-12">No upcoming events at this time. Check back soon or join our Discord community to stay in the loop.</p>
          <div className="text-center">
            <a
              href="https://discord.gg/esteemed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-sm font-semibold text-ink hover:border-zinc-400 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">Want to host an event with us?</h2>
          <p className="text-zinc-700 mb-8">We partner with organizations for webinars, workshops, and community events.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
