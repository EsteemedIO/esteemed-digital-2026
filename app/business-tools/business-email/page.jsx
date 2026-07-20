import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Shield,
  Users,
  Globe,
  Calendar,
  HardDrive,
  CheckCircle,
  Video,
} from "lucide-react";

export const metadata = {
  title: "Business Email | Esteemed",
  description:
    "Professional business email powered by Google Workspace. Custom domains, 30 GB–5 TB storage, video meetings, and enterprise-grade security.",
};

const features = [
  { icon: Mail, title: "Custom email address", body: "you@yourbusiness.com — professional email on your domain, set up in minutes." },
  { icon: Shield, title: "Enterprise-grade security", body: "Built-in spam filtering, phishing protection, and 2-step verification. Your data stays yours." },
  { icon: HardDrive, title: "Generous storage", body: "30 GB per user on Starter, 2 TB on Standard, and 5 TB on Plus — email, Drive, and shared drives included." },
  { icon: Video, title: "Video meetings included", body: "Google Meet built in — 100 to 500 participants depending on plan. No extra software needed." },
  { icon: Calendar, title: "Calendar & scheduling", body: "Shared calendars, appointment booking, and resource management for your whole team." },
  { icon: Users, title: "Team collaboration", body: "Google Docs, Sheets, Slides, and Chat — real-time collaboration with your team and clients." },
];

const plans = [
  {
    name: "Starter",
    price: 7,
    storage: "30 GB / user",
    meet: "100 participants",
    recommended: false,
    features: [
      "Custom business email",
      "100-participant video meetings",
      "30 GB cloud storage per user",
      "Security and management controls",
      "Standard support",
    ],
  },
  {
    name: "Standard",
    price: 14,
    storage: "2 TB / user",
    meet: "150 participants",
    recommended: true,
    features: [
      "Everything in Starter",
      "150-participant video meetings + recording",
      "2 TB cloud storage per user",
      "Shared drives for your team",
      "Appointment booking pages",
      "Enhanced support",
    ],
  },
  {
    name: "Plus",
    price: 22,
    storage: "5 TB / user",
    meet: "500 participants",
    recommended: false,
    features: [
      "Everything in Standard",
      "500-participant video meetings + attendance tracking",
      "5 TB cloud storage per user",
      "Advanced security and compliance",
      "Vault for data retention and eDiscovery",
      "Enhanced support",
    ],
  },
];

const steps = [
  { num: "01", title: "Choose a plan", body: "Pick the tier that fits your team — Starter, Standard, or Plus. All include custom email + Google Workspace." },
  { num: "02", title: "Connect your domain", body: "We set up your custom email domain and configure DNS — or register a new domain for you." },
  { num: "03", title: "Add your team", body: "Invite team members. Each gets their own email address, Drive storage, and Calendar." },
  { num: "04", title: "You're live", body: "Start sending and receiving email from your custom domain — with Google's infrastructure behind it." },
];

const apps = [
  { name: "Gmail", icon: "✉️" },
  { name: "Drive", icon: "📁" },
  { name: "Meet", icon: "📹" },
  { name: "Calendar", icon: "📅" },
  { name: "Docs", icon: "📝" },
  { name: "Sheets", icon: "📊" },
  { name: "Slides", icon: "📊" },
  { name: "Chat", icon: "💬" },
];

export default function BusinessEmailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-block-outer">
        <div className="hero-block hero-block-split bg-zinc-50">
          <div>
            <p className="hero-eyebrow text-zinc-500">
              Business Email
            </p>
            <h1 className="hero-title text-ink">
              Professional email<br />for your business.
            </h1>
            <p className="hero-body text-zinc-600">
              Custom email on your domain, powered by Google Workspace. Reliable, secure, and set up in minutes — with Drive, Calendar, Meet, and Docs included.
            </p>
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-500">
              <span className="font-semibold text-ink">Powered by</span>
              <span className="text-zinc-400">|</span>
              <span className="font-bold text-ink">Google Workspace</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#plans"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                See plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?interest=hosting"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-zinc-100 transition-colors"
              >
                Talk to us
              </Link>
            </div>
          </div>
          <div className="hero-visual shadow-2xl">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/pair-working.jpg.webp?itok=9JhHeV4q"
                alt="Team using business email"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating email card */}
            <div
              className="absolute z-10 left-4 bottom-6 flex items-center gap-3 bg-white rounded-2xl border border-zinc-200 px-4 py-3 shadow-lg"
              style={{ animation: "emCardIn 0.7s ease-out 0.35s forwards", opacity: 0 }}
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-ink" />
              </div>
              <div>
                <div className="text-sm font-bold text-ink">you@yourbusiness.com</div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-600" />
                  Verified · Google Workspace
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes emCardIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Apps strip */}
      <section className="bg-[#E8EEF6] border-y border-zinc-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-zinc-500 mb-5">
            Everything your team needs, included with every plan
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {apps.map((app) => (
              <div
                key={app.name}
                className="inline-flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-5 py-3 text-sm font-semibold text-ink shadow-sm"
              >
                <span className="text-xl">{app.icon}</span>
                {app.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Everything you need in business email
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              More than email — a complete productivity suite for your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title}>
                <div className="w-12 h-12 rounded-xl border border-zinc-200 bg-white flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </div>
                <div className="w-7 h-[3px] rounded bg-accent mb-4" />
                <h3 className="text-lg font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Per user, per month. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 pt-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-white p-7 ${plan.recommended ? "border-2 border-ink shadow-lg -mt-10" : "border border-zinc-200"}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-7 bg-accent text-ink text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-5xl font-black text-ink">${plan.price}</span>
                  <span className="text-sm font-semibold text-zinc-500 pb-1">/user/mo</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                  <HardDrive className="w-4 h-4" />
                  {plan.storage}
                </div>

                <ul className="mt-6 pt-6 border-t border-zinc-100 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-zinc-700">
                      <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact?interest=hosting"
                  className="mt-6 w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500 mt-8">
            Need more than 300 users? <Link href="/contact?interest=hosting" className="font-bold text-ink hover:underline">Talk to our team</Link> about Enterprise pricing.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <div className="h-0.5 bg-ink mb-4" />
                <div className="text-3xl font-extrabold tracking-tight text-ink mb-2">{step.num}</div>
                <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Get professional email for your business today.
          </h2>
          <p className="text-zinc-700 mb-8 max-w-lg mx-auto">
            Plans start at $7/user/month. Set up takes minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?interest=hosting"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?interest=hosting"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-ink/5 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
