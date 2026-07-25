import Link from "next/link";
import SellBanner from "@/components/ecommerce/SellBanner";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { commercePricingPlans } from "@/lib/product-page-pricing";
import TickRounded from "@/components/TickRounded";
import { ArrowRight, ShoppingCart, CreditCard, BarChart3, Globe, Code2 } from "lucide-react";

export const metadata = {
  title: "Ecommerce | Esteemed",
  description:
    "Launch and grow your online store with Esteemed. Open source commerce solutions built on WooCommerce, Drupal Commerce, and Medusa.",
};

const commercePlans = commercePricingPlans();

const features = [
  { icon: ShoppingCart, title: "Storefront Design", desc: "Beautiful, conversion-optimized product pages and category layouts built for your brand." },
  { icon: CreditCard, title: "Checkout & Payments", desc: "Secure checkout flows with Stripe, subscriptions, one-click upsells, and tax handling." },
  { icon: BarChart3, title: "Analytics & Growth", desc: "Track revenue, conversions, and customer behavior — with AI-powered recommendations." },
  { icon: Globe, title: "Publish to Cloud", desc: "Deploy your store to Esteemed Cloud with SSL, CDN, and global edge delivery included." },
];

const platforms = [
  {
    key: "woocommerce",
    name: "WooCommerce",
    tagline: "The world's most popular ecommerce platform.",
    desc: "Built on WordPress, WooCommerce powers over 30% of all online stores. Thousands of extensions, full ownership of your data, and a massive ecosystem of developers and themes.",
    color: "#7B51AD",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/woocommerce.svg" alt="WooCommerce" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
    features: ["30%+ of all online stores", "Thousands of plugins", "Full data ownership", "Massive developer ecosystem"],
  },
  {
    key: "drupal",
    name: "Drupal Commerce",
    tagline: "Enterprise-grade commerce flexibility.",
    desc: "Drupal Commerce is the open source commerce framework for organizations that need complex catalogs, multi-language, multi-currency, and deeply customized checkout flows.",
    color: "#0678BE",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/drupal.svg" alt="Drupal" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
    features: ["Complex catalogs & pricing", "Multi-language & currency", "Custom checkout flows", "Enterprise scalability"],
  },
  {
    key: "esteemed",
    name: "Esteemed Commerce",
    tagline: "Node/Next.js, powered by Medusa hosted on our cloud.",
    desc: "Headless, API-first, built for teams that want to extend rather than configure. Your store runs on standard Medusa — take your store with you if you go.",
    color: "#0678BE",
    logo: (
      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/medusa.svg" alt="Medusa" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
      </div>
    ),
    features: ["Headless & API-first", "Node.js / React stack", "Fully decoupled frontend", "Built for custom storefronts"],
  },
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Sell with Esteemed — hero banner */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-[#16281E]">
          <SellBanner />
        </div>
      </section>

      {/* Open Source Commerce */}
      <section style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <ProductIcon product="ecommerce" className="mx-auto mb-6 h-14 w-14" />
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Open Source Commerce
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Choose the platform that fits your business
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mx-auto" style={{ maxWidth: 780 }}>
              We believe in open source with no vendor lock-in and ultimate flexibility. Our ecommerce solutions are used by the biggest brands in the world and supported by top experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-zinc-200 bg-white p-8 flex flex-col hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="mb-4">{p.logo}</div>
                <h3 className="text-xl font-bold text-ink mb-1">{p.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: p.color }}>
                  {p.tagline}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
                <ul className="space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-700">
                      <TickRounded className="w-7 h-7" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href={`/websites/ecommerce/start?platform=${p.key}`}
                    className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-zinc-500">
              Not sure which platform is right? <Link href="/contact?interest=ecommerce" className="font-bold text-ink hover:underline">Talk to our commerce team</Link> — we&apos;ll recommend the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Esteemed Commerce Plans */}
      <div id="plans">
        <ProductPricingBlock
          eyebrow="Esteemed Commerce plans"
          title="Infrastructure pricing, not transaction fees"
          description="All platforms are open source — you only pay for managed infrastructure. Zero platform fees, zero GMV surcharges. Exceed your base allocation? Pay only for what you use: ~$0.16/compute hr, ~$0.125/GB transfer, ~$0.50/GB-mo storage. Additional environments ~$20/mo, extra seats ~$30/mo."
          productKey="commerce"
          plans={commercePlans}
          ctaLabel="Buy Now"
          contactHref="/contact"
          fallbackHref="/websites/ecommerce/start"
          freeHref="/websites/ecommerce/start"
          defaultBilling="monthly"
        />
      </div>

      {/* What you get */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything you need to sell online
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From storefront to checkout to growth — we handle the stack so you can focus on your products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Platform integration breakout */}
      <section className="px-6 py-10">
        <div className="mx-auto rounded-3xl overflow-hidden" style={{ maxWidth: 1800, background: "#1A1A1A" }}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "#FEE546" }}>
                The Esteemed Platform
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Commerce that learns your business.
              </h2>
              <p className="text-base text-white/75 leading-relaxed mb-8 max-w-lg">
                Integrate Esteemed Commerce with our CRM, AI Agents, and Business Intelligence layer for a powerful modern automation stack that learns your customer patterns and helps refine your business. From first visit to repeat buyer — every interaction gets smarter.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "CRM integration — unified customer profiles across channels",
                  "AI Agents — automated follow-ups, cart recovery, and recommendations",
                  "Intelligence layer — pattern recognition that improves over time",
                  "Curate CMS — manage product content, blogs, and landing pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Explore the platform
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating on commerce platform"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Open source commitment */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                Our commitment
              </p>
              <h2 className="text-3xl font-bold text-ink mb-6">
                Open source means you&apos;re in control
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Every commerce platform we build on is open source. That means no
                vendor lock-in, no surprise fees, and full ownership of your store,
                your data, and your code. We contribute back to the communities that
                power these tools — because better open source means better stores
                for everyone.
              </p>
              <ul className="space-y-3">
                {[
                  "No proprietary lock-in — migrate anytime",
                  "Community-driven platforms with global support",
                  "Full code access and customization",
                  "Transparent pricing, no hidden platform fees",
                  "Expert implementation from our 35,000+ network",
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
                { label: "WooCommerce", bg: "#E4DBF0", icon: "🛒" },
                { label: "Drupal", bg: "#E0E9F2", icon: "💧" },
                { label: "Medusa", bg: "#DCEDE0", icon: "⚡" },
                { label: "Your Store", bg: "#FFF8D6", icon: "✨" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ background: card.bg, aspectRatio: "1" }}
                >
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <span className="text-sm font-bold text-ink">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Ready to sell online?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Talk to our team about the right commerce platform for your business — or start building with Esteemed Create.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/websites/website-builder/start"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors"
            >
              Try Create free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
