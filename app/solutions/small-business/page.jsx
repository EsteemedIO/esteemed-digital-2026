import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  UserPlus,
  Wallet,
  Search,
  CreditCard,
  Check,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Small Business Solutions | Esteemed",
  description:
    "Scaling your business is easy with Esteemed. Set up your business, benefits, payroll, and operations. Find opportunities, hire talent, and more.",
};

const features = [
  {
    icon: Building2,
    title: "Setup Business",
    description:
      "Form your LLC or corporation, get your EIN, and set up your business structure — all from one platform.",
  },
  {
    icon: MapPin,
    title: "Virtual Office",
    description:
      "Get a professional business address, mail forwarding, and registered agent services without physical office overhead.",
  },
  {
    icon: UserPlus,
    title: "Hire Employees",
    description:
      "Post jobs, screen candidates, and onboard new hires. Access 35,000+ vetted professionals for specialized talent.",
  },
  {
    icon: Wallet,
    title: "Manage Payroll",
    description:
      "Automated payroll processing, tax filings, and compliance. Pay your team accurately and on time, every time.",
  },
  {
    icon: Search,
    title: "Find Opportunities",
    description:
      "Discover new contracts, partnerships, and growth opportunities through the Esteemed network and marketplace.",
  },
  {
    icon: CreditCard,
    title: "Get Paid",
    description:
      "Invoice clients, track payments, and manage cash flow with integrated billing and payment processing.",
  },
];

const toolboxItems = [
  "Business formation and registration",
  "Benefits administration and health insurance",
  "Payroll and tax compliance",
  "HR management and employee onboarding",
  "Time tracking and project management",
  "Invoicing and payment processing",
];

export default function SmallBusinessPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:pt-36 lg:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink/50">
              Small Business
            </p>
            <h1 className="heading-3">Small Business Solutions</h1>
            <p className="subtitle max-w-xl text-ink/70">
              Scaling your business is easy with Esteemed. Set up your business,
              benefits, payroll, and operations. Find opportunities, hire talent,
              and more.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-accent-hover"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink transition hover:bg-ink/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/woman-working-coffee.webp"
              alt="Small business owner working"
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
          <h2 className="heading-2 mb-4">Your All-in-One Business Toolbox</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-ink/60">
            Everything you need to start, run, and grow your small business — in
            one platform.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ── All-in-One Detail ── */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="relative flex-1">
            <Image
              src="/images/segments/colleagues-exp.webp"
              alt="Colleagues experience platform"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">
              Run Your Business, Not Your Back Office
            </h2>
            <p className="text-lg text-ink/70">
              Stop juggling a dozen different tools. Esteemed brings business
              formation, HR, payroll, and operations into a single platform so
              you can focus on what matters — growing your business.
            </p>
            <ul className="space-y-4">
              {toolboxItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="icon-badge icon-badge-md mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Growth Section ── */}
      <section className="bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row lg:gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="heading-3">Grow With Confidence</h2>
            <p className="text-lg text-ink/70">
              Whether you are a solo founder or managing a team of 50, Esteemed
              scales with you. Our tools are built for small business budgets
              with enterprise-grade reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Briefcase, label: "Business Formation" },
                { icon: ShieldCheck, label: "Compliance Built In" },
                { icon: UserPlus, label: "Easy Hiring" },
                { icon: Wallet, label: "Automated Payroll" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="icon-badge icon-badge-md">
                      <Icon />
                    </span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/segments/talent-jobs.webp"
              alt="Talent marketplace"
              width={560}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold text-paper md:text-4xl">
            Ready to simplify your business?
          </h2>
          <p className="mb-8 text-lg text-paper/70">
            Join thousands of small businesses that trust Esteemed to handle the
            back office so they can focus on growth.
          </p>
          <Link
            href="/signup"
            className="inline-block rounded-full bg-accent px-10 py-4 font-semibold text-ink transition hover:bg-accent-hover"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
