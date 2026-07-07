import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  RefreshCw,
  Sliders,
  Server,
  Check,
  ArrowRight,
  Phone,
  ShoppingCart,
  CalendarDays,
  FileText,
  ClipboardList,
  Heart,
  Lock,
  Search,
  ImageIcon,
  PenTool,
  Sparkles,
  Mail,
  Globe,
} from "lucide-react";
import FaqAccordion from "./FaqAccordion";

/* ── Metadata ── */
export const metadata = {
  title: "Websites for South Sound Businesses | Esteemed",
  description:
    "Expert website design, hosting, and WebOps for businesses in Olympia, Tumwater & Lacey. Free website rebuild with Managed Hosting. Local team since 2011.",
};

/* ── Market data ── */
const market = {
  region: "South Sound",
  state: "Washington",
  stateAbbr: "WA",
  cities: ["Olympia", "Tumwater", "Lacey"],
  citiesInline: "Olympia, Tumwater & Lacey",
  phone: "360.791.4270",
  program: "Local First",
};

/* ── Stats ── */
const stats = [
  { value: "15 yrs", label: "Serving South Sound businesses" },
  { value: "120+", label: "Local websites designed & built" },
  { value: "2 wks", label: "Typical rebuild turnaround" },
  { value: "$0", label: "To rebuild with Managed Hosting" },
];

/* ── Why cards ── */
const whyCards = [
  {
    icon: MapPin,
    title: "We\u2019re your neighbors",
    body: "A real South Sound team \u2014 not an offshore call center. Meet us for coffee in downtown Olympia and talk through your site face to face.",
  },
  {
    icon: RefreshCw,
    title: "A free website rebuild",
    body: "Tired of a site that looks stuck in 2012? We rebuild it from scratch at no cost when you host with us. No rebuild fee, ever.",
  },
  {
    icon: Sliders,
    title: "Done-for-you or do-it-yourself",
    body: "Let our designers build it, or spin it up yourself with Esteemed Create, our AI website builder. Same platform, your pace.",
  },
  {
    icon: Server,
    title: "We don\u2019t disappear at launch",
    body: "Most shops build your site and vanish. Our WebOps team keeps yours secure, current and climbing search long after you go live.",
  },
];

/* ── Platform cards ── */
const platformCards = [
  {
    icon: PenTool,
    title: "Website Editing",
    description:
      "Customize every detail with Esteemed Create, our AI-native drag-and-drop builder. No code required.",
  },
  {
    icon: Sparkles,
    title: "Design Intelligence",
    description:
      "Your AI creative partner for designs, images and copy \u2014 with Agents that keep working once you\u2019re live.",
  },
  {
    icon: Mail,
    title: "Business Email",
    description:
      "Make it official with Business Email from Google Workspace \u2014 set up with your domain in minutes.",
  },
  {
    icon: Globe,
    title: "Domains",
    description:
      "Register your dream domain. Free WHOIS privacy, SSL and premium DNS included.",
  },
];

/* ── Offerings ── */
const offerings = [
  {
    tag: "Design & build",
    title: "Website design",
    body: "A custom, mobile-ready website designed and built by our team \u2014 or draft your own with Esteemed Create. Free domain, SSL and contact form included.",
    points: [
      "Website Design Services \u2014 $499 one-time, 4 pages",
      "Esteemed Create \u2014 free to start, plans from $39/mo",
      "Free domain, SSL & AI contact form",
    ],
    price: "Free to start \u00b7 design from $499",
    cta: "Explore website design",
    href: "/services/website-design",
  },
  {
    tag: "Managed & secure",
    title: "WebOps \u00b7 Tech",
    body: "We keep your site fast, secure and online \u2014 managed hosting, SSL, backups, monitoring and updates, all handled for you.",
    points: [
      "Managed hosting from $9.99/mo",
      "Security, backups & uptime monitoring",
      "Updates & fixes handled for you",
    ],
    price: "From $9.99/mo",
    cta: "See hosting plans",
    href: "/products/cloud",
  },
  {
    tag: "Get found & grow",
    title: "WebOps \u00b7 Content & SEO",
    body: "Ongoing content updates and search optimization so the right customers find you \u2014 on Google and in AI answers alike.",
    points: [
      "Copy & content updates by our team",
      "Local SEO to rank across the South Sound",
      "Tuned for AI answer engines (AEO)",
    ],
    price: "Support plans from $149/mo",
    cta: "View support plans",
    href: "/services/support",
  },
];

