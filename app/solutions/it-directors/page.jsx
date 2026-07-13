import Link from "next/link";

export const metadata = {
  title: "Solutions for IT Directors",
  description: "Esteemed helps IT directors modernize infrastructure, augment teams on demand, and deploy AI-powered tools securely.",
};

export default function ITDirectorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For IT Directors
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Modernize infrastructure, augment your team on demand, and deploy AI-powered tools with enterprise-grade security.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            IT directors are responsible for keeping systems running, budgets in check, and teams productive -- all while driving digital transformation. <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> provides managed hosting with built-in security, monitoring, and compliance, reducing the operational burden on your team. Pair it with <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link> to empower business users to build internal tools and portals without consuming engineering cycles.
          </p>
          <p>
            When you need to scale your team for a migration, a new project, or a production incident, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> provides vetted engineers, architects, and DevOps specialists who can integrate quickly with your existing workflows. No lengthy procurement processes -- just submit a request and get matched with the right talent.
          </p>
          <p>
            <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link> and <Link href="/products/intelligence" className="text-blue-600 hover:underline">Intelligence</Link> bring AI capabilities to your organization in a controlled, auditable way. Automate IT service desk tasks, monitor infrastructure, and provide self-service tools to your users -- all backed by <Link href="/services/support" className="text-blue-600 hover:underline">Esteemed Support</Link> for peace of mind.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Modernize your IT operations</h2>
          <p className="text-zinc-400 mb-8">See how Esteemed can help your team deliver more with less.</p>
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
