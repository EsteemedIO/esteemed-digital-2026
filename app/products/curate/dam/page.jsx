import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";
import { ArrowRight, Image, Tags, History, Search, Brain, FolderOpen } from "lucide-react";

export const metadata = {
  title: "Curate DAM | Esteemed",
  description:
    "Esteemed Curate DAM — digital asset management for Curate. Centralized media library with tagging, versioning, and AI-powered search. Coming Q1 2027.",
};

const capabilities = [
  {
    icon: FolderOpen,
    title: "Centralized Media Library",
    description:
      "One place for all brand assets — images, videos, documents, and design files. Organized by project, campaign, or content type.",
  },
  {
    icon: Tags,
    title: "AI-Powered Tagging",
    description:
      "Intelligence auto-tags uploads with subjects, colors, text content, and brand relevance. Find any asset in seconds.",
  },
  {
    icon: History,
    title: "Version History",
    description:
      "Every edit, crop, and revision tracked. Roll back to any previous version without losing work or breaking live content.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Search by what assets look like, not just what they are named. Intelligence understands visual and textual content for natural-language queries.",
  },
  {
    icon: Image,
    title: "Transform & Deliver",
    description:
      "On-the-fly image resizing, format conversion, and CDN delivery. Optimized assets served from the edge without manual export.",
  },
  {
    icon: Brain,
    title: "Connected to Curate",
    description:
      "Assets in DAM are instantly available in your Curate CMS. Publish content and media from one unified workspace.",
  },
];

export default function CurateDamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="curate" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Curate / DAM
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Curate DAM
          </h1>
          <p className="text-xl font-medium text-zinc-400 mb-6">
            Digital Asset Management
          </p>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            A centralized media library for your brand assets — with AI-powered
            tagging, versioning, semantic search, and CDN delivery. Built into
            Curate so your content and media live in one place.
          </p>

          {/* Coming soon badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-ink">
              Coming Q1 2027
            </span>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Built for marketing teams, brand managers, and content publishers
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            If your team manages hundreds of images, brand guidelines, campaign
            assets, or client deliverables — DAM gives you a single source of
            truth with search that actually works.
          </p>
        </div>
      </section>

      {/* Powered by EI */}
      <section className="py-12 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 flex items-start gap-4">
          <Brain className="w-8 h-8 text-ink flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-bold text-ink uppercase tracking-wide mb-1">
              Powered by Esteemed Intelligence
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Auto-tagging, semantic search, and content recommendations are
              powered by the Intelligence substrate. Every asset indexed is
              searchable across your entire Esteemed workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Planned capabilities */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Planned capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon
                  className="w-6 h-6 text-ink flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-zinc-200 p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-ink mb-3">
              Be first to try Curate DAM
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6 max-w-xl mx-auto">
              We are targeting Q1 2027 for early access. Leave your email and
              we will notify you when DAM is ready.
            </p>
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

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Start with Curate today.
          </h2>
          <p className="text-zinc-700 mb-8 max-w-xl mx-auto">
            DAM is coming — but Curate CMS is live now. Start managing your
            content and be ready when DAM launches.
          </p>
          <Link
            href="/products/curate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-bold hover:bg-ink/90 transition-colors"
          >
            See Curate
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
