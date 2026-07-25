import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { supportPricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, Clock, Shield, Wrench, Headphones, Users, Zap } from "lucide-react";

export const metadata = {
  title: "Hosting Premium Support | Esteemed",
  description:
    "Premium support for your hosted website. Monthly support hours for security patching, updates, content changes, and expert help.",
};

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
        links={hostingLinks}
        ctaLabel="See Plans"
        ctaHref="#plans"
      />

      {/* Hero — split layout */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#FFF8D6" }}>
          <div className="md:order-1 relative md:min-h-full">
            <div className="relative overflow-hidden rounded-t-3xl md:rounded-2xl md:shadow-xl md:mr-12 md:mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hosting/support.png"
                alt="Support specialist working on laptop"
                className="w-full h-[240px] md:h-auto object-cover"
              />
            </div>
            {/* 5X stat card — bottom left, matches other pages */}
            <div
              className="absolute -bottom-2 -left-4 bg-ink rounded-xl px-5 py-4 shadow-lg hidden md:block z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
            >
              <div className="flex items-end gap-[3px] mb-2 h-[36px]">
                {[14, 20, 28, 36].map((h, i) => (
                  <div key={i} className="w-[6px] rounded-sm" style={{ height: h, background: i < 2 ? "#FEE546" : "#FFFFFF" }} />
                ))}
              </div>
              <div className="text-2xl font-extrabold text-white leading-none">$85/hr</div>
              <div className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase mt-0.5">Expert Support</div>
            </div>
            {/* Status bar — bottom right, overlaps image */}
            <div
              className="absolute bottom-10 right-6 bg-white rounded-full px-4 py-2.5 shadow-lg hidden md:flex items-center gap-2 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 1.2s both" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
              <span className="text-xs font-semibold text-ink">Top Professionals — 24/7 Plans Available</span>
            </div>
          </div>
          <div className="md:order-2">
            <Headphones className="w-12 h-12 text-ink mb-4" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Hosting / Premium Support
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Hosting Premium Support
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Monthly support blocks for your hosted website — security patching, content updates, bug fixes, and expert help. Pair with any hosting plan for hands-on, ongoing care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?interest=premium-support" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                Talk to Us
              </Link>
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
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Need help with your site?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Pair a support plan with your hosting for ongoing security, updates, and expert help — or talk to us about custom support arrangements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=premium-support" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
