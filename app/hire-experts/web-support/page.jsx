import Link from "next/link";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import HeroImageComposite from "@/components/HeroImageComposite";
import StickyAnchorNav from "@/components/StickyAnchorNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { supportPricingPlans } from "@/lib/product-page-pricing";
import {
  ArrowRight,
  Headphones,
  Check,
  CheckCircle,
  PlusCircle,
  Globe,
  Shield,
  Cpu,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Web Support Plans | Esteemed",
  description:
    "Get expert human help with what you build or existing apps. Hourly support plans from Esteemed.",
};

const pricingPlans = supportPricingPlans();

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <StickyAnchorNav />
      {/* Hero */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto rounded-3xl pl-8 md:pl-14 pr-8 py-8 grid md:grid-cols-2 gap-10 items-center overflow-hidden" style={{ maxWidth: 1800, maxHeight: 640, background: "#DCEDE0" }}>
          <div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Web Support Plans
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Expert help for any website or app.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Whether it&apos;s an Esteemed app or one you built elsewhere, our team is ready to help.
              Call us at (360) 701-7353 for a free consultation.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Monthly support hours with a dedicated team",
                "Bug fixes, updates, and improvements",
                "No long-term contracts required",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <HeroImageComposite
            src="https://esteemed.io/sites/default/files/styles/global_webp/public/2024-11/hero-pers-1.png.webp?itok=qSVYTgE6"
            alt="Web support"
            variant="support"
          />
        </div>
      </section>

      {/* As an add-on / As standalone */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <PlusCircle className="w-8 h-8 text-ink" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-ink">As an add-on</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Already using Esteemed products? Add a Support pack to any plan.
                Support hours cover bug fixes, feature requests, content updates,
                and technical guidance across your Esteemed apps.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Globe, text: "Cloud — site fixes, deploys, DNS" },
                  { icon: Shield, text: "Curate — content, media, workflows" },
                  { icon: Cpu, text: "Acquire & Hire — config, integrations" },
                  { icon: Users, text: "Agents — tuning, training, monitoring" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-ink flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-zinc-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-8 h-8 text-ink" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold text-ink">As a standalone</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Don&apos;t use Esteemed products yet? No problem. Support packs
                work on any website or app — WordPress, Shopify, custom builds,
                legacy platforms. We&apos;ll audit, fix, and improve what you already
                have.
              </p>
              <div className="space-y-3">
                {[
                  "WordPress, Drupal, Shopify, Squarespace",
                  "Custom React, Node, Python, PHP apps",
                  "Legacy platforms and migrations",
                  "Performance audits and security hardening",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPricingBlock
        id="plans"
        eyebrow="Support plans"
        title="Choose your support plan"
        description="Monthly support hours with expert help. Use them on Esteemed apps or your existing sites and platforms."
        productKey="support"
        plans={pricingPlans}
        ctaLabel="Buy Now"
        contactHref="/contact"
        defaultBilling="monthly"
      />

      {/* How it works */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">
            How support works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pick a plan",
                desc: "Choose the number of monthly hours that fits your needs. No commitment beyond the billing cycle.",
              },
              {
                step: "2",
                title: "Submit requests",
                desc: "Send requests via email, chat, or your dashboard. We triage, scope, and get to work — usually within one business day.",
              },
              {
                step: "3",
                title: "We deliver",
                desc: "Our team completes the work within your hours. Unused hours don't roll over, but you can adjust your plan anytime.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-ink text-sm font-bold mx-auto mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HireExpertFAQ />

      {/* Bottom CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get expert help today.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
