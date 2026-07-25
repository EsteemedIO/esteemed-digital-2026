import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, Cloud, Shield, HardDrive, Activity, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "Web Hosting | Esteemed",
  description:
    "Web hosting on Esteemed Cloud. Fast, reliable hosting for any website — WordPress, Drupal, Next.js, or custom. SSL, backups, and CDN included.",
};

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

const features = [
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Modern cloud hosting with automatic failover, redundancy, and a global edge network. No servers to manage." },
  { icon: Shield, title: "SSL Included", desc: "Every site gets HTTPS automatically. No certificates to manage, no renewals to track. Secure by default." },
  { icon: HardDrive, title: "Daily Backups", desc: "Automatic daily backups with one-click restore. Your content is safe even if something goes wrong." },
  { icon: Activity, title: "24/7 Monitoring", desc: "We watch your site around the clock. If something breaks, we know before you do — and we fix it." },
  { icon: Globe, title: "Global CDN", desc: "Content delivery network puts your site close to every visitor, worldwide. Fast load times everywhere." },
  { icon: Zap, title: "No Renewal Hikes", desc: "Predictable pricing that never doubles at renewal. The price you see is the price you pay — always." },
];

export default function WebHostingPage() {
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
        <div className="hero-block hero-block-split" style={{ background: "#E8F0E8" }}>
          <div className="md:order-2">
            <Cloud className="w-12 h-12 text-ink mb-4" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Hosting / Web Hosting
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Web Hosting on Esteemed Cloud
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Fast, reliable hosting for any website. Bring your existing site or build a new one — WordPress, Drupal, Next.js, React, Node, or static. SSL, backups, CDN, and monitoring included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?interest=web-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="md:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[380px] bg-zinc-200">
            {/* Hero image — replace src when available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Cloud className="w-24 h-24 text-zinc-300" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Hosting that works for you</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Whether you bring an existing site or build something new, our hosting platform handles the infrastructure so you can focus on your business.
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
          eyebrow="Cloud plans"
          title="Self-serve Web Hosting"
          description="Web hosting on Esteemed Cloud with SSL, CDN, and backups included. No forced CMS migration, no renewal hikes. Bring your own site or build with Esteemed Create."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />

        <ProductPricingBlock
          id="managed-hosting"
          eyebrow="Managed Hosting"
          title="Done-for-you Managed Hosting"
          description="Managed hosting includes support hours and a $0 site rebuild with a 12-month term. We keep your site fast, patched, and online."
          productKey="cloud"
          defaultBilling="monthly"
          plans={managedPlans}
          ctaLabel="Buy Now"
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Ready to host your site?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Get started with self-serve hosting or talk to us about managed plans with support included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=web-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
