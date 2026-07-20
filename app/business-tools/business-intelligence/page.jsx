import Link from "next/link";
import dynamic from "next/dynamic";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import { intelligencePricingPlans } from "@/lib/product-page-pricing";
import { Brain, Database, GitBranch, Shield, Code, Building2, ArrowRight } from "lucide-react";

const IntelligenceGlobe = dynamic(() => import("@/components/intelligence/IntelligenceGlobe"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export const metadata = {
  title: "Intelligence",
  description:
    "Esteemed Intelligence — the layer that powers everything. Memory, reasoning, and coherence.",
};

const prongs = [
  {
    title: "Memory",
    description:
      "Persistent vector memory, semantic search, and knowledge sharing. Every insight, every decision, every correction is remembered and retrievable across your entire system.",
    features: [
      "Persistent storage across sessions",
      "Semantic search over your content",
      "Cross-agent knowledge sharing",
      "Automatic data pipeline ingestion",
    ],
    icon: Database,
  },
  {
    title: "Reasoning",
    description:
      "Your agents don't just retrieve — they reason. Cross-system inference, belief tracking, and continuous learning mean your AI gets smarter with every interaction.",
    features: [
      "Cross-system reasoning",
      "Bayesian belief tracking",
      "Three-loop learning system",
      "Confidence scoring with evidence",
    ],
    icon: GitBranch,
  },
  {
    title: "Coherence",
    description:
      "Traditional AI systems guess. Esteemed Intelligence proves. Structural verification ensures your system stays mathematically consistent — not just probably right.",
    features: [
      "Drift detection before failures",
      "Witness chain auditing",
      "Structural consistency proofs",
      "Temporal analysis",
    ],
    icon: Shield,
  },
];

const faqs = [
  {
    q: "How is Esteemed Intelligence different from just using an LLM?",
    a: "LLMs generate text. Intelligence remembers, reasons, and verifies. It gives your AI systems persistent memory across sessions, cross-system reasoning so agents share context, and structural coherence proofs — not just probability scores. Your AI doesn't just sound right, it proves it's right.",
  },
  {
    q: "Do my agents automatically share what they learn?",
    a: "Yes. Your Voice Agent knows what your Blog Agent wrote. Your Social Agent knows what customers asked. Intelligence is the shared layer — no manual syncing, no data silos between agents.",
  },
  {
    q: "Will my website give more accurate answers?",
    a: "Instead of generic chatbot responses, your site pulls from verified knowledge and proves its answers are consistent with your actual content. Customers get real answers, not hallucinations.",
  },
  {
    q: "How does the memory work — does it reset?",
    a: "Never. Every customer interaction, every content update, every agent conversation feeds back into a shared intelligence layer that compounds over time. The longer you use it, the smarter it gets.",
  },
  {
    q: "What happens if an agent starts giving wrong answers?",
    a: "Drift analysis detects when agent responses diverge from your brand voice or factual content — before customers notice. You get alerted, and coherence gates can block bad outputs automatically.",
  },
  {
    q: "Can I connect my own systems via API?",
    a: "Yes. Full REST API and Model Context Protocol (MCP) endpoints give you programmatic access to memory, reasoning, and coherence verification. Use it to power custom agents, internal tools, or third-party integrations.",
  },
  {
    q: "What does the free trial include?",
    a: "Everything. All 40 MCP tools, full REST API access, 250K memory operations, and 3 connected agents for 14 days. No credit card required.",
  },
  {
    q: "Can I run it on my own infrastructure?",
    a: "Yes. The Enterprise tier includes on-premise or VPC deployment with custom SLAs, dedicated infrastructure, and white-glove onboarding. Contact us for details.",
  },
];

const pricingPlans = intelligencePricingPlans();

export default function IntelligencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-ink">
          <div>
            <p className="hero-eyebrow text-white/50">
              Business Intelligence
            </p>
            <h1 className="hero-title text-white">
              The intelligence layer that powers everything.
            </h1>
            <p className="hero-body text-white/70">
              Memory. Reasoning. Coherence. A shared intelligence layer that gives your website and agents persistent memory, cross-system reasoning, and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#plans"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                See plans
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors"
              >
                Talk to us
            </Link>
            </div>
          </div>
          {/* Globe animation */}
          <div className="hidden md:block w-full" style={{ height: 480 }}>
            <IntelligenceGlobe />
          </div>
        </div>
      </section>

      {/* Three Prongs — directly after hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {prongs.map((prong) => (
              <div
                key={prong.title}
                className="rounded-2xl border border-zinc-200 p-8"
              >
                <prong.icon
                  className="w-8 h-8 text-ink mb-4"
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl font-bold text-ink mb-3">
                  {prong.title}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {prong.description}
                </p>
                <ul className="space-y-2">
                  {prong.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="plans">
        <ProductPricingBlock
          eyebrow="Pricing"
          title="Start Free, Scale Infinitely"
          description="Every plan includes all 40 MCP tools and full REST API access. Scale memory, intelligence, and coherence as you grow."
          productKey="intelligence"
          plans={pricingPlans}
          ctaLabel="Get Started"
          defaultBilling="monthly"
        />
      </div>

      {/* The difference */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">
            From probability to proof
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10">
            Most AI systems tell you they&apos;re &ldquo;87% confident.&rdquo;
            Esteemed Intelligence tells you <em>why</em> an answer is
            structurally consistent with everything your business knows. The
            difference matters when your reputation is on the line.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide mb-3">
                Without intelligence layer
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>Probabilistic confidence (&ldquo;87% sure&rdquo;)</li>
                <li>Silent failures when agents drift</li>
                <li>Each agent is an island</li>
                <li>Knowledge resets every session</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-accent p-6">
              <p className="text-sm font-bold text-ink uppercase tracking-wide mb-3">
                With Esteemed Intelligence
              </p>
              <ul className="space-y-3 text-sm text-ink">
                <li>Structural coherence proofs</li>
                <li>Drift detected before downstream errors</li>
                <li>Agents share a unified knowledge base</li>
                <li>Memory compounds across every interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — converted from use cases */}
      <HireExpertFAQ items={faqs} />

      {/* API / MCP access */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Code
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                API &amp; MCP access
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Integrate Esteemed Intelligence directly into your own
                applications. Our REST API and Model Context Protocol (MCP)
                endpoints give you programmatic access to memory, reasoning, and
                coherence verification. Use it to power custom agents, internal
                tools, or third-party integrations.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "REST API with full CRUD operations",
                  "MCP endpoints for AI tool integration",
                  "Webhook support for real-time events",
                  "SDKs for JavaScript, Python, and Go",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Request API access &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct licensing */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Building2
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Direct licensing for institutions
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                For enterprise and institutional customers who need Esteemed
                Intelligence running in their own environment. Direct licensing
                includes dedicated infrastructure, custom SLAs, compliance
                support, and on-premises deployment options.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
              >
                Contact us for licensing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Connect Any AI System. <span className="text-accent">Share One Intelligence.</span>
          </h2>
          <p className="text-white/60 mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
            REST API or MCP. Give every system shared memory, reasoning, and coherence. Start with a 14-day free trial — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#plans"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Start 14-Day Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://help.esteemed.io"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
            >
              Documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