/* ── Capabilities ── */
const capabilities = [
  {
    icon: ShoppingCart,
    title: "Online Store",
    headline: "Sell online, locally and beyond",
    body: "Accept payments, manage inventory, and ship products with a fully integrated ecommerce storefront.",
  },
  {
    icon: CalendarDays,
    title: "Scheduling",
    headline: "Let clients book you 24/7",
    body: "Online appointment scheduling with automated reminders, calendar sync, and payment collection.",
  },
  {
    icon: FileText,
    title: "Blog",
    headline: "Publish content that ranks",
    body: "A built-in blog with SEO tools, categories, and social sharing to establish your expertise.",
  },
  {
    icon: ClipboardList,
    title: "Forms",
    headline: "Capture leads and feedback",
    body: "Custom contact forms, surveys, and intake forms that feed directly into your CRM or inbox.",
  },
  {
    icon: Heart,
    title: "Donations",
    headline: "Accept contributions easily",
    body: "Secure donation pages with recurring giving, donor management, and tax receipt automation.",
  },
  {
    icon: Lock,
    title: "Memberships",
    headline: "Gate content and build community",
    body: "Create member-only areas, subscription tiers, and gated content to monetize your expertise.",
  },
  {
    icon: Search,
    title: "Local SEO",
    headline: "Dominate South Sound search",
    body: "Optimized for Google Business Profile, local directories, and map packs across Olympia, Tumwater & Lacey.",
  },
  {
    icon: ImageIcon,
    title: "Galleries",
    headline: "Showcase your work beautifully",
    body: "Responsive photo and video galleries with lightbox, filtering, and lazy loading for fast page speeds.",
  },
];

/* ── How it works ── */
const steps = [
  {
    step: "01",
    title: "Say hello",
    body: "Book a free consult — by phone, video, or over coffee in Olympia. We'll review your current site and goals.",
  },
  {
    step: "02",
    title: "We rebuild your site",
    body: "Our designers create a custom site on Esteemed Cloud. You review, request changes, and approve the design.",
  },
  {
    step: "03",
    title: "You go live",
    body: "We handle the migration, DNS, and launch. Your new site is live in about two weeks — zero downtime.",
  },
  {
    step: "04",
    title: "Grow with us",
    body: "WebOps keeps everything running. Add SEO, content, or ecommerce whenever you're ready to scale.",
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote:
      "They rebuilt our whole site in under two weeks and actually picked up the phone when I had questions. Feels good to work with people down the street.",
    name: "Marisol Reyes",
    role: "Owner",
    business: "Percival Landing Coffee",
    city: "Olympia",
  },
  {
    quote:
      "We went from a site nobody could find to online orders every morning. The free rebuild paid for itself before the first invoice.",
    name: "Dan Whitlock",
    role: "Founder",
    business: "Tumwater Falls Brewing",
    city: "Tumwater",
  },
  {
    quote:
      "As a small clinic we don\u2019t have an IT department. Esteemed is our IT department \u2014 hosting, updates, and a real human when we need one.",
    name: "Dr. Priya Anand",
    role: "Owner",
    business: "Lacey Family Wellness",
    city: "Lacey",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "Is the free rebuild really free?",
    a: "Yes. When you start a 12-month Managed Hosting plan, our team rebuilds your standard 4-page site at no cost \u2014 there is no separate rebuild fee. Additional pages or custom work are quoted up front.",
  },
  {
    q: "Do I own my website and domain?",
    a: "Always. Your site, content, and domain are yours. If you ever leave, you take everything with you \u2014 no hostage situations.",
  },
  {
    q: "Are you actually local?",
    a: "Yes \u2014 our team is based right here in Thurston County. We work with businesses across Olympia, Tumwater, Lacey and the greater South Sound, and we\u2019re happy to meet in person.",
  },
  {
    q: "What if I already have a website?",
    a: "Perfect. We\u2019ll rebuild it fresh, or simply host and maintain your current site as-is with a Care plan. Either way, no migration headaches on your end.",
  },
  {
    q: "How long does a rebuild take?",
    a: "Most standard sites go live within two weeks of our kickoff consult, depending on how quickly we get your content and photos.",
  },
  {
    q: "What happens after my site launches?",
    a: "That\u2019s where WebOps comes in. Our local team handles hosting, security, updates and content changes, and works on your SEO so the right customers keep finding you \u2014 on Google and in AI answers.",
  },
];

