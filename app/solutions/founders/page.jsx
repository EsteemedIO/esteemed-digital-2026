import Link from "next/link";

export const metadata = {
  title: "Solutions for Founders",
  description: "Esteemed helps founders launch MVPs, build teams, and scale their tech stack without the overhead of a full engineering org.",
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Founders
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Launch MVPs, build your tech team, and scale your stack -- without the overhead of a full engineering org.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            As a founder, you need to move fast and stay lean. <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link> lets you build your first product or website in minutes using AI, so you can validate ideas before writing a single line of code. Deploy instantly on <Link href="/websites/hosting" className="text-blue-600 hover:underline">Esteemed Cloud</Link> and start collecting feedback from day one.
          </p>
          <p>
            When it is time to hire your first developer, designer, or CTO, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> gives you access to 35,000+ vetted professionals -- fractional or full-time, depending on your stage and budget. Our recruiting infrastructure has been running since 2015, so you get better matches than posting on a job board and hoping for the best.
          </p>
          <p>
            Need ongoing technical guidance without the cost of a full-time CTO? Esteemed offers fractional leadership and <Link href="/hire-experts/web-support" className="text-blue-600 hover:underline">Support</Link> services that grow with you. From MVP to Series A and beyond, we have been helping founders build since 2011.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Build your vision</h2>
          <p className="text-zinc-400 mb-8">Start prototyping your idea today with Esteemed Create.</p>
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
