import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  BrainCircuit,
  FileCheck,
  Globe,
  BarChart3,
  Headphones,
} from "lucide-react";
import TickRounded from "@/components/TickRounded";

export const metadata = {
  title: "Solutions for HR Teams | Esteemed",
  description:
    "Source vetted technical talent, streamline hiring workflows, and manage your contingent workforce at scale with Esteemed Colleagues.",
};

const features = [
  {
    icon: Users,
    title: "Pre-Vetted Talent Network",
    desc: "Access 35,000+ IT professionals our recruiting team has been vetting since 2015. Every candidate is screened for technical skill, communication, reliability, and cultural fit. You get better candidates faster because we have already done the screening work that typically takes your team weeks.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Matching",
    desc: "Esteemed Intelligence analyzes your requirements, team composition, project context, and hiring history to surface the best-fit candidates. AI scores candidates across technical skills, domain experience, availability, and work style. You get a curated shortlist, not a resume flood.",
  },
  {
    icon: FileCheck,
    title: "Streamlined Hiring Workflow",
    desc: "From job posting and candidate screening to interview coordination, offer management, and contingent worker onboarding. Esteemed handles the operational complexity of technical hiring so your HR team focuses on strategy and employer brand.",
  },
  {
    icon: Globe,
    title: "Global EOR & Compliance",
    desc: "Hire technical talent in 130+ countries without setting up foreign entities. Esteemed provides employer-of-record services, handles local labor law compliance, contracts, payroll, benefits, and tax obligations. Global hiring without the global headaches.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    desc: "Track hiring velocity, time-to-fill, quality of hire, retention rates, and workforce composition with built-in Intelligence dashboards. Report on hiring metrics that matter to leadership without building custom reports from scratch.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Management",
    desc: "A dedicated team manages the relationship from requisition to placement to ongoing performance review. Your account manager learns your organization, culture, and hiring preferences so matches improve over time.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share your requirements",
    desc: "Tell us about the roles you need to fill: skills, experience, team dynamics, timeline, and budget. We refine the brief together to ensure accurate matching.",
  },
  {
    number: "02",
    title: "Review matched candidates",
    desc: "AI surfaces the best-fit candidates from our 35,000+ network. You get a curated shortlist with technical assessments, work samples, and reference highlights within 48 hours.",
  },
  {
    number: "03",
    title: "Interview and select",
    desc: "We coordinate interviews, handle scheduling, and provide candidate briefs. You make the hiring decision. We handle the rest.",
  },
  {
    number: "04",
    title: "Onboard and manage",
    desc: "Esteemed handles contracts, compliance, payroll (including international EOR), and onboarding. Your new team member is productive from day one with ongoing account management.",
  },
];

