import Link from "next/link";
import { ArrowRight, Users, Brain, Globe, Zap } from "lucide-react";
import { heritage } from "@/lib/data";

export const metadata = {
  title: "About Esteemed",
  description: "The AI+Human platform for Work. Connecting businesses with top-tier talent and AI-powered solutions since 2011.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">About Esteemed</p>
          <h1 className="heading-1 mb-6">
            Empowering People, Transforming Work.
          </h1>
          <p className="subtitle max-w-3xl mx-auto">
            The AI+Human platform for Work.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                At Esteemed, we believe the future of work is flexible, intelligent, and people-first.
              </h2>
              <div className="space-y-5 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Our mission is to connect businesses with top-tier talent, optimize workforce management, and create seamless employee experiences through cutting-edge technology and human expertise.
                </p>
                <p>
                  From freelancers and remote teams to enterprises scaling globally, we provide the tools and support businesses need to hire, onboard, and manage talent effortlessly.
                </p>
                <p>
                  With a global reach and AI-powered solutions, we help organizations grow smarter, faster, and with confidence.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/our_team_01.jpg.webp?itok=b0kOyjos"
                alt="The Esteemed team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-ink text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: "#FEE546" }}>What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight max-w-3xl">
            AI-powered solutions for the modern workplace.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "AI-Powered Talent Solutions", desc: "Streamlining recruitment, onboarding, and workforce management with Intelligence." },
              { icon: Globe, title: "Global Reach, Local Expertise", desc: "Helping companies hire and scale worldwide while ensuring compliance." },
              { icon: Zap, title: "Flexibility & Scalability", desc: "Enabling businesses and professionals to grow without limits." },
              { icon: Users, title: "35,000+ Expert Network", desc: "Vetted IT professionals curated by our recruiting team since 2011." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-2xl p-6">
                <item.icon className="w-8 h-8 mb-4" style={{ color: "#FEE546" }} strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Career Professionals */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/man-on-phone-bg.jpg.webp?itok=NoN8Z2Lw"
                alt="Professional on a call"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">For Career Professionals</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                Your career, amplified.
              </h2>
              <ul className="space-y-5">
                {[
                  { title: "Colleagues for Career Growth", desc: "Discover exclusive job opportunities, connect with hiring managers, and expand your professional network." },
                  { title: "Member Benefits", desc: "Access discounted health insurance, financial perks, and career-enhancing resources." },
                  { title: "AI-Driven Career Pathing", desc: "Get personalized insights and recommendations to navigate your career with confidence." },
                ].map((item) => (
                  <li key={item.title}>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-zinc-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
            Founded in 2019. Built on a decade of talent infrastructure.
          </h2>
          <div className="space-y-5 text-lg text-zinc-600 leading-relaxed">
            <p>
              Esteemed was founded in 2019 after building and scaling a niche IT talent marketplace platform launched in 2011. Recognizing the growing demand for flexible workforce solutions, Esteemed evolved into a comprehensive talent and workforce management platform.
            </p>
            <p>
              We connect businesses and professionals with the tools they need to hire, grow, and succeed in the modern workplace. The 35,000-person Esteemed Colleagues network powers everything we build.
            </p>
            <p>
              This is the difference: AI builds the first version, but real people are there to help you grow it. We&apos;ve been a staffing company first and an AI company second, and that order matters.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">We&apos;re in it for the people.</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">We put talent and businesses at the center of everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We harness AI and technology to power smarter workforce solutions." },
              { title: "Flexibility & Scalability", desc: "We enable businesses and professionals to grow without limits." },
              { title: "Global Reach, Local Expertise", desc: "We help companies hire and scale worldwide while ensuring compliance." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-zinc-200 p-8">
                <h3 className="text-lg font-bold text-ink mb-3">{v.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-20 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-14">Heritage</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] top-2 bottom-2 w-px bg-zinc-300 hidden sm:block" />
            <div className="space-y-10">
              {heritage.map((item, i) => (
                <div key={item.year} className="flex gap-6 sm:gap-10 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`relative z-10 flex items-center justify-center w-20 h-10 rounded-full text-sm font-extrabold ${i === heritage.length - 1 ? "bg-accent text-ink" : "bg-ink text-white"}`}>
                      {item.year}
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <p className="text-base text-zinc-700 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drupal Community */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-6">Open source community</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We&apos;ve been active in the Drupal community since 2011. The Drupal Jobs board is still operated by Esteemed as a service to the community — no lead gen, no data extraction, just community goodwill. We believe in giving back to the ecosystem that got us here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">Want to talk?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hire-experts"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink text-sm font-bold hover:bg-white transition-colors"
            >
              Hire an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
