import Link from "next/link";

export const metadata = {
  title: "Solutions by Segment",
  description: "Explore Esteemed solutions for startups, small businesses, mid-market, enterprise, nonprofits, and higher education.",
};

const segments = [
  { name: "Startups", href: "/solutions/startups", desc: "Launch fast with AI tools and on-demand talent." },
  { name: "Small Business", href: "/solutions/small-business", desc: "Build a professional web presence without the enterprise budget." },
  { name: "Mid-Market", href: "/solutions/mid-market", desc: "Modernize infrastructure and scale teams efficiently." },
  { name: "Enterprise", href: "/solutions/enterprise", desc: "Enterprise-grade AI tools, managed infra, and 35,000+ vetted professionals." },
  { name: "Nonprofits", href: "/solutions/nonprofits", desc: "Maximize limited budgets with AI-powered tools and nonprofit pricing." },
  { name: "Higher Education", href: "/solutions/higher-ed", desc: "Modern web experiences and AI tools for campus operations." },
];

export default function SegmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Solutions by Segment
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From startups to enterprise, Esteemed scales with your organization.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg) => (
              <Link key={seg.name} href={seg.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink mb-2">{seg.name}</h3>
                <p className="text-sm text-zinc-500">{seg.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Find the right fit</h2>
          <p className="text-zinc-400 mb-8">Talk to our team about your organization's needs.</p>
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
