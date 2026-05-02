import Link from "next/link";
import {
  Sparkles,
  MessageSquare,
  Eye,
  Rocket,
  Code,
  Cloud,
  Bot,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Create",
  description:
    "Build websites and apps by talking to AI. Chat, preview, publish.",
};

const steps = [
  {
    icon: MessageSquare,
    title: "Chat",
    description:
      "Describe what you want in plain English. Our AI understands your intent and builds a complete, working site — not a wireframe.",
  },
  {
    icon: Eye,
    title: "Preview",
    description:
      "See every change in a live preview before anything goes public. Share preview links with your team for feedback.",
  },
  {
    icon: Rocket,
    title: "Publish",
    description:
      "One click to go live on your custom domain. SSL, backups, and monitoring are included automatically via Cloud.",
  },
];

export default function CreatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Create
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Meet Esteemed Create
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Build websites and apps by talking to AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/create"
              className="px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Try Create &rarr;
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-zinc-200 p-8 text-center"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-ink text-sm font-bold mx-auto mb-4">
                  {i + 1}
                </span>
                <step.icon
                  className="w-8 h-8 text-ink mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio callout */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <Code
                className="w-8 h-8 text-ink flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  Need to go deeper? Studio is built into Create.
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Open your app in our cloud-based IDE for direct code edits —
                  no local setup, instant preview. Studio gives developers full
                  control without leaving the Esteemed platform. Edit components,
                  add custom logic, or integrate third-party libraries right in
                  your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting integration */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Cloud
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Hosting included with Cloud
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Everything you build in Create deploys to Esteemed Cloud — managed
                hosting with SSL, daily backups, monitoring, and a global edge
                network. No separate hosting provider to configure.
              </p>
              <Link
                href="/products/cloud"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Learn about Cloud &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agent add-ons */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Bot
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Supercharge with Agents
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Add AI agents to your Create project — Star for customer Q&A,
                Voice for missed calls, Social for automated posting, Blog for
                content, and Marketing for email campaigns. Each agent plugs
                directly into what you build.
              </p>
              <Link
                href="/products/agents"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Explore Agents &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colleagues cross-sell */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Users
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Growing with Colleagues
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Need specialized help beyond what AI can do? Esteemed Colleagues
                connects you to 35,000+ vetted professionals — designers,
                developers, strategists — who can take your project further.
              </p>
              <Link
                href="/products/colleagues"
                className="inline-flex items-center text-sm font-bold text-ink hover:underline"
              >
                Meet Colleagues &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start building in 30 seconds.
          </h2>
          <Link
            href="/products/create"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Try Create &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
