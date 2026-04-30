import Link from "next/link";

export const metadata = {
  title: "Solutions for Mid-Market",
  description: "Esteemed helps mid-market companies modernize digital infrastructure, scale teams efficiently, and leverage AI across the organization.",
};

export default function MidMarketPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Mid-Market Companies
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Modernize your digital infrastructure, scale teams efficiently, and leverage AI across your organization.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Mid-market companies often face the worst of both worlds: enterprise complexity without enterprise resources. Esteemed bridges that gap. Use <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> to empower marketing and business teams to build websites and internal tools without consuming scarce engineering bandwidth. Deploy everything on <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> with enterprise-grade security and performance.
          </p>
          <p>
            When your IT team is stretched thin, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> provides on-demand access to specialized talent -- developers, architects, DevOps engineers, and project managers -- who can integrate with your team and deliver results without the time and cost of traditional hiring.
          </p>
          <p>
            <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link> and <Link href="/products/intelligence" className="text-blue-600 hover:underline">Intelligence</Link> bring AI capabilities to departments across your organization, from automated customer support to intelligent content management. It is the AI-plus-human approach that scales with your business.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Scale smarter</h2>
          <p className="text-zinc-400 mb-8">See how Esteemed helps mid-market companies do more with less.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
