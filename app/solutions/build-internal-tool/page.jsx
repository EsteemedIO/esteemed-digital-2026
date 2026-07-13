import Link from "next/link";

export const metadata = {
  title: "Build an Internal Tool",
  description: "Create custom internal tools and dashboards with AI, then scale with expert developers from the Esteemed network.",
};

export default function BuildInternalToolPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Build an Internal Tool
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Create custom internal tools and dashboards with AI. Scale with expert developers when you need more.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Every organization has workflows that off-the-shelf software does not quite cover. With <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link>, you can rapidly prototype internal dashboards, admin panels, and workflow tools using natural language. Describe what you need, and AI generates a working application you can iterate on immediately.
          </p>
          <p>
            When your internal tool needs integrations with existing systems, complex business logic, or enterprise-grade security, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> gives you access to 35,000+ vetted developers, architects, and DevOps engineers who can build it right. Pair that with <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> for secure, managed hosting, and you have a full-stack solution without the full-stack overhead.
          </p>
          <p>
            Need ongoing maintenance and monitoring? <Link href="/services/support" className="text-blue-600 hover:underline">Esteemed Support</Link> provides expert human help for anything you build on our platform, so your team can focus on what matters most.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start building today</h2>
          <p className="text-zinc-400 mb-8">Prototype your internal tool in minutes with Esteemed Create.</p>
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
