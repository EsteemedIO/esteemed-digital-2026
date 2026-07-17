"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Clock, FileText, Target, Eye, Users, BarChart3, CheckCircle2, Zap, Send } from "lucide-react";

function StatBadge({ value, label, icon: Icon }) {
  return (
    <div
      className="absolute z-10 bg-white rounded-2xl flex flex-col items-center justify-center gap-1"
      style={{
        left: 16, bottom: 16, width: 96, height: 96,
        boxShadow: "0 16px 32px -12px rgba(26,26,26,0.3)",
      }}
    >
      {Icon && <Icon className="h-4 w-4 text-ink" strokeWidth={2} />}
      <div style={{ fontSize: 26, fontWeight: 800, color: "#1A1A1A", letterSpacing: -1, lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: 7.5, fontWeight: 700, color: "rgba(26,26,26,0.5)", letterSpacing: 0.5, textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>
        {label}
      </div>
    </div>
  );
}

function AnimatedBar({ delay = 0 }) {
  return (
    <div className="flex gap-[2px] items-end" style={{ height: 18 }}>
      {[40, 60, 35, 80, 55, 70, 90].map((h, i) => (
        <div
          key={i}
          className="hero-bar"
          style={{
            width: 3, borderRadius: 1,
            background: i === 6 ? "#FEE546" : "#1A1A1A",
            animationDelay: `${delay + i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}


function AgentDot({ color = "#3CC97A", pulse = false }) {
  return (
    <span
      className={pulse ? "hero-pulse-dot" : ""}
      style={{ width: 7, height: 7, borderRadius: 7, background: color, flexShrink: 0 }}
    />
  );
}

function StarBadge() {
  return (
    <span style={{
      width: 18, height: 18, borderRadius: 5, background: "#FEE546",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontSize: 10, fontWeight: 800, color: "#FFFFFF",
    }}>★</span>
  );
}

const chipSets = {
  design: [
    { icon: CheckCircle2, text: "Design approved", color: "#3CC97A" },
    { icon: Zap, text: "AI layout generated", color: "#7C5BC9" },
    { icon: Send, text: "Site published", color: "#3CC97A" },
    { icon: TrendingUp, text: "Traffic up 312%", color: "#3CC97A" },
  ],
  support: [
    { icon: CheckCircle2, text: "Issue resolved", color: "#3CC97A" },
    { icon: Zap, text: "3 updates shipped", color: "#7C5BC9" },
    { icon: Clock, text: "Response in 4 hrs", color: "#3CC97A" },
    { icon: Send, text: "Patch deployed", color: "#3CC97A" },
  ],
  content: [
    { icon: FileText, text: "Blog drafted", color: "#7C5BC9" },
    { icon: CheckCircle2, text: "Campaign ready", color: "#3CC97A" },
    { icon: Send, text: "4 pages published", color: "#3CC97A" },
    { icon: Zap, text: "SEO optimized", color: "#7C5BC9" },
  ],
  marketing: [
    { icon: Target, text: "Ads optimized", color: "#3CC97A" },
    { icon: Zap, text: "Landing page live", color: "#7C5BC9" },
    { icon: TrendingUp, text: "CTR up 47%", color: "#3CC97A" },
    { icon: CheckCircle2, text: "Budget on track", color: "#3CC97A" },
  ],
  ai: [
    { icon: Eye, text: "Schema optimized", color: "#7C5BC9" },
    { icon: CheckCircle2, text: "AI-indexed", color: "#3CC97A" },
    { icon: Zap, text: "Structured data live", color: "#7C5BC9" },
    { icon: TrendingUp, text: "Visibility up 92%", color: "#3CC97A" },
  ],
  talent: [
    { icon: Users, text: "Candidate matched", color: "#3CC97A" },
    { icon: CheckCircle2, text: "Role filled", color: "#3CC97A" },
    { icon: Zap, text: "3 interviews booked", color: "#7C5BC9" },
    { icon: Send, text: "Offer accepted", color: "#3CC97A" },
  ],
};

const statConfig = {
  design: { value: "8X", label: "More web traffic", icon: BarChart3 },
  support: { value: "4hr", label: "Avg response", icon: Clock },
  content: { value: "4X", label: "Faster content", icon: Zap },
  marketing: { value: "3.2X", label: "ROAS average", icon: TrendingUp },
  ai: { value: "92%", label: "AI discovery", icon: Eye },
  talent: { value: "35K+", label: "Expert network", icon: Users },
};

export default function HeroImageComposite({ src, alt, variant = "design", objectPosition = "center" }) {
  const [pair, setPair] = useState([]);
  const [showSecond, setShowSecond] = useState(false);
  const chips = chipSets[variant] || chipSets.design;
  const stat = statConfig[variant] || statConfig.design;
  const pairCount = Math.ceil(chips.length / 2);

  useEffect(() => {
    let pairIdx = 0;

    function showPair() {
      const i = (pairIdx * 2) % chips.length;
      const first = chips[i];
      const second = chips[(i + 1) % chips.length];
      setPair([first, second]);
      setShowSecond(false);

      // Show second chip after a delay
      setTimeout(() => setShowSecond(true), 800);

      pairIdx++;
    }

    showPair();
    const interval = setInterval(showPair, 4000);
    return () => clearInterval(interval);
  }, [chips, pairCount]);

  return (
    <div className="hero-visual shadow-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading="eager"
      />

      {/* Stat badge with animated bars */}
      <div
        className="absolute z-10 bg-white rounded-2xl hidden sm:flex flex-col items-center justify-center gap-1.5"
        style={{
          left: 16, bottom: 16, width: 100, height: 100,
          boxShadow: "0 16px 32px -12px rgba(26,26,26,0.3)",
        }}
      >
        <AnimatedBar />
        <div style={{ fontSize: 24, fontWeight: 800, color: "#1A1A1A", letterSpacing: -1, lineHeight: 1 }}>
          {stat.value}
        </div>
        <div style={{ fontSize: 7.5, fontWeight: 700, color: "rgba(26,26,26,0.5)", letterSpacing: 0.5, textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>
          {stat.label}
        </div>
      </div>

      {/* Status chips — top right, 2 at a time */}
      <div className="absolute z-10 bottom-3 right-3 hidden sm:flex flex-col gap-2">
        {pair.map((chip, i) => {
          const ChipIcon = chip.icon;
          const visible = i === 0 || showSecond;
          return (
            <div
              key={`${chip.text}-${i}`}
              className={visible ? "hero-chip-enter" : ""}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#FFFFFF", borderRadius: 12,
                padding: "7px 12px",
                boxShadow: "0 10px 20px -8px rgba(26,26,26,0.25)",
                fontSize: 11, fontWeight: 600, color: "#1A1A1A",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <AgentDot color={chip.color} pulse={visible} />
              <ChipIcon className="h-3.5 w-3.5 text-ink" strokeWidth={2} />
              {chip.text}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes heroBarGrow {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        .hero-bar {
          animation: heroBarGrow 2s ease-in-out infinite;
        }
        @keyframes heroPulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero-pulse-dot {
          animation: heroPulseDot 1.2s ease-in-out infinite;
        }
        @keyframes heroChipEnter {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero-chip-enter {
          animation: heroChipEnter 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
