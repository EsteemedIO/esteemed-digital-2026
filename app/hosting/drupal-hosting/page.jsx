import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, Shield, Zap, Globe, Layers, Users, Code2 } from "lucide-react";

export const metadata = {
  title: "Drupal Hosting | Esteemed",
  description:
    "Managed Drupal hosting on Esteemed Cloud. Enterprise-grade performance, security, and expert Drupal support included.",
};

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

const features = [
  { icon: Zap, title: "Drupal-Optimized Stack", desc: "PHP-FPM, OPcache, Varnish-level caching, and Drupal-specific tuning for enterprise performance." },
  { icon: Shield, title: "Security Advisory Coverage", desc: "Drupal security advisories applied promptly. Core updates, module patches, and vulnerability monitoring." },
  { icon: Globe, title: "Multi-site & Multi-language", desc: "Host multiple Drupal sites or multi-language configurations on a single infrastructure plan." },
  { icon: Layers, title: "Complex Content Models", desc: "Full support for Drupal's content types, taxonomies, views, and custom entity architectures." },
  { icon: Users, title: "Granular Permissions", desc: "Role-based access control, editorial workflows, and content moderation out of the box." },
  { icon: Code2, title: "Composer & Drush Ready", desc: "Full CLI access with Composer and Drush. Deploy via Git or CI/CD pipelines." },
];

export default function DrupalHostingPage() {
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
            <div className="relative overflow-hidden rounded-t-3xl md:rounded-2xl md:shadow-xl md:mt-12 md:mr-12 md:mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hosting/drupal-hero.png"
                alt="Drupal site built with Esteemed AI"
                className="w-full h-[240px] md:h-auto object-cover"
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
              <span className="text-xs font-semibold text-ink">Built on Drupal — Deployed to Esteemed Cloud</span>
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
            <div className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center p-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/drupal.svg" alt="Drupal" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">Hosting / Drupal</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Managed Drupal Hosting
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Enterprise-grade Drupal hosting on Esteemed Cloud. Optimized for complex content architectures, multi-site deployments, and the security demands of large organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?interest=drupal-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white hover:text-ink transition-colors">
                Hire an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Built for Drupal</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Enterprise CMS infrastructure tuned for Drupal&apos;s performance, security, and extensibility requirements.
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
          eyebrow="Drupal Cloud Hosting"
          title="Self-serve Drupal Hosting"
          description="Drupal hosting on Esteemed Cloud with SSL, CDN, and backups included. Bring your existing Drupal site or start a new build with our experts."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />

        <ProductPricingBlock
          id="managed-hosting"
          eyebrow="Managed Drupal Hosting"
          title="Done-for-you Drupal Hosting"
          description="Managed Drupal hosting with support hours and security patching. We keep Drupal fast, secure, and updated."
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
            Ready to host your Drupal site?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Migrate your existing Drupal site or build a new one with enterprise-grade hosting and expert support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=drupal-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
