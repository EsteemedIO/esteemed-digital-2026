import Link from "next/link";

export const metadata = {
  title: "Modernize a Legacy Site",
  description: "Migrate your legacy website to a modern stack with AI-assisted migration tools and expert developers from Esteemed.",
};

export default function ModernizeLegacySitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Modernize a Legacy Site
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Migrate your legacy website to a modern, performant stack -- with AI assistance and expert developers by your side.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Legacy websites built on outdated CMS platforms, custom PHP, or aging frameworks are expensive to maintain, slow to update, and vulnerable to security issues. Esteemed offers a complete modernization path: use <Link href="/websites/website-builder" className="text-blue-600 hover:underline">Esteemed Create</Link> to rebuild your site with AI assistance, then deploy to <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> for modern hosting with built-in security and performance optimization.
          </p>
          <p>
            For complex migrations involving custom integrations, data migration, or multi-site architectures, <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> provides experienced developers who specialize in platform migrations. Whether you are moving from Drupal, WordPress, or a custom-built system, our network includes specialists who have done it hundreds of times.
          </p>
          <p>
            Already have a migration plan? <Link href="/services/support" className="text-blue-600 hover:underline">Esteemed Support</Link> can help with the heavy lifting -- code reviews, deployment assistance, and post-launch monitoring to ensure a smooth transition. Check out our <Link href="/migrate" className="text-blue-600 hover:underline">migration tool</Link> to get started.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to modernize?</h2>
          <p className="text-zinc-400 mb-8">Try our migration tool or talk to an expert about your project.</p>
          <Link
            href="/migrate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start Migration
          </Link>
        </div>
      </section>
    </div>
  );
}
