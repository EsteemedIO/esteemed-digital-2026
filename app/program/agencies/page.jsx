import Image from "next/image";
import Link from "next/link";
import AgencyServicesTabs from "./AgencyServicesTabs";

export const metadata = {
  title: "Agency Program",
  description:
    "Finding top talent and managing workforce complexities should not slow you down. Esteemed connects agencies with pre-vetted professionals and seamless hiring solutions.",
};

const agencyLogos = [
  { src: "/images/program/agencies/logo-genuine.png", alt: "Genuine Agency logo" },
  { src: "/images/program/agencies/logo-civic-actions.png", alt: "Civic Actions agency logo" },
  { src: "/images/program/agencies/logo-digital-polygon.png", alt: "Digital Polygon agency logo" },
  { src: "/images/program/agencies/logo-tactis.png", alt: "Tactis agency logo" },
  { src: "/images/program/agencies/logo-hounder.png", alt: "Hounder agency logo" },
  { src: "/images/program/agencies/logo-innosoft.png", alt: "Innosoft logo" },
];

const workforcePoints = [
  ["Top talent, on-demand", "Access a curated network of experts across digital, creative, and tech fields."],
  ["Global hiring simplified", "Hire anywhere with built-in compliance, payroll, and benefits support."],
  ["Flexible workforce solutions", "Scale with full-time, contract, or freelance professionals tailored to your needs."],
  ["Faster hiring and onboarding", "AI-driven matching, built-in onboarding, and end-to-end support reduce time-to-hire."],
  ["Flexible workforce + workspace", "Support distributed teams with workspace options through Esteemed partner programs."],
];

const createPoints = [
  "Prompt-driven site and app generation for client concepts, landing pages, and internal tools.",
  "React and Node-ready output that can be refined in code, then deployed on Esteemed Cloud.",
  "AI-assisted delivery backed by vetted human experts when a project needs deeper design, data, or integration work.",
];

export default function AgencyProgramPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <p className="inline-flex border-b-2 border-accent pb-1 text-sm font-bold tracking-tight">
              Esteemed for Agencies
            </p>
            <h1 className="text-[clamp(42px,7vw,84px)] font-extrabold leading-none tracking-tight">
              Smart workforce solutions for Agencies.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 lg:mx-0">
              Finding top talent and managing workforce complexities should not slow you down. Esteemed connects agencies with{" "}
              <strong className="font-bold text-ink">pre-vetted professionals and seamless hiring solutions</strong> so you can{" "}
              <strong className="font-bold text-ink">scale on demand, streamline operations, and stay ahead.</strong>
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-zinc-100 md:min-h-[520px]">
            <Image
              src="/images/program/agencies/hero-team.webp"
              alt="Pair working in the office"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-[clamp(30px,4.2vw,54px)] font-extrabold tracking-tight">
            Join leading agencies powered by Esteemed
          </h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {agencyLogos.map((logo) => (
              <div key={logo.alt} className="flex min-h-[110px] items-center justify-center rounded-xl bg-white p-5">
                <Image src={logo.src} alt={logo.alt} width={190} height={90} className="max-h-[76px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="inline-flex border-b-2 border-accent pb-1 text-sm font-bold tracking-tight">Esteemed for Agencies</p>
            <h2 className="mt-5 text-[clamp(34px,4.8vw,60px)] font-extrabold tracking-tight">
              Why do Agencies Choose Esteemed?
            </h2>
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-[22px] bg-zinc-200 lg:min-h-[620px]">
              <Image
                src="/images/program/agencies/creative-team.webp"
                alt="Creative team collaborating"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <h3 className="text-[clamp(28px,3.8vw,44px)] font-bold tracking-tight">
                End-to-end talent and workforce management.
              </h3>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Getting our start as an agency, Esteemed has refined best practices over a decade in product delivery, talent acquisition, and scaling remote global teams.
              </p>
              <ul className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
                {workforcePoints.map(([title, body]) => (
                  <li key={title}>
                    <strong className="font-bold text-ink">{title}</strong> - {body}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-center text-[clamp(34px,4.8vw,60px)] font-extrabold tracking-tight">
            Managed Services for Agencies
          </h2>
          <div className="mt-8">
            <AgencyServicesTabs />
          </div>
        </div>
      </section>

      <section className="bg-zinc-600 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="inline-flex border-b-2 border-accent pb-1 text-sm font-bold tracking-tight">AI Driven Development</p>
            <h2 className="mt-5 text-[clamp(34px,4.8vw,60px)] font-extrabold tracking-tight">
              Build 10x faster with Esteemed Create
            </h2>
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative min-h-[340px] overflow-hidden rounded-[22px] bg-zinc-700 lg:min-h-[500px]">
              <Image
                src="/pricing/assets/create-preview.png"
                alt="Esteemed Create interface preview"
                fill
                className="object-cover object-left"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <h3 className="text-[clamp(28px,3.8vw,44px)] font-bold tracking-tight">
                Want faster, more reliable web and app development?
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/85">
                Esteemed Create combines prompt-driven development, modern JavaScript architecture, and managed cloud deployment to remove technical barriers and help agencies ship client work faster.
              </p>
              <ul className="mt-6 space-y-4">
                {createPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-white/90">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/websites/website-builder"
                  className="inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                >
                  See Create
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink hover:bg-accent-hover"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-[clamp(34px,4.8vw,60px)] font-extrabold tracking-tight">
            We help agencies just like yours.
          </h2>
          <p className="text-lg leading-8">
            Esteemed software and managed services help agencies of all kinds scale with confidence, and deliver with the best talent.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Get a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
