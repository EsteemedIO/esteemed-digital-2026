"use client";

const EINK = "#16281E";
const EYEL = "#FEE546";

function EStar({ size = 15, fill = "#FFFFFF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 268 268">
      <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill} />
    </svg>
  );
}

function EBrowser({ url = "store.example", children, style = {} }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 40px 80px -34px rgba(22,40,30,0.4), 0 12px 26px -14px rgba(22,40,30,0.2)",
        border: "1px solid rgba(22,40,30,0.06)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <div
        style={{
          height: 30,
          padding: "0 12px",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          gap: 7,
          background: "#FAFAF8",
          flexShrink: 0,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: 8, background: "#FF6058" }} />
        <span style={{ width: 8, height: 8, borderRadius: 8, background: "#FFBE2E" }} />
        <span style={{ width: 8, height: 8, borderRadius: 8, background: "#28C842" }} />
        <div
          style={{
            marginLeft: 12,
            flex: 1,
            maxWidth: 200,
            height: 15,
            borderRadius: 4,
            background: "rgba(22,40,30,0.05)",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            fontFamily: "ui-monospace, monospace",
            fontSize: 9,
            color: "rgba(22,40,30,0.5)",
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>{children}</div>
    </div>
  );
}

function FashionStore() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#000" }}>
      <div
        style={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          fontSize: 7,
          letterSpacing: 1.5,
          padding: "5px 0",
        }}
      >
        FREE SHIPPING ON ORDERS OVER $100 · FREE 30-DAY RETURNS
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "9px 16px",
          background: "#fff",
          borderBottom: "1px solid #eee",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", gap: 11, fontSize: 8, color: "rgba(22,40,30,0.66)", flex: 1 }}>
          <span>HOME</span>
          <span>SHOP</span>
          <span>SALE</span>
          <span>JOURNAL</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: EINK }}>LUXE FASHION</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
          <div style={{ width: 70, height: 15, borderRadius: 8, background: "#f2f2f2" }} />
          <span style={{ fontSize: 10 }}>👤</span>
          <span style={{ fontSize: 10 }}>🛍</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundImage:
              "url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundImage:
              "url(https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 26,
              textAlign: "center",
              color: "#fff",
              fontFamily: "Georgia, serif",
            }}
          >
            <div style={{ fontSize: 8, letterSpacing: 2, opacity: 0.8 }}>A CONSCIOUS WARDROBE</div>
            <div style={{ fontSize: 26, letterSpacing: 4, marginTop: 4 }}>SPRING STYLE</div>
            <div style={{ fontSize: 8, letterSpacing: 2, marginTop: 10, opacity: 0.9 }}>
              VIEW ALL PRODUCTS →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SellBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: EINK,
        borderRadius: 24,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* copy */}
      <div className="relative z-[2] px-8 md:px-14" style={{ maxWidth: "50%" }}>
        <p className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-4">
          Esteemed Commerce
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Own your store.<br />Not the other way around.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
          Choose from top open-source commerce platforms with expert support to help you grow. You own your code, your data, and your customers — with zero platform fees and no per-transaction surcharges. Pay only for the infrastructure you use.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/websites/ecommerce/start"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a
            href="#plans"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors"
          >
            See pricing
          </a>
        </div>
      </div>
      {/* screenshot bleeding off right */}
      {/* screenshot + animated add-to-cart cards */}
      <div
        className="hidden md:block absolute z-[2]"
        style={{ right: 0, top: 30, bottom: 30, width: "44%" }}
      >
        <EBrowser url="luxefashion.com" style={{ height: "100%", borderRadius: "14px 0 0 14px" }}>
          <FashionStore />
        </EBrowser>

        {/* Animated floating commerce chips */}
        <div className="absolute z-[3] bottom-4 right-4 flex flex-col gap-2">
          <div className="sell-float-a bg-white rounded-xl flex items-center gap-2" style={{ padding: "7px 12px", boxShadow: "0 10px 20px -8px rgba(0,0,0,0.4)", fontSize: 11, fontWeight: 600, color: "#1A1A1A" }}>
            <span style={{ width: 7, height: 7, borderRadius: 7, background: "#3CC97A" }} />
            🛒 Added to cart · Ceramic Mug
          </div>
          <div className="sell-float-b bg-white rounded-xl flex items-center gap-2" style={{ padding: "7px 12px", boxShadow: "0 10px 20px -8px rgba(0,0,0,0.4)", fontSize: 11, fontWeight: 600, color: "#1A1A1A" }}>
            <span style={{ width: 7, height: 7, borderRadius: 7, background: "#3CC97A" }} />
            💳 Order confirmed · $127.00
          </div>
        </div>

        {/* Stats badge */}
        <div className="sell-float-a absolute z-[3] bg-white rounded-2xl flex flex-col items-center justify-center gap-1" style={{ left: -50, top: "20%", width: 90, height: 90, boxShadow: "0 16px 32px -12px rgba(0,0,0,0.4)" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#1A1A1A", lineHeight: 1 }}>0%</div>
          <div style={{ fontSize: 7, fontWeight: 700, color: "rgba(26,26,26,0.5)", letterSpacing: 0.5, textTransform: "uppercase", textAlign: "center" }}>Platform fee</div>
        </div>
      </div>

      <style>{`
        @keyframes sellFloatA { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .sell-float-a { animation: sellFloatA 3s ease-in-out infinite; }
        @keyframes sellFloatB { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .sell-float-b { animation: sellFloatB 3.4s ease-in-out infinite reverse; }
      `}</style>
    </div>
  );
}
