"use client";

import { motion } from "framer-motion";
import { news } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";

const Card = ({ children, className = "" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>{children}</div>
);

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      {/* Hero / Featured */}
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Latest news</h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">Releases, milestones, press, and community updates.</p>
      </motion.div>

      {featured && (
        <Card className="mt-10 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{featured.date} • {featured.tag}</span>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">{featured.title}</h2>
              <p className={`mt-2 text-sm ${theme.brand.subtext}`}>A deeper look at what shipped, how it performs, and what's next on the roadmap.</p>
              <button className="mt-4 text-sm font-medium" style={{ color: "var(--brand-start)" }}>Read more</button>
            </div>
            <div className="bg-zinc-200 dark:bg-zinc-800 h-44 rounded-xl flex items-center justify-center">[Featured image]</div>
          </div>
        </Card>
      )}

      {/* List */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {rest.map((n, i) => (
          <motion.div key={i} {...scaleIn}>
            <Card className="p-6 h-full">
              <div className="bg-zinc-200 dark:bg-zinc-800 h-28 rounded-xl flex items-center justify-center mb-4">[Thumb]</div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{n.date} • {n.tag}</span>
              <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-white">{n.title}</h3>
              <button className="mt-3 text-sm font-medium" style={{ color: "var(--brand-start)" }}>Read more</button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* In the press */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">In the press</motion.h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="h-16 flex items-center justify-center">[Logo]</Card>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <Card className="mt-16 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold text-zinc-900 dark:text-white">Subscribe to updates</div>
            <div className={`text-sm ${theme.brand.subtext}`}>Product updates, research drops, and case studies.</div>
          </div>
          <form
            className="flex gap-3"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — you're subscribed!"); }}
          >
            <input className="rounded-full border border-zinc-300/70 bg-white/80 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-start)] dark:border-zinc-700/70 dark:bg-zinc-900/80"
                   type="email" placeholder="you@company.com" required />
            <button className="rounded-full px-5 py-2 text-sm font-medium text-white"
                    style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }}>
              Subscribe
            </button>
          </form>
        </div>
      </Card>
    </section>
  );
}
