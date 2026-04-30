import Link from "next/link";

export const metadata = {
  title: "Newsroom",
  description: "The latest news, press releases, and company updates from Esteemed.",
};

const pressReleases = [
  {
    date: "2026",
    title: "Esteemed Launches U.S. Franchise Program for AI-Enabled Staffing",
    summary: "Esteemed announces the launch of its franchise program for AI-enabled staffing branch operations across the United States.",
  },
  {
    date: "2026",
    title: "Esteemed Unveils Redesigned Website with Expanded Service Offerings",
    summary: "A newly redesigned website brings together Esteemed's full suite of products and services under one unified platform.",
  },
  {
    date: "2025",
    title: "Esteemed Colleagues Network Reaches 35,000 Professionals",
    summary: "The vetted professional network continues to grow, providing organizations with on-demand access to top IT talent.",
  },
];

export default function NewsroomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Newsroom
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            The latest news, press releases, and company updates from Esteemed.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((pr) => (
              <div key={pr.title} className="rounded-2xl border border-zinc-200 p-6">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{pr.date}</span>
                <h3 className="text-lg font-semibold text-ink mt-2">{pr.title}</h3>
                <p className="text-sm text-zinc-500 mt-2">{pr.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Media inquiries?</h2>
          <p className="text-zinc-400 mb-8">Get in touch with our communications team.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
