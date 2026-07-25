import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import TickRounded from "@/components/TickRounded";
import { ArrowRight } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "AI Visibility | Esteemed",
  description:
    "AI visibility services from Esteemed. Ensure your brand shows up in AI-powered search and assistants.",
};

export default function AIVisibilityPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#DCEDE0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              AI Visibility
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Show up where AI is looking.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              AI-powered search and assistants are how customers find businesses now. We make sure yours is discoverable.
              Call (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Structured data and schema markup",
                "Optimized for AI search and LLM responses",
                "Content formatted for machine understanding",
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
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-02/woman-working-airport.jpg.webp?itok=mIzdt2yL"
            alt="AI visibility"
            variant="ai"
          />
          </div>
        </div>
      </section>

      <HireExpertFAQ items={[
        { q: "What is AI visibility?", a: "AI visibility ensures your business shows up when people search using AI assistants like ChatGPT, Gemini, Perplexity, and AI-powered search features in Google and Bing." },
        { q: "How is this different from traditional SEO?", a: "Traditional SEO optimizes for search engine rankings. AI visibility optimizes for how AI models understand, cite, and recommend your business in conversational responses." },
        { q: "What do you actually do?", a: "We audit your digital presence for AI readability, implement structured data and schema markup, optimize content for machine understanding, and monitor your AI search presence." },
        { q: "How do I know if it's working?", a: "We track your brand's appearance in AI-generated responses and provide regular reports on discoverability improvements." },
        { q: "Is this relevant for my business?", a: "If your customers use search — and increasingly AI search — to find services like yours, then yes. AI visibility is becoming essential for every business with an online presence." },
        { q: "How do I get started?", a: "Call (360) 701-7353 for a free consultation. We'll audit your current AI visibility and recommend next steps." },
      ]} />

      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Be found by AI and humans alike.
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
