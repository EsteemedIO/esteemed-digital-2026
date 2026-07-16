import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import { ArrowRight, CheckCircle } from "lucide-react";
import StickyAnchorNav from "@/components/StickyAnchorNav";

export const metadata = {
  title: "Talent Management | Esteemed",
  description:
    "End-to-end talent management services from Esteemed. Source, vet, and manage your workforce.",
};

export default function TalentManagementPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />

      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto rounded-3xl px-6 md:pl-8 md:pr-14 py-8 grid md:grid-cols-2 gap-8 md:gap-10 items-center overflow-hidden" style={{ maxWidth: 1800, background: "#E4DBF0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Talent Management
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              The right people, when you need them.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              We handle recruiting, onboarding, and workforce operations so you can focus on growing your business.
              Call (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Sourcing and candidate screening",
                "Onboarding and workforce operations",
                "Contract, retainer, or project-based engagement",
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
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-02/career-coaching-2.jpg.webp?itok=N4r8sLVV"
            alt="Talent management"
            variant="talent"
          />
          </div>
        </div>
      </section>

      <HireExpertFAQ items={[
        { q: "What talent management services do you offer?", a: "Recruiting, candidate sourcing and screening, onboarding, workforce operations, and ongoing HR support — from contract roles to permanent hires." },
        { q: "How large is your talent network?", a: "We source from a vetted network of 35,000+ professionals across technology, design, marketing, operations, and more." },
        { q: "How quickly can you fill a role?", a: "Most contract placements are matched within 1–2 weeks. Permanent hires depend on the role but typically 3–6 weeks." },
        { q: "Do you handle onboarding?", a: "Yes. We manage the full onboarding process including documentation, access setup, and first-week coordination." },
        { q: "What types of engagement do you support?", a: "Contract, contract-to-hire, retainer, project-based, or permanent placement — whatever fits your business." },
        { q: "Is there a fee if a placement doesn't work out?", a: "We stand behind our placements. Details on guarantees and replacement terms are covered during your consultation." },
      ]} />

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Build the team your business needs.
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
