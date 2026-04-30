import Link from "next/link";
import { Brain, Database, GitBranch, Shield, Code, Building2 } from "lucide-react";

export const metadata = {
  title: "Intelligence",
  description:
    "Meet Esteemed Intelligence — the layer that powers everything. Memory, reasoning, and coherence.",
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

const useCases = [
  {
    title: "Your website answers questions accurately",
    desc: "Instead of generic chatbot responses, your site pulls from verified knowledge and proves its answers are consistent with your actual content.",
  },
  {
    title: "Agents share context automatically",
    desc: "Your Voice Agent knows what your Blog Agent wrote. Your Social Agent knows what customers asked. No manual syncing.",
  },
  {
    title: "Your business knowledge compounds",
    desc: "Every customer interaction, every content update, every agent conversation feeds back into a shared intelligence layer that gets smarter over time.",
  },
  {
    title: "Errors are caught before they happen",
    desc: "Drift analysis detects when agent responses start diverging from your brand voice or factual content — before customers notice.",
  },
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Intelligence
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Intelligence — the layer that powers everything
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Memory. Reasoning. Coherence. A shared intelligence layer that gives
            your website and agents persistent memory, cross-system reasoning,
            and continuous learning. Not just AI — intelligence that proves
            it&apos;s right.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Three Prongs */}
      <section className="py-20 border-t border-zinc-100">
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

      {/* Use cases */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">
            What this means for your business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="p-6">
                <h3 className="text-lg font-bold text-ink mb-2">{uc.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl font-bold text-white mb-6">
            Intelligence that compounds.
          </h2>
          <Link
            href="/products/create"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start building
          </Link>
        </div>
      </section>
    </div>
  );
}
