"use client";

function PhotoBrowser({ children, url = "studio.com", style = {} }) {
  return (
    <div
      className="w-full h-full bg-white rounded-[14px] overflow-hidden flex flex-col"
      style={{
        boxShadow: "0 40px 80px -30px rgba(26,26,26,0.35), 0 12px 24px -12px rgba(26,26,26,0.18)",
        border: "1px solid rgba(26,26,26,0.06)",
        ...style,
      }}
    >
      <div
        className="h-8 px-3 flex items-center gap-2 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(26,26,26,0.05)", background: "#FAFAF8" }}
      >
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#FF6058" }} />
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#FFBE2E" }} />
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#28C842" }} />
        <div
          className="ml-3.5 flex-1 h-4 rounded flex items-center px-2.5"
          style={{ background: "rgba(26,26,26,0.04)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 9, color: "rgba(26,26,26,0.5)" }}
        >
          {url}
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
}

export default function CascadingAgent() {
  const P = {
    lilac: "#E4DBF0", lilacDeep: "#CDBEE0", ink: "#1A1A1A",
    blush: "#F8DAD0", blushDeep: "#F0BCA8", cream: "#F8F3E8", paper: "#FAFAF6",
  };

  const tasks = [
    { ic: "✓", t: "Designed brand identity", sub: '"Lumen & Co." · serif + dark', done: true },
    { ic: "✓", t: "Wrote 4 pages of copy", sub: "Home · Shop · About · Contact", done: true },
    { ic: "◐", t: "Generating product photos", sub: "8 of 12 candles complete", active: true },
    { ic: "○", t: "Wiring Stripe checkout", sub: "Pending", dim: true },
    { ic: "○", t: "Publishing to nighttravelers.com", sub: "Pending", dim: true },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: P.lilac }}>
      {/* halo */}
      <div
        className="absolute"
        style={{
          right: "-15%", top: "-20%",
          width: "70%", height: "70%",
          background: "radial-gradient(closest-side, #CDBEE0, transparent)",
          filter: "blur(20px)",
        }}
      />

      {/* Agent task card */}
      <div
        className="absolute z-[1] bg-white rounded-[14px] flex flex-col gap-2"
        style={{
          left: 22, top: 22,
          width: "46%", height: "64%",
          padding: 14,
          boxShadow: "0 24px 50px -20px rgba(26,26,26,0.25)",
        }}
      >
        {/* header */}
        <div className="flex items-center gap-1.5">
          <div
            className="w-5 h-5 rounded-[6px] flex items-center justify-center text-white"
            style={{ background: "#7C5BC9", fontSize: 11, fontWeight: 700 }}
          >
            ✦
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, color: P.ink }}>Agent</span>
          <span style={{ fontSize: 8.5, color: "rgba(26,26,26,0.5)", fontWeight: 500 }}>· building your store</span>
          <div className="ml-auto flex items-center gap-1">
            <span className="rounded-full" style={{ width: 6, height: 6, background: "#3CC97A", boxShadow: "0 0 6px #3CC97A" }} />
            <span style={{ fontSize: 8, color: "rgba(26,26,26,0.6)", fontWeight: 600 }}>LIVE</span>
          </div>
        </div>

        {/* task rows */}
        {tasks.map((row, i) => (
          <div
            key={i}
            className="flex gap-[9px] items-center"
            style={{ padding: "5px 0", opacity: row.dim ? 0.5 : 1 }}
          >
            <div
              className={row.active ? "agent-spin" : ""}
              style={{
                width: 18, height: 18, borderRadius: 18, flexShrink: 0,
                background: row.done ? "#E8F5ED" : row.active ? "#EFE6FA" : "rgba(26,26,26,0.05)",
                color: row.done ? "#2D8E5A" : row.active ? "#7C5BC9" : "rgba(26,26,26,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700,
              }}
            >
              {row.ic}
            </div>
            <div className="flex-1">
              <div style={{ fontSize: 10, fontWeight: 600, color: P.ink, letterSpacing: -0.1 }}>{row.t}</div>
              <div style={{ fontSize: 8.5, color: "rgba(26,26,26,0.5)", marginTop: 1 }}>{row.sub}</div>
            </div>
            {row.active && (
              <div className="flex gap-0.5">
                <span className="agent-dot" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: "#7C5BC9" }} />
                <span className="agent-dot" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: "#7C5BC9", animationDelay: ".2s" }} />
                <span className="agent-dot" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: "#7C5BC9", animationDelay: ".4s" }} />
              </div>
            )}
          </div>
        ))}

        {/* progress */}
        <div className="mt-auto flex flex-col gap-[5px]">
          <div className="flex justify-between" style={{ fontSize: 8.5 }}>
            <span style={{ color: "rgba(26,26,26,0.5)", fontWeight: 600 }}>2 min remaining</span>
            <span style={{ color: P.ink, fontWeight: 700 }}>72%</span>
          </div>
          <div className="rounded overflow-hidden" style={{ height: 4, background: "rgba(26,26,26,0.06)" }}>
            <div className="agent-progress h-full rounded" style={{ background: "#7C5BC9" }} />
          </div>
        </div>
      </div>

      {/* Candle brand site preview */}
      <div className="absolute z-[3]" style={{ right: 20, bottom: 20, width: "64%", height: "76%" }}>
        <PhotoBrowser url="nighttravelers.com">
          <div className="h-full relative overflow-hidden">
            {/* background */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #E8D2B4 0%, #D9B88C 100%)" }} />
            {/* nav */}
            <div
              className="relative z-[2] flex items-center"
              style={{ padding: "10px 16px", fontFamily: 'Georgia, "Times New Roman", serif', color: P.ink }}
            >
              <div className="flex gap-3" style={{ fontSize: 9 }}>
                <span style={{ borderBottom: "1px solid " + P.ink, paddingBottom: 1 }}>SHOP</span>
                <span>JOURNAL</span>
                <span>ABOUT</span>
              </div>
              <div className="flex-1 text-center" style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.8, fontFamily: "Georgia, serif" }}>
                LUMEN &amp; CO.
              </div>
              <div className="flex gap-2.5" style={{ fontSize: 9 }}>
                <span>SEARCH</span>
                <span>CART (1)</span>
              </div>
            </div>

            {/* hero */}
            <div className="relative z-[2] flex" style={{ padding: "10px 18px", height: "calc(100% - 32px)" }}>
              {/* left copy */}
              <div className="flex-1 flex flex-col justify-end" style={{ paddingBottom: 14 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, color: "rgba(26,26,26,0.6)" }}>WINTER 2026</div>
                <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 28, fontWeight: 700, color: P.ink, letterSpacing: -0.5, lineHeight: 1, marginTop: 4 }}>
                  NOCTURNAL<br />ANIMAL<br />CANDLES
                </div>
                <div style={{ marginTop: 8, fontSize: 9, color: "rgba(26,26,26,0.7)", maxWidth: 180, lineHeight: 1.4 }}>
                  Hand-poured soy in stoneware vessels. Burns 60+ hours.
                </div>
                <div className="self-start" style={{ marginTop: 10, padding: "6px 14px", background: P.ink, color: "#F0E2D0", borderRadius: 2, fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5, fontFamily: "Georgia, serif" }}>
                  SHOP NOW
                </div>
              </div>
              {/* right — owl candle */}
              <div className="flex items-end justify-center relative" style={{ flex: 1.1, paddingBottom: 6 }}>
                <div className="relative" style={{ width: 92, height: 130 }}>
                  {/* body */}
                  <div className="absolute" style={{ left: 8, top: 22, right: 8, bottom: 0, background: "linear-gradient(180deg, #E8932A 0%, #C97516 100%)", borderRadius: "36% 36% 18% 18% / 50% 50% 12% 12%", boxShadow: "inset -10px -8px 16px rgba(0,0,0,0.18), inset 8px 6px 14px rgba(255,255,255,0.18)" }} />
                  {/* head tufts */}
                  <div className="absolute" style={{ left: 18, top: 10, width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "14px solid #C97516", transform: "rotate(-12deg)" }} />
                  <div className="absolute" style={{ right: 18, top: 10, width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderBottom: "14px solid #C97516", transform: "rotate(12deg)" }} />
                  {/* eyes */}
                  <div className="absolute flex items-center justify-center" style={{ left: 22, top: 38, width: 16, height: 16, borderRadius: 16, background: "#FAFAF6" }}>
                    <div style={{ width: 7, height: 7, borderRadius: 7, background: P.ink }} />
                  </div>
                  <div className="absolute flex items-center justify-center" style={{ right: 22, top: 38, width: 16, height: 16, borderRadius: 16, background: "#FAFAF6" }}>
                    <div style={{ width: 7, height: 7, borderRadius: 7, background: P.ink }} />
                  </div>
                  {/* beak */}
                  <div className="absolute" style={{ left: "50%", top: 56, transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "6px solid #8B5A18" }} />
                  {/* wick */}
                  <div className="absolute" style={{ left: "50%", top: -2, transform: "translateX(-50%)", width: 1, height: 8, background: P.ink }} />
                  {/* flame */}
                  <div className="agent-flame absolute" style={{ left: "50%", top: -10, transform: "translateX(-50%)", width: 6, height: 10, background: "radial-gradient(ellipse at 50% 60%, #FFF2A0 0%, #FFB840 50%, #E8623A 100%)", borderRadius: "50% 50% 40% 40% / 80% 80% 50% 50%" }} />
                  {/* shadow */}
                  <div className="absolute" style={{ left: 0, right: 0, bottom: -6, height: 6, background: "radial-gradient(ellipse, rgba(0,0,0,0.25), transparent 70%)" }} />
                </div>

                {/* floating chips */}
                <div
                  className="agent-chip-a absolute flex items-center gap-[5px] bg-white rounded-[14px]"
                  style={{ left: 4, top: 12, padding: "5px 9px", boxShadow: "0 8px 16px -6px rgba(26,26,26,0.25)", fontSize: 8.5, fontWeight: 600, color: P.ink }}
                >
                  <span className="flex items-center justify-center text-white" style={{ width: 12, height: 12, borderRadius: 3, background: "#7C5BC9", fontSize: 7 }}>✦</span>
                  Generate logo
                </div>
                <div
                  className="agent-chip-b absolute flex items-center gap-[5px] bg-white rounded-[14px]"
                  style={{ right: 8, bottom: 18, padding: "5px 9px", boxShadow: "0 8px 16px -6px rgba(26,26,26,0.25)", fontSize: 8.5, fontWeight: 600, color: P.ink }}
                >
                  <span className="flex items-center justify-center text-white" style={{ width: 12, height: 12, borderRadius: 3, background: "#7C5BC9", fontSize: 7 }}>✦</span>
                  Create social
                </div>
              </div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      <style>{`
        @keyframes agentSpin { to { transform: rotate(360deg); } }
        .agent-spin { animation: agentSpin 1.6s linear infinite; }
        @keyframes agentPulse { 0%, 100% { opacity: 0.3 } 50% { opacity: 1 } }
        .agent-dot { animation: agentPulse 1.2s ease-in-out infinite; }
        @keyframes agentGrow { from { width: 68% } to { width: 76% } }
        .agent-progress { animation: agentGrow 2.4s ease-in-out infinite alternate; width: 72%; }
        @keyframes agentFlicker { 0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 1 } 50% { transform: translateX(-50%) scaleY(1.1); opacity: 0.92 } }
        .agent-flame { animation: agentFlicker 0.6s ease-in-out infinite; transform-origin: bottom center; }
        @keyframes agentFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
        .agent-chip-a { animation: agentFloat 3s ease-in-out infinite; }
        .agent-chip-b { animation: agentFloat 3.4s ease-in-out infinite reverse; }
      `}</style>
    </div>
  );
}
