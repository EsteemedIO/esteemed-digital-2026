import HeroImageComposite from "@/components/HeroImageComposite";
import HireExpertFAQ from "@/components/HireExpertFAQ";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  BrainCircuit,
  Clock,
  Globe,
  ShieldCheck,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Hire Technical Talent | Esteemed",
  description:
    "Access 35,000+ vetted IT professionals through the Esteemed Colleagues network. AI-powered matching, flexible engagements, and global reach.",
};

const features = [
  {
    icon: Users,
    title: "35,000+ Pre-Vetted Professionals",
    desc: "Our recruiting team has been vetting IT professionals since 2015. Every candidate in the Colleagues network is screened for technical skill, communication, reliability, and cultural fit before they ever appear in your candidate pool. No unfiltered job board noise.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Matching",
    desc: "Esteemed Intelligence analyzes your requirements, team composition, project scope, and timeline to surface the best-fit candidates from the network. AI scores candidates across technical skills, domain experience, availability, and work style preferences.",
  },
  {
    icon: Clock,
    title: "Fast Time to Fill",
    desc: "Skip the weeks of agency proposals, job board postings, and recruiter cold calls. Most clients receive a qualified shortlist within 48 hours. Our average time-to-fill is 9 business days from requirements to start date.",
  },
  {
    icon: Globe,
    title: "Global Reach with EOR",
    desc: "Hire across time zones without setting up foreign entities. Esteemed handles employer-of-record services, local compliance, payroll, and benefits in 130+ countries. Build distributed teams without the compliance headaches.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Engagement Models",
    desc: "Contract, contract-to-hire, direct placement, managed teams, or fractional leadership. Scale your workforce up or down as projects demand. Every model includes account management and quality assurance from Esteemed.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    desc: "Track hiring velocity, time-to-fill, retention rates, and team utilization with built-in Intelligence dashboards. Make data-driven decisions about your talent strategy instead of relying on anecdotes and gut feelings.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit requirements",
    desc: "Tell us about the role, required skills, team dynamics, timeline, and budget. Our team refines the brief with you to ensure accurate matching.",
  },
  {
    number: "02",
    title: "AI matches candidates",
    desc: "Esteemed Intelligence scores and ranks candidates from our 35,000+ network. You get a curated shortlist within 48 hours, not a flood of unvetted resumes.",
  },
  {
    number: "03",
    title: "Interview your shortlist",
    desc: "We coordinate interviews, handle scheduling, and provide candidate briefs with technical assessments, work samples, and reference highlights.",
  },
  {
    number: "04",
    title: "Onboard and start",
    desc: "We handle contracts, compliance, payroll (including international EOR), and onboarding. Your new team member is productive from day one.",
  },
];

export default function HireTechnicalTalentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split" style={{ background: "#E5E0EF" }}>
          <div className="md:order-2">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">
              Use Case
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4">
              Hire technical talent faster than any job board.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed mb-4 max-w-lg">
              The average technical role takes 44 days to fill. Bad hires cost 30% of annual salary.
              Esteemed Colleagues gives you access to 35,000+ pre-vetted IT professionals with AI-powered
              matching that delivers qualified shortlists in 48 hours, not 44 days.
            </p>
            <ul className="space-y-1.5 mb-6 max-w-lg">
              {[
                "35,000+ professionals vetted since 2015",
                "AI-powered matching with 48-hour shortlists",
                "Contract, contract-to-hire, or direct placement",
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
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:order-1">
            <HeroImageComposite
              src="/images/segments/colleagues-exp.webp"
              alt="Technical professionals from the Esteemed Colleagues network"
              variant="usecase-hire"
              objectPosition="center"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "35,000+", l: "Vetted professionals" },
              { n: "9 days", l: "Average time to fill" },
              { n: "48 hrs", l: "First shortlist delivered" },
              { n: "130+", l: "Countries with EOR" },
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
                The technical hiring challenge
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Technical hiring is broken. Job boards generate volume but not quality. Agencies charge 20-25% placement fees and still take weeks to deliver candidates. Internal recruiting teams are stretched thin, competing for the same talent as every other company in the market.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                The cost of a bad hire is staggering: lost productivity, team disruption, ramp-up time wasted, and another search that starts from scratch. And for specialized roles like DevOps engineers, data scientists, or security architects, the qualified talent pool is measured in hundreds, not thousands.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Esteemed Colleagues is a different model. We have been building and vetting a network of IT professionals since 2015. Esteemed Intelligence uses AI to match candidates to your specific requirements, team dynamics, and project context. You get a curated shortlist, not a resume dump. And with flexible engagement models from contract to direct placement, you hire the way that fits your business.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/segments/talent-jobs.webp"
                alt="Technical talent search and matching"
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
              Smarter hiring, faster results
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              AI-powered matching, pre-vetted candidates, and flexible engagement models designed for technical teams.
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
              From requirements to start date in four steps
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              A streamlined process that respects your time and delivers qualified candidates, not noise.
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

      {/* Roles we fill — split */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/segments/colleagues-exp.webp", label: "Engineers" },
                { src: "/images/segments/tech-team.webp", label: "Architects" },
                { src: "/images/segments/engineer-monitoring.webp", label: "DevOps" },
                { src: "/images/segments/office-worker.webp", label: "Leadership" },
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
                Roles we fill
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Our recruiting infrastructure covers the full spectrum of technical talent. Whether you need one specialist or an entire project team, the Colleagues network has you covered.
              </p>
              <ul className="space-y-4">
                {[
                  "Full-stack engineers and frontend developers (React, Angular, Vue)",
                  "Cloud architects, DevOps engineers, and SREs",
                  "UX/UI designers, product managers, and Scrum masters",
                  "QA engineers, automation specialists, and SDET roles",
                  "Fractional CTOs, VPs of Engineering, and technical advisors",
                  "Data engineers, ML engineers, and AI specialists",
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
        { q: "How fast can you fill a role?", a: "Most clients receive a qualified shortlist within 48 hours of submitting requirements. Our average time-to-fill from requirements to start date is 9 business days. Complex or highly specialized roles may take longer, but we set expectations upfront." },
        { q: "What roles do you cover?", a: "We cover the full spectrum of IT roles: frontend and backend developers, full-stack engineers, DevOps and SRE, cloud architects, data engineers, ML specialists, QA and automation, UX/UI designers, product managers, technical writers, and fractional leadership (CTO, VP Engineering)." },
        { q: "How are candidates vetted?", a: "Every professional in the Colleagues network goes through technical skill assessment, work history verification, reference checks, and a communication and reliability screen. We have been vetting IT professionals since 2015, so our network has years of performance data." },
        { q: "What does it cost?", a: "Pricing depends on engagement model. Contract placements use a transparent markup on hourly rates. Direct placements use a percentage-of-salary fee that is competitive with traditional agencies. We are transparent about pricing from the first conversation." },
        { q: "Can I hire internationally?", a: "Yes. Esteemed provides employer-of-record (EOR) services in 130+ countries. We handle local labor law compliance, contracts, payroll, and benefits so you can hire globally without setting up foreign entities." },
        { q: "What is the difference between contract and contract-to-hire?", a: "Contract engagements have a defined scope and end date. Contract-to-hire includes a built-in evaluation period (typically 3-6 months) after which you can convert the professional to a permanent role on your team. Both models include account management from Esteemed." },
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
                Ready to find
                <br />
                your next hire?
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
                Tell us about the role and we will match you with qualified candidates from the Colleagues network within 48 hours.
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
                  "Contract, contract-to-hire, or direct placement",
                  "Global hiring with EOR in 130+ countries",
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
