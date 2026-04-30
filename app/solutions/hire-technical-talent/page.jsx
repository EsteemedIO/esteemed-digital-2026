import Link from "next/link";

export const metadata = {
  title: "Hire Technical Talent",
  description: "Access 35,000+ vetted IT professionals through the Esteemed Colleagues network. Hire on demand without the overhead.",
};

export default function HireTechnicalTalentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Hire Technical Talent
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Access 35,000+ vetted IT professionals. Hire on demand without the overhead of traditional recruiting.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Finding great technical talent is hard. Retaining them is harder. <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> gives you access to a curated network of 35,000+ professionals our recruiting team has been vetting since 2015. Developers, designers, DevOps engineers, QA specialists, project managers -- whatever you need, we have the right person ready to start.
          </p>
          <p>
            Unlike traditional staffing agencies, Esteemed combines human expertise with AI-powered matching through <Link href="/products/intelligence" className="text-blue-600 hover:underline">Esteemed Intelligence</Link>. Our platform analyzes your requirements, team dynamics, and project scope to recommend the best-fit candidates from our network. The result is faster placements, better matches, and lower turnover.
          </p>
          <p>
            Whether you need a fractional CTO, a contract development team, or a permanent hire, Esteemed provides the flexibility to scale your workforce up or down as your business demands. Pair talent with <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> and <Link href="/products/cloud" className="text-blue-600 hover:underline">Cloud</Link> for a complete build-and-staff solution.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Find your next hire</h2>
          <p className="text-zinc-400 mb-8">Search the Colleagues network or tell us what you need.</p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Browse Talent
          </Link>
        </div>
      </section>
    </div>
  );
}
