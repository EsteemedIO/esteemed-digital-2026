import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Cpu,
  Users,
  Bot,
  ShieldCheck,
  Headphones,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Solutions for IT Directors | Esteemed",
  description:
    "Modernize infrastructure, augment teams on demand, and deploy AI-powered tools with enterprise-grade security and compliance.",
};

const features = [
  {
    icon: Globe,
    title: "Managed Cloud Infrastructure",
    desc: "Esteemed Cloud provides hosting with built-in security, automated patching, monitoring, and compliance controls. Reduce the operational burden on your team while maintaining the reliability and performance your organization demands. 99.9% uptime SLA included.",
  },
  {
    icon: Cpu,
    title: "Internal Tool Builder",
    desc: "Empower business users to build portals, dashboards, and workflow tools with Esteemed Create. Free your engineering team from internal tool requests and shadow IT by giving departments a governed, secure platform to build what they need.",
  },
  {
    icon: Users,
    title: "On-Demand Engineering Talent",
    desc: "Scale your team for migrations, new initiatives, or production incidents with vetted engineers from the Colleagues network. DevOps, cloud architects, SREs, and full-stack developers available within 48 hours. No lengthy procurement or agency contracts.",
  },
  {
    icon: Bot,
    title: "AI for IT Operations",
    desc: "Esteemed Agents automate IT service desk tasks, monitor infrastructure health, and provide self-service tools for common user requests. Reduce ticket volume, improve response times, and free your team to focus on strategic initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "SOC 2-aligned controls, role-based access, encryption at rest and in transit, audit-ready reporting, and SSO integration across all Esteemed tools and infrastructure. Meet compliance requirements without building and maintaining the controls yourself.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Esteemed Support provides expert human help for anything running on our platform. Dedicated account management, SLA-backed response times, and escalation paths that reach engineers, not chatbots.",
  },
];

const steps = [
  {
    number: "01",
    title: "Assess your needs",
    desc: "We review your current infrastructure, tooling, team capacity, and upcoming initiatives. You get a clear picture of where Esteemed fits and what ROI to expect.",
  },
  {
    number: "02",
    title: "Deploy and migrate",
    desc: "Migrate workloads to Esteemed Cloud, deploy internal tools on Create, and onboard on-demand engineers from Colleagues. We handle the heavy lifting.",
  },
  {
    number: "03",
    title: "Automate operations",
    desc: "Set up AI Agents for IT service desk automation, infrastructure monitoring, and self-service user tools. Reduce ticket volume and manual toil.",
  },
  {
    number: "04",
    title: "Monitor and optimize",
    desc: "Intelligence dashboards provide visibility into uptime, performance, security posture, and team utilization. Continuous optimization, not set-and-forget.",
  },
];

