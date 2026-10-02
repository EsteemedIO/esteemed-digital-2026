import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { cloudPricingPlans, managedHostingPricingPlans } from "@/lib/product-page-pricing";
import {
  Cloud,
  Shield,
  HardDrive,
  Activity,
  Globe,
  ArrowRight,
  Brain,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Cloud | Esteemed",
  description:
    "Esteemed Cloud. Website hosting with self-serve and managed plans. SSL, backups, monitoring, CDN, and managed rebuild options. Powered by Esteemed Intelligence.",
};

const features = [
  {
    icon: Cloud,
    title: "Managed Hosting",
    description:
      "Done-for-you hosting with SSL, monitoring, backups, and support. Your site runs on optimized infrastructure — we handle the ops.",
  },
  {
    icon: Shield,
    title: "Security Built In",
    description:
      "Free SSL certificates, DDoS protection, and security monitoring on every plan. Enterprise plans add WAF and compliance support.",
  },
  {
    icon: HardDrive,
    title: "NVMe Storage",
    description:
      "Fast NVMe SSD storage on every plan. From 25 GB on Basic to 200 GB on Business — with room to scale.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    description:
      "Uptime monitoring, performance alerts, and application-level health checks. Issues are flagged before your customers notice.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Content delivery network included on all plans. Your site loads fast everywhere — not just near the origin server.",
  },
  {
    icon: RefreshCw,
    title: "Daily Backups",
    description:
      "Automatic daily backups with one-click restore. Managed plans include point-in-time recovery and retention policies.",
  },
];

const cloudPlans = cloudPricingPlans();
const managedPlans = managedHostingPricingPlans();

export default function CloudPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ProductIcon product="cloud" className="mx-auto mb-6 h-14 w-14" />
          <p className="text-sm font-medium text-zinc-500 mb-4">
            Products / Cloud
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Esteemed Cloud
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Website hosting for businesses that need reliability, security, and
            a team behind them. Self-serve plans for builders. Managed plans
            for teams that want it done right.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-ink font-bold hover:bg-accent-hover transition-colors"
            >
              See plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/websites/hosting"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ink text-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              Hosting details
            </Link>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-accent p-8 md:p-10">
              <Zap className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Builders
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Self-serve cloud hosting with git-based deploys, staging sites,
                and custom domains. Spin up a site and manage it yourself.
              </p>
              <p className="text-xs text-zinc-500">
                Developers, freelancers, and agencies managing client sites
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8 md:p-10">
              <Lock className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-ink mb-2">
                For Business Owners
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Managed hosting with a team behind it. We handle SSL, backups,
                monitoring, security, and updates — you focus on your business.
              </p>
              <p className="text-xs text-zinc-500">
                SMBs, nonprofits, and teams that want done-for-you hosting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by EI */}
      <section className="py-12 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 flex items-start gap-4">
          <Brain className="w-8 h-8 text-ink flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-bold text-ink uppercase tracking-wide mb-1">
              Powered by Esteemed Intelligence
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Cloud monitoring and health checks feed into the Intelligence
              substrate. Drift detection, performance analysis, and proactive
              alerting are built in — not bolted on.
            </p>
          </div>
        </div>
      </section>

      {/* Self-serve pricing */}
      <div id="plans">
        <ProductPricingBlock
          eyebrow="Self-serve plans"
          title="Cloud hosting pricing"
          description="NVMe-backed hosting with SSL, backups, CDN, and monitoring. Deploy your site and manage it from the Esteemed dashboard."
          productKey="cloud"
          plans={cloudPlans}
          ctaLabel="Buy Now"
          freeHref="/signup?product=cloud"
        />
      </div>

      {/* Managed pricing */}
      <ProductPricingBlock
        eyebrow="Managed plans"
        title="Managed hosting with a team behind it"
        description="Done-for-you hosting with SSL, monitoring, backups, and support hours included. Start a 12-month plan and get your site rebuilt for free."
        productKey="cloud"
        plans={managedPlans}
        ctaLabel="Start plan"
        contactHref="/contact"
        fallbackHref="/contact"
      />

      {/* Features */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything your site needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon
                  className="w-6 h-6 text-ink flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform connections */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Connected across the platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <ProductIcon product="create" className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold text-ink mb-2">Create</h3>
              <p className="text-sm text-zinc-600">
                Sites built with Create deploy directly to Cloud. One-click
                publish from the builder to production hosting.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <ProductIcon product="curate" className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold text-ink mb-2">Curate</h3>
              <p className="text-sm text-zinc-600">
                Curate workspaces are provisioned on Cloud infrastructure.
                CMS, media storage, and runtime all managed together.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <ProductIcon product="support" className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold text-ink mb-2">Support</h3>
              <p className="text-sm text-zinc-600">
                Managed hosting plans include support hours. Use them for
                content updates, troubleshooting, or technical requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Host with confidence.
          </h2>
          <p className="text-zinc-700 mb-8 max-w-xl mx-auto">
            Self-serve or managed — your site runs on fast, secure, monitored
            infrastructure with a team behind it.
          </p>
          <Link
            href="/signup?product=cloud"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-bold hover:bg-ink/90 transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
