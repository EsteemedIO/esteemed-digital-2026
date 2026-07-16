import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import { ArrowRight, CheckCircle } from "lucide-react";
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

      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto rounded-3xl pl-8 md:pl-14 pr-8 py-8 grid md:grid-cols-2 gap-10 items-center overflow-hidden" style={{ maxWidth: 1800, maxHeight: 640, background: "#E4DBF0" }}>
          <div>
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
                  <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <HeroImageComposite
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-02/woman-career-sessions.jpg.webp?itok=C4t3Gs55"
            alt="Content strategy session"
            variant="content"
          />
        </div>
      </section>

      <HireExpertFAQ />

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Content that moves the needle.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
