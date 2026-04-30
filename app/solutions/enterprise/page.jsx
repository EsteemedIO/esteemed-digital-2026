import Link from "next/link";

export const metadata = {
  title: "Solutions for Enterprise",
  description: "Esteemed delivers enterprise-grade AI tools, managed infrastructure, and access to 35,000+ vetted professionals at scale.",
};

export default function EnterprisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Enterprise
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Enterprise-grade AI tools, managed infrastructure, and access to 35,000+ vetted professionals -- all under one platform.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Enterprise organizations need solutions that meet rigorous security, compliance, and scalability requirements. <Link href="/products/cloud" className="text-blue-600 hover:underline">Esteemed Cloud</Link> delivers managed hosting with SOC 2-aligned controls, enterprise SLAs, and dedicated infrastructure options. <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> enables business users to build and iterate on digital experiences without bottlenecking engineering teams.
          </p>
          <p>
            Esteemed has been staffing enterprise IT organizations since 2011. The <Link href="/products/colleagues" className="text-blue-600 hover:underline">Colleagues</Link> network includes 35,000+ professionals with experience at Fortune 500 companies, government agencies, and leading nonprofits. Whether you need to staff a multi-year digital transformation program or fill a single specialized role, our recruiting infrastructure delivers quality candidates at scale.
          </p>
          <p>
            <Link href="/products/intelligence" className="text-blue-600 hover:underline">Esteemed Intelligence</Link> provides the shared AI layer that powers all Esteemed products, with enterprise controls for data governance, model access, and audit logging. Combined with <Link href="/products/agents" className="text-blue-600 hover:underline">Agents</Link> for task automation and <Link href="/services/support" className="text-blue-600 hover:underline">Support</Link> for expert assistance, you get a complete platform for digital operations.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Enterprise solutions, tailored to you</h2>
          <p className="text-zinc-400 mb-8">Talk to our enterprise team about your organization's needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Enterprise Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
