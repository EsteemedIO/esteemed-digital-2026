import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  RefreshCw,
  Zap,
  ShieldCheck,
  ArrowRightLeft,
  Users,
  Headphones,
} from "lucide-react";
import TickRounded from "@/components/TickRounded";

export const metadata = {
  title: "Modernize a Legacy Site | Esteemed",
  description:
    "Migrate your legacy website to a modern, performant stack with AI-assisted migration tools and expert developers from Esteemed.",
};

const features = [
  {
    icon: RefreshCw,
    title: "AI-Assisted Migration",
    desc: "Esteemed Create analyzes your existing site structure, content hierarchy, and design patterns, then generates a modern rebuild that preserves what works and upgrades everything else. Content, images, and metadata transfer automatically.",
  },
  {
    icon: Zap,
    title: "Modern Performance",
    desc: "Move from legacy CMSs and monolithic architectures to modern frameworks with built-in performance optimization. Lazy loading, image compression, edge caching, and code splitting deliver sub-second load times out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Security Upgrades",
    desc: "Legacy platforms accumulate years of unpatched vulnerabilities, outdated dependencies, and deprecated APIs. Esteemed Cloud provides managed security, automatic patching, SSL by default, and WAF protection without your team managing servers.",
  },
  {
    icon: ArrowRightLeft,
    title: "Content & Data Migration",
    desc: "We handle the complex parts that break most migrations: database transformations, URL redirect mapping, SEO preservation, media library migration, and integration rewiring. Your content and search rankings transfer intact.",
  },
  {
    icon: Users,
    title: "Migration Specialists",
    desc: "Colleagues developers specialize in Drupal, WordPress, Joomla, and custom PHP migrations. They have executed hundreds of migrations across every major platform and know where the edge cases hide. No learning curve, no surprises.",
  },
  {
    icon: Headphones,
    title: "Post-Migration Support",
    desc: "Esteemed Support provides monitoring, performance tuning, bug fixes, and training after your migration goes live. We stay engaged through the critical first 90 days and offer ongoing support plans for long-term peace of mind.",
  },
];

const steps = [
  {
    number: "01",
    title: "Assess your current site",
    desc: "We audit your existing platform for content inventory, technical debt, security vulnerabilities, performance bottlenecks, and integration dependencies. You get a clear picture of what needs to migrate and what to leave behind.",
  },
  {
    number: "02",
    title: "Plan the migration path",
    desc: "Together we define the target architecture, content mapping, URL redirect strategy, and timeline. Every migration gets a written plan with milestones and rollback procedures.",
  },
  {
    number: "03",
    title: "Rebuild with Create + experts",
    desc: "AI generates the modern site structure while Colleagues developers handle custom logic, integrations, and edge cases. You review and approve at every stage.",
  },
  {
    number: "04",
    title: "Deploy and monitor",
    desc: "We deploy to Esteemed Cloud, verify redirects, validate SEO, and monitor performance. Post-launch support keeps everything running smoothly through the transition.",
  },
];