/* ══════════════════════════════════════════════════════════
   Page component
   ══════════════════════════════════════════════════════════ */
export default function SouthSoundPage() {
  return (
    <main className="bg-paper text-ink">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/local/olympia/olympia-wa-shutterstock_546546937-1024x683.jpg"
            alt={`${market.citiesInline}, ${market.stateAbbr}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/70" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 text-center text-white md:pb-28 md:pt-44">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
            {market.region}, {market.state}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            A website that means business.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Expert websites and WebOps support built by your neighbors in{" "}
            {market.citiesInline}. Serving South Sound businesses since 2011 —
            and right now, your rebuild is free.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#offer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover"
            >
              Claim your free rebuild
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Book a local consult
            </Link>
          </div>

          <p className="mt-10 text-sm text-white/50">
            Free website rebuild with Managed Hosting &middot; Local team since
            2011 &middot; {market.phone}
          </p>
        </div>
      </section>

      {/* ── 2. Stats strip ── */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Why section ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Why local businesses choose us
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Big-agency websites, with a South Sound handshake
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-200 p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-ink" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Platform section ── */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">
            Everything you need to grow in one platform
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platformCards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-ink" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Offerings ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="flex flex-col rounded-2xl border border-zinc-200 p-8"
              >
                <span className="mb-4 inline-block self-start rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                  {o.tag}
                </span>
                <h3 className="text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  {o.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {o.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-ink">{o.price}</p>
                <Link
                  href={o.href}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink hover:underline"
                >
                  {o.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Capabilities ── */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">
            Scale your business, local or global.
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <Icon className="mb-3 h-7 w-7 text-ink" strokeWidth={1.5} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {c.title}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-ink">
                    {c.headline}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. How it works ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">
            How it works
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step}>
                <p className="text-4xl font-bold text-zinc-200">{s.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Offer band ── */}
      <section id="offer" className="bg-ink py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            The South Sound launch offer
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Claim your free website rebuild
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            We&apos;ll rebuild your website from scratch — free — when you
            commit to a 12-month Managed Hosting plan. Here&apos;s what&apos;s
            included:
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {[
              "$0 rebuild with a 12-month hosting plan",
              "Website Design Services from $499 for 4 pages",
              "Hosting from $9.99/mo with SSL & backups included",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-white/80"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover"
            >
              Get started today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${market.phone.replace(/\./g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call {market.phone}
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40">
            Free rebuild applies to standard 4-page sites with an active 12-month Managed Hosting plan. Additional pages and custom work billed at $85/hr (3 hr min) or $75/hr with a 10-hour commitment used within 40 hours of purchase.
          </p>
        </div>
      </section>

      {/* ── 9. Testimonials ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">
            Trusted by South Sound businesses
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-zinc-200 p-8"
              >
                <p className="text-sm text-zinc-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-zinc-400">
                    {t.role}, {t.business} &mdash; {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-12">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── 11. Final CTA ── */}
      <section className="bg-accent py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Ready when you are, South Sound.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-700 leading-relaxed">
            Whether you need a brand-new site or a fresh start on an old one,
            we&apos;re here — just down the road in {market.citiesInline}.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-ink/90"
            >
              Book a free consult
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${market.phone.replace(/\./g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-ink/5"
            >
              <Phone className="h-4 w-4" />
              {market.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
