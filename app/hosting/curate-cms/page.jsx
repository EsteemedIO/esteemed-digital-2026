import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { curatePricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, FileText, Image, Database, ShieldCheck, Zap, Globe } from "lucide-react";

export const metadata = {
  title: "Curate CMS Hosting | Esteemed",
  description:
    "Host Esteemed Curate — our AI-native CMS with RAG grounding, agent-assisted publishing, and managed media storage on Esteemed Cloud.",
};

const pricingPlans = curatePricingPlans();

const features = [
  { icon: FileText, title: "Structured Content", desc: "Manage posts, landing pages, knowledge base articles, press releases, templates, and brand guidelines." },
  { icon: Image, title: "Media Management", desc: "Store and organize content assets with DigitalOcean Spaces-backed media storage." },
  { icon: Database, title: "Cloud Provisioned", desc: "Tenant, database, domain, media bucket, and runtime secrets are prepared by Esteemed Cloud." },
  { icon: ShieldCheck, title: "Admin Ready", desc: "The first admin user is created from signup, then surfaced inside the Esteemed Platform." },
  { icon: Zap, title: "AI-Native Publishing", desc: "Draft, summarize, and optimize content with AI agents grounded in your approved brand knowledge via RAG." },
  { icon: Globe, title: "Connect Integration", desc: "Curate includes Connect for RAG grounding — so your AI uses your approved content, not guesses." },
];

export default function CurateCMSPage() {
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
          <div className="md:order-2">
            <ProductIcon product="curate" className="mb-4 h-12 w-12" />
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Hosting / Curate CMS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Esteemed Curate, the AI RAG-native content cloud.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
              Esteemed Curate gives every customer a managed CMS and media workspace for content, assets, brand knowledge, and agent-assisted publishing. RAG-native, so your approved content powers conversational AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/signup?product=curate" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-accent hover:border-accent transition-colors">
                Provision Curate
              </Link>
            </div>
          </div>
          <div className="md:order-1">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-zinc-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Tenant preview</p>
                  <p className="mt-1 text-xl font-bold text-ink">acme.curate.esteemed.io</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">Provisioning</span>
              </div>
              <div className="space-y-4 text-sm">
                {["App Platform runtime", "Postgres database", "Spaces media bucket", "First admin account", "Esteemed Platform launch link"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-md border border-zinc-200 px-4 py-3">
                    <span className="font-medium text-ink">{item}</span>
                    <span className="text-zinc-500">Ready</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">What Curate provisions</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              A fully managed CMS workspace with AI capabilities, media storage, and RAG grounding — provisioned automatically on Esteemed Cloud.
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
          eyebrow="Curate plans"
          title="Managed CMS and content hub pricing"
          description="Curate prices per workspace: sites, editors, content workflow, and AI/RAG capabilities. Managed Curate includes Connect for grounding approved knowledge."
          productKey="curate"
          plans={pricingPlans}
          ctaLabel="Buy Now"
          freeHref="/signup?product=curate"
          defaultBilling="monthly"
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-ink">Start with content. Expand into the platform.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-700">
            Curate is the first customer-visible provisioning flow for Esteemed Cloud, and the same pattern will support the broader app ecosystem.
          </p>
          <Link href="/signup?product=curate" className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-ink/90">
            Provision Curate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
