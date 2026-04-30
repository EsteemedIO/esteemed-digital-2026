import Link from "next/link";

export const metadata = {
  title: "Colleagues",
  description: "Search 35,000+ vetted IT professionals. Hire on demand or get hired through the Esteemed Colleagues network.",
};

export default function ServicesColleaguesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Colleagues
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Search 35,000+ vetted IT professionals. Hire on demand or get hired through our curated talent network.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            The Esteemed Colleagues network is the backbone of everything we do. Since 2015, our recruiting team has been curating a network of 35,000+ IT professionals -- developers, designers, DevOps engineers, project managers, QA specialists, and more. Every Colleague in our network has been vetted for technical skills, communication ability, and professional reliability.
          </p>
          <p>
            For organizations, Colleagues provides on-demand access to the talent you need, when you need it. Whether you are looking for a fractional CTO, a contract development team, or a permanent hire, our AI-powered matching through <Link href="/products/intelligence" className="text-blue-600 hover:underline">Esteemed Intelligence</Link> surfaces the best-fit candidates from our network. Combined with <Link href="/products/create" className="text-blue-600 hover:underline">Create</Link> and <Link href="/products/cloud" className="text-blue-600 hover:underline">Cloud</Link>, you get a complete build-and-staff solution.
          </p>
          <p>
            For professionals, Colleagues is your gateway to vetted opportunities with organizations that value quality. Join the network to access project-based work, full-time roles, and the community resources that come with being part of the Esteemed ecosystem.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-zinc-400 mb-8">Hire talent or join the network today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/colleagues"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Hire Talent
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-ink transition-colors"
            >
              Join as a Colleague
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
