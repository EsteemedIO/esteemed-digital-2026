"use client";

/* Shared browser chrome used across visuals */
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
        style={{
          borderBottom: "1px solid rgba(26,26,26,0.05)",
          background: "#FAFAF8",
        }}
      >
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#FF6058" }} />
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#FFBE2E" }} />
        <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#28C842" }} />
        <div
          className="ml-3.5 flex-1 h-4 rounded flex items-center px-2.5"
          style={{
            background: "rgba(26,26,26,0.04)",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 9,
            color: "rgba(26,26,26,0.5)",
          }}
        >
          {url}
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
}

export default function PromptToSite() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: "#FFF4B8" }}
    >
      {/* soft blob */}
      <div
        className="absolute"
        style={{
          left: "-10%", bottom: "-20%",
          width: "60%", height: "60%",
          background: "radial-gradient(closest-side, #FFE89B, transparent)",
          filter: "blur(20px)",
        }}
      />

      {/* Prompt card */}
      <div
        className="absolute z-[1] bg-white rounded-2xl p-3.5"
        style={{
          left: 24, top: 30,
          width: 240,
          boxShadow: "0 24px 50px -20px rgba(26,26,26,0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div
            className="w-6 h-6 rounded-[7px] flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "#FEE546" }}
          >
            ★
          </div>
          <span className="text-[11px] font-bold text-[#1A1A1A]" style={{ letterSpacing: -0.2 }}>esteemed</span>
          <span className="ml-auto text-[9px] font-medium" style={{ color: "rgba(26,26,26,0.4)" }}>just now</span>
        </div>
        <div className="text-xs leading-[1.5] text-[#1A1A1A]" style={{ letterSpacing: -0.1 }}>
          A juice subscription site —{" "}
          <span className="rounded-[3px]" style={{ background: "rgba(254,229,70,0.5)", padding: "1px 3px" }}>
            peach &amp; coral palette
          </span>
          , serif logo, hero with product photography, monthly plan checkout.
          <span
            className="caret-blink inline-block ml-px"
            style={{ width: 1.5, height: 11, background: "#1A1A1A", verticalAlign: -1 }}
          />
        </div>
        <div className="mt-3 flex gap-1.5 items-center">
          <div
            className="px-2 py-1 rounded-xl"
            style={{ background: "rgba(26,26,26,0.05)", fontSize: 8.5, fontWeight: 600, color: "rgba(26,26,26,0.6)" }}
          >
            + Inspiration
          </div>
          <div
            className="px-2 py-1 rounded-xl"
            style={{ background: "rgba(26,26,26,0.05)", fontSize: 8.5, fontWeight: 600, color: "rgba(26,26,26,0.6)" }}
          >
            + Logo
          </div>
          <div className="flex-1" />
          <div
            className="px-2.5 py-[5px] rounded-xl bg-[#1A1A1A] text-white"
            style={{ fontSize: 9.5, fontWeight: 600 }}
          >
            Generate
          </div>
        </div>
      </div>

      {/* curved connector */}
      <svg className="absolute z-[2]" style={{ left: 240, top: 110, width: 80, height: 100 }} viewBox="0 0 80 100">
        <path d="M 4 4 Q 60 4 60 50 Q 60 96 76 96" stroke="rgba(26,26,26,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="76" cy="96" r="3.5" fill="#1A1A1A" />
      </svg>
      <div className="absolute" style={{ left: 60, top: 12, fontSize: 16, color: "#1A1A1A", opacity: 0.5 }}>✦</div>

      {/* Juice brand site preview */}
      <div className="absolute z-[3]" style={{ right: 22, bottom: 22, width: "64%", height: "78%" }}>
        <PhotoBrowser url="freshjuice.co">
          <div className="h-full flex flex-col">
            {/* nav */}
            <div
              className="flex items-center"
              style={{
                padding: "10px 16px",
                borderBottom: "1px solid rgba(26,26,26,0.06)",
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              <div className="flex gap-3" style={{ fontSize: 9, color: "rgba(26,26,26,0.7)" }}>
                <span>Home</span><span>Shop</span><span>About</span>
              </div>
              <div
                className="flex-1 text-center font-bold"
                style={{ fontSize: 11, letterSpacing: 1, color: "#1A1A1A", fontFamily: "Georgia, serif" }}
              >
                FRESH&amp;CO
              </div>
              <div className="flex gap-2.5 items-center" style={{ fontSize: 9, color: "rgba(26,26,26,0.7)" }}>
                <span>🔍</span>
                <div
                  className="relative"
                  style={{ width: 18, height: 14, border: "1.2px solid #1A1A1A", borderRadius: 2 }}
                >
                  <div
                    className="absolute"
                    style={{ top: -3, left: 4, width: 8, height: 5, border: "1.2px solid #1A1A1A", borderBottom: "none", borderRadius: "4px 4px 0 0" }}
                  />
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="flex-1 flex flex-col relative overflow-hidden">
              {/* background split */}
              <div className="absolute inset-0 flex flex-col">
                <div style={{ flex: 1.4, background: "#F8DAD0" }} />
                <div style={{ flex: 1, background: "#E8624D" }} />
              </div>

              {/* headline */}
              <div className="relative z-[2]" style={{ padding: "22px 28px 6px" }}>
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex-1 font-bold"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 24, lineHeight: 1.0,
                      color: "#1A1A1A", letterSpacing: -0.7,
                    }}
                  >
                    Nourish the mind,<br />body &amp; soul.
                  </div>
                  <div className="flex flex-col items-end gap-1.5 pt-1.5">
                    <div style={{ fontSize: 9, color: "rgba(26,26,26,0.7)", lineHeight: 1.45, maxWidth: 150, textAlign: "right" }}>
                      Cold-pressed plant juices delivered to your door each week.
                    </div>
                    <div
                      className="rounded-2xl bg-[#1A1A1A] text-white"
                      style={{ padding: "6px 14px", fontSize: 9, fontWeight: 600 }}
                    >
                      Shop now
                    </div>
                  </div>
                </div>
              </div>

              {/* still-life */}
              <div className="relative z-[2] flex-1 flex items-end justify-center gap-1.5" style={{ paddingBottom: 18 }}>
                {/* pedestal back */}
                <div className="relative" style={{ width: 38, height: 60, background: "#F0BCA8", borderRadius: 2, boxShadow: "inset -6px 0 0 rgba(26,26,26,0.06)" }}>
                  {/* bottle */}
                  <div className="absolute" style={{ left: "50%", top: -42, transform: "translateX(-50%)", width: 16, height: 50, background: "linear-gradient(180deg, #E8624D 0%, #C44A38 100%)", borderRadius: "4px 4px 6px 6px" }}>
                    <div className="absolute" style={{ top: -4, left: "50%", transform: "translateX(-50%)", width: 6, height: 5, background: "#1A1A1A", borderRadius: 2 }} />
                    <div className="absolute flex items-center justify-center" style={{ top: 14, left: 1, right: 1, height: 18, background: "#FFFFFF", borderRadius: 1, padding: 2 }}>
                      <div style={{ fontFamily: "Georgia, serif", fontSize: 5, color: "#1A1A1A", fontWeight: 700 }}>F&amp;C</div>
                    </div>
                  </div>
                </div>
                {/* watermelon slice */}
                <div className="self-end" style={{ width: 28, height: 22, position: "relative", marginBottom: 4 }}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center top, #FF6B5B 0%, #FF6B5B 65%, #DCEDE0 70%, #15A99A 78%)", borderRadius: "50% 50% 4px 4px / 100% 100% 4px 4px", transform: "rotate(-12deg)" }} />
                </div>
                {/* pedestal front */}
                <div className="relative" style={{ width: 32, height: 42, background: "#F8DAD0", borderRadius: 2 }}>
                  {/* glass */}
                  <div className="absolute" style={{ left: "50%", top: -28, transform: "translateX(-50%)", width: 18, height: 30, background: "linear-gradient(180deg, rgba(255,107,91,0.2) 0%, #FF6B5B 30%, #C44A38 100%)", borderRadius: "3px 3px 8px 8px", border: "1px solid rgba(26,26,26,0.08)" }}>
                    <div className="absolute" style={{ top: -2, left: 0, right: 0, height: 3, background: "#FF8B7B", borderRadius: "50%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Products strip */}
            <div
              className="flex items-center gap-2 bg-white"
              style={{ padding: "8px 16px", borderTop: "1px solid rgba(26,26,26,0.06)", height: 50 }}
            >
              <div style={{ fontFamily: "Georgia, serif", fontSize: 9, color: "#1A1A1A", marginRight: 4 }}>Featured</div>
              {["#F8F3E8", "#DCEDE0", "#FFF4B8"].map((c, i) => (
                <div key={i} className="relative overflow-hidden" style={{ width: 30, height: 32, borderRadius: 4, background: c }}>
                  <div className="absolute" style={{ left: "50%", top: 4, transform: "translateX(-50%)", width: 8, height: 22, background: ["#E8624D", "#5FA77E", "#E8B57A"][i], borderRadius: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </PhotoBrowser>
      </div>

      <style>{`
        @keyframes blinkCaret { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .caret-blink { animation: blinkCaret 1s steps(1) infinite; }
      `}</style>
    </div>
  );
}
