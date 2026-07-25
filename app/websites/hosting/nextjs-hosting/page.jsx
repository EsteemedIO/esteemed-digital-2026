import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, Zap, Globe, Code2, GitBranch, Layers, Gauge } from "lucide-react";

export const metadata = {
  title: "Next.js Hosting | Esteemed",
  description:
    "Host Next.js apps on Esteemed Cloud. Server-side rendering, API routes, edge functions, and Git-based deploys with SSL and CDN included.",
};

const hostingLinks = [
  { name: "WordPress Hosting", href: "/websites/hosting/wordpress-hosting" },
  { name: "Drupal Hosting", href: "/websites/hosting/drupal-hosting" },
  { name: "Next.js Hosting", href: "/websites/hosting/nextjs-hosting" },
  { name: "Curate CMS", href: "/websites/hosting/curate-cms" },
  { name: "Premium Support", href: "/websites/hosting/premium-support" },
];

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

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
        sectionHref="/websites/hosting"
        links={hostingLinks}
        ctaLabel="See Plans"
        ctaHref="#plans"
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ProductIcon product="create" className="mb-6 h-14 w-14" />
              <p className="text-sm font-medium text-zinc-500 mb-3">Hosting / Next.js</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Next.js Hosting on Esteemed Cloud
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Deploy Next.js apps with full SSR, API routes, and React Server Components. Built from Esteemed Create or bring your own — Git push deploys, SSL, CDN, and monitoring included.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                  See Plans and Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/websites/website-builder" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                  Try Create Free
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-6">What&apos;s included</h3>
              <ul className="space-y-4">
                {[
                  "Managed Node.js hosting for Next.js apps",
                  "Full SSR, ISR, and RSC support",
                  "Git-based deploys with preview environments",
                  "Free SSL certificate — always HTTPS",
                  "Automatic daily backups",
                  "Global CDN and edge caching",
                  "24/7 uptime monitoring",
                  "No renewal price hikes — ever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-sm text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
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

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to deploy your Next.js app?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Build with Esteemed Create or bring your own Next.js app. Deploy in minutes with Git push.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/websites/website-builder/start" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors">
              Try Create Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
