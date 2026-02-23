"use client";

import { motion } from "framer-motion";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";
import { deployments, compliance } from "@/lib/data";

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

export default function DeploymentPage(){
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
      <motion.div {...fadeInUp} className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Deployment options</h2>
          <p className={`mt-2 ${theme.brand.subtext}`}>Choose the model that fits your security, residency, and control requirements.</p>
        </div>
        <div className="flex gap-2">
          <Ghost>Security overview</Ghost>
          <CTA>Talk to sales</CTA>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        {deployments.map(d => (
          <motion.div key={d.k} {...scaleIn}>
            <Card className="p-6 h-full">
              <div className="text-base font-semibold text-zinc-900 dark:text-white">{d.title}</div>
              <p className={`mt-1 text-sm ${theme.brand.subtext}`}>{d.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {d.bullets.map((b,i)=>(
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full" style={{background:"var(--brand-start)"}}/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mt-8 p-6">
        <div className="flex flex-wrap items-center gap-3">
          {compliance.map((c,i)=>(
            <span key={i} className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${theme.brand.subtext} bg-zinc-100/60 dark:bg-zinc-800/60 ${theme.brand.border}`}>
              {c}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
}
