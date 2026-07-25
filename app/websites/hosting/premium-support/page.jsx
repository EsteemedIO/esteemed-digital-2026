import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { supportPricingPlans } from "@/lib/product-page-pricing";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, Clock, Shield, Wrench, Headphones, Users, Zap } from "lucide-react";

export const metadata = {
  title: "Hosting Premium Support | Esteemed",
  description:
    "Premium support for your hosted website. Monthly support hours for security patching, updates, content changes, and expert help.",
};

const hostingLinks = [
  { name: "WordPress Hosting", href: "/websites/hosting/wordpress-hosting" },
  { name: "Drupal Hosting", href: "/websites/hosting/drupal-hosting" },
  { name: "Next.js Hosting", href: "/websites/hosting/nextjs-hosting" },
  { name: "Curate CMS", href: "/websites/hosting/curate-cms" },
  { name: "Premium Support", href: "/websites/hosting/premium-support" },
];

const supportPlans = supportPricingPlans();

const features = [
  { icon: Clock, title: "Monthly Support Hours", desc: "Dedicated hours each month for your site — security patches, feature updates, content changes, and troubleshooting." },
  { icon: Shield, title: "Security Patching", desc: "CMS core updates, plugin/module patches, and vulnerability monitoring to keep your site secure." },
  { icon: Wrench, title: "Bug Fixes & Updates", desc: "Fix broken layouts, update plugins, resolve conflicts, and keep everything running smoothly." },
  { icon: Headphones, title: "Priority Response", desc: "Skip the queue. Premium support customers get priority handling for all requests." },
  { icon: Users, title: "Expert Team", desc: "Work with senior developers from our 35,000+ member network — WordPress, Drupal, Next.js, and Curate specialists." },
  { icon: Zap, title: "Proactive Monitoring", desc: "We watch your site 24/7 and fix issues before they become problems. Downtime alerts and rapid response." },
];

export default function PremiumSupportPage() {
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
              <Headphones className="w-14 h-14 text-ink mb-6" strokeWidth={1.5} />
              <p className="text-sm font-medium text-zinc-500 mb-3">Hosting / Premium Support</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Hosting Premium Support
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Monthly support blocks for your hosted website — security patching, content updates, bug fixes, and expert help. Pair with any hosting plan for hands-on, ongoing care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                  See Plans and Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact?interest=premium-support" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                  Talk to Us
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-6">What&apos;s included</h3>
              <ul className="space-y-4">
                {[
                  "Dedicated monthly support hours at $85/hr",
                  "Security patching and CMS updates",
                  "Bug fixes and layout repairs",
                  "Content updates and page changes",
                  "Plugin and module management",
                  "Priority response time",
                  "Expert WordPress, Drupal, and Next.js developers",
                  "Works with any Esteemed hosting plan",
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
            <h2 className="text-3xl font-bold text-ink mb-4">Ongoing care for your site</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Premium support is a monthly subscription that pairs with your hosting plan — so you always have expert help when you need it.
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
          eyebrow="Support plans"
          title="Monthly support packages"
          description="Choose a monthly block of support hours. Use them for security patches, content updates, bug fixes, or any hands-on help your site needs. All plans billed at $85/hr."
          productKey="support"
          plans={supportPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need help with your site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Pair a support plan with your hosting for ongoing security, updates, and expert help — or talk to us about custom support arrangements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=premium-support" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
