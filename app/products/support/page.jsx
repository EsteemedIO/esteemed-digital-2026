import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { supportPricingPlans } from "@/lib/product-page-pricing";
import {
  Headphones,
  Users,
  Wrench,
  Compass,
  Settings,
  ShieldCheck,
  ArrowRight,
  Search,
  LayoutDashboard,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Support",
  description:
    "Esteemed Support. Expert human assistance for anything Esteemed apps handle — or anything built elsewhere.",
};

const pricingPlans = supportPricingPlans();

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="support" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Support
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Support
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Expert human assistance for anything Esteemed apps handle &mdash; or
            anything built elsewhere. The human complement to our AI products,
            connecting you with seasoned professionals who solve real problems
            and deliver real results.
          </p>
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

      {/* Split treatment */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Customers — primary */}
            <div className="rounded-2xl border border-accent p-8 md:p-10">
              <Headphones
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Customers
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Get expert help with your Esteemed apps, migrations, custom
                development, design, and strategy. Our team is your team &mdash;
                ready when you need them.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Dedicated account manager",
                  "Priority response times",
                  "Custom development requests",
                  "Migration assistance",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <Search
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/support/get-support"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Get Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* For Partners — secondary */}
            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <Users
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Partners
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                White-label support for your clients. Extend your team with
                Esteemed experts, maintain your brand, and deliver exceptional
                service at scale.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Branded support portal",
                  "SLA-backed response times",
                  "Escalation to Esteemed experts",
                  "Partner dashboard",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <Search
                      className="w-4 h-4 text-ink flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/support/become-a-partner"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-paper transition-colors"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-10">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Wrench
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">
                Technical Support
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Bug fixes, troubleshooting, and performance optimization.
                Fast, reliable resolution from engineers who know the stack
                inside and out.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Compass
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">
                Strategic Consulting
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Architecture review, growth planning, and optimization.
                Senior advisors who help you make the right decisions before
                you build.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <Settings
                className="w-8 h-8 text-ink mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-bold text-ink mb-2">
                Managed Services
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Ongoing maintenance, monitoring, and updates. We keep your
                systems running so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Expert help, whenever you need it.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support/get-support"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              Get Support
            </Link>
            <Link
              href="/support/become-a-partner"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white hover:text-ink transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
