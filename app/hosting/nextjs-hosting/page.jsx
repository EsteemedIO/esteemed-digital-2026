import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import ProductIcon from "@/components/ProductIcon";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, Zap, Globe, Code2, GitBranch, Layers, Gauge } from "lucide-react";

export const metadata = {
  title: "Next.js Hosting | Esteemed",
  description:
    "Host Next.js apps on Esteemed Cloud. Server-side rendering, API routes, edge functions, and Git-based deploys with SSL and CDN included.",
};

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

const categoryPills = [
  { label: "Starter", color: "#16a34a" },
  { label: "Ecommerce", color: "#ea580c" },
  { label: "Blog", color: "#2563eb" },
  { label: "AI", color: "#7c3aed" },
  { label: "Portfolio", color: "#0891b2" },
  { label: "SaaS", color: "#ca8a04" },
];

const templateCards = [
  {
    name: "Next.js Commerce",
    desc: "An all-in-one starter kit for high-performance ecommerce.",
    image: "/images/templates/next-commerce.avif",
    cardBg: "#111",
    textColor: "#fff",
    descColor: "#999",
    zIndex: 30,
    rotate: "-3deg",
    left: "0%",
    top: "40px",
  },
  {
    name: "Image Gallery Starter",
    desc: "An image gallery built with Cloudinary.",
    image: "/images/templates/next-gallery.avif",
    cardBg: "#fff",
    textColor: "#111",
    descColor: "#71717a",
    zIndex: 20,
    rotate: "2deg",
    left: "28%",
    top: "20px",
  },
  {
    name: "Next.js Boilerplate",
    desc: "A Next.js starter from create-next-app.",
    image: "/images/templates/next-boilerplate.avif",
    cardBg: "#fff",
    textColor: "#111",
    descColor: "#71717a",
    zIndex: 10,
    rotate: "5deg",
    left: "52%",
    top: "60px",
  },
];

const features = [
  { icon: Zap, title: "SSR & ISR Support", desc: "Full server-side rendering, incremental static regeneration, and streaming — the complete Next.js feature set." },
  { icon: Globe, title: "Edge Network", desc: "Deploy to a global edge network. Static assets cached at the edge, dynamic routes served from the nearest region." },
  { icon: GitBranch, title: "Git-based Deploys", desc: "Push to Git, deploy automatically. Preview deployments on every pull request, production on merge." },
  { icon: Code2, title: "API Routes & Middleware", desc: "Full support for Next.js API routes, middleware, and server actions. No serverless cold starts." },
  { icon: Layers, title: "React Server Components", desc: "Ship less JavaScript to the browser. Full React Server Components support with streaming." },
  { icon: Gauge, title: "Built by Create", desc: "Esteemed Create builds Next.js sites from a prompt. Deploy directly to Cloud — or bring your own Next.js app." },
];

