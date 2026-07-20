import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  Calendar,
  HardDrive,
  CheckCircle,
  Video,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Business Email | Esteemed",
  description:
    "Professional business email powered by Google Workspace. Custom domains, 30 GB–5 TB storage, video meetings, and enterprise-grade security.",
};

/* Google product icon SVGs — official colors */
function GmailIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M20 4H4l8 7 8-7z" fill="#EA4335" />
      <path d="M3 5.5V19a1 1 0 001 1h3V9.37l5 3.93 5-3.93V20h3a1 1 0 001-1V5.5L12 13 3 5.5z" fill="#4285F4" />
      <path d="M3 5.5V19a1 1 0 001 1h3V9.37L3 5.5z" fill="#34A853" />
      <path d="M21 5.5V19a1 1 0 01-1 1h-3V9.37l4-3.87z" fill="#FBBC05" />
    </svg>
  );
}
function MeetIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="11" height="14" rx="2" fill="#00832D" />
      <path d="M14 9l5-3.5v13L14 15V9z" fill="#00AC47" />
      <path d="M14 9l5-3.5L21 7v10l-2 1.5-5-3.5V9z" fill="#FFBA00" />
      <path d="M8 10v4l3 2V8l-3 2z" fill="#0066DA" />
    </svg>
  );
}
function CalendarIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" fill="#4285F4" />
      <rect x="3" y="4" width="18" height="5" rx="2" fill="#1967D2" />
      <rect x="6" y="11" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="10.5" y="11" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="15" y="11" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="6" y="15.5" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="10.5" y="15.5" width="3" height="3" rx="0.5" fill="#fff" />
      <text x="11.5" y="8" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="700" fontFamily="sans-serif">31</text>
    </svg>
  );
}
function DriveIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 3h8l6 10H14L8 3z" fill="#FBBC05" />
      <path d="M2 13l4 8h12l-4-8H2z" fill="#34A853" />
      <path d="M8 3L2 13h12L8 3z" fill="#4285F4" />
    </svg>
  );
}
function DocsIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#4285F4" />
      <rect x="8" y="7" width="8" height="1.5" rx="0.5" fill="#fff" />
      <rect x="8" y="10" width="8" height="1.5" rx="0.5" fill="#fff" />
      <rect x="8" y="13" width="5" height="1.5" rx="0.5" fill="#fff" />
    </svg>
  );
}
function SheetsIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#0F9D58" />
      <rect x="8" y="7" width="8" height="10" rx="0.5" fill="#fff" />
      <line x1="12" y1="7" x2="12" y2="17" stroke="#0F9D58" strokeWidth="0.8" />
      <line x1="8" y1="10" x2="16" y2="10" stroke="#0F9D58" strokeWidth="0.8" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="#0F9D58" strokeWidth="0.8" />
    </svg>
  );
}

const googleApps = [
  { name: "Gmail", Icon: GmailIcon },
  { name: "Meet", Icon: MeetIcon },
  { name: "Calendar", Icon: CalendarIcon },
  { name: "Drive", Icon: DriveIcon },
  { name: "Docs", Icon: DocsIcon },
  { name: "Sheets", Icon: SheetsIcon },
];

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
              Professional email<br />@yourbusiness.com
            </h1>
            <p className="hero-body text-zinc-600">
              Get custom email at your own domain — plus Gmail, Meet, Calendar and Drive — set up by Esteemed on Google Workspace. Look credible, stay organized, and keep every message secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="#plans"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
              >
                Get started with Google Workspace
              </Link>
              <Link
                href="#plans"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
              >
                See plans &amp; pricing
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-zinc-500">Powered by</span>
              <GmailIcon size={20} />
              <span className="font-bold text-ink">Google Workspace</span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-500">14-day free trial</span>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-[420px] lg:h-[480px] overflow-hidden md:rounded-l-2xl md:rounded-r-none rounded-2xl shadow-2xl">
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/pair-working.jpg.webp?itok=9JhHeV4q"
                alt="Team using business email"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating email card */}
            <div
              className="absolute z-10 right-4 bottom-6 flex items-center gap-3 bg-white rounded-2xl border border-zinc-200 px-4 py-3 shadow-lg"
              style={{ animation: "emCardIn 0.7s ease-out 0.35s forwards", opacity: 0 }}
            >
              <GmailIcon size={36} />
              <div>
                <div className="text-sm font-bold text-ink">hello@yourbusiness.com</div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-600" />
                  Verified &amp; secured
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
          <p className="text-center text-sm text-zinc-600 mb-5">
            Every plan includes the Google Workspace apps your team already knows
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {googleApps.map((app) => (
              <div
                key={app.name}
                className="inline-flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-5 py-3 text-sm font-semibold text-ink shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-50 flex items-center justify-center">
                  <app.Icon size={24} />
                </div>
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
