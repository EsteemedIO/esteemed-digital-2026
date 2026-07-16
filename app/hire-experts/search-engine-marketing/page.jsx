import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import { ArrowRight, CheckCircle } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Search Engine Marketing | Esteemed",
  description:
    "Search engine marketing services from Esteemed. PPC, paid search, and performance marketing managed by experts.",
};

export default function SearchEngineMarketingPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto rounded-3xl px-6 md:pl-14 md:pr-8 py-8 grid md:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden" style={{ maxWidth: 1800, background: "#E0E9F2" }}>
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Search Engine Marketing
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Get found by the right customers.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Our SEM experts set up, manage, and optimize your paid search so every ad dollar works harder.
              Call (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Google Ads setup and ongoing management",
                "Landing pages built for conversion",
                "Transparent reporting you can act on",
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
          <HeroImageComposite
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-02/jobseeker.jpg.webp?itok=J_ACSAFw"
            alt="Search engine marketing"
            variant="marketing"
          />
        </div>
      </section>

      <HireExpertFAQ />

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize every ad dollar.
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
