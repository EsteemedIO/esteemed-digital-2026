import Link from "next/link";

export const metadata = {
  title: "Solutions for Startups",
  description: "Esteemed helps startups launch fast with AI-powered tools, on-demand talent, and infrastructure that scales with you.",
};

export default function StartupsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Startups
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Launch fast with AI-powered tools, on-demand talent, and infrastructure that scales with you.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Startups need speed and flexibility. <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> lets you build and deploy your first product in minutes, so you can start validating with real users immediately. No need to hire a full engineering team before you have product-market fit -- AI handles the heavy lifting while you focus on customers.
          </p>
          <p>
            When you are ready to scale, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> provides fractional and full-time technical talent from a network of 35,000+ vetted professionals. Hire a fractional CTO, a contract developer, or a full project team -- whatever your stage demands. And with <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link>, your infrastructure grows with you without the DevOps overhead.
          </p>
          <p>
            Esteemed has been supporting startups and small businesses since 2011. We understand the constraints you are working within, and our pricing and engagement models are designed to be founder-friendly from day one.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start building today</h2>
          <p className="text-zinc-400 mb-8">Create your first project free with Esteemed Create.</p>
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
