import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import TransformLeadForm from "./TransformLeadForm";

export const metadata = {
  title: "Transform Program — Esteemed",
  description:
    "Merge your staffing or IT services business with a technology platform. Transform transactional revenue into recurring software revenue and earn a higher multiple.",
};

const comps = [
  { platform: "Superside", year: "2022", revenue: "$25M", valuation: "$530M", multiple: "~21x", pill: "yellow" },
  { platform: "Remote", year: "2018", revenue: "~$10M", valuation: "~$76M", multiple: "~7.6x", pill: "yellow" },
  { platform: "Stoke Talent", year: "2021", revenue: "modest", valuation: "$95M", multiple: "Acquired by Fiverr", pill: "blue" },
];

const products = [
  {
    name: "Colleagues",
    desc: "Our talent marketplace. Live, booking revenue, with member tiers expanding next quarter.",
    status: "Booking revenue",
    statusColor: "green",
    icon: "/images/apps/colleagues.svg",
    siteUrl: "https://colleagues.esteemed.io",
  },
  {
    name: "HCMGPT",
    desc: "The AI front door for hiring and workforce operations. Launching now.",
    status: "Launching now",
    statusColor: "blue",
    icon: "/images/apps/hcmgpt.svg",
    siteUrl: "https://hcmgpt.esteemed.io",
  },
  {
    name: "Esteemed Intelligence",
    desc: "The AI coherence engine, running in production today, woven through delivery.",
    status: "In production",
    statusColor: "green",
    icon: "/images/apps/intelligence.svg",
  },
];

const trajectory = [
  { label: "Smaller", size: "~$10M each", revenue: "~$175M", value: "~$1.0B", highlight: false },
  { label: "Mid-size", size: "~$25M each", revenue: "~$435M", value: "~$2.5B", highlight: false },
  { label: "Larger", size: "~$40M each", revenue: "~$700M", value: "~$3.9B", highlight: true },
];

const calendarUrl = "/contact?interest=transform";
const audioUrl = "https://notebooklm.google.com/notebook/2259c6b1-79e5-4587-b7f2-0305c335e380/artifact/c183e7b3-33fb-4713-8d12-20971ff4a415";

