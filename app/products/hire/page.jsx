import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { appPricingPlans, suitePricingPlans } from "@/lib/product-page-pricing";
import {
  ClipboardCheck,
  Users,
  Brain,
  Workflow,
  Filter,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Hire",
  description:
    "Meet Esteemed Hire. Applicant tracking that integrates with Colleagues and Intelligence.",
};

const features = [
  {
    icon: Users,
    title: "Colleagues Integration",
    description:
      "Source candidates directly from the Esteemed Colleagues network of 35,000+ vetted professionals. No separate sourcing tool needed.",
  },
  {
    icon: Brain,
    title: "Intelligence-Powered Matching",
    description:
      "Esteemed Intelligence ranks and scores applicants based on skills, experience, and cultural fit — so you review the best candidates first.",
  },
  {
    icon: Filter,
    title: "Smart Pipeline Management",
    description:
      "Customizable hiring stages, automated status updates, and team collaboration built in. Move candidates through your process with drag-and-drop.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate interview scheduling, rejection emails, offer letters, and onboarding triggers. Set it once, let Intelligence handle the rest.",
  },
  {
    icon: BarChart3,
    title: "Hiring Analytics",
    description:
      "Time-to-hire, pipeline conversion rates, source effectiveness, and diversity metrics. All powered by the Intelligence reporting layer.",
  },
];

const pricingPlans = [...appPricingPlans("hire"), ...suitePricingPlans()];

export default function HirePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="hire" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Hire
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Hire
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Applicant tracking built for how you actually hire. Integrated with
            Colleagues for sourcing, powered by Intelligence for ranking, and
            designed for teams that move fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
            >
              See plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/colleagues"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ink text-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              See Colleagues
            </Link>
          </div>
        </div>
      </section>

      <div id="plans">
        <ProductPricingBlock
          eyebrow="Hire plans"
          title="Applicant tracking pricing"
          description="Hire uses the v2 per-seat catalog: Free, Starter, Pro, Enterprise, plus Suite for teams that want Hire Pro and Acquire Pro together."
          productKey="hire"
          plans={pricingPlans}
          ctaLabel="Checkout"
          freeHref="/signup?product=hire&tier=free"
        />
      </div>

      {/* How it connects */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Built on the Esteemed platform
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Hire doesn&apos;t stand alone — it&apos;s connected to the tools your team already uses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <Users className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Colleagues</h3>
              <p className="text-sm text-zinc-600">
                Source candidates from the vetted Colleagues network. Posted roles appear in both your ATS pipeline and the Colleagues marketplace.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <Brain className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Intelligence</h3>
              <p className="text-sm text-zinc-600">
                Intelligence scores every applicant, surfaces the strongest matches, and generates summaries so you spend less time screening.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5" }}>
              <ClipboardCheck className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-ink mb-2">Acquire</h3>
              <p className="text-sm text-zinc-600">
                Hire feeds directly into Esteemed Acquire. Convert candidates to client contacts or talent relationships without re-entering data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything you need to hire well
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon className="w-6 h-6 text-ink flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to streamline your hiring?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Start with Hire. Source from Colleagues. Let Intelligence do the heavy lifting.
          </p>
          <Link
            href="/signup?redirect=create"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
