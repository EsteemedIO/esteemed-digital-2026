"use client";

import { motion } from "framer-motion";
import { theme, fadeInUp, scaleIn } from "@/lib/theme";
import { devResources } from "@/lib/data";

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
  <button {...props} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${theme.brand.text} ${theme.brand.border} hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50`}>{children}</button>
);
const Card = ({ children, className="" }) => (
  <div className={`${theme.brand.card} ${theme.radius.card} ${theme.shadow.soft} ${theme.brand.ring} ${className}`}>{children}</div>
);

function DevGradientHero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10"
           style={{ background: "radial-gradient(1200px 600px at 20% 60%,var(--brand-start),transparent 60%), radial-gradient(900px 500px at 60% -10%,var(--brand-mid),transparent 60%), linear-gradient(120deg,var(--brand-start),var(--brand-end))", opacity: 0.95 }}/>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 text-white">
            <h2 className="text-4xl/tight font-semibold drop-shadow-sm">Developer resources</h2>
            <p className="mt-3 max-w-xl text-white/90">Find everything you need to start building: API keys, SDKs, quickstarts, deep documentation, and a playground for models and agents.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTA>Let's go</CTA>
              <Ghost>Get an API key</Ghost>
            </div>
          </div>

          <Card className="lg:col-span-2 p-3 bg-white/90 dark:bg-zinc-900/90">
            <div className="flex items-center justify-between border-b border-zinc-200/70 dark:border-zinc-800/70 px-3 py-2">
              <div className="flex items-center gap-2">
                <img src="/Group (1).svg" alt="Esteemed Docs" className="h-5 w-auto"/>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">esteemed docs</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-800/60">v1 API</span>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 border-r border-zinc-200/70 dark:border-zinc-800/70 p-3">
                <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Get Started</div>
                <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Introduction</li><li>Installation</li><li className="font-medium text-zinc-900 dark:text-zinc-200">Creating a client</li><li>Quickstart</li><li>Playground</li>
                </ul>
                <div className="mt-4 text-xs font-semibold text-zinc-700 dark:text-zinc-300">Models</div>
                <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400"><li>Agents</li><li>Embed</li><li>Rerank</li></ul>
              </div>
              <div className="col-span-3 p-4">
                <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Get Started</div>
                <div className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Creating a client</div>
                <pre className="mt-3 rounded-xl bg-zinc-900 text-zinc-100 p-3 text-[11px] leading-relaxed overflow-x-auto">{`# JavaScript
import { Esteemed } from "@esteemed-ai/client";
const client = new Esteemed({ apiKey: process.env.ESTEEMED_API_KEY });

// List agents
const agents = await client.agents.list();

// Chat
const msg = await client.chat.create({
  agent: "luna-marketing",
  messages: [{ role: "user", content: "Draft a launch tweet" }],
});`}</pre>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function DevelopersPage(){
  return (
    <>
      <DevGradientHero />
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:pb-16">
        <motion.div {...fadeInUp} className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Developer Resources</h2>
            <p className={`mt-2 ${theme.brand.subtext}`}>SDKs, API, quickstarts, and status for your AI App Builder & Human Capital AI.</p>
          </div>
          <div className="flex gap-2">
            <Ghost>API Keys</Ghost>
            <CTA>Docs</CTA>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {devResources.sdks.map((s, i) => (
            <motion.div key={i} {...scaleIn}>
              <Card className="p-6 h-full">
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">{s.name}</div>
                <p className={`mt-2 text-sm ${theme.brand.subtext}`}>{s.desc}</p>
                <button className="mt-4 text-sm font-medium" style={{ color: "var(--brand-start)" }}>View {s.slug}</button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {devResources.links.map((l, i) => (
            <Card key={i} className="p-4">
              <button className="text-sm font-medium" style={{ color: "var(--brand-start)" }}>{l.name}</button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
