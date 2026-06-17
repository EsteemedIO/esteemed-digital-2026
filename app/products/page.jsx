import Link from "next/link";
import { Sparkles, Cloud, Bot, Brain, Users, Headphones, Library } from "lucide-react";

export const metadata = {
  title: "Products & Services",
  description:
    "Everything Esteemed offers — Create, Cloud, Agents, Intelligence, Colleagues, and Support.",
};

const items = [
  {
    name: "Create",
    tagline: "Build websites and apps by talking to AI.",
    description:
      "Describe what you want in plain English and get a working site in minutes. Edit by conversation, preview instantly, publish in one click.",
    icon: Sparkles,
    href: "/products/create",
    type: "Product",
  },
  {
    name: "Cloud",
    tagline: "Hosting that scales with you.",
    description:
      "Managed hosting with SSL, daily backups, monitoring, and a global edge network. Your site stays fast, secure, and always on.",
    icon: Cloud,
    href: "/products/cloud",
    type: "Product",
  },
  {
    name: "Curate",
    tagline: "Content and media management on Esteemed Cloud.",
    description:
      "Provision a dedicated Curate tenant for structured content, digital assets, and agent-assisted publishing. First admin and cloud resources are created from signup.",
    icon: Library,
    href: "/products/curate",
    type: "Product",
  },
  {
    name: "Agents",
    tagline: "AI that works like part of your team.",
    description:
      "Voice, Social, Blog, Marketing, and Star agents that handle real work — trained on your business, backed by real people.",
    icon: Bot,
    href: "/products/agents",
    type: "Product",
  },
  {
    name: "Intelligence",
    tagline: "Memory. Reasoning. Coherence.",
    description:
      "A shared intelligence layer that gives your website and agents persistent memory, cross-system reasoning, and continuous learning.",
    icon: Brain,
    href: "/products/intelligence",
    type: "Product",
  },
  {
    name: "Colleagues",
    tagline: "Vetted talent, on demand.",
    description:
      "Search 35,000+ vetted professionals. Post engagements, manage projects, or find your next role. Hiring and jobseeking in one platform.",
    icon: Users,
    href: "/products/colleagues",
    type: "Service",
  },
  {
    name: "Support",
    tagline: "Expert human help when you need it.",
    description:
      "Get hands-on assistance with your Esteemed apps or anything you built elsewhere. Hourly plans from our team of specialists.",
    icon: Headphones,
    href: "/services/support",
    type: "Service",
  },
];

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

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:border-accent transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon
                    className="w-8 h-8 text-ink"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                    {item.type}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-ink mb-1">
                  {item.name}
                </h2>
                <p className="text-sm font-medium text-zinc-500 mb-3">
                  {item.tagline}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-ink group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to build something Esteemed?
          </h2>
          <Link
            href="/products/create"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Start building free
          </Link>
        </div>
      </section>
    </div>
  );
}
