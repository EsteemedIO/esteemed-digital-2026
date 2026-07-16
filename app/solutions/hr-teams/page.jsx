import Link from "next/link";

export const metadata = {
  title: "Solutions for HR Teams",
  description: "Esteemed helps HR teams source vetted technical talent, streamline hiring workflows, and manage contingent workforce at scale.",
};

export default function HRTeamsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For HR Teams
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Source vetted technical talent, streamline hiring workflows, and manage your contingent workforce at scale.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Hiring technical talent is one of the hardest challenges HR teams face. The market is competitive, timelines are tight, and bad hires are expensive. <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> gives your team access to a pre-vetted network of 35,000+ IT professionals, with AI-powered matching through <Link href="/products/intelligence" className="text-blue-600 hover:underline">Esteemed Intelligence</Link> to surface the best candidates for each role.
          </p>
          <p>
            Beyond sourcing, Esteemed streamlines the entire hiring workflow -- from job posting and candidate screening to onboarding and payroll for contingent workers. Our platform handles the compliance, contracts, and payments so your team can focus on culture fit and strategic workforce planning.
          </p>
          <p>
            Whether you need to fill a single role or staff an entire project team, Esteemed scales with your needs. Contract, contract-to-hire, or direct placement -- we support every engagement model. And with <Link href="/hire-experts/web-support" className="text-blue-600 hover:underline">Esteemed Support</Link>, you get a dedicated team to help manage the relationship from start to finish.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Simplify your hiring</h2>
          <p className="text-zinc-400 mb-8">Access vetted technical talent through the Colleagues network.</p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Explore Colleagues
          </Link>
        </div>
      </section>
    </div>
  );
}