export default function NextJSHostingPage() {
  return (
    <div className="min-h-screen">
      <SectionNav
        sectionLabel="Hosting"
        links={hostingLinks}
        ctaLabel="See Plans"
        ctaHref="#plans"
      />

      {/* Hero — split layout */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E0E9F2" }}>
          <div className="md:order-1 relative md:min-h-full">
            <div className="relative overflow-hidden md:rounded-2xl md:shadow-xl md:mt-12 md:mr-12 md:mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hosting/next-hero.png"
                alt="Next.js site built with Esteemed AI"
                className="w-full h-[240px] md:h-auto object-cover md:object-contain"
              />
            </div>
            {/* 5X stat card — spills bottom-left */}
            <div
              className="absolute -bottom-2 -left-4 bg-white rounded-xl px-5 py-4 shadow-lg hidden md:block z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
            >
              <div className="flex items-end gap-[3px] mb-2 h-[36px]">
                {[14, 20, 28, 36].map((h, i) => (
                  <div key={i} className="w-[6px] rounded-sm" style={{ height: h, background: i < 2 ? "#FEE546" : "#16281E" }} />
                ))}
              </div>
              <div className="text-2xl font-extrabold text-ink leading-none">5X</div>
              <div className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase mt-0.5">More Web Traffic*</div>
            </div>
            {/* Status bar — overlaps Generate button */}
            <div
              className="absolute bottom-10 right-6 bg-white rounded-full px-4 py-2.5 shadow-lg hidden md:flex items-center gap-2 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 1.2s both" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
              <span className="text-xs font-semibold text-ink">Built on Next.js — Deployed to Esteemed Cloud</span>
            </div>
            {/* Approve / Request buttons — top right */}
            <div
              className="absolute top-6 right-2 hidden md:flex flex-col gap-2 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
            >
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border-2 border-green-500">
                <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Approve Design</span>
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-zinc-200">
                <span className="text-sm font-bold text-ink uppercase tracking-wide">Request Changes</span>
                <svg className="w-4 h-4 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
              </div>
            </div>
          </div>
          <div className="md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/nextjs.svg" alt="Next.js" className="mb-4 h-12 w-12 rounded-xl" />
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Hosting / Next.js
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Next.js Hosting on Esteemed Cloud
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Deploy Next.js apps with full SSR, API routes, and React Server Components. Built from Esteemed Create or bring your own — Git push deploys, SSL, CDN, and monitoring included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/websites/website-builder" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white hover:text-ink transition-colors">
                Try Create Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Built for Next.js</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Modern hosting infrastructure designed for React and Next.js applications — from simple static sites to full-stack apps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-zinc-200">
                <item.icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build like the best — templates */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-zinc-200 bg-[#FAFAFA] p-8 md:p-14 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categoryPills.map((pill) => (
                    <span
                      key={pill.label}
                      className="px-3 py-1 rounded-full border text-xs font-semibold"
                      style={{ color: pill.color, borderColor: `${pill.color}40` }}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4">
                  Build like the best
                </h2>
                <p className="text-base text-zinc-600 leading-relaxed mb-8 max-w-md">
                  Jumpstart your Next.js development with pre-built solutions from the community. Deploy any template to Esteemed Cloud — or let Create build something custom.
                </p>
                <Link
                  href="/websites/website-builder/start"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                >
                  Deploy a Template on Esteemed Cloud
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative hidden md:block h-[380px]">
                {/* Cascading template cards */}
                {templateCards.map((card) => (
                  <div
                    key={card.name}
                    className="absolute rounded-xl shadow-lg border border-zinc-200 overflow-hidden w-[260px]"
                    style={{
                      zIndex: card.zIndex,
                      transform: `rotate(${card.rotate})`,
                      left: card.left,
                      top: card.top,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.image} alt={card.name} className="w-full h-[140px] object-cover object-top" />
                    <div className="p-4" style={{ background: card.cardBg }}>
                      <h4 className="text-sm font-bold mb-1" style={{ color: card.textColor }}>{card.name}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: card.descColor }}>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A powerful framework — managed hosting pitch */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center leading-tight mb-16 max-w-3xl mx-auto">
            A powerful framework for building high-performance, server rendered web applications
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center mb-5">
                <Code2 className="w-5 h-5 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Superior Developer Experience</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Deploy your Next.js site globally in seconds, with zero configuration — just Git push to get started.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center mb-5">
                <Globe className="w-5 h-5 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Battle-tested in Production</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                All the features you need for production: hybrid static and server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5 text-ink" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Performance-obsessed Stack</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Next.js brings years of experience in building and optimizing production applications — and Esteemed Cloud keeps them fast.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#managed-hosting"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
            >
              Learn About Managed Next.js
            </Link>
            <Link
              href="/contact?interest=nextjs-hosting"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="plans">
        <ProductPricingBlock
          eyebrow="Next.js Cloud Hosting"
          title="Self-serve Next.js Hosting"
          description="Next.js hosting on Esteemed Cloud with SSL, CDN, Git deploys, and backups included. Bring your own app or build with Esteemed Create."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />

        <ProductPricingBlock
          id="managed-hosting"
          eyebrow="Managed Next.js Hosting"
          title="Done-for-you Next.js Hosting"
          description="Managed hosting with support hours, monitoring, and a $0 site rebuild with a 12-month term. We keep your Next.js app fast and online."
          productKey="cloud"
          defaultBilling="monthly"
          plans={managedPlans}
          ctaLabel="Buy Now"
        />
      </div>

      {/* Curate CMS callout */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-accent p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <ProductIcon product="curate" className="h-10 w-10 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  Need a managed CMS?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Esteemed Curate is built on Next.js and Node.js — our AI-native CMS managed on Esteemed Cloud with RAG grounding, agent-assisted publishing, and media storage. It&apos;s built for teams that want content to power conversational AI, not just web pages.
                </p>
                <Link
                  href="/business-tools/content-management"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Explore Curate CMS
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Ready to deploy your Next.js app?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Build with Esteemed Create or bring your own Next.js app. Deploy in minutes with Git push.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/websites/website-builder/start" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Try Create Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
