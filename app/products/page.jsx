"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";

const Card = ({ children, className = "" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>
    {children}
  </div>
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

export default function ProductsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      {/* Intro */}
      <motion.div {...fadeInUp} className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">Products</h1>
        <p className={`mt-3 ${theme.brand.subtext}`}>
          A cohesive stack for AI outcomes—neural memory (Esteemed Intelligence), enterprise RAG + chat (Esteemed AI),
          and production-ready agents (Esteemed Agents), plus APIs to build on top.
        </p>
        <div className="mt-6 flex gap-3">
          <CTA onClick={() => router.push("/developers")}>View Developer Docs</CTA>
          <button
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${theme.brand.text} ${theme.brand.border} hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50`}
            onClick={() => router.push("/contact")}
          >
            Request a Demo
          </button>
        </div>
      </motion.div>

      {/* Product grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <motion.div key={p.key} {...scaleIn}>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3">
                <p.icon className="h-5 w-5" style={{ color: "var(--brand-start)" }} />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.name}</h3>
              </div>
              <p className={`mt-2 ${theme.brand.subtext}`}>{p.tagline}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span
                      className="mt-1 h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: "var(--brand-start)" }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <CTA>Learn more</CTA>
                <button
                  className="text-sm font-medium"
                  style={{ color: "var(--brand-start)" }}
                  onClick={() => router.push("/developers")}
                >
                  Docs
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Secondary: "How they fit together" */}
      <Card className="mt-10 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Neural Memory</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>
              <strong>Esteemed Intelligence</strong> builds a durable knowledge graph across your org.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">Enterprise RAG</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>
              <strong>Esteemed AI</strong> indexes drives, docs, and systems with RBAC + audit.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">AI Workforce</div>
            <p className={`mt-2 text-sm ${theme.brand.subtext}`}>
              <strong>Esteemed Agents</strong> orchestrate multi-step work across tools and teams.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
