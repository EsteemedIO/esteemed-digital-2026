import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, Shield, Zap, Globe, Palette, PlugZap, Search } from "lucide-react";

export const metadata = {
  title: "WordPress Hosting | Esteemed",
  description:
    "Managed WordPress hosting on Esteemed Cloud. Fast, secure, and backed by experts. SSL, backups, CDN, and 24/7 monitoring included.",
};

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
                src="/images/hosting/wordpress-hero.png"
                alt="WordPress site built with Esteemed AI"
                className="w-full h-[240px] md:h-auto object-cover"
              />
            </div>

            {/* Overlays — hidden on mobile */}

            {/* 5X stat card — bottom left, spills out */}
            <div
              className="absolute -bottom-2 -left-4 bg-ink rounded-xl px-5 py-4 shadow-lg hidden md:block z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
            >
              <div className="flex items-end gap-[3px] mb-2 h-[36px]">
                {[14, 20, 28, 36].map((h, i) => (
                  <div key={i} className="w-[6px] rounded-sm" style={{ height: h, background: i < 2 ? "#FEE546" : "#16281E" }} />
                ))}
              </div>
              <div className="text-2xl font-extrabold text-white leading-none">5X</div>
              <div className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase mt-0.5">More Web Traffic*</div>
            </div>

            {/* "Built on WordPress" status bar — overlaps Generate button */}
            <div
              className="absolute bottom-10 right-6 bg-white rounded-full px-4 py-2.5 shadow-lg hidden md:flex items-center gap-2 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 1.2s both" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
              <span className="text-xs font-semibold text-ink">Built on WordPress — Deployed to Esteemed Cloud</span>
            </div>

            {/* Approve / Request buttons — top right, spills out */}
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

            {/* "Improve with Esteemed Create AI" toolbar — moved left and down */}
            <div
              className="absolute top-[48%] -left-6 bg-white rounded-lg px-3 py-2 shadow-lg hidden md:flex items-center gap-3 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
            >
              <div className="flex items-center gap-2 text-ink">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              </div>
              <div className="w-px h-5 bg-zinc-200" />
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "#FEE546" }}>
                  <svg width="12" height="12" viewBox="0 0 268 268"><path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill="#FFF"/></svg>
                </span>
                <span className="text-xs font-bold text-ink">Improve with Esteemed Create AI</span>
              </div>
            </div>
          </div>
          <div className="md:order-2">
            <div className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center p-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/wordpress.svg" alt="WordPress" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Hosting / WordPress
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Managed WordPress Hosting
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Fast, secure WordPress hosting on Esteemed Cloud. We handle the infrastructure — SSL, backups, updates, and monitoring — so you can focus on your content and business.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Free SSL certificate — always HTTPS",
                "Automatic daily backups with one-click restore",
                "WordPress core and plugin auto-updates",
                "Global CDN for fast page loads",
                "24/7 uptime monitoring",
                "No renewal price hikes — ever",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <TickRounded className="w-7 h-7" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?interest=wordpress-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white hover:text-ink transition-colors">
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
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Ready to host your WordPress site?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Migrate your existing WordPress site or start fresh with managed hosting that includes SSL, backups, and expert support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=wordpress-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
