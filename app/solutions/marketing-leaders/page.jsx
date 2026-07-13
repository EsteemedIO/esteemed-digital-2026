import Link from "next/link";

export const metadata = {
  title: "Solutions for Marketing Leaders",
  description: "Esteemed helps marketing leaders launch sites faster, hire creative talent on demand, and automate with AI agents.",
};

export default function MarketingLeadersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Marketing Leaders
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Launch sites faster, hire creative talent on demand, and automate repetitive tasks with AI.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Marketing leaders face constant pressure to ship campaigns quickly, maintain brand consistency across digital properties, and justify ROI on every dollar spent. Esteemed gives you the tools and talent to move faster without sacrificing quality. With <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link>, your team can spin up landing pages, microsites, and campaign pages in minutes -- no engineering tickets required.
          </p>
          <p>
            When you need specialized help -- SEO strategy, content production, UX design, or analytics setup -- <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> connects you with vetted marketing professionals who can hit the ground running. Stop waiting weeks for agency proposals; get the right person working on your project within days.
          </p>
          <p>
            <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link> add another layer of leverage by automating content updates, social media monitoring, and customer engagement -- all trained on your brand voice and business context. It is the AI-plus-human approach that actually delivers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Accelerate your marketing</h2>
          <p className="text-zinc-400 mb-8">See how Esteemed can help your team ship faster.</p>
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
