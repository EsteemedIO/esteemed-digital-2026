"use client";

import { useRouter } from "next/navigation";
import { theme } from "@/lib/theme";

export default function ContactPage() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Talk to an Expert</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Tell us about your goals. We'll recommend the best mix of products, solutions, and services for fast time-to-value.
        </p>
      </div>

      {/* Form + Sidebar */}
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Form */}
        <form
          className="md:col-span-2 grid grid-cols-1 gap-4"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll follow up shortly."); }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="w-full rounded-xl border border-zinc-300/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80" placeholder="First name" required />
            <input className="w-full rounded-xl border border-zinc-300/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80" placeholder="Last name" required />
          </div>
          <input className="w-full rounded-xl border border-zinc-300/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80" type="email" placeholder="Work email" required />
          <input className="w-full rounded-xl border border-zinc-300/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80" placeholder="Company" />
          <textarea className="w-full rounded-xl border border-zinc-300/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80" placeholder="How can we help?" rows={6} />
          <div>
            <button className="rounded-full px-6 py-3 text-white font-medium" style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }}>
              Submit
            </button>
          </div>
        </form>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Sales & Partnerships</div>
            <div className={`text-sm ${theme.brand.subtext}`}>sales@esteemed.ai • partners@esteemed.ai</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Support</div>
            <div className={`text-sm ${theme.brand.subtext}`}>support@esteemed.ai • Status page</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Offices</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {["San Francisco", "New York", "Remote"].map((c, i) => (
                <div key={i} className="bg-zinc-200 dark:bg-zinc-800 h-24 rounded-xl flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-400">[{c} map]</div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-100/60 dark:bg-zinc-900/60 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-4">
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Become a partner</div>
            <div className={`text-sm ${theme.brand.subtext}`}>Integrators, technology, and cloud partners welcome.</div>
            <button className="mt-3 text-sm font-medium" style={{ color: "var(--brand-start)" }} onClick={() => router.push("/partners")}>Learn more</button>
          </div>
        </aside>
      </div>
    </section>
  );
}
