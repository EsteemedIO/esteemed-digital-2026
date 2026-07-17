import Image from "next/image";
import Link from "next/link";
import {
  RefreshCw,
  Zap,
  ShieldCheck,
  ArrowRightLeft,
  Users,
  Headphones,
  Check,
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
      "Esteemed Create analyzes your existing site and generates a modern rebuild, preserving content and structure while upgrading the technology.",
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
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Use Case
            </p>
            <h1 className="heading-3">Modernize a Legacy Site</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Migrate your legacy website to a modern, performant stack -- with
              AI assistance and expert developers by your side.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/migrate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Try Migration Tool
              </Link>
              <Link
                href="/hire-experts/website-design"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Hire Migration Experts
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/bg-man.webp"
              alt="Developer modernizing a legacy application"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">A Complete Migration Path</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            From assessment to launch, Esteemed handles every phase of your site
            modernization.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg"
                >
                  <span className="icon-badge icon-badge-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-ink/70">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-feature.webp"
              alt="Migration planning session"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Common Migration Paths</h2>
            <p className="text-lg text-ink/70">
              We have migrated hundreds of sites across every major platform.
              Whatever your starting point, we have a proven path forward.
            </p>
            <ul className="space-y-4">
              {migrationPaths.map((path) => (
                <li key={path} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{path}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Ready to modernize?
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Try our migration tool or talk to an expert about your project.
          </p>
          <Link
            href="/migrate"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Start Migration
          </Link>
        </div>
      </section>
    </main>
  );
}
