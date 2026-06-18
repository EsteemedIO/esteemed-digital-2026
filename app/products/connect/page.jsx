import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { curatePricingPlans } from "@/lib/product-page-pricing";
import {
  Database,
  Search,
  Link2,
  Shield,
  Server,
  KeyRound,
  FileCheck,
  Code,
  ArrowRight,
  Mail,
  MessageSquare,
  BookOpen,
  StickyNote,
  GitBranch,
  LayoutList,
  BarChart3,
  Share2,
  Droplets,
  Headphones,
  Globe,
  HardDrive,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Connect",
  description:
    "Esteemed Connect. Retrieval-Augmented Generation powered by your data sources. Connect, index, and search across all your knowledge.",
};

const connectors = [
  { name: "Google Drive", icon: HardDrive },
  { name: "Gmail", icon: Mail },
  { name: "Slack", icon: MessageSquare },
  { name: "Confluence", icon: BookOpen },
  { name: "Notion", icon: StickyNote },
  { name: "GitHub", icon: GitBranch },
  { name: "Jira", icon: LayoutList },
  { name: "Salesforce", icon: BarChart3 },
  { name: "SharePoint", icon: Share2 },
  { name: "Dropbox", icon: Droplets },
  { name: "Zendesk", icon: Headphones },
  { name: "Web", icon: Globe },
];

const steps = [
  {
    number: "01",
    title: "Connect your sources",
    description:
      "Authenticate and link your data sources in minutes. Google Drive, Slack, Confluence, GitHub, and more — all from a single dashboard.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Index & sync",
    description:
      "Connect continuously indexes your documents and conversations, keeping everything up to date with real-time sync across all sources.",
    icon: RefreshCw,
  },
  {
    number: "03",
    title: "AI retrieval across apps",
    description:
      "Every Esteemed product can now search and retrieve context from your connected sources — powering smarter, faster, more accurate AI.",
    icon: Sparkles,
  },
];

const pricingPlans = curatePricingPlans();

export default function ConnectPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="connect" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Connect
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-2">
            Esteemed Connect
          </h1>
          <p className="text-xl font-medium text-zinc-400 mb-6">Retrieval</p>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Connect all your knowledge sources and make them searchable by AI.
            Esteemed Connect is your retrieval layer — indexing documents,
            conversations, and data across 12+ integrations to power AI-driven
            search and context across every Esteemed product.
          </p>
        </div>
      </section>

      <div id="plans">
        <ProductPricingBlock
          eyebrow="Connect pricing"
          title="Included with managed Curate"
          description="Esteemed Connect is the RAG layer included with managed Curate. Choose a Curate workspace to connect approved content and systems for AI retrieval."
          productKey="connect"
          plans={pricingPlans}
          ctaLabel="Checkout"
          freeHref="/signup?product=curate"
        />
      </div>

      {/* Split treatment */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Teams — primary */}
            <div className="rounded-2xl border border-accent p-8 md:p-10">
              <Database
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">For Teams</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Connect your tools and let AI find what matters. Stop searching
                across tabs — Connect brings all your knowledge into one
                searchable, AI-ready index.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "12+ data source connectors",
                  "Real-time sync and indexing",
                  "Semantic search across all sources",
                  "Per-source access controls",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* For Enterprise — secondary */}
            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <Shield
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Enterprise
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Enterprise-grade knowledge retrieval with the security,
                compliance, and customization your organization requires.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "On-premise deployment option",
                  "SSO and role-based access",
                  "Compliance and audit logging",
                  "Custom connector development",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connector grid */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Supported Connectors
          </h2>
          <p className="text-zinc-600 mb-10 max-w-2xl leading-relaxed">
            Connect indexes your data wherever it lives. Authenticate once
            and your sources stay in sync automatically.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {connectors.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="rounded-2xl border border-zinc-200 p-6 flex flex-col items-center gap-3 hover:border-accent transition-colors"
              >
                <Icon
                  className="w-8 h-8 text-ink"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-ink text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div
                key={number}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <Icon
                  className="w-8 h-8 text-ink mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-xs font-bold text-zinc-400 mb-1">
                  {number}
                </p>
                <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your knowledge, connected.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-ink transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
