import Link from "next/link";

export const metadata = {
  title: "Become a Partner",
  description: "Register as an Esteemed partner and unlock new revenue streams, co-marketing opportunities, and access to our talent network.",
};

export default function PartnerRegistrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Become a Partner
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Join the Esteemed partner ecosystem. Unlock new revenue streams, co-marketing opportunities, and access to our 35,000+ talent network.
          </p>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Partner Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Revenue Sharing", desc: "Earn referral commissions on every client you bring to the platform." },
              { title: "Co-Marketing", desc: "Joint campaigns, case studies, and event sponsorships to grow together." },
              { title: "Priority Support", desc: "Dedicated partner success manager and priority access to new features." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to partner with us?</h2>
          <p className="text-zinc-400 mb-8">Get in touch and we will walk you through the program.</p>
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
