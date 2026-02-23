"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { solutions, products } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";

const Card = ({ children, className = "" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className={`inline-flex items-center gap-2 ${theme.radius.pill} px-3 py-1 text-xs ${theme.brand.subtext} bg-zinc-100/60 dark:bg-zinc-800/60 ${theme.brand.border}`}>
    {children}
  </span>
);

const CTA = ({ children, ...props }) => (
  <button
    {...props}
    className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
    style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }}
  >
    {children}
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

export default function SolutionsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      {/* Intro */}
      <motion.div {...fadeInUp} className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Solutions</h1>
        <p className={`mt-3 ${theme.brand.subtext}`}>
          Opinionated blueprints that combine Products + Services for fast time-to-value. Each solution includes
          recommended deployment options, governance, and integration patterns.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => {
          const mapped = s.mapsTo
            .map((key) => products.find((p) => p.key === key))
            .filter(Boolean);

          return (
            <motion.div key={s.k} {...scaleIn}>
              <Card className="p-6 h-full flex flex-col">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.label}</h3>
                  <p className={`mt-2 ${theme.brand.subtext}`}>{s.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {mapped.map((p) => (
                      <Pill key={p.key}>{p.name}</Pill>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <CTA onClick={() => router.push("/contact")}>Talk to an Expert</CTA>
                  <button
                    className="text-sm font-medium"
                    style={{ color: "var(--brand-start)" }}
                    onClick={() => router.push("/deployment")}
                  >
                    Deployment options
                  </button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* "What you get" band */}
      <Card className="mt-10 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Playbooks</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>Discovery templates, acceptance criteria, and KPI guardrails.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Integrations</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>ATS/CRM/ERP connectors, SSO/SAML, observability, and audit.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Governance</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>RBAC, PII redaction, data residency choices, and SOC 2 path.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
