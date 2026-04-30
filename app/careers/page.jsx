import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Join the Esteemed team. Explore open positions and help us build the future of AI-powered workforce solutions.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Careers at Esteemed
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Join our team and help build the future of AI-powered workforce solutions. We are remote-first and always looking for great people.
          </p>
        </div>
      </section>

      {/* Why Esteemed */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Why Esteemed?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Remote-First", desc: "Work from anywhere. We have been a distributed team since 2011." },
              { title: "AI + Human", desc: "Work at the intersection of AI and human expertise, building tools that matter." },
              { title: "Real Impact", desc: "Help 35,000+ professionals find work and help businesses build great products." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Open Positions</h2>
          <p className="text-zinc-500 py-8 text-center">
            No open positions at this time. Check back soon or send us your resume to be considered for future opportunities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want to work with us?</h2>
          <p className="text-zinc-400 mb-8">Send us your resume and tell us what you are passionate about.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
