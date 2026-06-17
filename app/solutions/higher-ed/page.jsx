import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Globe,
  ShieldCheck,
  Monitor,
  Check,
  GraduationCap,
  Wrench,
  BarChart3,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Solutions for Higher Education | Esteemed",
  description:
    "Universities and colleges need reliable technology and talent to serve students and faculty. Esteemed provides workforce management, managed IT, and digital services tailored for higher education.",
};

const features = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Access vetted IT professionals with experience in higher education systems — from Drupal and WordPress specialists to cloud architects and cybersecurity experts.",
  },
  {
    icon: Globe,
    title: "Web & Application Support",
    description:
      "Development, maintenance, and support for campus websites, student portals, admissions systems, and custom applications.",
  },
  {
    icon: Monitor,
    title: "Workforce Management",
    description:
      "Manage faculty, staff, and contractor hiring with a centralized platform. Streamline onboarding, payroll, and benefits administration.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    description:
      "FERPA-aligned data handling, accessibility compliance (WCAG), and security controls that meet institutional standards.",
  },
];

const capabilityBullets = [
  {
    title: "Campus Web Ecosystem",
    description:
      "Manage complex multi-site architectures across departments, colleges, and research centers.",
  },
  {
    title: "Student Experience Technology",
    description:
      "AI-powered advising tools, FAQ bots, and campus service automation that enhance the student journey.",
  },
  {
    title: "CMS Expertise",
    description:
      "Deep experience with Drupal, WordPress, and other CMS platforms commonly used in higher education.",
  },
  {
    title: "Research Computing Support",
    description:
      "Infrastructure and talent for research data management, high-performance computing, and lab systems.",
  },
];

const whyBullets = [
  "Specialists in higher education technology since 2011",
  "Drupal, WordPress, and custom CMS expertise",
  "FERPA and WCAG compliance built in",
  "Flexible engagement models for academic budgets",
  "Experience with leading universities and colleges",
  "Dedicated account management for education clients",
];

export default function HigherEdPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Higher Education
            </p>
            <h1 className="heading-3">Solutions for Higher Education</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Universities and colleges need reliable technology and talent to
              serve students and faculty. Esteemed provides workforce management,
              managed IT, and digital services tailored for higher education.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Talk to Us
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                Education Pricing
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/bg-man.webp"
              alt="Higher education technology"
              width={640}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="heading-2 mb-4">Purpose-Built for Campus Needs</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Technology and talent solutions designed for the unique requirements
            of colleges and universities.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-neutral-200 bg-paper p-8 transition hover:shadow-lg"
                >
                  <span className="icon-badge icon-badge-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-ink/70">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="Higher ed technology team"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Campus Technology Capabilities</h2>
            <ul className="space-y-6">
              {capabilityBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="icon-badge icon-badge-md mt-1">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="text-ink/70">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Esteemed ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Why Universities Choose Esteemed</h2>
            <p className="text-lg text-ink/70">
              Higher education institutions manage complex digital ecosystems.
              Esteemed brings the specialized talent and technology to support
              admissions, academics, research, and campus operations.
            </p>
            <ul className="space-y-4">
              {whyBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Education talent platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="heading-2 mb-4">Services for Higher Education</h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-ink/60">
            End-to-end technology and workforce solutions built for academic
            institutions.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: "Managed IT",
                text: "24/7 infrastructure management, monitoring, and support for campus systems and applications.",
              },
              {
                icon: BarChart3,
                title: "Digital Services",
                text: "Website development, content strategy, analytics, and digital marketing for enrollment and engagement.",
              },
              {
                icon: BookOpen,
                title: "Workforce Solutions",
                text: "IT staffing, fractional leadership, and workforce management tailored for academic budgets and timelines.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
                >
                  <span className="icon-badge icon-badge-lg mx-auto mb-4">
                    <Icon />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-ink/70">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Transform your campus digital experience
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Ask about higher education pricing and partnerships. We are here to
            help your institution serve students and faculty better.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
