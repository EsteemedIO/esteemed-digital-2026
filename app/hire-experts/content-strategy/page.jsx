import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import TickRounded from "@/components/TickRounded";
import { ArrowRight } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Content Strategy | Esteemed",
  description:
    "Content strategy services from Esteemed. Plan, align, and execute a content strategy that drives results.",
};

export default function ContentStrategyPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E4DBF0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Content Strategy
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              A content plan built to grow your business.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              We build messaging frameworks, editorial calendars, and conversion paths that turn content into revenue.
              Call (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Messaging aligned to your audience",
                "Editorial calendars and publishing cadence",
                "Conversion paths that drive measurable results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <TickRounded className="w-7 h-7" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1"><HeroImageComposite
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-02/woman-career-sessions.jpg.webp?itok=C4t3Gs55"
            alt="Content strategy session"
            variant="content"
          />
          </div>
        </div>
      </section>

      <HireExpertFAQ items={[
        { q: "What's included in a content strategy engagement?", a: "Audience research, messaging frameworks, editorial calendars, content audits, and a conversion-focused content plan tailored to your business goals." },
        { q: "How is this different from content production?", a: "Strategy defines what to say, to whom, and when. Production creates the actual assets. Many clients start with strategy, then move to production — or do both together." },
        { q: "How long does a content strategy project take?", a: "A typical engagement runs 3–6 weeks depending on scope. We deliver a complete, actionable plan you can execute in-house or with our production team." },
        { q: "Do you help with SEO as part of content strategy?", a: "Yes. Keyword research, topic clustering, and search intent mapping are core parts of every content strategy we build." },
        { q: "Can you work with our existing brand guidelines?", a: "Absolutely. We build on your existing brand voice, style guides, and positioning — or help you define them if you're starting fresh." },
        { q: "What does it cost?", a: "Every engagement is scoped during a free consultation. We'll give you a clear quote before any work begins." },
      ]} />

      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Content that moves the needle.
          </h2>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
