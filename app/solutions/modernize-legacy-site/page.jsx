import Image from "next/image";
import Link from "next/link";
import {
  RefreshCw,
  Zap,
  ShieldCheck,
  ArrowRightLeft,
  Users,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Modernize a Legacy Site | Esteemed",
  description:
    "Migrate your legacy website to a modern, performant stack with AI-assisted migration tools and expert developers from Esteemed.",
};

const features = [
  {
    icon: RefreshCw,
    title: "AI-Assisted Migration",
    description:
      "Esteemed Create analyzes your existing site and generates a modern rebuild, preserving content and structure.",
  },
  {
    icon: Zap,
    title: "Modern Performance",
    description:
      "Move from legacy CMSs to modern frameworks with built-in performance optimization, lazy loading, and edge caching.",
  },
  {
    icon: ShieldCheck,
    title: "Security Upgrades",
    description:
      "Eliminate the vulnerabilities of outdated platforms. Esteemed Cloud provides managed security, patching, and SSL by default.",
  },
  {
    icon: ArrowRightLeft,
    title: "Data & Content Migration",
    description:
      "We handle the complex parts -- database migrations, URL redirects, SEO preservation, and integration rewiring.",
  },
  {
    icon: Users,
    title: "Migration Specialists",
    description:
      "Colleagues developers specialize in Drupal, WordPress, and custom PHP migrations. They have done it hundreds of times.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    description:
      "Esteemed Support provides monitoring, bug fixes, and performance tuning after your migration goes live.",
  },
];

const migrationPaths = [
  "Drupal 7/8 to modern Drupal, Next.js, or headless architecture",
  "Legacy WordPress to current WordPress or static site generation",
  "Custom PHP to modern JavaScript frameworks",
  "On-premise hosting to Esteemed Cloud managed infrastructure",
  "Monolithic sites to decoupled frontend/backend architectures",
  "Single-site to multi-site or multi-brand setups",
];

export default function ModernizeLegacySitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-100">
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Use Case
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Modernize a legacy site
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg">
              Migrate your legacy website to a modern, performant stack -- with
              AI assistance and expert developers by your side.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/migrate"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Try Migration Tool
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hire-experts/website-design"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                Hire Migration Experts
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/segments/bg-man.webp"
              alt="Developer modernizing a legacy application"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            A complete migration path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-zinc-200 p-8"
                >
                  <Icon
                    className="w-8 h-8 text-ink mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration paths */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/segments/colleagues-feature.webp"
                alt="Migration planning session"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Common migration paths
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We have migrated hundreds of sites across every major platform.
                Whatever your starting point, we have a proven path forward.
              </p>
              <ul className="space-y-4">
                {migrationPaths.map((path) => (
                  <li key={path} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-zinc-700">{path}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to modernize?
          </h2>
          <Link
            href="/migrate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start Migration &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
