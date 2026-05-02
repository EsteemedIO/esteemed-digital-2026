"use client";

function PhotoBrowser({ children, url = "studio.com", toolbar = null, style = {} }) {
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
        {toolbar || (
          <div
            className="ml-3.5 flex-1 h-4 rounded flex items-center px-2.5"
            style={{ background: "rgba(26,26,26,0.04)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 9, color: "rgba(26,26,26,0.5)" }}
          >
            {url}
          </div>
        )}
      </div>
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
}

function SiteHero({ size = "lg" }) {
  const isPhone = size === "sm";
  const P = { ink: "#1A1A1A", cream: "#F8F3E8" };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* nav */}
      <div
        className="flex items-center"
        style={{
          padding: isPhone ? "6px 8px" : "10px 14px",
          borderBottom: "1px solid rgba(26,26,26,0.05)",
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {isPhone ? (
          <>
            <div className="flex flex-col gap-[1.5px]">
              <div style={{ width: 8, height: 1, background: "#2F4A38" }} />
              <div style={{ width: 8, height: 1, background: "#2F4A38" }} />
              <div style={{ width: 8, height: 1, background: "#2F4A38" }} />
            </div>
            <div className="flex-1 text-center" style={{ fontSize: 7, fontWeight: 800, letterSpacing: 1.2, color: "#2F4A38", fontFamily: "system-ui, -apple-system, sans-serif" }}>FIELDNOTES</div>
            <div style={{ width: 10, height: 9, border: "1px solid #2F4A38", borderRadius: 1 }} />
          </>
        ) : (
          <>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: "#2F4A38", fontFamily: "system-ui, -apple-system, sans-serif" }}>FIELDNOTES</div>
            <div className="flex gap-3.5" style={{ marginLeft: 24, fontSize: 8.5, color: "rgba(47,74,56,0.75)" }}>
              <span>Shop</span><span>Journal</span><span>Studio</span>
            </div>
            <div className="ml-auto flex gap-2.5 items-center" style={{ fontSize: 8.5, color: "rgba(47,74,56,0.75)" }}>
              <span>Contact</span>
              <span>🔍</span>
              <div className="relative" style={{ width: 14, height: 11, border: "1px solid #2F4A38", borderRadius: 1 }}>
                <div className="absolute" style={{ top: -2, left: 3, width: 6, height: 4, border: "1px solid #2F4A38", borderBottom: "none", borderRadius: "4px 4px 0 0" }} />
              </div>
            </div>
          </>
        )}
      </div>

      {/* hero */}
      {isPhone ? (
        <div className="flex-1 flex flex-col" style={{ padding: 10, background: "#F4F0E6" }}>
          {/* product image — notebook stack */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden" style={{ background: "#E8E0CC", borderRadius: 4, minHeight: 100 }}>
            <div className="relative" style={{ width: 46, height: 60, transform: "rotate(-4deg)" }}>
              <div className="absolute inset-0 rounded-sm" style={{ background: "#2F4A38", boxShadow: "0 4px 10px rgba(0,0,0,0.12)" }}>
                <div className="absolute" style={{ left: 6, right: 6, top: 16, height: 1, background: "rgba(244,240,230,0.6)" }} />
                <div className="absolute" style={{ left: 6, right: 6, top: 22, height: 1, background: "rgba(244,240,230,0.4)" }} />
                <div className="absolute rounded-sm" style={{ left: 6, right: 12, top: 32, height: 4, background: "#C9A961" }} />
              </div>
              <div className="absolute" style={{ left: -3, top: 0, bottom: 0, width: 3, background: "#1F3328", borderRadius: "2px 0 0 2px" }} />
            </div>
          </div>
          <div className="uppercase" style={{ marginTop: 8, fontSize: 8, fontWeight: 700, letterSpacing: 0.5, color: "#2F4A38", fontFamily: "system-ui, -apple-system, sans-serif" }}>The Daily Journal</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#2F4A38", marginTop: 2 }}>$32</div>
          <div className="uppercase" style={{ fontSize: 6.5, color: "rgba(47,74,56,0.55)", marginTop: 4, letterSpacing: 0.5 }}>Cover</div>
          <div className="flex gap-1" style={{ marginTop: 3 }}>
            <div className="rounded-full" style={{ width: 10, height: 10, background: "#2F4A38", boxShadow: "0 0 0 1.5px #FFFFFF, 0 0 0 2.5px #2F4A38" }} />
            <div className="rounded-full" style={{ width: 10, height: 10, background: "#C9A961" }} />
            <div className="rounded-full" style={{ width: 10, height: 10, background: "#8B6F47" }} />
          </div>
          <div className="text-center uppercase rounded-sm" style={{ marginTop: 8, padding: "6px 0", background: "#2F4A38", color: "#F4F0E6", fontSize: 8, fontWeight: 700, letterSpacing: 1.5 }}>
            Add to Cart
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* hero — sage block + cream */}
          <div className="relative overflow-hidden flex flex-col" style={{ flex: 1.4, background: "#F4F0E6" }}>
            {/* sage rectangle */}
            <div className="absolute top-0 bottom-0 right-0" style={{ width: "52%", background: "#2F4A38" }} />
            {/* headline */}
            <div className="relative z-[2]" style={{ padding: "20px 22px 6px" }}>
              <div className="uppercase" style={{ fontSize: 7.5, fontWeight: 800, letterSpacing: 2.5, color: "rgba(47,74,56,0.65)" }}>Spring Edition · 2026</div>
              <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 26, fontWeight: 800, lineHeight: 0.98, color: "#2F4A38", letterSpacing: -0.8, marginTop: 4 }}>
                Notes from<br />the field.
              </div>
            </div>
            {/* notebook stack */}
            <div className="relative z-[2] flex-1 flex items-center justify-end" style={{ paddingRight: 36, paddingBottom: 14 }}>
              <div className="relative" style={{ width: 90, height: 110 }}>
                {/* back notebook */}
                <div className="absolute rounded-sm" style={{ left: 0, top: 14, width: 64, height: 88, background: "#E8E0CC", transform: "rotate(-6deg)", boxShadow: "0 6px 14px rgba(0,0,0,0.18)" }}>
                  <div className="absolute" style={{ left: 6, right: 6, top: 14, height: 1, background: "rgba(47,74,56,0.25)" }} />
                  <div className="absolute" style={{ left: 6, right: 6, top: 20, height: 1, background: "rgba(47,74,56,0.18)" }} />
                </div>
                {/* front notebook */}
                <div className="absolute rounded-sm" style={{ left: 22, top: 4, width: 60, height: 92, background: "#C9A961", transform: "rotate(4deg)", boxShadow: "0 8px 18px rgba(0,0,0,0.22)" }}>
                  <div className="absolute rounded-sm" style={{ left: 8, top: 14, width: 24, height: 2, background: "#2F4A38" }} />
                  <div className="absolute rounded-sm" style={{ left: 8, top: 20, width: 18, height: 2, background: "#2F4A38", opacity: 0.7 }} />
                </div>
                {/* pen */}
                <div className="absolute rounded-sm" style={{ left: 4, bottom: -2, width: 48, height: 4, background: "#1F3328", transform: "rotate(-12deg)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
                  <div className="absolute" style={{ right: 0, top: 0, bottom: 0, width: 6, background: "#C9A961", borderRadius: "0 2px 2px 0" }} />
                </div>
              </div>
            </div>
          </div>
          {/* featured row */}
          <div className="flex flex-col gap-[7px] bg-white" style={{ flex: 1, padding: "10px 14px" }}>
            <div className="text-center uppercase" style={{ fontSize: 7.5, fontWeight: 800, color: "#2F4A38", letterSpacing: 1.8, fontFamily: "system-ui, -apple-system, sans-serif" }}>Shop the Collection</div>
            <div className="flex gap-1.5 flex-1">
              {[
                { bg: "#E8E0CC", fg: "#2F4A38" },
                { bg: "#D9E2D0", fg: "#2F4A38" },
                { bg: "#F4F0E6", fg: "#C9A961" },
              ].map((c, i) => (
                <div key={i} className="flex-1 flex items-center justify-center" style={{ background: c.bg, borderRadius: 3 }}>
                  <div style={{ width: 14, height: 18, background: c.fg, borderRadius: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MultiDevice() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#DCEDE0" }}>
      {/* halo */}
      <div
        className="absolute"
        style={{
          right: "-20%", top: "-20%",
          width: "70%", height: "70%",
          background: "radial-gradient(closest-side, #FFF4B8 30%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Phone — left */}
      <div
        className="absolute z-[3] bg-white rounded-[18px] overflow-hidden"
        style={{
          left: 24, top: "50%", transform: "translateY(-50%) rotate(-2deg)",
          width: 130, height: 250,
          boxShadow: "0 30px 50px -16px rgba(26,26,26,0.3), 0 0 0 1px rgba(26,26,26,0.08)",
          padding: 4,
        }}
      >
        <div className="h-full rounded-[14px] overflow-hidden relative">
          {/* notch */}
          <div className="absolute z-[2]" style={{ left: "50%", top: 4, transform: "translateX(-50%)", width: 30, height: 5, borderRadius: 5, background: "#1A1A1A" }} />
          <SiteHero size="sm" />
        </div>
      </div>

      {/* Desktop browser — right */}
      <div className="absolute z-[2]" style={{ right: 24, top: 28, bottom: 100, width: "60%" }}>
        <PhotoBrowser
          url="fieldnotes.studio"
          toolbar={
            <>
              <div className="flex gap-1" style={{ marginLeft: 12 }}>
                <div className="rounded" style={{ padding: "3px 8px", background: "rgba(26,26,26,0.04)", fontSize: 8, fontWeight: 600, color: "rgba(26,26,26,0.7)" }}>Website Builder ▾</div>
                <div className="rounded" style={{ padding: "3px 8px", background: "#FFFFFF", border: "1px solid rgba(26,26,26,0.1)", fontSize: 8, fontWeight: 600, color: "#1A1A1A" }}>Preview</div>
                <div className="rounded" style={{ padding: "3px 10px", background: "#2F4A38", color: "#FFFFFF", fontSize: 8, fontWeight: 700 }}>Publish</div>
              </div>
              <div className="ml-auto flex gap-1.5">
                <div className="rounded" style={{ width: 14, height: 14, background: "rgba(26,26,26,0.04)" }} />
                <div className="rounded" style={{ width: 14, height: 14, background: "#2F4A38" }} />
                <div className="rounded" style={{ width: 14, height: 14, background: "rgba(26,26,26,0.04)" }} />
              </div>
            </>
          }
        >
          <div className="h-full flex">
            {/* Site canvas */}
            <div className="flex-1 relative">
              {/* selection dot */}
              <div className="absolute z-[5] rounded-full" style={{ top: "34%", left: "6%", width: 4, height: 4, background: "#C9A961", boxShadow: "0 0 0 1.5px #FFFFFF" }} />
              <SiteHero size="lg" />
            </div>
            {/* Right rail — color picker */}
            <div className="flex flex-col gap-2 text-white" style={{ width: 110, borderLeft: "1px solid rgba(26,26,26,0.06)", background: "#1A1A1A", padding: "10px 8px" }}>
              <div className="flex justify-around" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 6, marginBottom: 2 }}>
                <span style={{ fontSize: 9 }}>▦</span>
                <span style={{ fontSize: 9, color: "#FFB94B" }}>◉</span>
                <span style={{ fontSize: 9 }}>⚙</span>
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 0.3 }}>Color</div>
              <div className="uppercase" style={{ fontSize: 6.5, color: "rgba(255,255,255,0.55)", letterSpacing: 0.5 }}>Matching color</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
                {["#F4F0E6", "#E8E0CC", "#C9A961", "#D9E2D0", "#2F4A38", "#FFFFFF"].map((c, i) => (
                  <div key={i} className="aspect-square rounded" style={{ background: c, border: c === "#FFFFFF" ? "1px solid rgba(255,255,255,0.2)" : "none" }} />
                ))}
              </div>
              <div className="relative rounded" style={{ height: 32, background: "linear-gradient(135deg, #F4F0E6 0%, #2F4A38 100%)" }}>
                <div className="absolute rounded-full" style={{ right: 6, top: 4, width: 5, height: 5, background: "#FFFFFF", boxShadow: "0 0 0 1.5px #1A1A1A" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 2 }}>
                {["#1F3328", "#2F4A38", "#4A6B52", "#7A9A82", "#A8C4AE", "#D9E2D0"].map((c, i) => (
                  <div key={i} className="aspect-square rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 6 }}>
                <div className="flex items-center gap-1" style={{ fontSize: 8.5, fontWeight: 600 }}>
                  <span className="inline-flex items-center justify-center rounded-sm" style={{ width: 11, height: 11, background: "rgba(255,255,255,0.1)", fontSize: 7 }}>A</span>
                  Font
                  <span className="ml-auto" style={{ fontSize: 7 }}>▾</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1" style={{ fontSize: 8.5, fontWeight: 600 }}>
                  <span className="rounded-sm" style={{ width: 11, height: 11, background: "rgba(255,255,255,0.1)" }} />
                  Buttons
                  <span className="ml-auto" style={{ fontSize: 7 }}>▾</span>
                </div>
              </div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      {/* Human avatar overlay */}
      <div className="absolute z-[10] flex flex-col items-center" style={{ right: 24, bottom: 38 }}>
        <div
          className="rounded-full relative"
          style={{
            width: 110, height: 110,
            backgroundImage: 'url("/images/grow-human.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "5px solid #FFFFFF",
            boxShadow: "0 18px 40px -10px rgba(26,26,26,0.45), 0 0 0 1px rgba(26,26,26,0.06)",
          }}
        >
          <div className="absolute rounded-full" style={{ right: 4, bottom: 4, width: 18, height: 18, background: "#3CC97A", border: "3px solid #FFFFFF" }} />
        </div>
        {/* name pill */}
        <div className="text-center rounded-[20px] relative z-[1]" style={{ marginTop: -16, background: "#E0E9F2", padding: "8px 18px", boxShadow: "0 12px 26px -8px rgba(26,26,26,0.28), 0 0 0 1px rgba(26,26,26,0.05)", minWidth: 168 }}>
          <div className="flex items-center justify-center gap-2">
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", letterSpacing: -0.2, lineHeight: 1 }}>Maya Chen</div>
            <div className="flex gap-px">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#FFD43B" stroke="#E8B83A" strokeWidth="0.5">
                  <path d="M6 1l1.55 3.14L11 4.65l-2.5 2.44.59 3.45L6 8.91l-3.09 1.63.59-3.45L1 4.65l3.45-.51L6 1z" />
                </svg>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 10, color: "rgba(26,26,26,0.65)", marginTop: 3, letterSpacing: 0.2 }}>Support Specialist</div>
        </div>
      </div>
    </div>
  );
}