export default function TransformPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      {/* ============ HERO ============ */}
      <header id="top">
        <div className="mx-auto max-w-[1160px] px-8 pt-20 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_.88fr] lg:gap-14">
            <div>
              <span className="mb-6 inline-block rounded-full border-2 border-zinc-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                For staffing and IT services owners
              </span>
              <h1 className="mb-6 text-[clamp(52px,7vw,96px)] font-extrabold leading-[.98] tracking-tighter text-balance">
                Feeling it&rsquo;s time?
              </h1>
              <p className="mb-4 max-w-[560px] text-xl leading-relaxed text-zinc-700">
                AI and automation are compressing margins. Clients expect more for less. Tech vendors make promises, then refuse to accommodate what you actually need.
              </p>
              <p className="mb-7 max-w-[560px] text-lg leading-relaxed text-zinc-500">
                Most owners see two options: keep grinding, or sell for a multiple of EBITDA and take the best number you can get&mdash;usually right as revenue has softened.
              </p>
              <div className="text-[34px] font-extrabold leading-tight tracking-tight">
                There&rsquo;s a third.
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Blocks icon from design — L-shape with detached yellow square */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] text-ink"
              >
                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                <path d="M14 3h7v7h-7z" fill="#FEE546" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ============ TRANSFORM (dark) ============ */}
      <section className="relative mt-6 overflow-hidden bg-zinc-900 text-white">
        <div className="relative z-10 mx-auto max-w-[1160px] px-8 py-24 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative min-h-[380px] self-stretch overflow-hidden rounded-2xl">
              <Image
                src="/images/transform/team-meeting.jpg"
                alt="Team meeting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div>
              <h2 className="mb-7 text-[clamp(46px,6.5vw,96px)] font-extrabold leading-[.95] tracking-tighter text-accent">
                Transform.
              </h2>
              <p className="mb-5 text-[21px] font-medium leading-relaxed text-white">
                A services business can turn today&rsquo;s pressure into leverage. Merge with a technology company. Move your service revenue off the invoice and onto a platform&mdash;self-serve, subscription, delivered as software. Add technology products to what you already sell.
              </p>
              <p className="mb-9 text-lg leading-relaxed text-white/70">
                That&rsquo;s a metamorphosis. And it changes how your business is valued.
              </p>
              <div className="flex flex-wrap items-center gap-5 lg:gap-7">
                <span className="text-[28px] font-extrabold tracking-tight">We can help.</span>
                <Link
                  href={calendarUrl}
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-bold text-zinc-900 shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
                >
                  Start a conversation &rarr;
                </Link>
              </div>
              <p className="mt-5 text-sm italic text-white/55">
                Mutual discovery. You&rsquo;re evaluating us as much as we&rsquo;re evaluating you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AUDIO BLOCK ============ */}
      <section className="mx-auto max-w-[1160px] px-8 py-14">
        <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-sky-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3357" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 4 20 12 6 20 6 4" fill="#1B3357" stroke="#1B3357" />
            </svg>
          </div>
          <div className="min-w-[240px] flex-1">
            <div className="mb-1 text-[22px] font-bold tracking-tight">Prefer to listen?</div>
            <p className="text-[15px] leading-normal text-zinc-500">
              Twenty minutes on the valuation shift, how the platform works, and what a merger actually looks like.
            </p>
          </div>
          <a
            href={audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full border-2 border-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            &#9654;&nbsp;&nbsp;Listen&mdash;20 min
          </a>
        </div>
      </section>

      {/* ============ SECTION 1 — WHY THE VALUATION CHANGES ============ */}
      <section className="mx-auto max-w-[1160px] px-8 pt-14 pb-10">
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-500">
          01&mdash;Why the valuation changes
        </p>
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h2 className="mb-6 text-[clamp(30px,3.4vw,46px)] font-extrabold leading-tight tracking-tight text-balance">
              A staffing agency sells for 4&ndash;8&times; EBITDA. A{" "}
              <span className="underline decoration-accent decoration-[0.2em] underline-offset-[3px]">
                tech-enabled platform
              </span>{" "}
              sells for 7&ndash;19&times; revenue.
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-zinc-500">
              That gap isn&rsquo;t a rounding error. It&rsquo;s the difference between a good outcome and a life-changing one.
            </p>
            <p className="text-lg leading-relaxed text-zinc-500">
              It happens when talent gets delivered <em>through</em> software instead of alongside it.
            </p>
          </div>
          {/* Bar chart */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex h-[250px] items-end gap-8">
              <div className="flex h-full flex-1 flex-col items-center justify-end">
                <div className="mb-2 text-[22px] font-extrabold text-zinc-400">4&ndash;8&times;</div>
                <div className="w-full rounded-t-lg bg-stone-300" style={{ height: "22%" }} />
              </div>
              <div className="flex h-full flex-1 flex-col items-center justify-end">
                <div className="mb-2 text-[30px] font-extrabold text-zinc-900">7&ndash;19&times;</div>
                <div className="w-full rounded-t-lg bg-accent" style={{ height: "100%" }} />
              </div>
            </div>
            <div className="mt-3 flex gap-8 border-t border-zinc-200 pt-3">
              <div className="flex-1 text-center text-xs font-semibold leading-snug text-zinc-400">
                Staffing agency<br />on EBITDA
              </div>
              <div className="flex-1 text-center text-xs font-semibold leading-snug text-zinc-900">
                Tech-enabled platform<br />on revenue
              </div>
            </div>
          </div>
        </div>

        {/* Comps table */}
        <div className="mt-11 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] bg-zinc-900 text-xs font-bold uppercase tracking-widest text-white">
            <div className="px-5 py-3.5">Platform</div>
            <div className="px-4 py-3.5">Year</div>
            <div className="px-4 py-3.5">Revenue</div>
            <div className="px-4 py-3.5">Valuation</div>
            <div className="px-4 py-3.5">Multiple</div>
          </div>
          {comps.map((c, i) => (
            <div
              key={c.platform}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] items-center text-base ${
                i < comps.length - 1 ? "border-b border-zinc-200" : ""
              }`}
            >
              <div className="px-5 py-5 font-bold">{c.platform}</div>
              <div className="px-4 py-5 text-zinc-500">{c.year}</div>
              <div className="px-4 py-5 text-zinc-500">{c.revenue}</div>
              <div className="px-4 py-5 font-semibold">{c.valuation}</div>
              <div className="px-4 py-5">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    c.pill === "yellow"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-sky-100 text-sky-800"
                  }`}
                >
                  {c.multiple}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3.5 max-w-[820px] text-[13px] leading-relaxed text-zinc-400">
          Superside and Remote are private-round valuations. Stoke was an acquisition&mdash;Fiverr paid more than double its prior valuation for a company with modest revenue, because it had bundled talent into a platform.
        </p>

        {/* Sequoia pull quote */}
        <blockquote className="mt-11 border-l-[3px] border-accent pl-7">
          <p className="text-[clamp(24px,3vw,34px)] font-bold leading-snug tracking-tight text-balance">
            Sequoia put it plainly this year: the next trillion-dollar company will be a software company masquerading as a services firm.
          </p>
        </blockquote>
      </section>

      {/* ============ SECTION 2 — THE HONEST PART ============ */}
      <section className="border-y border-zinc-200 bg-stone-100">
        <div className="mx-auto max-w-[1160px] px-8 py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            02&mdash;The honest part
          </p>
          <div className="grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <h2 className="text-[clamp(30px,3.6vw,50px)] font-extrabold leading-[1.05] tracking-tight text-balance">
              You don&rsquo;t get{" "}
              <span className="underline decoration-accent decoration-[0.16em] underline-offset-[3px]">
                the multiple for free.
              </span>
            </h2>
            <div>
              <p className="mb-6 text-[22px] font-bold leading-snug tracking-tight">
                You earn it. We built the thing that makes it possible.
              </p>
              <p className="mb-5 text-lg leading-relaxed text-zinc-700">
                This isn&rsquo;t a relabeling trick. The business has to actually change&mdash;not dramatically, but genuinely.
              </p>
              <p className="mb-5 text-[17px] leading-relaxed text-zinc-500">
                Work that can be productized becomes recurring, subscription, and software revenue. Work that can&rsquo;t stays solid, tech-enabled staffing revenue. Both are valuable. Only one re-rates.
              </p>
              <p className="mb-5 text-[17px] leading-relaxed text-zinc-500">
                That transformation is what the platform is built to do. Your traditional staffing&mdash;talent acquisition, procurement, workforce management&mdash;moves onto the marketplace and into subscriptions. Then hosting, AI, and SaaS get cross-sold into the client base you already own.
              </p>
              <p className="text-[17px] leading-relaxed text-zinc-500">
                Transactional revenue becomes recurring revenue. Recurring revenue earns a higher multiple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — WHAT'S ALREADY BUILT (dark) ============ */}
      <section className="relative overflow-hidden bg-zinc-900 text-white">
        <div className="relative z-10 mx-auto max-w-[1160px] px-8 py-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">
            03&mdash;What&rsquo;s already built
          </p>
          <h2 className="mb-12 max-w-[820px] text-[clamp(32px,4.4vw,58px)] font-extrabold leading-[1.02] tracking-tight text-balance">
            The platform isn&rsquo;t a roadmap. It&rsquo;s live.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[.06] p-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" className="mb-5 h-11 w-11 rounded-md" />
                <div className="mb-2 text-[21px] font-bold">{p.name}</div>
                <p className="text-[15px] leading-relaxed text-white/70">{p.desc}</p>
                <div className="mt-auto pt-5 space-y-3">
                  {p.siteUrl && (
                    <a
                      href={p.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Visit Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                        p.statusColor === "green"
                          ? "bg-emerald-900/40 text-emerald-400"
                          : "bg-sky-300 text-sky-900"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          p.statusColor === "green" ? "bg-emerald-400" : "bg-sky-700"
                        }`}
                      />
                      {p.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[760px] text-lg leading-relaxed text-white/80">
            Building this takes years and millions most owners will never spend. You don&rsquo;t have to. You merge into it, and your business runs on it from day one.
          </p>
        </div>
      </section>

      {/* ============ SECTION 4 — WHO'S BEHIND IT ============ */}
      <section className="mx-auto max-w-[1160px] px-8 py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-500">
          04&mdash;Who&rsquo;s behind it
        </p>
        <h2 className="mb-11 max-w-[900px] text-[clamp(30px,3.8vw,52px)] font-extrabold leading-[1.04] tracking-tight text-balance">
          Two operators who made this exact move themselves.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Chris */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/images/transform/chris-headshot.png"
                alt="Chris McGrath"
                width={64}
                height={64}
                className="flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="text-[22px] font-bold leading-tight">Chris McGrath</div>
                <div className="mt-0.5 text-sm text-zinc-500">Founder &amp; CEO, Esteemed</div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-zinc-500">
              Twenty-five years in talent marketplaces and staffing. Started building this platform in 2011 and personally architected the AI coherence engine it runs on. Former AT&amp;T (Hypergrowth) and Accenture (Digital).
            </p>
          </div>
          {/* Tom */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/images/transform/tom-headshot.jpeg"
                alt="Tom Schmidt"
                width={64}
                height={64}
                className="flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="text-[22px] font-bold leading-tight">Tom Schmidt</div>
                <div className="mt-0.5 text-sm text-zinc-500">Co-Founder &amp; Chief Strategy Officer</div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-zinc-500">
              Thirty years in the industry. The former Senior Vice President at Recruit Holdings&mdash;the $23.3B company that owns Indeed and Glassdoor alongside acquired staffing firms like Staffmark&mdash;on the executive team through that roll-up. Founder of Pathfinder Advisory.
            </p>
          </div>
        </div>
        <div className="mt-8 max-w-[900px]">
          <p className="mb-4 text-[19px] leading-relaxed text-zinc-700">
            Recruit proved the model: workforce technology and staffing companies under one roof, at scale.{" "}
            <strong>We&rsquo;re bringing it to the firms Recruit will never buy.</strong>
          </p>
          <p className="mb-4 text-[17px] leading-relaxed text-zinc-500">
            And this is the move we made ourselves. Chris built the platform. After testing the roll-up thesis, he partnered with Tom in 2025&mdash;the deliberate choice to go further than either could alone.
          </p>
          <p className="text-xl font-bold leading-snug tracking-tight">
            We&rsquo;re not pitching a theory. We&rsquo;re inviting you into the same decision.
          </p>
        </div>
      </section>

      {/* ============ SECTION 5 — WHERE IT GOES ============ */}
      <section className="border-y border-zinc-200 bg-stone-100">
        <div className="mx-auto max-w-[1160px] px-8 py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            05&mdash;Where it goes
          </p>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <h2 className="mb-6 text-[clamp(30px,3.6vw,50px)] font-extrabold leading-[1.05] tracking-tight text-balance">
                Three partners a year. Five years. A platform worth billions.
              </h2>
              <p className="mb-3.5 text-[17px] leading-relaxed text-zinc-500">
                Each firm starts at roughly 70% recurring staffing revenue, 30% software&mdash;and the mix moves as staffing converts onto the marketplace and hosting, AI, and SaaS get cross-sold.
              </p>
              <p className="text-[17px] leading-relaxed text-zinc-500">
                At that scale, the choice becomes ours: <strong>go public, or keep compounding.</strong>
              </p>
            </div>
            {/* Exponential curve SVG */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <svg viewBox="0 0 460 300" className="block h-auto w-full" role="img" aria-label="Two paths: a flat traditional-sale line and a compounding strategic-merger curve">
                <line x1="52" y1="20" x2="52" y2="256" stroke="#d4d4d4" strokeWidth="1.5" />
                <line x1="52" y1="256" x2="440" y2="256" stroke="#d4d4d4" strokeWidth="1.5" />
                <text x="16" y="140" transform="rotate(-90 16 140)" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="#8C887A" textAnchor="middle">Valuation</text>
                <text x="246" y="288" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="#8C887A" textAnchor="middle">Time</text>
                <path d="M52 236 C 150 232, 240 224, 430 214" fill="none" stroke="#a8a29e" strokeWidth="2.5" strokeDasharray="2 5" strokeLinecap="round" />
                <text x="300" y="205" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="600" fill="#65615A">Traditional sale</text>
                <path d="M52 244 C 210 238, 330 210, 418 44" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
                <text x="150" y="150" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="#2563eb">The strategic merger</text>
                <path d="M418 20l6.16 12.48L438 34.29l-9.9 9.65L430.32 58 418 51.36 405.68 58l2.22-14.06L398 34.29l13.84-1.81L418 20z" fill="#facc15" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Trajectory table */}
          <div className="mt-11 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-zinc-900 text-xs font-bold uppercase tracking-widest text-white">
              <div className="px-5 py-3.5">If partners are&hellip;</div>
              <div className="px-4 py-3.5">Year-5 revenue</div>
              <div className="px-4 py-3.5">Year-5 platform value</div>
            </div>
            {trajectory.map((t, i) => (
              <div
                key={t.label}
                className={`grid grid-cols-[1.5fr_1fr_1fr] items-center text-[17px] ${
                  t.highlight ? "bg-yellow-50" : ""
                } ${i < trajectory.length - 1 ? "border-b border-zinc-200" : ""}`}
              >
                <div className="px-5 py-5 font-semibold">
                  {t.label}{" "}
                  <span className="font-normal text-zinc-400">({t.size})</span>
                </div>
                <div className="px-4 py-5 text-zinc-500">{t.revenue}</div>
                <div className="px-4 py-5 font-extrabold">{t.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-3.5 max-w-[760px] text-[13px] leading-relaxed text-zinc-400">
            We can&rsquo;t know in advance which firms we&rsquo;ll partner with, so we show all three. Compounded from today&rsquo;s base.
          </p>
        </div>
      </section>

      {/* ============ SECTION 6 — THE OFFER ============ */}
      <section className="text-zinc-950" style={{ background: "#BFDBFE" }}>
        <div className="mx-auto max-w-[1160px] px-8 py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-900">
            06&mdash;The offer
          </p>
          <h2 className="mb-11 text-[clamp(40px,6vw,80px)] font-extrabold leading-none tracking-tight">
            Plainly:
          </h2>
          <div className="mb-10 grid gap-5 md:grid-cols-3">
            {[
              "Merge in. Keep running what you\u2019re great at \u2014 now powered by the platform and Tom\u2019s growth engine.",
              "Take equity in the combined growth engine \u2014 the blended software-and-services-valued platform.",
              "Your liquidity comes at the platform\u2019s exit or funding event, priced on the platform\u2019s multiple \u2014 not your old agency multiple.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-2xl border-[1.5px] border-zinc-900 bg-black/[.04] p-6"
              >
                <div className="mb-3 text-xl font-extrabold">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-base font-medium leading-normal">{text}</p>
              </div>
            ))}
          </div>
          <p className="max-w-[900px] text-[clamp(22px,2.8vw,32px)] font-extrabold leading-snug tracking-tight text-balance">
            A meaningful share of something big and rising beats all of something capped. The earlier you&rsquo;re in, the more of that curve you own.
          </p>
        </div>
      </section>

      {/* ============ SECTION 7 — CLOSE (dark) ============ */}
      <section className="relative overflow-hidden bg-zinc-900 text-white">
        {/* Decorative curves */}
        <svg viewBox="0 0 1247 994" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-50">
          <path d="M79.109 993.5C940.666 785.616 595.325 0.5 1232.11 0.5" stroke="#fff" strokeWidth="1.6" fill="none" />
          <path d="M0.109009 993.5C931.158 785.616 557.962 0.5 1246.11 0.5" stroke="#fff" strokeWidth="1.6" fill="none" />
        </svg>
        <div className="relative z-10 mx-auto max-w-[1160px] px-8 py-24">
          <div className="max-w-[860px]">
            <h2 className="mb-7 text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.02] tracking-tight text-balance">
              If you&rsquo;d rather build something bigger than sell something small.
            </h2>
            <p className="mb-9 max-w-[680px] text-[19px] leading-relaxed text-white/75">
              Twenty minutes. We&rsquo;ll tell you what we&rsquo;re building, you&rsquo;ll tell us what you&rsquo;ve built, and we&rsquo;ll both know quickly whether there&rsquo;s something here.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href={calendarUrl}
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-bold text-zinc-900 shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
              >
                Start a conversation &rarr;
              </Link>
              <a
                href="#download-brief"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-base font-bold text-white transition hover:border-white/50"
              >
                Download the full brief&nbsp;&darr;
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-7 gap-y-1.5 border-t border-white/15 pt-7">
            <div className="text-lg font-bold">Chris McGrath</div>
            <div className="text-sm text-white/60">Founder &amp; CEO</div>
            <a href="mailto:c.mcgrath@esteemed.io" className="text-sm text-white underline decoration-accent decoration-2 underline-offset-[3px]">
              c.mcgrath@esteemed.io
            </a>
            <a href="tel:+13607017353" className="text-sm text-white/60">
              360.701.7353
            </a>
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD BRIEF FORM ============ */}
      <section id="download-brief" className="scroll-mt-20 bg-[#E0E9F2] py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <TransformLeadForm />
        </div>
      </section>

      {/* ============ FOOTER DISCLAIMER ============ */}
      <footer className="border-t border-zinc-200 bg-stone-50">
        <div className="mx-auto max-w-[1160px] px-8 pt-11 pb-8">
          <p className="mb-7 max-w-[1000px] text-[12.5px] italic leading-relaxed text-zinc-400">
            Trajectory and valuation figures are illustrative, built on stated assumptions (approximately three partner firms per year at $10&ndash;40M revenue each; a revenue mix beginning near 70% recurring staffing / 30% software and shifting toward software over time via cross-sell; software revenue valued at conservative software multiples, recurring staffing at a premium to transactional agencies). They are targets and illustrations of the model&mdash;not projections or guarantees. Comparable outcomes (Superside, Remote, Stoke Talent) reflect other companies and are not indicative of results for any specific business. Any combination would be subject to mutual diligence and definitive documentation.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/esteemed-logo.svg" alt="Esteemed" className="h-[22px]" />
            <div className="text-[13px] text-zinc-400">&copy; 2026 Esteemed Inc. &middot; Confidential</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
