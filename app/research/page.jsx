"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";

const Card = ({ children, className = "" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>{children}</div>
);

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      {/* Hero */}
      <motion.div {...fadeInUp} className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Research & Insights</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Our team and agent workforce publish practical research on <strong>swarm orchestration</strong>, <strong>RAG at enterprise scale</strong>, and <strong>organizational intelligence</strong>.
          Expect benchmarks, reference architectures, and case studies with measurable lift.
        </p>
        <div className="mt-10 bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          [Hero illustration / cover image]
        </div>
      </motion.div>

      {/* Research papers */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Peer-style briefs & benchmarks</motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Swarm Agents for GTM & Support",
              abstract:
                "We evaluate leader/worker agent patterns across SaaS support and sales enablement, comparing task success, cost, and latency under mixed-model routing.",
              meta: "v1 • 18 pages • Methods + KPIs",
            },
            {
              title: "RAG Hardening in Regulated Orgs",
              abstract:
                "Techniques for RBAC-aware retrieval, audit trails, and PII redaction across multi-repo corpora (Drive, SharePoint, S3). Includes latency budgeting and caching.",
              meta: "v2 • 24 pages • Architecture + Playbooks",
            },
            {
              title: "Neural Memory Graphs in Portfolio Ops",
              abstract:
                "A graph-based memory over deals, diligence docs, and operator notes, feeding model routing decisions and agent tool selection.",
              meta: "v1 • 16 pages • Prototype + Results",
            },
          ].map((p, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-6 h-full flex flex-col">
                <div className="bg-zinc-200 dark:bg-zinc-800 h-32 rounded-xl flex items-center justify-center mb-4">[Paper cover image]</div>
                <div className="text-base font-semibold text-zinc-900 dark:text-white">{p.title}</div>
                <div className={`mt-1 text-xs ${theme.brand.subtext}`}>{p.meta}</div>
                <p className={`mt-3 text-sm ${theme.brand.subtext}`}>{p.abstract}</p>
                <div className="mt-4 flex gap-3">
                  <button className="text-sm font-medium" style={{ color: "var(--brand-start)" }}>Download PDF</button>
                  <button className="text-sm font-medium" style={{ color: "var(--brand-start)" }}>View dataset</button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case studies */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Case studies</motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Staffing ops automation",
              bullets: ["-37% time-to-fill", "+22% candidate quality score", "PII-safe screening"],
            },
            {
              title: "SaaS GTM & support",
              bullets: ["40% ticket deflection", "Self-serve onboarding", "Enablement content generation"],
            },
          ].map((c, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-6 h-full">
                <div className="bg-zinc-200 dark:bg-zinc-800 h-40 rounded-xl flex items-center justify-center mb-4">[Before/after chart]</div>
                <div className="text-base font-semibold text-zinc-900 dark:text-white">{c.title}</div>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {c.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <button className="mt-4 text-sm font-medium" style={{ color: "var(--brand-start)" }}>Read study</button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product updates timeline */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Product updates</motion.h2>
        <div className="mt-6 space-y-6">
          {research.map((r, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-zinc-200 dark:bg-zinc-800 h-12 w-12 rounded-xl flex items-center justify-center">[icon]</div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{r.title}</div>
                    <p className={`mt-1 text-sm ${theme.brand.subtext}`}>{r.desc}</p>
                    <button className="mt-2 text-sm font-medium" style={{ color: "var(--brand-start)" }}>Release notes</button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
