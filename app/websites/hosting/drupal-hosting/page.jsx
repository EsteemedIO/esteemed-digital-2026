import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, Shield, Zap, Globe, Layers, Users, Code2 } from "lucide-react";

export const metadata = {
  title: "Drupal Hosting | Esteemed",
  description:
    "Managed Drupal hosting on Esteemed Cloud. Enterprise-grade performance, security, and expert Drupal support included.",
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
              <div className="w-14 h-14 rounded-xl bg-ink flex items-center justify-center p-2.5 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/drupal.svg" alt="Drupal" className="w-10 h-10" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <p className="text-sm font-medium text-zinc-500 mb-3">Hosting / Drupal</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Managed Drupal Hosting
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Enterprise-grade Drupal hosting on Esteemed Cloud. Optimized for complex content architectures, multi-site deployments, and the security demands of large organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                  See Plans and Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact?interest=drupal-hosting" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-6">What&apos;s included</h3>
              <ul className="space-y-4">
                {[
                  "Managed Drupal hosting on Esteemed Cloud",
                  "Free SSL certificate — always HTTPS",
                  "Automatic daily backups with one-click restore",
                  "Drupal core and module security patches",
                  "Global CDN for fast page loads",
                  "24/7 uptime monitoring",
                  "Composer and Drush CLI access",
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
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to host your Drupal site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Migrate your existing Drupal site or build a new one with enterprise-grade hosting and expert support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=drupal-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
