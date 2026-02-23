import Link from "next/link";
import { LockClosedIcon, CloudArrowDownIcon, CogIcon } from "@heroicons/react/24/outline";
import HeroCarousel from "@/components/HeroCarousel";
import TalentDashboard3D from "@/components/TalentDashboard3D";

export const metadata = {
  title: "Esteemed Digital - AI Lab, Services & Products",
  description: "Esteemed is where powerful AI meets practical business solutions. Transform your operations with intelligence that understands your organization.",
};

const trustedCompanies = [
  { name: "Oracle", logo: "/api/placeholder/120/40" },
  { name: "Salesforce", logo: "/api/placeholder/120/40" },
  { name: "Microsoft", logo: "/api/placeholder/120/40" },
  { name: "Dell", logo: "/api/placeholder/120/40" },
  { name: "IBM", logo: "/api/placeholder/120/40" },
  { name: "Accenture", logo: "/api/placeholder/120/40" }
];

const valueProps = [
  {
    icon: LockClosedIcon,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliance, data residency, and enterprise-grade security controls",
    link: "/deployment"
  },
  {
    icon: CloudArrowDownIcon,
    title: "Flexible Deployment",
    description: "Cloud, private cloud, your VPC, or on-premises - deploy where your data lives",
    link: "/deployment"
  },
  {
    icon: CogIcon,
    title: "Complete Customization",
    description: "Fine-tune models, custom integrations, and white-label solutions for your brand",
    link: "/products"
  }
];

const industries = [
  { name: "Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", description: "SaaS GTM & Support" },
  { name: "Financial Services", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", description: "Compliance & Analytics" },
  { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", description: "Documentation & Workflow" },
  { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", description: "Process Optimization" },
  { name: "Energy & Utilities", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop", description: "Operations Intelligence" },
  { name: "Public Sector", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop", description: "Citizen Services" }
];

const models = [
  {
    name: "Esteemed Intelligence",
    description: "Neural memory and organizational intelligence that learns from your company's knowledge",
    features: ["Context-aware responses", "Cross-department insights", "Continuous learning"]
  },
  {
    name: "Esteemed AI",
    description: "Powerful language models for generation, analysis, and complex reasoning tasks",
    features: ["50B+ parameters", "Multi-modal capability", "Custom fine-tuning"]
  },
  {
    name: "Esteemed Agents",
    description: "Autonomous AI agents that execute complex workflows and business processes",
    features: ["Multi-step workflows", "Tool integration", "Human handoff"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Trusted Companies */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <prop.icon className="w-8 h-8" style={{ color: "var(--brand-start)" }} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                  {prop.description}
                </p>
                <Link href={prop.link} className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: "var(--brand-start)" }}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--brand-start)" }}>
                From Cetacean Labs
              </p>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Workforce Intelligence & Analytics
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                Advanced algorithms and edge technology keep candidate data completely secure with no cloud sharing required. Real-time talent pipeline monitoring with predictive analytics that detect weakening connections before placements fail.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "var(--brand-start)" }}></div>
                  <span className="text-zinc-700 dark:text-zinc-300">On-device private matching — data never leaves your infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "var(--brand-mid)" }}></div>
                  <span className="text-zinc-700 dark:text-zinc-300">MinCut tension monitoring for pipeline health</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: "var(--brand-end)" }}></div>
                  <span className="text-zinc-700 dark:text-zinc-300">Self-learning GNN that improves with every placement</span>
                </div>
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90" style={{ background: "linear-gradient(90deg, var(--brand-start), var(--brand-mid), var(--brand-end))" }}>
                Explore Intelligence
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl p-1" style={{ background: "linear-gradient(135deg, var(--brand-start), var(--brand-mid), var(--brand-end))" }}>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <TalentDashboard3D />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Solutions for every industry
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Transform your industry with AI solutions designed for your specific challenges and opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href="/solutions" className="group">
                <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-[3/2]">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{industry.name}</h3>
                    <p className="text-sm text-white/90">{industry.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* AI Models Overview */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Powerful AI models for every use case
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              From intelligent memory to autonomous agents, our AI models work together to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  {model.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand-start)" }}></div>
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developer Resources */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Built for developers
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Everything you need to integrate AI into your applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(236, 114, 73, 0.1)" }}>
                <svg className="w-8 h-8" style={{ color: "var(--brand-start)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Comprehensive guides and API reference</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(217, 95, 54, 0.1)" }}>
                <svg className="w-8 h-8" style={{ color: "var(--brand-mid)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">API Access</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">RESTful APIs with SDKs for popular languages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(73, 167, 236, 0.1)" }}>
                <svg className="w-8 h-8" style={{ color: "var(--brand-end)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1.111M9 10H7m8 0h2m-2 0v.111" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Playground</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Test and experiment with our models instantly</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/developers" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition">
              Explore Developer Resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Customer Testimonial */}
      <div className="py-24" style={{ background: "linear-gradient(90deg, var(--brand-start), var(--brand-mid), var(--brand-end))" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl font-medium text-white mb-8">
            "Esteemed Intelligence has transformed how our teams collaborate and access knowledge. The AI understands our context better than any solution we've used before."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="/api/placeholder/60/30" alt="Customer Logo" className="h-8 w-auto opacity-80" />
            <div className="text-left">
              <cite className="text-white/90 font-medium">Sarah Johnson</cite>
              <div className="text-white/70 text-sm">VP of Engineering, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
