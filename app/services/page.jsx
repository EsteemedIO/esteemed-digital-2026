"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";

const Card = ({ children, className = "" }) => (
  <div
    className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}
  >
    {children}
  </div>
);

export default function ServicesPage() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      {/* Hero */}
      <motion.div {...fadeInUp} className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Esteemed Digital blends strategy, engineering, and AI expertise to
          help organizations adopt, scale, and govern AI. From roadmaps to
          secure deployments, we're your end-to-end partner.
        </p>
        <div className="mt-10 bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center text-zinc-500 dark:text-zinc-400">
          [Hero image / illustration here]
        </div>
      </motion.div>

      {/* Service Sections */}
      <div className="mt-16 space-y-20">
        {/* Advisory */}
        <motion.div {...fadeInUp} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              AI Advisory & Strategy
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We help executives and boards define pragmatic AI roadmaps. Our
              advisory work blends business outcomes with technical feasibility,
              so investments drive measurable ROI. We draw from playbooks built
              during M&A roll-ups, SaaS launches, and enterprise enablement.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Engagements typically include workshops, an AI maturity
              assessment, a risk & compliance review, and a roadmap customized
              to your sector.
            </p>
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center">
            [Advisory image]
          </div>
        </motion.div>

        {/* Integration */}
        <motion.div {...fadeInUp} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center">
            [Integration diagram]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Systems Integration
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              As a Drupal Certified Partner with deep ATS/CRM experience, we
              know how to safely connect enterprise systems into AI pipelines.
              Our teams integrate identity, data, and workflows while enforcing
              security and governance.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Recent work: onboarding 50+ healthcare staffing clients into a
              unified ATS with AI-powered matching and compliance automation.
            </p>
          </div>
        </motion.div>

        {/* Custom Dev */}
        <motion.div {...fadeInUp} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Custom AI Development
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              From small language model (SLM) training to RAG pipelines and
              multi-agent orchestration, we deliver AI tailored to your org.
              Esteemed Agents already power engineering, finance, and ops teams
              — we extend that tech to your use cases.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              We specialize in hybrid stacks: React frontends, Node/TypeScript
              backends, Drupal CMS/ATS, and AI infra across Digital Ocean, AWS,
              or your private VPC.
            </p>
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center">
            [Custom AI build mockup]
          </div>
        </motion.div>

        {/* Governance */}
        <motion.div {...fadeInUp} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 bg-zinc-200 dark:bg-zinc-800 h-64 rounded-2xl flex items-center justify-center">
            [Governance diagram]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Security & Governance
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              AI adoption requires trust. We implement RBAC, audit logging,
              encryption, and data residency controls. Our advisors bring
              experience with SOC 2, GDPR, and HIPAA environments.
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Expect deliverables like security runbooks, compliance mappings,
              and readiness checklists to satisfy both IT and regulators.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <button
          className="rounded-full px-6 py-3 text-white font-medium"
          style={{
            background:
              "linear-gradient(90deg,var(--brand-start),var(--brand-mid),var(--brand-end))",
          }}
          onClick={() => router.push("/contact")}
        >
          Talk to an Expert
        </button>
      </div>
    </section>
  );
}
