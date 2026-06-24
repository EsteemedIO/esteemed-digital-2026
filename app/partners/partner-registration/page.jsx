import Image from "next/image";
import PartnerRegistrationForm from "./PartnerRegistrationForm";

export const metadata = {
  title: "Partner with Esteemed",
  description:
    "Partner with Esteemed to expand opportunities and deliver workforce, software, and service solutions through our partner ecosystem.",
};

export default function PartnerRegistrationPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <p className="inline-flex border-b-2 border-accent pb-1 text-sm font-bold tracking-tight">Partner Programs</p>
            <h1 className="text-[clamp(44px,7vw,88px)] font-extrabold leading-none tracking-tight">
              Partner with Esteemed.
            </h1>
            <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold leading-tight tracking-tight">
              Accelerate Innovation. Elevate Success.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 lg:mx-0">
              <strong className="font-bold text-ink">At Esteemed, we believe in the power of collaboration.</strong> Our partner ecosystem is designed to drive meaningful connections, expand opportunities, and deliver cutting-edge workforce solutions. Whether you&apos;re a{" "}
              <strong className="font-bold text-ink">technology provider, service consultant, or strategic innovator</strong>, partnering with Esteemed empowers you to grow, scale, and{" "}
              <strong className="font-bold text-ink">make a lasting impact.</strong>
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-zinc-100 md:min-h-[520px]">
            <Image
              src="/images/partners/partner-hero.webp"
              alt="Woman working from couch"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <PartnerRegistrationForm />
        </div>
      </section>
    </main>
  );
}
