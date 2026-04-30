import Link from "next/link";

export const metadata = {
  title: "Solutions for Nonprofits",
  description: "Esteemed helps nonprofits build impactful digital experiences, hire specialized talent, and maximize limited budgets with AI.",
};

export default function NonprofitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Nonprofits
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Build impactful digital experiences, hire specialized talent, and maximize limited budgets with AI-powered tools.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Nonprofits need to make every dollar count. <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> enables your team to build professional websites, donor portals, and event pages without expensive development budgets. AI handles the design and code, so your staff can focus on your mission instead of managing website vendors.
          </p>
          <p>
            When you need specialized help -- a Salesforce integration, a grant management system, or a website redesign -- <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> connects you with vetted professionals who understand the nonprofit sector. Many of our Colleagues have direct experience working with nonprofits, government agencies, and educational institutions.
          </p>
          <p>
            Esteemed has a long history of serving the nonprofit community, from our work in the Drupal ecosystem to our partnerships with educational institutions. We offer special pricing for qualifying nonprofit organizations across all our products and services, including <Link href="/products/cloud" className="text-blue-600 hover:underline">Cloud</Link>, <Link href="/products/agents" className="text-blue-600 hover:underline">Agents</Link>, and <Link href="/services/support" className="text-blue-600 hover:underline">Support</Link>.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Amplify your mission</h2>
          <p className="text-zinc-400 mb-8">Ask about nonprofit pricing for Esteemed products and services.</p>
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
