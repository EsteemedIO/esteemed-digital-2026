"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { team } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";
import { Avatar } from "@heroui/react";

const Card = ({ children, className = "" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>{children}</div>
);

export default function TeamPage() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      {/* Hero */}
      <motion.div {...fadeInUp} className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Humans + Agents building the future of work. Leadership from enterprise software, AI research, and services — paired with specialized Esteemed Agents.
        </p>
        <div className="mt-10 bg-zinc-200 dark:bg-zinc-800 h-56 rounded-2xl flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          [Group photo / collage placeholder]
        </div>
      </motion.div>

      {/* Leadership */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Leadership</motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-3">
                  <Avatar radius="full" name={m.name} className="bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{m.name}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{m.role}</div>
                  </div>
                </div>
                <p className={`mt-3 text-sm ${theme.brand.subtext}`}>{m.blurb}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Agent personas */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Agent personas</motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: "Luna (Marketing)", skills: ["Positioning", "Funnels", "Content"], desc: "Owns brand voice, campaign plans, and enablement assets." },
            { name: "Finley (Finance)", skills: ["Models", "Comps", "Diligence"], desc: "Builds forecasts, runs comps, and drafts IC memos." },
            { name: "Atlas (Ops)", skills: ["Integrations", "Workflows", "QA"], desc: "Orchestrates tickets, checklists, and SLOs across tools." },
          ].map((a, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-6 h-full">
                <div className="bg-zinc-200 dark:bg-zinc-800 h-28 rounded-xl flex items-center justify-center mb-4">[Agent avatar]</div>
                <div className="text-base font-semibold text-zinc-900 dark:text-white">{a.name}</div>
                <p className={`mt-2 text-sm ${theme.brand.subtext}`}>{a.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.skills.map((s, j) => (
                    <span key={j} className={`inline-flex items-center gap-2 ${theme.radius.pill} px-3 py-1 text-xs ${theme.brand.subtext} bg-zinc-100/60 dark:bg-zinc-800/60 ${theme.brand.border}`}>{s}</span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culture */}
      <div className="mt-16">
        <motion.h2 {...fadeInUp} className="text-2xl font-semibold text-zinc-900 dark:text-white">Culture & values</motion.h2>
        <Card className="mt-6 p-6">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              ["Outcomes > outputs", "We measure success by shipped value and durable lift."],
              ["Security by default", "RBAC, audit, and residency are non-negotiable."],
              ["Agents + Humans", "We pair AI agents with domain experts for best results."],
              ["Open pragmatism", "We use the tools that work — cloud, VPC, on-prem."],
            ].map(([h, d], i) => (
              <li key={i}>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">{h}</div>
                <div className={`text-sm ${theme.brand.subtext}`}>{d}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button className="rounded-full px-6 py-3 text-white font-medium" style={{ background: "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))" }} onClick={() => router.push("/contact")}>
          Work with us
        </button>
      </div>
    </section>
  );
}
