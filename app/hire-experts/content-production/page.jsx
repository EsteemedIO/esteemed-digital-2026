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

      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#FFF8D6" }}>
          <div className="md:order-2">
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
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1"><HeroImageComposite
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2024-12/man-in-virtual-office.png.webp?itok=00vbLWjw"
            alt="Content production"
            variant="content"
          />
          </div>
        </div>
      </section>

      <HireExpertFAQ items={[
        { q: "What kind of content do you produce?", a: "Blog posts, landing pages, email campaigns, social media content, case studies, whitepapers, and launch copy — whatever your business needs." },
        { q: "How does AI-assisted production work?", a: "Our writers use AI to draft faster, then edit and refine every piece by hand. You get the speed of AI with the quality of a human editor." },
        { q: "Can you match our brand voice?", a: "Yes. We study your existing content, brand guidelines, and audience to deliver on-brand copy every time." },
        { q: "What's the typical turnaround?", a: "Blog posts and landing pages are usually delivered within 5–7 business days. Larger projects are scoped with clear milestones." },
        { q: "Do I get revisions?", a: "Every project includes a revision round. We work with your feedback until you're happy with the result." },
        { q: "How do I get started?", a: "Call (360) 701-7353 or schedule a free consultation. We'll scope the work and give you a clear quote before anything begins." },
      ]} />

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Content that converts.
          </h2>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
