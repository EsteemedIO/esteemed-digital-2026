import Link from "next/link";
import { Users, Wrench, LifeBuoy, Lightbulb, PenTool, Megaphone, Eye } from "lucide-react";
import ProductIcon from "@/components/ProductIcon";

export const metadata = {
  title: "Products & Services | Esteemed",
  description:
    "Esteemed products and services by name — Create, Cloud, Curate, Acquire, Hire, Intelligence, Agents, Connect, Support, HCMGPT, and Colleagues.",
};

const products = [
  {
    name: "Create",
    tagline: "Build websites and apps by talking to AI.",
    description:
      "Describe what you want in plain English and get a working site in minutes. Edit by conversation, preview instantly, publish in one click.",
    iconProduct: "create",
    href: "/websites/website-builder",
  },
  {
    name: "Cloud",
    tagline: "Hosting that scales with you.",
    description:
      "Managed hosting with SSL, daily backups, monitoring, and a global edge network. Your site stays fast, secure, and always on.",
    iconProduct: "cloud",
    href: "/websites/hosting",
  },
  {
    name: "Curate",
    tagline: "Content and media management on Esteemed Cloud.",
    description:
      "Provision a dedicated Curate tenant for structured content, digital assets, and agent-assisted publishing.",
    iconProduct: "curate",
    href: "/products/curate",
  },
  {
    name: "Acquire",
    tagline: "CRM for client and talent acquisition.",
    description:
      "Customer relationship management powered by Intelligence. Manage leads, clients, and talent pipelines in one place.",
    iconProduct: "acquire",
    href: "/products/acquire",
  },
  {
    name: "Hire",
    tagline: "Applicant tracking that integrates with everything.",
    description:
      "Full-featured ATS integrated with Colleagues and Intelligence. Post jobs, track candidates, and hire smarter.",
    iconProduct: "hire",
    href: "/products/hire",
  },
  {
    name: "Intelligence",
    tagline: "Memory. Reasoning. Coherence.",
    description:
      "A shared intelligence layer that gives your website and agents persistent memory, cross-system reasoning, and continuous learning.",
    iconProduct: "intelligence",
    href: "/products/intelligence",
  },
  {
    name: "Agents",
    tagline: "AI that works like part of your team.",
    description:
      "Voice, Social, Blog, Marketing, and Star agents that handle real work — trained on your business, backed by real people.",
    iconProduct: "agents",
    href: "/products/agents",
  },
  {
    name: "Connect",
    tagline: "Integrations and data connectivity.",
    description:
      "Connect your tools, data sources, and third-party services into a unified platform layer.",
    iconProduct: "connect",
    href: "/products/connect",
  },
  {
    name: "Support",
    tagline: "Monthly support from real experts.",
    description:
      "Managed support packages with dedicated hours for site fixes, improvements, and technical help.",
    iconProduct: "support",
    href: "/products/support",
  },
  {
    name: "HCMGPT",
    tagline: "Domain-specific AI for human capital management.",
    description:
      "The preeminent AI for HR, recruiting, and workforce intelligence. Purpose-built for human capital professionals.",
    iconProduct: "hcmgpt",
    href: "https://hcmgpt.com",
    external: true,
  },
  {
    name: "Colleagues",
    tagline: "Vetted talent, on demand.",
    description:
      "Search 35,000+ vetted professionals. Post engagements, manage projects, or find your next role.",
    icon: Users,
    href: "/products/colleagues",
  },
];

const services = [
  {
    name: "Website Design",
    tagline: "Custom sites, rebuilds, landing pages, and launch support.",
    icon: PenTool,
    href: "/hire-experts/website-design",
  },
  {
    name: "Web Support Plans",
    tagline: "Monthly support blocks for site fixes and improvements.",
    icon: LifeBuoy,
    href: "/hire-experts/web-support",
  },
  {
    name: "Ecommerce",
    tagline: "Stores, checkout flows, subscriptions, and payment setup.",
    icon: Wrench,
    href: "/websites/ecommerce",
  },
  {
    name: "Business Email",
    tagline: "Professional email, domains, and account setup.",
    icon: Megaphone,
    href: "/services/business-email",
  },
  {
    name: "Talent Management",
    tagline: "Recruiting, onboarding, workforce, and HR operations.",
    icon: Users,
    href: "/hire-experts/talent-management",
  },
  {
    name: "Content Strategy",
    tagline: "Messaging, editorial planning, and conversion paths.",
    icon: Lightbulb,
    href: "/hire-experts/content-strategy",
  },
  {
    name: "Content Production",
    tagline: "Copy, campaigns, pages, blogs, and launch content.",
    icon: PenTool,
    href: "/hire-experts/content-production",
  },
  {
    name: "Search Engine Marketing",
    tagline: "Paid search setup, landing pages, and campaign support.",
    icon: Megaphone,
    href: "/hire-experts/search-engine-marketing",
  },
  {
    name: "AI Visibility",
    tagline: "Make your business easier for AI search to understand.",
    icon: Eye,
    href: "/hire-experts/ai-visibility",
  },
];

function ProductCard({ item }) {
  const Tag = item.external ? "a" : Link;
  const tagProps = item.external
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: item.href };

  return (
    <Tag
      {...tagProps}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-lg hover:border-accent transition-all"
    >
      <div className="mb-4">
        {item.iconProduct ? (
          <ProductIcon product={item.iconProduct} className="h-10 w-10" />
        ) : (
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100">
            <item.icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-ink mb-1">
        {item.name}
        {item.external && <span className="ml-1">↗</span>}
      </h3>
      <p className="text-sm font-medium text-zinc-500 mb-3">{item.tagline}</p>
      {item.description && (
        <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
      )}
      <span className="inline-block mt-auto pt-4 text-sm font-bold text-ink group-hover:underline">
        Learn more &rarr;
      </span>
    </Tag>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Products &amp; Services
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Everything you need to build, run, and grow — from first idea to
            full-scale business platform.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="mx-auto px-6" style={{ maxWidth: 1800 }}>
          <h2 className="text-2xl font-bold text-ink mb-8">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20">
        <div className="mx-auto px-6" style={{ maxWidth: 1800 }}>
          <h2 className="text-2xl font-bold text-ink mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            Ready to build something Esteemed?
          </h2>
          <Link
            href="/websites/website-builder"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start building free
          </Link>
        </div>
      </section>
    </div>
  );
}
