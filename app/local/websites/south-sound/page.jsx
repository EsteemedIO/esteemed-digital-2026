import "./local.css";
import Link from "next/link";
import ServicesCarousel from "./ServicesCarousel";
import Testimonials from "./Testimonials";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "Websites for South Sound Businesses | Esteemed",
  description:
    "Expert website design, hosting, and WebOps for businesses in Olympia, Tumwater & Lacey. Free website rebuild with Managed Hosting. Local team since 2011.",
};

/* ── Market data ── */
const M = {
  region: "South Sound",
  state: "Washington",
  stateAbbr: "WA",
  cities: ["Olympia", "Tumwater", "Lacey"],
  citiesInline: "Olympia, Tumwater & Lacey",
  phone: "360.791.4270",
  program: "Local First",
  eyebrow: "South Sound, Washington",
  headline: ["A website that ", "means business", "."],
  sub: "Expert websites and ongoing WebOps support, built by your neighbors in Olympia, Tumwater and Lacey since 2011. Start with a free rebuild \u2014 no fee, ever.",
  ctaPrimary: "Claim your free rebuild",
  ctaSecondary: "Book a local consult",
  stats: [
    { n: "15 yrs", l: "Serving South Sound businesses" },
    { n: "120+", l: "Local websites designed & built" },
    { n: "2 wks", l: "Typical rebuild turnaround" },
    { n: "$0", l: "To rebuild with Managed Hosting" },
  ],
  why: [
    { icon: "neighbors", title: "We\u2019re your neighbors", body: "A real South Sound team \u2014 not an offshore call center. Meet us for coffee in downtown Olympia and talk through your site face to face." },
    { icon: "refresh", title: "A free website rebuild", body: "Tired of a site that looks stuck in 2012? We rebuild it from scratch at no cost when you host with us. No rebuild fee, ever." },
    { icon: "sliders", title: "Done-for-you or do-it-yourself", body: "Let our designers build it, or spin it up yourself with Esteemed Create, our AI website builder. Same platform, your pace." },
    { icon: "server", title: "We don\u2019t disappear at launch", body: "Most shops build your site and vanish. Our WebOps team keeps yours secure, current and climbing search long after you go live." },
  ],
  platformHead: {
    title: "Everything you need to grow in one platform",
    sub: "Get access to experts and the tools you need to grow your business. From reliable and affordable hosting to content to integrated software.",
  },
  platformApps: [
    { title: "Website Editing", desc: "Customize every detail with Esteemed Create, our AI-native drag-and-drop builder. No code required.", mock: "editor" },
    { title: "Design Intelligence", desc: "Your AI creative partner for designs, images and copy \u2014 with Agents that keep working once you\u2019re live.", mock: "ai" },
    { title: "Business Email", desc: "Make it official with Business Email from Google Workspace \u2014 set up with your domain in minutes.", mock: "email" },
    { title: "Domains", desc: "Register your dream domain. Free WHOIS privacy, SSL and premium DNS included.", mock: "domain" },
  ],
  offerings: [
    { icon: "pen", name: "Website design", tag: "Design & build",
      body: "A custom, mobile-ready website designed and built by our team \u2014 or draft your own with Esteemed Create. Free domain, SSL and contact form included.",
      points: ["Website Design Services \u2014 $499 one-time, 4 pages", "Esteemed Create \u2014 free to start, plans from $39/mo", "Free domain, SSL & AI contact form"],
      price: "Free to start \u00b7 design from $499", cta: "See design options", href: "/services/website-design" },
    { icon: "server", name: "WebOps \u00b7 Tech", tag: "Managed & secure",
      body: "We keep your site fast, secure and online \u2014 managed hosting, SSL, backups, monitoring and updates, all handled for you.",
      points: ["Managed hosting from $9.99/mo", "Security, backups & uptime monitoring", "Updates & fixes handled for you"],
      price: "From $9.99/mo", cta: "See WebOps plans", href: "/products/cloud" },
    { icon: "search", name: "WebOps \u00b7 Content & SEO", tag: "Get found & grow",
      body: "Ongoing content updates and search optimization so the right customers find you \u2014 on Google and in AI answers alike.",
      points: ["Copy & content updates by our team", "Local SEO to rank across the South Sound", "Tuned for AI answer engines (AEO)"],
      price: "Support plans from $149/mo", cta: "See WebOps plans", href: "/services/support" },
  ],
  capNote: "Expert-built, and support sold as simple hourly add-ons \u2014 no monthly lock-in.",
  capabilities: [
    { title: "Online Store", headline: "Sell online", body: "Sell products with a fast, secure checkout, powered by our Commerce stack.", src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Scheduling", headline: "Get booked", body: "Seamless appointment booking and calendar management, right from your site.", src: "https://images.pexels.com/photos/35134952/pexels-photo-35134952.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Blog", headline: "Publish with ease", body: "Share news and stories yourself \u2014 no developer required.", src: "https://images.pexels.com/photos/29884920/pexels-photo-29884920.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Forms", headline: "Capture every lead", body: "Turn visitors into customers with an AI-assisted contact form, built right in.", src: "https://images.pexels.com/photos/9303590/pexels-photo-9303590.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Donations", headline: "Raise more", body: "Accept one-time and recurring gifts \u2014 with goals, receipts and donor updates built in.", src: "https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Memberships", headline: "Grow your community", body: "Offer member-only content, classes and perks with recurring subscriptions.", src: "https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Local SEO", headline: "Get found locally", body: "Rank across Olympia, Tumwater and Lacey \u2014 and show up in AI answers.", src: "https://images.pexels.com/photos/7400281/pexels-photo-7400281.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { title: "Galleries", headline: "Show your best work", body: "Present your work, menu or portfolio with rich, fast media layouts.", src: "https://images.pexels.com/photos/12735489/pexels-photo-12735489.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  ],
  steps: [
    { n: "01", title: "Say hello", body: "Book a free local consult \u2014 phone, video, or coffee in Olympia. Tell us about your business and what you need." },
    { n: "02", title: "We rebuild your site", body: "Our designers rebuild your website from the ground up \u2014 modern, mobile-ready, and on-brand. At no cost with hosting." },
    { n: "03", title: "You go live", body: "We publish, point your domain, and set up hosting, SSL and backups. Your new site is live and looked after." },
    { n: "04", title: "Grow with us", body: "Our WebOps team keeps your site current, secure and climbing local search \u2014 with a neighbor on call whenever you need one." },
  ],
  offer: {
    kicker: "The South Sound launch offer",
    title: "Claim your free website rebuild",
    body: "Start any 12-month Managed Hosting plan and our team rebuilds your existing website for free. No rebuild fee. No catch. Just a better site and a local team behind it.",
    bullets: ["$0 rebuild with a 12-month hosting plan", "Website Design Services from $499 for 4 pages", "Hosting from $9.99/mo with SSL & backups included"],
    fine: "Free rebuild applies to standard 4-page sites with an active 12-month Managed Hosting plan. Additional pages and custom work billed at $85/hr (3 hr min) or $75/hr with a 10-hour commitment used within 40 hours of purchase.",
  },
  testimonials: [
    { company: "Percival Landing Coffee", quote: "They rebuilt our whole site in under two weeks and actually picked up the phone when I had questions. Feels good to work with people down the street.", name: "Marisol Reyes", role: "Owner \u2014 Olympia", src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { company: "Tumwater Falls Brewing", quote: "We went from a site nobody could find to online orders every morning. The free rebuild paid for itself before the first invoice.", name: "Dan Whitlock", role: "Founder \u2014 Tumwater", src: "https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400" },
    { company: "Lacey Family Wellness", quote: "As a small clinic we don\u2019t have an IT department. Esteemed is our IT department \u2014 hosting, updates, and a real human when we need one.", name: "Dr. Priya Anand", role: "Owner \u2014 Lacey", src: "https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400" },
  ],
  faq: [
    { q: "Is the free rebuild really free?", a: "Yes. When you start a 12-month Managed Hosting plan, our team rebuilds your standard 4-page site at no cost \u2014 there is no separate rebuild fee. Additional pages or custom work are quoted up front." },
    { q: "Do I own my website and domain?", a: "Always. Your site, content, and domain are yours. If you ever leave, you take everything with you \u2014 no hostage situations." },
    { q: "Are you actually local?", a: "Yes \u2014 our team is based right here in Thurston County. We work with businesses across Olympia, Tumwater, Lacey and the greater South Sound, and we\u2019re happy to meet in person." },
    { q: "What if I already have a website?", a: "Perfect. We\u2019ll rebuild it fresh, or simply host and maintain your current site as-is with a Care plan. Either way, no migration headaches on your end." },
    { q: "How long does a rebuild take?", a: "Most standard sites go live within two weeks of our kickoff consult, depending on how quickly we get your content and photos." },
    { q: "What happens after my site launches?", a: "That\u2019s where WebOps comes in. Our local team handles hosting, security, updates and content changes, and works on your SEO so the right customers keep finding you \u2014 on Google and in AI answers." },
  ],
};

/* ── SVG Icons (matching design handoff exactly) ── */
function EsStar({ size = 14, fill = "#FEE546" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 268 268" aria-hidden="true">
      <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill} />
    </svg>
  );
}

function Icon({ name, size = 20, stroke = 1.75 }) {
  const paths = {
    neighbors: <><path d="M3 11.5 8 7l5 4.5" /><path d="M4.5 10.5V20h7v-9.5" /><path d="M13 20h7v-7l-4-3.2" /><path d="M16 9V5.5" /></>,
    refresh: <><path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3v5h-5" /></>,
    sliders: <><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></>,
    check: <><path d="M20 6 9 17l-5-5" /></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5M11 5l-7 7 7 7" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <><path d="M5 12h14" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></>,
    server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

/* ── Section header (from handoff) ── */
function SectionHead({ kicker, title, sub, center }) {
  return (
    <div style={{ maxWidth: center ? 720 : 640, margin: center ? "0 auto" : 0, textAlign: center ? "center" : "left" }}>
      <div className="es-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><EsStar size={12} fill="#B89D1F" />{kicker}</div>
      <h2 style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: "clamp(28px,3.2vw,40px)", letterSpacing: "-.025em", lineHeight: 1.06, margin: "14px 0 0", textWrap: "balance" }}>{title}</h2>
      {sub && <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--es-fg-2)", margin: "14px 0 0" }}>{sub}</p>}
    </div>
  );
}

/* ── Platform mock UIs (from handoff) ── */
function PlatformMock({ type }) {
  if (type === "editor") return (
    <div className="pm-browser">
      <div className="pm-bar"><i></i><i></i><i></i></div>
      <div className="pm-canvas">
        <div className="pm-h"></div>
        <div className="pm-p"></div>
        <div className="pm-p short"></div>
        <span className="pm-btn">Button</span>
        <div className="pm-tool"><span className="pm-aa">Aa</span><span className="pm-sw s1"></span><span className="pm-sw s2"></span><span className="pm-sw s3"></span></div>
      </div>
    </div>
  );
  if (type === "ai") return (
    <div className="pm-ai">
      <div className="pm-chip pm-c1"><span className="pm-aa">Aa</span><span className="pm-sw s1"></span><span className="pm-sw s2"></span><span className="pm-sw s3"></span></div>
      <div className="pm-chip pm-c2">Heading<div className="pm-subline"></div></div>
      <div className="pm-chip pm-c3"><span className="pm-blob"></span></div>
    </div>
  );
  if (type === "email") return (
    <div className="pm-mail">
      <div className="pm-mail-badge">
        <svg width="58" height="44" viewBox="0 0 58 44" fill="none" aria-label="Gmail">
          <path d="M4 44h9V22L0 12v28a4 4 0 0 0 4 4z" fill="#34A853" />
          <path d="M45 44h9a4 4 0 0 0 4-4V12L45 22v22z" fill="#4285F4" />
          <path d="M45 8 29 20 13 8v14l16 12 16-12V8z" fill="#EA4335" />
          <path d="M58 6.4V12L45 22V8l7.7-5.8C55.1.4 58 2.2 58 6.4z" fill="#FBBC04" />
          <path d="M0 6.4V12l13 10V8L5.3 2.2C2.9.4 0 2.2 0 6.4z" fill="#C5221F" />
        </svg>
      </div>
      <div className="pm-mail-cap">you@yourshop.com</div>
    </div>
  );
  if (type === "domain") return (
    <div className="pm-domain">
      <div className="pm-dom-card">
        <div className="pm-dom-input"><Icon name="search" size={15} stroke={2} /><span>yourshop<b>.com</b></span></div>
        <span className="pm-dom-ok"><Icon name="check" size={13} stroke={2.5} />Available</span>
      </div>
      <div className="pm-tlds">
        <span>.org</span><span>.co</span><span className="on">.shop</span>
      </div>
    </div>
  );
  return null;
}

export default function SouthSoundPage() {
  return (
    <div className="local-page">
      {/* ── Hero ── */}
      <header className="hero-full">
        <img
          src="/images/local/olympia/olympia-wa-shutterstock_546546937-1024x683.jpg"
          alt={M.citiesInline}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="hero-tags">
            <div className="prog-tag on-photo"><EsStar size={13} fill="#FEE546" /><span>{M.program}</span></div>
            <div className="loc-pill on-photo"><Icon name="pin" size={14} stroke={2.2} /><span>{M.region}, {M.stateAbbr}</span></div>
          </div>
          <h1 className="hero-h1">
            {M.headline[0]}<span className="hero-em">{M.headline[1]}</span>{M.headline[2]}
          </h1>
          <p className="hero-sub">{M.sub}</p>
          <div className="hero-cta">
            <Link href="#offer" className="btn btn-primary">{M.ctaPrimary}</Link>
            <Link href="/contact" className="btn btn-onDark">{M.ctaSecondary}</Link>
          </div>
          <div className="hero-meta">
            <span className="hero-star"><EsStar size={15} fill="#FEE546" /></span>
            <span><strong>Free website rebuild</strong> with Managed Hosting &middot; Local team since 2011 &middot; {M.phone}</span>
          </div>
        </div>
      </header>

      {/* ── Stats strip ── */}
      <div style={{ background: "var(--es-ink-900)", color: "#fff" }}>
        <div className="container stat-row">
          {M.stats.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-.02em", color: "var(--es-yellow-500)" }}>{s.n}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.35 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trusted by ── */}
      <section className="container" style={{ padding: "48px 32px 8px" }}>
        <div className="trust-strip">
          <div>
            <div className="es-eyebrow" style={{ marginBottom: 14 }}>Trusted by teams large &amp; small</div>
            <div style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-.02em", lineHeight: 1.08, color: "var(--es-fg-1)" }}>No project too big. No business too small.</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--es-fg-2)", margin: "12px 0 0", maxWidth: 440 }}>From South Sound main streets to major institutions. We&apos;re proud to build for organizations like the University of Oklahoma&apos;s MUAT, Alvernia University, the IEEE, and Washington&apos;s Department of Fish &amp; Wildlife.</p>
          </div>
          <div className="trust-logos">
            {["University of Oklahoma", "Alvernia University", "IEEE", "WDFW"].map(n => <span key={n} className="trust-logo">{n}</span>)}
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="container" style={{ padding: "84px 32px 28px" }}>
        <SectionHead kicker="Why local businesses choose us" title="Big-agency websites, with a South Sound handshake" sub="Expert website design and WebOps support — the tech, content and SEO — backed by people who live and work where you do." />
        <div className="why-grid">
          {M.why.map((w, i) => (
            <div key={i} className="why-item">
              <div className="why-ico"><Icon name={w.icon} size={22} stroke={1.9} /></div>
              <div className="why-accent"></div>
              <div className="why-title">{w.title}</div>
              <p className="why-body">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Platform ── */}
      <section className="plat-sec">
        <div className="plat-head">
          <h2 className="plat-title">{M.platformHead.title}</h2>
          <p className="plat-sub">{M.platformHead.sub}</p>
        </div>
        <div className="plat-grid">
          {M.platformApps.map((a, i) => (
            <div key={i} className={`plat-card pmc-${a.mock}`}>
              <div className="plat-card-head">
                <div className="plat-card-title">{a.title}</div>
                <p className="plat-card-desc">{a.desc}</p>
              </div>
              <div className="plat-art"><PlatformMock type={a.mock} /></div>
              <span className="plat-arrow"><Icon name="arrow" size={17} stroke={2.25} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services carousel ── */}
      <ServicesCarousel capabilities={M.capabilities} />

      {/* ── How it works ── */}
      <section id="how" style={{ background: "var(--es-warm-100)", borderTop: "1px solid var(--es-border)", borderBottom: "1px solid var(--es-border)", marginTop: 80 }}>
        <div className="container" style={{ padding: "80px 32px" }}>
          <SectionHead kicker="How it works" title="From hello to live in four steps" />
          <div className="step-grid">
            {M.steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-rule"></div>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offer band ── */}
      <section id="offer" className="container" style={{ padding: "80px 32px" }}>
        <div className="offer-band">
          <div className="offer-band-l">
            <div className="es-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--es-yellow-700)" }}><EsStar size={12} fill="#B89D1F" />{M.offer.kicker}</div>
            <h2 style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: "clamp(30px,3.4vw,44px)", letterSpacing: "-.03em", lineHeight: 1.03, margin: "14px 0 0", textWrap: "balance", color: "#fff" }}>{M.offer.title}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.8)", margin: "16px 0 0", maxWidth: 460 }}>{M.offer.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
              <Link href="/contact" className="btn btn-primary">{M.ctaPrimary}</Link>
              <Link href="/contact" className="btn btn-onDark">{M.ctaSecondary}</Link>
            </div>
          </div>
          <div className="offer-band-r">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {M.offer.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.4, color: "#fff", fontWeight: 500 }}>
                  <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: 999, background: "var(--es-yellow-500)", color: "var(--es-ink-900)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}><Icon name="check" size={16} stroke={2.5} /></span>
                  {b}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: "rgba(255,255,255,.5)", margin: "24px 0 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.15)" }}>{M.offer.fine}</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials testimonials={M.testimonials} />

      {/* ── FAQ ── */}
      <section style={{ background: "var(--es-warm-100)", borderTop: "1px solid var(--es-border)", borderBottom: "1px solid var(--es-border)" }}>
        <div className="container faq-wrap">
          <SectionHead kicker="Questions" title="Good to know" sub="Straight answers. If we missed one, a local specialist is a call away." />
          <FaqAccordion faqs={M.faq} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta-full">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-.03em", lineHeight: 1.02, margin: 0, textWrap: "balance", color: "var(--es-ink-1000)" }}>Ready when you are, {M.region}.</h2>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(0,0,0,.72)", margin: "16px auto 0", maxWidth: 600 }}>Claim your free website rebuild and get a local team in your corner — from {M.citiesInline}.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 30 }}>
            <Link href="/contact" className="btn btn-onYellow">{M.ctaPrimary}</Link>
            <Link href="/contact" className="btn btn-onYellowGhost">{M.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
