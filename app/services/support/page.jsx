import Link from "next/link";
import StickyAnchorNav from "@/components/StickyAnchorNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { supportPricingPlans } from "@/lib/product-page-pricing";
import {
  Headphones,
  Check,
  PlusCircle,
  Globe,
  Shield,
  Cpu,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Support",
  description:
    "Get expert human help with what you build or existing apps. Hourly support plans from Esteemed.",
};

const pricingPlans = supportPricingPlans();

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="support" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Services / Support
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Support
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Get expert human help with what you build or existing apps.
          </p>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether it&apos;s an Esteemed app or one you built elsewhere, our
            team helps you grow it.
          </p>
        </div>
      </section>

      {/* As an add-on / As standalone */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-accent p-8">
              <PlusCircle
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-3">
                As an add-on
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Bundled with Create and Cloud. Your support team already knows
                your app, your hosting, and your configuration. No ramp-up time,
                no context switching.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8">
              <Globe
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-3">
                As standalone
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                For customers with apps hosted elsewhere. WordPress, Drupal,
                custom builds, SaaS platforms — we support what you have, where
                it lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductPricingBlock
        eyebrow="Support plans"
        title="Monthly human support subscriptions"
        description="Choose a monthly support package for Esteemed apps, existing websites, troubleshooting, content updates, and technical requests. Higher-volume packs reduce the effective hourly rate."
        productKey="support"
        plans={pricingPlans}
        ctaLabel="Start support"
        contactHref="/support/get-support"
        fallbackHref="/support/get-support"
        calculatorHref={null}
      />

      {/* What's included */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-6">
            What your hours cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Bug fixes and troubleshooting",
              "Content updates and layout changes",
              "Form management and configuration",
              "Performance optimization",
              "Plugin and dependency updates",
              "Accessibility improvements",
              "Third-party integration support",
              "Training and documentation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-600"
              >
                <Check
                  className="w-4 h-4 text-ink flex-shrink-0"
                  strokeWidth={2}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty work */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Specialty work
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Some work requires deeper expertise. Architecture reviews, security
            audits, and AI/ML engineering are available at higher rates (TBD).
            Contact us for scoping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Shield
                className="w-6 h-6 text-ink mb-3"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-1">
                Security audits
              </h3>
              <p className="text-sm text-zinc-500">Rate TBD</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Cpu
                className="w-6 h-6 text-ink mb-3"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-1">
                Architecture reviews
              </h3>
              <p className="text-sm text-zinc-500">Rate TBD</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Headphones
                className="w-6 h-6 text-ink mb-3"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-1">
                AI/ML engineering
              </h3>
              <p className="text-sm text-zinc-500">Rate TBD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colleagues cross-sell */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <Users
              className="w-8 h-8 text-ink flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h2 className="text-2xl font-bold text-ink mb-3">
                Need a bigger team?
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                When your project outgrows hourly support, Esteemed Colleagues
                connects you to 35,000+ vetted professionals for dedicated
                engagements — developers, designers, strategists, and more.
              </p>
          <Link
            href="/products/colleagues"
            className="inline-flex items-center text-sm font-bold text-ink hover:underline"
          >
            Colleagues &rarr;
          </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Expert help, when you need it.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get started with Support
          </Link>
        </div>
      </section>
    </div>
  );
}
