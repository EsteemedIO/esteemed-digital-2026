import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import ProductPricingBlock from "@/components/ProductPricingBlock";
import { vpsPricingPlans } from "@/lib/product-page-pricing";
import { hostingLinks } from "@/lib/hosting-nav-links";
import { ArrowRight, Server, Shield, Cpu, HardDrive, Globe, Terminal } from "lucide-react";

export const metadata = {
  title: "VPS Hosting | Esteemed",
  description:
    "Virtual Private Server hosting on Esteemed Cloud. Dedicated resources, root access, and full control — with managed infrastructure, SSL, and backups included.",
};

const vpsPlans = vpsPricingPlans();

const features = [
  { icon: Cpu, title: "Dedicated Resources", desc: "Guaranteed CPU, RAM, and storage — not shared with other tenants. Consistent performance under load." },
  { icon: Terminal, title: "Full Root Access", desc: "Complete control over your server environment. Install any software, configure any service, run any stack." },
  { icon: Server, title: "Isolated Environment", desc: "Your own virtual server with dedicated resources. No noisy neighbors, no resource contention." },
  { icon: Shield, title: "Managed Security", desc: "Firewall configuration, DDoS protection, and security monitoring. We handle the infrastructure security layer." },
  { icon: HardDrive, title: "NVMe SSD Storage", desc: "Fast NVMe SSD storage for databases, applications, and files. Automatic daily backups included." },
  { icon: Globe, title: "Global Network", desc: "Deploy in multiple regions. Low-latency connections and CDN integration for global performance." },
];

export default function VPSHostingPage() {
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
        <div className="hero-block hero-block-split" style={{ background: "#1A1A1A" }}>
          <div className="md:order-1 relative md:min-h-full">
            <div className="relative overflow-hidden rounded-t-3xl md:rounded-2xl md:shadow-xl md:mt-12 md:mr-12 md:mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hosting/vps-hero.png"
                alt="Esteemed Cloud VPS dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Stat card — spills bottom-left */}
            <div
              className="absolute -bottom-2 -left-4 bg-white rounded-xl px-5 py-4 shadow-lg hidden md:block z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
            >
              <div className="flex items-end gap-[3px] mb-2 h-[36px]">
                {[14, 20, 28, 36].map((h, i) => (
                  <div key={i} className="w-[6px] rounded-sm" style={{ height: h, background: i < 2 ? "#FEE546" : "#16281E" }} />
                ))}
              </div>
              <div className="text-2xl font-extrabold text-ink leading-none">99.9%</div>
              <div className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase mt-0.5">Uptime SLA</div>
            </div>
            {/* Status bar — spills bottom-right */}
            <div
              className="absolute -bottom-2 right-0 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg border border-white/20 hidden md:flex items-center gap-2 z-10"
              style={{ animation: "fadeInUp 0.6s ease-out 1.2s both" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
              <span className="text-xs font-semibold text-white">All Systems Operational — Esteemed Cloud</span>
            </div>
          </div>
          <div className="md:order-2">
            <Server className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#FEE546" }}>
              Hosting / VPS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              VPS Hosting
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6 max-w-lg">
              Virtual Private Server hosting with dedicated resources and full root access. Run any stack — WordPress, Drupal, Node.js, Python, Docker, or custom applications — on your own isolated server with managed infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors">
                See Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?interest=vps-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Power and control</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              VPS hosting gives you the power of a dedicated server with the convenience of managed infrastructure. Run anything, your way.
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
          eyebrow="VPS Hosting"
          title="Virtual Private Server plans"
          description="Dedicated resources on Esteemed Cloud. NVMe SSD storage, full root access, SSL, backups, and monitoring included. No renewal hikes."
          productKey="vps"
          plans={vpsPlans}
          ctaLabel="Buy Now"
          defaultBilling="monthly"
        />
      </div>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Need more power?
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Talk to us about dedicated servers, custom configurations, and enterprise hosting arrangements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#plans" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-accent-hover transition-colors">
              See Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?interest=vps-hosting" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
