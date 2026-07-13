import Link from "next/link";

export const metadata = {
  title: "Documentation & Help",
  description: "Guides, tutorials, and documentation for all Esteemed products -- Create, Cloud, Agents, Intelligence, Colleagues, and Support.",
};

const sections = [
  { title: "Esteemed Create", href: "/websites/website-builder", desc: "Learn how to build websites and apps with AI-powered Create." },
  { title: "Esteemed Cloud", href: "/products/cloud", desc: "Hosting, deployment, domains, and infrastructure management." },
  { title: "Esteemed Agents", href: "/products/agents", desc: "Set up and manage AI agents trained on your business." },
  { title: "Esteemed Intelligence", href: "/products/intelligence", desc: "The shared AI layer powering all Esteemed products." },
  { title: "Esteemed Colleagues", href: "/products/colleagues", desc: "How to search, hire, and manage talent from the Colleagues network." },
  { title: "Esteemed Support", href: "/services/support", desc: "Get expert human help for your apps and projects." },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Documentation & Help
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Guides, tutorials, and documentation for all Esteemed products and services.
          </p>
        </div>
      </section>

      {/* Product Docs */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">Product Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pricing" className="text-blue-600 hover:underline text-sm">Pricing & Plans</Link>
            <Link href="/migrate" className="text-blue-600 hover:underline text-sm">Migration Tool</Link>
            <a href="https://discord.gg/esteemed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Discord Community</a>
            <Link href="/contact" className="text-blue-600 hover:underline text-sm">Contact Support</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
          <p className="text-zinc-400 mb-8">Our support team is here for you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
