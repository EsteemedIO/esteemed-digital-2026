import Link from "next/link";

export const metadata = {
  title: "Career Catalyst Blog",
  description: "Career-focused insights, tips, and stories from the Esteemed community to help you grow professionally.",
};

const categories = [
  "Career Management",
  "Lifestyle & Benefits",
  "Industry Trends",
  "Remote Work",
  "Professional Development",
];

export default function CareerCatalystPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Career Catalyst Blog
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Career-focused insights, tips, and stories from the Esteemed community to help you grow professionally.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder posts */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "How to Stand Out in a Competitive Tech Market", category: "Career Management" },
              { title: "The Rise of Fractional Roles in IT", category: "Industry Trends" },
              { title: "Building a Remote-First Career", category: "Remote Work" },
              { title: "Upskilling for the AI Era", category: "Professional Development" },
            ].map((post) => (
              <div key={post.title} className="rounded-2xl border border-zinc-200 p-6">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{post.category}</span>
                <h3 className="text-lg font-semibold text-ink mt-2">{post.title}</h3>
                <p className="text-sm text-zinc-500 mt-2">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">Ready to accelerate your career?</h2>
          <p className="text-zinc-700 mb-8">Join 35,000+ professionals in the Esteemed Colleagues network.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