export default function HRTeamsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E5E0EF" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              By Role
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Fill technical roles faster with better candidates.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              Technical hiring is the most competitive category in recruiting. The average technical
              role takes 44 days to fill. Esteemed Colleagues gives your HR team access to 35,000+
              pre-vetted IT professionals with AI-powered matching that delivers qualified shortlists
              in 48 hours. Every engagement model from contract to direct placement to global EOR.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "35,000+ professionals vetted for skill, reliability, and fit",
                "AI matching delivers shortlists in 48 hours",
                "Global EOR in 130+ countries without foreign entities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                  <TickRounded className="w-7 h-7" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-bold border-2 border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/talent-jobs.webp"
              alt="HR team reviewing candidates with Esteemed Intelligence"
              variant="role-hr"
              objectPosition="center top"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "35,000+", l: "Vetted IT professionals" },
              { n: "9 days", l: "Average time to fill" },
              { n: "130+", l: "Countries with EOR" },
              { n: "2015", l: "Vetting talent since" },
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
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/colleagues-exp.webp"
                alt="Technical talent sourcing and matching"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Why technical hiring is different
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Technical recruiting is not just regular recruiting with a different job title. Evaluating a senior React developer requires understanding of the technology stack, the specific patterns and architectures that matter for your codebase, and the team dynamics that determine whether a technically strong candidate will actually succeed in your environment.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Job boards generate volume but not quality. Traditional staffing agencies lack the technical depth to evaluate candidates properly. And your internal recruiting team is competing for the same limited talent pool as every other company in the market while also managing hiring across every other department.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed Colleagues exists specifically for technical hiring. Our team has been recruiting, vetting, and placing IT professionals since 2015. Esteemed Intelligence uses AI to match candidates to your specific requirements, team composition, and project context. And with flexible engagement models from contract to direct placement to global EOR, you hire the way that fits your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Simplify technical hiring at scale
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Pre-vetted talent, AI matching, streamlined workflows, global compliance, and analytics that prove hiring ROI.
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
              From requisition to placement in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              A streamlined hiring process designed for technical roles that delivers quality candidates, not volume.
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

      {/* Engagement models — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
                Flexible engagement models
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Every organization hires differently. Esteemed supports every engagement model so you can match the hiring approach to the business need, not the other way around.
              </p>
              <ul className="space-y-4">
                {[
                  "Contract staffing for project-based needs with defined scope and timeline",
                  "Contract-to-hire with built-in evaluation periods (typically 3-6 months)",
                  "Direct placement for permanent roles with competitive placement fees",
                  "Managed teams for ongoing delivery with Esteemed project management",
                  "Fractional leadership for strategic CTO, VP Eng, and architect roles",
                  "Global EOR for international hiring in 130+ countries without entities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TickRounded className="w-7 h-7" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/talent-jobs.webp", label: "Sourcing" },
                { src: "/images/segments/colleagues-exp.webp", label: "Matching" },
                { src: "/images/segments/colleagues-feature.webp", label: "Onboarding" },
                { src: "/images/segments/office-worker.webp", label: "Management" },
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HireExpertFAQ items={[
        { q: "How fast can you fill a technical role?", a: "Most clients receive a qualified shortlist within 48 hours. Our average time-to-fill from requirements to start date is 9 business days. Highly specialized roles (ML engineers, security architects) may take longer, but we set expectations upfront and keep you informed throughout." },
        { q: "What technical roles do you cover?", a: "We cover the full spectrum: frontend and backend developers, full-stack engineers, DevOps and SRE, cloud architects, data engineers, ML specialists, QA and automation, UX/UI designers, product managers, technical writers, Scrum masters, and fractional leadership (CTO, VP Engineering)." },
        { q: "How are candidates vetted?", a: "Every professional goes through technical skill assessment, work history verification, reference checks, and a communication and reliability screen. For specialized roles, we include domain-specific technical evaluations. Our network has years of placement data and client feedback that informs every match." },
        { q: "What is the cost structure?", a: "Contract placements use a transparent markup on hourly rates. Direct placements use a percentage-of-salary fee competitive with traditional agencies. Managed teams are priced per-person. We provide clear pricing before engagement and there are no hidden fees." },
        { q: "Can we hire internationally?", a: "Yes. Esteemed provides employer-of-record (EOR) services in 130+ countries. We handle local labor law compliance, employment contracts, payroll, benefits, and tax obligations. You hire globally without setting up foreign entities or navigating local regulations." },
        { q: "Does Esteemed integrate with our ATS?", a: "Yes. We integrate with major ATS platforms and can adapt our workflow to match your existing hiring process. Candidate profiles, interview feedback, and hiring status sync with your system of record." },
        { q: "What about retention?", a: "Our vetting process emphasizes cultural and communication fit alongside technical skill, which drives better retention. For contract roles, we provide replacement guarantees. For direct placements, we offer a standard guarantee period. Our account team monitors engagement health and flags issues early." },
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
                Simplify your
                <br />
                technical hiring.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Tell us about your open roles and get matched with pre-vetted candidates from the Colleagues network within 48 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products/colleagues"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Explore Colleagues
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center p-14 border-l border-white/10">
              <ul className="space-y-5">
                {[
                  "35,000+ pre-vetted IT professionals",
                  "AI-powered matching with 48-hour shortlists",
                  "Every engagement model: contract to direct to EOR",
                  "Dedicated account management and workforce analytics",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-ink flex items-center justify-center mt-0.5">
                      <TickRounded className="w-7 h-7" />
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
