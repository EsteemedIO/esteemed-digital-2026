import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import { ArrowRight, CheckCircle } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Content Production | Esteemed",
  description:
    "Content production services from Esteemed. AI-assisted writing, design, and media production at scale.",
};

export default function ContentProductionPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto rounded-3xl pl-8 md:pl-14 pr-8 py-8 grid md:grid-cols-2 gap-10 items-center overflow-hidden" style={{ maxWidth: 1800, maxHeight: 640, background: "#FFF8D6" }}>
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Content Production
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Polished content, delivered fast.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              From blog posts and landing pages to full campaign kits — our writers and designers produce on-brand content at AI speed with human quality.
              Call (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Blog posts, landing pages, and campaign copy",
                "AI-assisted drafting with expert editing",
                "On-brand and on-schedule, every project",
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
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2024-12/man-in-virtual-office.png.webp?itok=00vbLWjw"
            alt="Content production"
            variant="content"
          />
        </div>
      </section>

      <HireExpertFAQ />

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Content that converts.
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
