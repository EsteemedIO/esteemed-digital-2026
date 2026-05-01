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

export default function DragAndDrop() {
  const P = {
    sky: "#E0E9F2", mint: "#DCEDE0", cream: "#F8F3E8", blush: "#F8DAD0",
    lilac: "#E4DBF0", ink: "#1A1A1A", paper: "#FAFAF6",
  };

  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: P.sky }}>
      {/* component palette */}
      <div
        className="absolute bg-white rounded-xl flex flex-col gap-[7px]"
        style={{
          left: 18, top: 22, bottom: 22, width: 88,
          boxShadow: "0 18px 36px -16px rgba(26,26,26,0.18)",
          padding: 10,
        }}
      >
        <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(26,26,26,0.5)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Sections</div>
        {[
          {
            label: "Hero",
            preview: (
              <div style={{ height: 18, background: P.mint, borderRadius: 2, padding: 2 }}>
                <div style={{ width: "70%", height: 2, background: "rgba(26,26,26,0.4)", marginBottom: 1.5, borderRadius: 1 }} />
                <div style={{ width: "50%", height: 2, background: "rgba(26,26,26,0.3)", borderRadius: 1 }} />
              </div>
            ),
          },
          {
            label: "Gallery",
            preview: (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5, height: 18 }}>
                {[P.cream, P.blush, P.lilac].map((c, i) => (
                  <div key={i} style={{ background: c, borderRadius: 1.5 }} />
                ))}
              </div>
            ),
          },
          {
            label: "Story",
            preview: (
              <div className="flex gap-0.5" style={{ height: 18 }}>
                <div style={{ width: 18, background: P.cream, borderRadius: 2 }} />
                <div className="flex-1 flex flex-col gap-[1.5px]" style={{ padding: 1 }}>
                  <div style={{ height: 2, background: "rgba(26,26,26,0.3)" }} />
                  <div style={{ height: 2, background: "rgba(26,26,26,0.2)" }} />
                  <div style={{ height: 2, background: "rgba(26,26,26,0.2)", width: "60%" }} />
                </div>
              </div>
            ),
          },
          {
            label: "Pricing",
            preview: (
              <div className="flex gap-[1.5px]" style={{ height: 18 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ flex: 1, background: i === 1 ? P.ink : "rgba(26,26,26,0.1)", borderRadius: 1.5 }} />
                ))}
              </div>
            ),
          },
        ].map((b, i) => (
          <div key={i} className="rounded-[7px] flex flex-col gap-[5px]" style={{ border: "1px solid rgba(26,26,26,0.08)", padding: 6, background: P.paper }}>
            {b.preview}
            <div style={{ fontSize: 8, color: "rgba(26,26,26,0.65)", fontWeight: 600 }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* canvas */}
      <div className="absolute z-[1]" style={{ left: 122, right: 22, top: 22, bottom: 22 }}>
        <PhotoBrowser url="northbloom.studio">
          <div className="h-full flex flex-col bg-white">
            {/* site header */}
            <div className="flex items-center" style={{ padding: "8px 14px", borderBottom: "1px solid rgba(26,26,26,0.05)" }}>
              <div className="flex items-center gap-[5px]">
                <div className="flex items-center justify-center" style={{ width: 18, height: 18, border: "1.5px solid " + P.ink, borderRadius: 3 }}>
                  <div style={{ fontSize: 7, fontWeight: 800, color: P.ink, lineHeight: 1, letterSpacing: -0.3 }}>NB</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: P.ink, letterSpacing: 0.5, fontFamily: "Georgia, serif" }}>Northbloom</span>
              </div>
              <div className="ml-auto flex gap-3" style={{ fontSize: 8, color: "rgba(26,26,26,0.6)" }}>
                <span>Shop</span><span>Story</span><span>Contact</span>
              </div>
            </div>

            {/* hero */}
            <div className="flex-1 flex items-center justify-center relative" style={{ background: P.mint, padding: 14 }}>
              {/* floor */}
              <div className="absolute left-0 right-0 bottom-0" style={{ height: "32%", background: "linear-gradient(180deg, #D6BFA0 0%, #B89773 100%)", backgroundImage: "repeating-linear-gradient(90deg, rgba(26,26,26,0.04) 0 1px, transparent 1px 24px)" }} />
              {/* sofa */}
              <div className="relative" style={{ width: "76%", height: 70 }}>
                <div className="absolute" style={{ left: "4%", right: "4%", top: 0, height: 36, background: "linear-gradient(180deg, #1F5A52 0%, #15403A 100%)", borderRadius: "14px 14px 6px 6px", boxShadow: "inset 0 -3px 4px rgba(0,0,0,0.2)" }}>
                  <div className="absolute" style={{ left: "50%", top: "40%", transform: "translateX(-50%)", width: 1, height: "50%", background: "rgba(0,0,0,0.3)" }} />
                </div>
                <div className="absolute flex" style={{ left: 0, right: 0, top: 26, height: 24, gap: 1, padding: "0 2%" }}>
                  {[0, 1].map((i) => (
                    <div key={i} style={{ flex: 1, background: "linear-gradient(180deg, #2A6B62 0%, #1A4D45 100%)", borderRadius: "6px 6px 4px 4px", boxShadow: "inset 1px 0 0 rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
                <div className="absolute" style={{ left: "6%", bottom: 0, width: 4, height: 14, background: "#8B6536", transform: "skew(0deg, 8deg)" }} />
                <div className="absolute" style={{ right: "6%", bottom: 0, width: 4, height: 14, background: "#8B6536", transform: "skew(0deg, -8deg)" }} />
                <div className="absolute" style={{ left: "4%", right: "4%", bottom: -3, height: 4, background: "radial-gradient(ellipse, rgba(0,0,0,0.2), transparent)" }} />
              </div>
            </div>

            {/* drop zone */}
            <div className="relative bg-white" style={{ padding: 10 }}>
              <div className="flex items-center justify-center rounded-lg" style={{ height: 38, border: "1.5px dashed #5B7CC9", background: "rgba(91,124,201,0.05)", fontSize: 9, color: "#3F5BA8", fontWeight: 700, letterSpacing: 0.5 }}>
                DROP TO ADD SECTION
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white" style={{ padding: "10px 14px", borderTop: "1px solid rgba(26,26,26,0.05)" }}>
              <div className="inline-block rounded" style={{ padding: "6px 14px", background: "#1F5A52", color: "#FFFFFF", fontSize: 9, fontWeight: 600 }}>
                View Gallery
              </div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      {/* phantom block — being dragged */}
      <div
        className="drag-block absolute z-[5] bg-white rounded-lg"
        style={{
          left: "32%", top: "52%",
          width: 130, padding: 9,
          boxShadow: "0 18px 32px -10px rgba(26,26,26,0.4), 0 0 0 1.5px #5B7CC9",
          transform: "rotate(-3deg)",
        }}
      >
        <div className="flex gap-1">
          <div className="flex items-center justify-center" style={{ width: 22, height: 22, background: P.cream, borderRadius: 3 }}>
            <div style={{ width: 12, height: 8, background: "#1F5A52", borderRadius: "50% 50% 30% 30%" }} />
          </div>
          <div className="flex-1 flex flex-col gap-[2.5px] justify-center">
            <div style={{ height: 2.5, width: "85%", background: "rgba(26,26,26,0.55)", borderRadius: 1.5 }} />
            <div style={{ height: 2.5, width: "60%", background: "rgba(26,26,26,0.3)", borderRadius: 1.5 }} />
          </div>
        </div>
        <div className="mt-[5px] uppercase" style={{ fontSize: 7, color: "#3F5BA8", fontWeight: 700, letterSpacing: 0.4 }}>
          Story · being placed
        </div>
      </div>

      {/* cursor */}
      <svg
        className="cursor-drag absolute z-[6]"
        style={{ left: "46%", top: "60%", width: 18, height: 22, filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.3))" }}
        viewBox="0 0 18 22"
      >
        <path d="M2 2 L2 17 L6.5 13.5 L9.5 21 L11.5 20 L8.5 12.5 L15 12.5 Z" fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

      <style>{`
        @keyframes driftDD {
          0% { transform: translate(0,0) rotate(-3deg); }
          50% { transform: translate(-7px, -4px) rotate(-4.5deg); }
          100% { transform: translate(0,0) rotate(-3deg); }
        }
        .drag-block { animation: driftDD 2.6s ease-in-out infinite; }
        @keyframes nudgeDD {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-4px, -2px); }
        }
        .cursor-drag { animation: nudgeDD 2.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
