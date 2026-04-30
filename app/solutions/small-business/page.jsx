import Link from "next/link";

export const metadata = {
  title: "Solutions for Small Business",
  description: "Esteemed helps small businesses build professional websites, hire expert help when needed, and compete with larger organizations.",
};

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            For Small Business
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Build a professional web presence, hire expert help when needed, and compete with organizations ten times your size.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-zinc-600 leading-relaxed">
          <p>
            Small businesses deserve the same quality digital presence as enterprise organizations -- without the enterprise budget. <Link href="/products/create" className="text-blue-600 hover:underline">Esteemed Create</Link> makes it possible to build a professional, mobile-responsive website in minutes using AI. No coding skills required, no expensive agency retainers, just describe what you need and let AI do the work.
          </p>
          <p>
            As your business grows, so do your needs. Need a custom e-commerce feature? A CRM integration? A redesign? <Link href="/products/colleagues" className="text-blue-600 hover:underline">Esteemed Colleagues</Link> connects you with vetted professionals who can help with any technical challenge, on your timeline and budget. You only pay for the help you need, when you need it.
          </p>
          <p>
            <Link href="/products/agents" className="text-blue-600 hover:underline">Esteemed Agents</Link> can handle routine tasks like updating content, responding to customer inquiries, and managing your online presence -- giving you back hours every week to focus on running your business. All backed by <Link href="/services/support" className="text-blue-600 hover:underline">Esteemed Support</Link> when you need a human touch.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Grow your business online</h2>
          <p className="text-zinc-400 mb-8">Build your website today with Esteemed Create.</p>
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
