"use client";

import { motion } from "framer-motion";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";
import { partners } from "@/lib/data";

const Card = ({ children, className="" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>{children}</div>
);
const CTA = ({ children, ...props }) => (
  <button {...props} className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
    style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }}>
    {children}
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);
const Ghost = ({children, ...props}) => (
  <button {...props} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-zinc-100 dark:text-zinc-100 border border-zinc-800/60 hover:bg-zinc-800/50"> {children} </button>
);

export default function PartnersPage(){
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
      <motion.div {...fadeInUp} className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Partners</h2>
          <p className={`mt-2 ${theme.brand.subtext}`}>Technology, cloud, and solutions partners that amplify Esteemed.</p>
        </div>
        <div className="flex gap-2">
          <Ghost>Partner directory</Ghost>
          <CTA>Become a partner</CTA>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {partners.showcase.map((p, i) => (
          <Card key={i} className="flex h-24 items-center justify-center p-4">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{p.name}</span>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {partners.program.map((pg, i) => (
          <Card key={i} className="p-6 h-full">
            <div className="text-base font-semibold text-zinc-900 dark:text-white">{pg.name}</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>{pg.desc}</p>
            <button className="mt-4 text-sm font-medium" style={{ color: "var(--brand-start)" }}>Learn more</button>
          </Card>
        ))}
      </div>
    </section>
  );
}
