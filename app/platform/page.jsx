import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";
import { ArrowRight, Brain } from "lucide-react";

export const metadata = {
  title: "Platform | Esteemed",
  description:
    "The Esteemed platform. Eight products on one shared intelligence substrate — Acquire, Hire, Curate, Connect, Create, Colleagues, Agents, and Cloud.",
};

const products = [
  {
    key: "acquire",
    name: "Esteemed Acquire",
    category: "Recruiting CRM",
    description:
      "CRM for client and talent acquisition. Dual pipelines, lead scoring, outreach automation, and pipeline analytics.",
    href: "/products/acquire",
    buyer: "Staffing firms, agencies, and services companies",
    status: "Live",
  },
  {
    key: "hire",
    name: "Esteemed Hire",
    category: "Applicant Tracking",
    description:
      "ATS integrated with Colleagues for sourcing and Intelligence for candidate ranking. Customizable pipelines and workflow automation.",
    href: "/products/hire",
    buyer: "Hiring managers and talent acquisition teams",
    status: "Live",
  },
  {
    key: "curate",
    name: "Esteemed Curate",
    category: "AI-native CMS",
    description:
      "Managed CMS and media workspace with RAG-native content, agent-assisted publishing, and Connect integration for AI retrieval.",
    href: "/products/curate",
    buyer: "Marketing teams, content publishers, and brand managers",
    status: "Live",
  },
  {
    key: "connect",
    name: "Esteemed Connect",
    category: "Retrieval (RAG)",
    description:
      "Retrieval-augmented generation layer. Index documents, conversations, and data across 12+ integrations for AI-driven search.",
    href: "/products/connect",
    buyer: "Teams with knowledge scattered across tools",
    status: "Live",
  },
  {
    key: "create",
    name: "Esteemed Create",
    category: "AI Website Builder",
    description:
      "Prompt-to-site AI website builder. Generate, customize, and publish production-ready websites in minutes.",
    href: "/websites/website-builder",
    buyer: "Small businesses, entrepreneurs, and agencies",
    status: "Live",
  },
  {
    key: "colleagues",
    name: "Esteemed Colleagues",
    category: "Talent Marketplace",
    description:
      "Talent and opportunity marketplace connecting 35,000+ vetted professionals with employers. Built-in project management and invoicing.",
    href: "/products/colleagues",
    buyer: "Employers hiring contract or direct talent, and jobseekers",
    status: "Live",
  },
  {
    key: "agents",
    name: "Esteemed Agents",
    category: "AI Agents",
    description:
      "AI agents trained on your business — featuring Star. Deploy as chat widgets, internal tools, or API endpoints. Custom agents available.",
    href: "/products/agents",
    buyer: "Businesses automating content, recruiting, marketing, and support",
    status: "Live",
  },
  {
    key: "cloud",
    name: "Esteemed Cloud",
    category: "Hosting & Infrastructure",
    description:
      "Website hosting with self-serve and managed plans. SSL, backups, monitoring, CDN, and managed rebuild options.",
    href: "/products/cloud",
    buyer: "Businesses that need reliable, managed website hosting",
    status: "Live",
  },
];

const roadmap = [
  {
    name: "Esteemed Curate DAM",
    description:
      "Digital asset management for Curate — centralized media library with tagging, versioning, and AI-powered search.",
    target: "Q1 2027",
    href: "/products/curate/dam",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            The Esteemed Platform
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Eight products on one shared intelligence substrate. Every product
            shares memory, reasoning, and coherence through Esteemed
            Intelligence — so your tools get smarter together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
            >
              See all products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/intelligence"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ink text-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              About Intelligence
            </Link>
          </div>
        </div>
      </section>

      {/* Substrate banner */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Brain className="w-10 h-10 text-ink mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-ink mb-3">
            Powered by Esteemed Intelligence
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Every product on this page shares a common intelligence substrate.
            Memory persists across sessions, reasoning crosses system boundaries,
            and coherence is verified structurally — not probabilistically.
            When you use one product, every other product benefits.
          </p>
        </div>
      </section>

      {/* Products by Name */}
      <section id="products" className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Products by Name
          </h2>
          <p className="text-zinc-600 mb-12 max-w-2xl">
            Each product is a standalone application with its own pricing,
            features, and buyer profile — connected through the shared
            Intelligence layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.key}
                href={product.href}
                className="group rounded-2xl border border-zinc-200 p-8 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-4">
                  <ProductIcon
                    product={product.key}
                    className="h-10 w-10 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-ink">
                        {product.name}
                      </h3>
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {product.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-400 mb-3">
                      {product.category}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                      {product.description}
                    </p>
                    <p className="text-xs text-zinc-500">
                      <span className="font-medium">For:</span>{" "}
                      {product.buyer}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-ink transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-4">Roadmap</h2>
          <p className="text-zinc-600 mb-10 max-w-2xl">
            Upcoming products and capabilities on the Esteemed platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group rounded-2xl border border-dashed border-zinc-300 p-8 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                    {item.target}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            One platform. Shared intelligence.
          </h2>
          <p className="text-zinc-700 mb-8 max-w-xl mx-auto">
            Start with any product and expand across the platform. Every tool
            makes every other tool smarter.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-bold hover:bg-ink/90 transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
