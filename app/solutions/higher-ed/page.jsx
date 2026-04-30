import Link from "next/link";

export const metadata = {
  title: "Solutions for Higher Education",
  description: "Esteemed helps colleges and universities build modern web experiences, hire technical talent, and deploy AI tools for campus operations.",
};

export default function HigherEdPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Higher Education
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Build modern web experiences, hire specialized technical talent, and deploy AI tools for campus operations.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Higher education institutions manage complex digital ecosystems -- from admissions portals and course catalogs to alumni networks and research sites. <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> empowers departments across campus to build and maintain their own web properties, reducing the backlog on central IT. Deploy on <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> with accessibility compliance and institutional security standards built in.
          </p>
          <p>
            Universities often struggle to compete with the private sector for technical talent. <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> provides access to vetted professionals who can work on campus projects on a contract or fractional basis, giving your institution access to expertise that might otherwise be out of reach. Our network includes specialists in Drupal, WordPress, and other CMS platforms commonly used in higher education.
          </p>
          <p>
            <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link> can enhance the student experience with AI-powered advising tools, FAQ bots, and campus service automation. All powered by <Link href="/products/intelligence" className="text-blue-600 hover:underline">Esteemed Intelligence</Link> and backed by <Link href="/services/support" className="text-blue-600 hover:underline">Support</Link> from real human experts.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform your campus digital experience</h2>
          <p className="text-zinc-400 mb-8">Ask about higher education pricing and partnerships.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
