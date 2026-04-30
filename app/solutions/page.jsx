import Link from "next/link";

export const metadata = {
  title: "Solutions",
  description: "Explore Esteemed solutions by use case, role, segment, or industry. Find the right fit for your organization.",
};

const useCases = [
  { name: "Launch a marketing site", href: "/solutions/launch-marketing-site" },
  { name: "Build an internal tool", href: "/solutions/build-internal-tool" },
  { name: "Hire technical talent", href: "/solutions/hire-technical-talent" },
  { name: "Modernize a legacy site", href: "/solutions/modernize-legacy-site" },
];

const roles = [
  { name: "Marketing Leaders", href: "/solutions/marketing-leaders" },
  { name: "Founders", href: "/solutions/founders" },
  { name: "IT Directors", href: "/solutions/it-directors" },
  { name: "HR Teams", href: "/solutions/hr-teams" },
];

const segments = [
  { name: "Startups", href: "/solutions/startups" },
  { name: "Small Business", href: "/solutions/small-business" },
  { name: "Mid-market", href: "/solutions/mid-market" },
  { name: "Enterprise", href: "/solutions/enterprise" },
  { name: "Nonprofits", href: "/solutions/nonprofits" },
  { name: "Higher Ed", href: "/solutions/higher-ed" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Solutions
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Whether you need to launch a site, hire talent, or modernize your tech stack, Esteemed has a solution built for you.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((item) => (
              <Link key={item.name} href={item.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">By Role</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roles.map((item) => (
              <Link key={item.name} href={item.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">By Segment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {segments.map((item) => (
              <Link key={item.name} href={item.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure where to start?</h2>
          <p className="text-zinc-400 mb-8">Talk to our team and we will help you find the right solution.</p>
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
