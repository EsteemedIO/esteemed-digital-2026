import Link from "next/link";

export const metadata = {
  title: "Launch a Marketing Site",
  description: "Go from idea to live marketing site in minutes with Esteemed Create, backed by expert support from Colleagues.",
};

export default function LaunchMarketingSitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Launch a Marketing Site
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Go from idea to live marketing site in minutes. AI builds the first version, real experts help you grow it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Marketing teams need to move fast. With <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link>, you can generate a professional, responsive marketing site in minutes using AI. Describe your brand, your audience, and your goals, and Create builds the pages, copy, and layout for you. Then publish instantly on <Link href="/websites/hosting" className="text-blue-600 hover:underline">Esteemed Cloud</Link> with built-in hosting, SSL, and CDN.
          </p>
          <p>
            But launching is just the beginning. When you need custom design, SEO optimization, conversion rate improvements, or content strategy, the <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> network connects you with vetted professionals who can take your site to the next level. No agency retainers, no lengthy procurement processes -- just the right expert, on demand.
          </p>
          <p>
            And with <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link>, you get AI assistants trained on your brand that can help maintain content, answer visitor questions, and automate repetitive marketing tasks around the clock.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to launch?</h2>
          <p className="text-zinc-400 mb-8">Start building your marketing site today with Esteemed Create.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
