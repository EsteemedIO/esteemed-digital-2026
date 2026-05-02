import Link from "next/link";
import { Check, MessageCircle, Mail } from "lucide-react";
import { agents } from "@/lib/data";

export const metadata = {
  title: "Agents",
  description:
    "Meet Esteemed Agents — featuring Star. AI agents trained on your business, backed by real people.",
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Agents
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Agents — featuring Star
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            AI agents that handle real work — trained on your business, backed
            by real people.
          </p>
        </div>
      </section>

      {/* Star featured */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <MessageCircle
                className="w-10 h-10 text-ink flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="text-3xl font-bold text-ink mb-3">Star</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                  Your AI assistant that knows your business. Ask it anything
                  about your content, customers, and operations. Powered by
                  retrieval-augmented generation.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Star indexes your website, documents, and knowledge base to
                  answer questions with verified, sourced responses. It learns
                  your tone, understands your products, and gets smarter with
                  every interaction. Deploy it as a chat widget, internal tool,
                  or API endpoint.
                </p>
                <ul className="space-y-2">
                  {[
                    "Trained on your content and business data",
                    "Sourced answers with confidence scoring",
                    "Learns and improves over time",
                    "Deploy as chat widget, internal tool, or API",
                    "Powered by Esteemed Intelligence",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <Check
                        className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other agents */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">More agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.key}
                className="rounded-2xl border border-zinc-200 p-8"
              >
                <div className="flex items-start gap-4">
                  <agent.icon
                    className="w-8 h-8 text-ink flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-ink">
                        {agent.name}
                      </h3>
                      <span className="text-xl font-bold text-ink">
                        ${agent.price}
                        <span className="text-sm text-zinc-500 font-normal">
                          /mo
                        </span>
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-zinc-200 p-8 md:p-10 text-center">
            <Mail className="w-8 h-8 text-ink mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-ink mb-3">
              More agents coming
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6 max-w-xl mx-auto">
              We are building new agents for scheduling, analytics, customer
              success, and more. Be the first to know when they launch.
            </p>
            {/* Email capture placeholder */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-full border border-zinc-200 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-accent"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom agent cross-sell */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Want a custom agent?
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Build one with Colleagues experts. Tell us what your business needs
            done — we design, build, train, and maintain it. Custom agents start
            at $299/mo.
          </p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Meet Colleagues &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Add an agent to your plan.
          </h2>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            See pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
