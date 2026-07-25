import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, Shield, Zap, Globe, Palette, PlugZap, Search } from "lucide-react";

export const metadata = {
  title: "WordPress Hosting | Esteemed",
  description:
    "Managed WordPress hosting on Esteemed Cloud. Fast, secure, and backed by experts. SSL, backups, CDN, and 24/7 monitoring included.",
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
  { icon: Zap, title: "Optimized for WordPress", desc: "Server-level caching, PHP tuning, and WordPress-specific optimizations for fast page loads." },
  { icon: Shield, title: "Security & Updates", desc: "Automatic WordPress core and plugin updates, malware scanning, and firewall protection." },
  { icon: Globe, title: "Global CDN", desc: "Content delivery network puts your WordPress site close to every visitor, worldwide." },
  { icon: Palette, title: "Any Theme or Plugin", desc: "Full compatibility with the WordPress ecosystem — install any theme, plugin, or custom code." },
  { icon: PlugZap, title: "Staging Environments", desc: "Test changes on a staging copy before pushing live. Available on Plus plans and above." },
  { icon: Search, title: "SEO Ready", desc: "Clean URLs, fast load times, and full compatibility with Yoast, RankMath, and other SEO plugins." },
];

export default function WordPressHostingPage() {
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
                <img src="/logos/wordpress.svg" alt="WordPress" className="w-10 h-10" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <p className="text-sm font-medium text-zinc-500 mb-3">Hosting / WordPress</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Managed WordPress Hosting
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Fast, secure WordPress hosting on Esteemed Cloud. We handle the infrastructure — SSL, backups, updates, and monitoring — so you can focus on your content and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                  See Plans and Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact?interest=wordpress-hosting" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                  Hire an Expert
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-6">What&apos;s included</h3>
              <ul className="space-y-4">
                {[
                  "Managed WordPress hosting on Esteemed Cloud",
                  "Free SSL certificate — always HTTPS",
                  "Automatic daily backups with one-click restore",
                  "WordPress core and plugin auto-updates",
                  "Global CDN for fast page loads",
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
            <h2 className="text-3xl font-bold text-ink mb-4">Built for WordPress</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our hosting platform is tuned specifically for WordPress performance, security, and reliability.
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
          eyebrow="WordPress Cloud Hosting"
          title="Self-serve WordPress Hosting"
          description="WordPress hosting on Esteemed Cloud with SSL, CDN, and backups included. No forced migrations, no renewal hikes. Bring your existing WordPress site or start fresh."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />

        <ProductPricingBlock
          id="managed-hosting"
          eyebrow="Managed WordPress Hosting"
          title="Done-for-you WordPress Hosting"
          description="Managed WordPress hosting with support hours and a $0 site rebuild with a 12-month term. We keep WordPress fast, patched, and online."
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
            Ready to host your WordPress site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Migrate your existing WordPress site or start fresh with managed hosting that includes SSL, backups, and expert support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=wordpress-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
