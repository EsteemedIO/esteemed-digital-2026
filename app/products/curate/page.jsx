import Link from "next/link";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import ProductIcon from "@/components/ProductIcon";
import { curatePricingPlans } from "@/lib/product-page-pricing";
import { ArrowRight, Database, FileText, Image, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Curate",
  description: "Provision an AI-native CMS and media manager on Esteemed Cloud.",
};

const capabilities = [
  {
    icon: FileText,
    title: "Structured content",
    description: "Manage posts, landing pages, knowledge base articles, press releases, templates, and brand guidelines.",
  },
  {
    icon: Image,
    title: "Media management",
    description: "Store and organize content assets with DigitalOcean Spaces-backed media storage.",
  },
  {
    icon: Database,
    title: "Cloud provisioned",
    description: "Tenant, database, domain, media bucket, and runtime secrets are prepared by Esteemed Cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Admin ready",
    description: "The first admin user is created from signup, then surfaced inside the Esteemed Platform.",
  },
];

const pricingPlans = curatePricingPlans();

export default function CuratePage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <ProductIcon product="curate" className="mb-6 h-14 w-14" />
            <p className="mb-4 text-sm font-medium text-zinc-500">Products / Curate</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-ink md:text-6xl">
              Esteemed Curate, the AI RAG-native content cloud.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Esteemed Curate gives every customer a managed CMS and media workspace for content, assets, brand knowledge, and agent-assisted publishing. It is RAG-native, so your approved content can power conversational AI across your website, agents, and internal tools.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup?product=curate" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover">
                Provision Curate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/cloud" className="inline-flex items-center justify-center rounded-full border-2 border-ink px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent hover:border-accent">
                View Cloud
              </Link>
            </div>
          </div>

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
      </section>

      <ProductPricingBlock
        eyebrow="Curate plans"
        title="Managed CMS and content hub pricing"
        description="Curate prices per workspace: sites, editors, content workflow, and AI/RAG capabilities. Managed Curate includes Connect for grounding approved knowledge."
        productKey="curate"
        plans={pricingPlans}
        ctaLabel="Buy Now"
        freeHref="/signup?product=curate"
      />

      <section className="border-t border-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-ink">What Curate provisions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-200 p-6">
                <item.icon className="mb-4 h-8 w-8 text-ink" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Start with content. Expand into the platform.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
            Curate is the first customer-visible provisioning flow for Esteemed Cloud, and the same pattern will support the broader app ecosystem.
          </p>
          <Link href="/signup?product=curate" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover">
            Provision Curate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