export default function ModernizeLegacySitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E8E0E0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Use Case
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Modernize your legacy site without losing what works.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Legacy sites are expensive to maintain, slow to load, and increasingly vulnerable to
              security threats. Esteemed combines AI-assisted migration tools with experienced
              developers to move you to a modern stack while preserving your content, SEO, and business logic.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "AI analyzes your site and generates a modern rebuild",
                "Content, URLs, and SEO rankings transfer intact",
                "Migration specialists with hundreds of projects completed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <TickRounded className="w-7 h-7" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/bg-man.webp"
              alt="Developer planning a legacy site migration"
              variant="usecase-modernize"
              objectPosition="center 30%"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "500+", l: "Sites migrated" },
              { n: "68%", l: "Average load time reduction" },
              { n: "100%", l: "Content preserved" },
              { n: "35,000+", l: "Experts in network" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-extrabold text-2xl md:text-3xl tracking-tight text-accent">
                  {s.n}
                </div>
                <div className="text-sm text-white/70 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational block */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/colleagues-feature.webp"
                alt="Migration planning session"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                The real cost of running a legacy site
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Legacy sites do not just look outdated. They actively cost your business money. Drupal 7 reached end of life. WordPress sites running old PHP versions are security liabilities. Custom PHP applications built a decade ago have no one left who understands the codebase.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                The maintenance burden compounds every year. Patches take longer because dependencies conflict. Performance degrades because the architecture was never designed for modern traffic patterns. New features are impossible because the original framework does not support them.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                But migration is daunting. The risk of losing SEO rankings, breaking integrations, and disrupting business operations keeps teams on legacy platforms far longer than they should stay. Esteemed eliminates that risk with AI-assisted migration that preserves your content and rankings, combined with developers who have done hundreds of migrations and know exactly where the edge cases hide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              A complete migration path
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              AI handles the heavy lifting. Expert developers handle the edge cases. Your content and rankings transfer intact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-zinc-200">
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From legacy to modern in four phases
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Every migration follows a proven process with clear milestones, rollback procedures, and stakeholder checkpoints.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">{step.number}</div>
                <h3 className="text-lg font-extrabold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration paths — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Common migration paths
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                We have migrated hundreds of sites across every major platform. Whatever your starting point, we have a proven path forward and developers who have walked it before.
              </p>
              <ul className="space-y-4">
                {[
                  "Drupal 7/8/9 to modern Drupal 10+, Next.js, or headless architecture",
                  "Legacy WordPress to current WordPress or static site generation",
                  "Custom PHP and .NET to modern JavaScript frameworks",
                  "On-premise hosting to Esteemed Cloud managed infrastructure",
                  "Monolithic sites to decoupled frontend/backend architectures",
                  "Single-site to multi-site or multi-brand setups",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/bg-man.webp", label: "Assessment" },
                { src: "/images/segments/engineer-monitoring.webp", label: "Migration" },
                { src: "/images/segments/tech-team.webp", label: "Deployment" },
                { src: "/images/segments/colleagues-feature.webp", label: "Support" },
              ].map((card) => (
                <div key={card.label} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "Which platforms can you migrate from?", a: "We have migrated sites from Drupal (all versions), WordPress, Joomla, Sitecore, Adobe Experience Manager, Squarespace, Wix, custom PHP, .NET, and proprietary CMSs. If it is on the web, we can migrate it." },
        { q: "How long does a migration take?", a: "Simple sites (under 100 pages) typically migrate in 2-4 weeks. Complex sites with custom integrations, large content libraries, or multiple languages take 6-12 weeks. We provide a detailed timeline during the assessment phase." },
        { q: "Will I lose my search rankings?", a: "No. SEO preservation is a core part of every migration. We map every URL, create 301 redirects, transfer metadata, and validate structured data. Most clients see improved rankings within 90 days because the new site loads faster and has cleaner markup." },
        { q: "What about data and content migration?", a: "All content, media, user data, and metadata transfer to the new platform. We handle database transformations, image optimization, and content restructuring. You review and approve the migration before the old site is decommissioned." },
        { q: "How much does a migration cost?", a: "Migration costs depend on site size, complexity, and the number of custom integrations. Simple migrations start around $5,000. Complex enterprise migrations are scoped individually. We provide a fixed-price quote after the assessment phase." },
        { q: "Can I keep my current design?", a: "Yes. We can recreate your existing design on a modern framework, or we can use the migration as an opportunity for a full redesign. Many clients choose to modernize the design alongside the technology stack." },
      ]} />

      {/* Bottom CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to leave
                <br />
                legacy behind?
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Get a free migration assessment and find out exactly what it takes to move your site to a modern stack.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Get a Free Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hire-experts/website-design"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "500+ sites migrated across every major platform",
                  "AI-assisted migration preserves content and rankings",
                  "Expert developers from the Colleagues network",
                  "Post-migration support and monitoring included",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <TickRounded className="w-7 h-7" />
                    </span>
                    <span className="text-white font-medium text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