export default function ITDirectorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E0E5F0" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              By Role
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Deliver more with less. Modernize without the risk.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              IT directors face modernization pressure with constrained budgets, talent gaps, and
              compliance requirements that never simplify. Esteemed gives you managed cloud infrastructure,
              on-demand engineering talent, and AI-powered operations tools with enterprise-grade security built in.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "Managed cloud with 99.9% uptime SLA and SOC 2-aligned controls",
                "On-demand DevOps, SRE, and engineering talent in 48 hours",
                "AI agents for IT service desk and infrastructure automation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/engineer-monitoring.webp"
              alt="IT director reviewing infrastructure with Esteemed"
              variant="role-it"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "99.9%", l: "Uptime SLA" },
              { n: "35,000+", l: "Engineers in network" },
              { n: "48 hrs", l: "Talent delivery" },
              { n: "SOC 2", l: "Aligned controls" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="font-extrabold text-2xl md:text-3xl tracking-tight text-accent">
                  {s.n}
                </div>
                <div className="text-sm text-white/70 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational block */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                The IT leadership balancing act
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                IT directors are caught between competing pressures. The business wants modernization, AI adoption, and faster delivery. Finance wants to hold or cut the budget. Security and compliance teams add new requirements every quarter. And the talent market makes it nearly impossible to hire and retain the specialized engineers you need.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Meanwhile, shadow IT proliferates. Business units adopt their own tools without governance. Developers spin up cloud resources without security review. And the internal tool requests pile up because engineering is fully allocated to the product roadmap.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed helps you deliver more without growing headcount. Managed cloud reduces operational burden. On-demand engineers fill talent gaps without permanent headcount commitments. Create gives business users a governed platform to build internal tools. And AI agents automate the repetitive IT operations work that consumes your team's time.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/tech-team.webp"
                alt="IT team reviewing infrastructure and security"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Enterprise IT capabilities, on demand
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Managed infrastructure, on-demand talent, AI automation, and enterprise security. All from one platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-zinc-200">
                  <Icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              From assessment to optimization in four phases
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              A structured approach to modernization that respects your existing investments and compliance requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">{step.number}</div>
                <h3 className="text-lg font-extrabold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/engineer-monitoring.webp", label: "Infrastructure" },
                { src: "/images/segments/tech-team.webp", label: "Engineering" },
                { src: "/images/segments/colleagues-feature.webp", label: "Security" },
                { src: "/images/segments/bg-man.webp", label: "Operations" },
              ].map((card) => (
                <div key={card.label} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Enterprise IT capabilities
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Whether you are managing a cloud migration, scaling your team for a new initiative, or deploying AI across the organization, Esteemed has the tools and talent to support it.
              </p>
              <ul className="space-y-4">
                {[
                  "Managed hosting with 99.9% uptime SLA and automated failover",
                  "Cloud migration from on-premise, AWS, Azure, or GCP",
                  "Staff augmentation with vetted DevOps, SRE, and engineering talent",
                  "AI-powered IT service desk automation and self-service tools",
                  "Auditable AI deployment with Intelligence governance controls",
                  "Ongoing monitoring, patching, incident response, and performance tuning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "What security certifications does Esteemed hold?", a: "Esteemed Cloud infrastructure follows SOC 2-aligned controls with encryption at rest and in transit, role-based access control, SSO integration, and audit-ready reporting. We provide compliance documentation and support security questionnaires for enterprise procurement." },
        { q: "What is the SLA?", a: "Esteemed Cloud provides a 99.9% uptime SLA with automated failover, real-time monitoring, and SLA-backed support response times. Enterprise plans include dedicated support engineers and custom SLA terms." },
        { q: "Can we migrate from AWS, Azure, or GCP?", a: "Yes. Our migration team and Colleagues engineers handle workload migration from any cloud provider or on-premise infrastructure. We assess your current architecture, plan the migration path, and execute with minimal downtime." },
        { q: "How do you vet engineering talent?", a: "Every professional in the Colleagues network goes through technical assessment, work history verification, reference checks, and a communication screen. We have been vetting IT professionals since 2015, so our network has years of performance data and client feedback." },
        { q: "How does the internal tool builder handle compliance?", a: "Create deploys tools on Esteemed Cloud with inherited security controls, role-based access, and audit logging. IT retains governance and visibility over all tools built on the platform, eliminating shadow IT risk while giving business users the autonomy they need." },
        { q: "Can Esteemed integrate with our existing IT stack?", a: "Yes. Esteemed integrates with SSO providers (Okta, Azure AD, Keycloak), monitoring tools, ticketing systems, and common enterprise platforms. Our team works with yours to ensure seamless integration with your existing tools and processes." },
      ]} />

      {/* Bottom CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Modernize your
                <br />
                IT operations.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Get a free infrastructure assessment and see how Esteemed can reduce operational burden, fill talent gaps, and accelerate modernization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/websites/hosting"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Explore Cloud
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "99.9% uptime SLA with managed infrastructure",
                  "On-demand DevOps and engineering talent in 48 hours",
                  "SOC 2-aligned security and compliance controls",
                  "AI-powered IT service desk automation",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-white font-medium text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
