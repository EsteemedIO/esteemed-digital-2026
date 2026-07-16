"use client";

import { useState, useEffect, useRef } from "react";

const G = {
  bg: "#E0E9F2",
  haze: "#C8D8E8",
  heroTop: "#E4F0E4",
  heroBot: "#2F7D57",
  deep: "#1F5A42",
  mid: "#3E9A6B",
  bottle: "linear-gradient(180deg, #3E9A6B 0%, #1F5A42 100%)",
  glass:
    "linear-gradient(180deg, rgba(94,167,126,0.25) 0%, #5FA77E 30%, #2F6B4F 100%)",
  ink: "#16281E",
  inkSoft: "rgba(22,40,30,0.62)",
};

const PROMPT =
  "A cold-pressed juice subscription — fresh green palette, serif logo, hero with product photography, monthly plan checkout.";

function Skeleton() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid rgba(22,40,30,0.06)",
        }}
      >
        <div className="skl-prompt" style={{ width: 44, height: 10, borderRadius: 3 }} />
        <div className="skl-prompt" style={{ width: 70, height: 10, borderRadius: 3, margin: "0 auto" }} />
        <div className="skl-prompt" style={{ width: 34, height: 10, borderRadius: 3 }} />
      </div>
      <div
        style={{
          flex: 1,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div className="skl-prompt" style={{ width: "62%", height: 22, borderRadius: 5 }} />
        <div className="skl-prompt" style={{ width: "40%", height: 22, borderRadius: 5 }} />
        <div style={{ flex: 1, display: "flex", gap: 12, marginTop: 6 }}>
          <div className="skl-prompt" style={{ flex: 1, borderRadius: 8 }} />
          <div className="skl-prompt" style={{ flex: 1, borderRadius: 8 }} />
          <div className="skl-prompt" style={{ flex: 1, borderRadius: 8 }} />
        </div>
      </div>
    </div>
  );
}

function FreshSite() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
      }}
    >
      {/* nav */}
      <div
        style={{
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(22,40,30,0.07)",
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ display: "flex", gap: 12, fontSize: 9, color: G.inkSoft, flex: 1 }}>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: G.ink }}>
          FRESH&amp;CO
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            fontSize: 9,
            color: G.inkSoft,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <span>🔍</span>
          <div
            style={{
              width: 18,
              height: 14,
              border: "1.2px solid " + G.ink,
              borderRadius: 2,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -3,
                left: 4,
                width: 8,
                height: 5,
                border: "1.2px solid " + G.ink,
                borderBottom: "none",
                borderRadius: "4px 4px 0 0",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 3, background: G.heroTop }} />
          <div style={{ flex: 1, background: G.heroBot }} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "22px 28px 6px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 23,
              fontWeight: 700,
              lineHeight: 1.02,
              color: G.ink,
              letterSpacing: -0.6,
            }}
          >
            Pressed today,
            <br />
            poured tomorrow.
          </div>
          <div
            style={{
              fontSize: 9,
              color: G.inkSoft,
              lineHeight: 1.45,
              maxWidth: 180,
            }}
          >
            Cold-pressed plant juices delivered to your door each week.
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 16,
              background: G.ink,
              color: "#FFFFFF",
              fontSize: 9,
              fontWeight: 600,
              alignSelf: "flex-start",
            }}
          >
            Shop now
          </div>
        </div>

        {/* still-life */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingBottom: 18,
            paddingRight: 28,
            gap: 6,
            marginTop: -20,
          }}
        >
          <div
            style={{
              width: 38,
              height: 60,
              background: G.mid,
              borderRadius: 2,
              position: "relative",
              boxShadow: "inset -6px 0 0 rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: -42,
                transform: "translateX(-50%)",
                width: 16,
                height: 50,
                background: G.bottle,
                borderRadius: "4px 4px 6px 6px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 6,
                  height: 5,
                  background: G.ink,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 1,
                  right: 1,
                  height: 18,
                  background: "#FFFFFF",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 5,
                    color: G.ink,
                    fontWeight: 700,
                  }}
                >
                  F&amp;C
                </div>
              </div>
            </div>
          </div>
          {/* lime slice */}
          <div
            style={{
              width: 26,
              height: 22,
              position: "relative",
              alignSelf: "flex-end",
              marginBottom: 4,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center top, #A5D66A 0%, #7CBF4A 62%, #DCEDE0 68%, #3E9A6B 78%)",
                borderRadius: "50% 50% 4px 4px / 100% 100% 4px 4px",
                transform: "rotate(-12deg)",
              }}
            />
          </div>
          <div
            style={{
              width: 32,
              height: 42,
              background: G.heroTop,
              borderRadius: 2,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: -28,
                transform: "translateX(-50%)",
                width: 18,
                height: 30,
                background: G.glass,
                borderRadius: "3px 3px 8px 8px",
                border: "1px solid rgba(22,40,30,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "#7CBF4A",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* featured strip */}
      <div
        style={{
          padding: "8px 16px",
          borderTop: "1px solid rgba(22,40,30,0.07)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: 50,
          background: "#FFFFFF",
        }}
      >
        <div style={{ fontFamily: "Georgia, serif", fontSize: 9, color: G.ink, marginRight: 4 }}>
          Featured
        </div>
        {["#EFF6E8", "#DCEDE0", "#E4F0E4"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 30,
              height: 32,
              borderRadius: 4,
              background: c,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 4,
                transform: "translateX(-50%)",
                width: 8,
                height: 22,
                background: ["#3E9A6B", "#7CBF4A", "#1F5A42"][i],
                borderRadius: 1,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PromptToSiteAnimated() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState(0);
  const timers = useRef([]);

  useEffect(() => {
    let alive = true;
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    function run() {
      if (!alive) return;
      clearAll();
      setPhase(0);
      setTyped(0);

      const perChar = 26;
      for (let i = 1; i <= PROMPT.length; i++) {
        timers.current.push(
          setTimeout(() => alive && setTyped(i), 380 + i * perChar)
        );
      }
      const doneTyping = 380 + PROMPT.length * perChar;

      timers.current.push(
        setTimeout(() => alive && setPhase(1), doneTyping + 620)
      );
      timers.current.push(
        setTimeout(() => alive && setPhase(2), doneTyping + 2900)
      );
      timers.current.push(setTimeout(run, doneTyping + 7200));
    }
    run();
    return () => {
      alive = false;
      clearAll();
    };
  }, []);

  const generating = phase === 1;
  const revealed = phase === 2;
  const caretOn = phase === 0;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: G.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* soft blob */}
      <div
        style={{
          position: "absolute",
          right: "-12%",
          top: "-18%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(closest-side, " + G.haze + ", transparent)",
          filter: "blur(22px)",
        }}
      />

      {/* SITE (behind) */}
      <div
        style={{
          position: "absolute",
          right: 18,
          top: 40,
          width: "62%",
          height: "74%",
          zIndex: 1,
          transition: "opacity .5s ease, transform .6s cubic-bezier(.2,.7,.2,1)",
          opacity: phase === 0 ? 0.55 : 1,
          transform: revealed
            ? "translateY(0) scale(1)"
            : "translateY(6px) scale(.985)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#FFFFFF",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow:
              "0 40px 80px -30px rgba(22,40,30,0.4), 0 12px 24px -12px rgba(22,40,30,0.2)",
            border: "1px solid rgba(22,40,30,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 32,
              padding: "0 12px",
              borderBottom: "1px solid rgba(22,40,30,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#FAFAF8",
              flexShrink: 0,
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 9, background: "#FF6058" }} />
            <span style={{ width: 9, height: 9, borderRadius: 9, background: "#FFBE2E" }} />
            <span style={{ width: 9, height: 9, borderRadius: 9, background: "#28C842" }} />
            <div
              style={{
                marginLeft: 14,
                flex: 1,
                height: 16,
                borderRadius: 4,
                background: "rgba(22,40,30,0.04)",
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                fontFamily: "ui-monospace, monospace",
                fontSize: 9,
                color: "rgba(22,40,30,0.5)",
              }}
            >
              freshandco.com
            </div>
          </div>
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: revealed ? 0 : 1,
                transition: "opacity .5s ease",
              }}
            >
              <Skeleton />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: revealed ? 1 : 0,
                transition: "opacity .6s ease .1s",
              }}
            >
              <FreshSite />
            </div>

            {/* Generating overlay */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                display: "flex",
                alignItems: "center",
                gap: 9,
                background: "rgba(22,40,30,0.92)",
                color: "#FFFFFF",
                padding: "9px 15px",
                borderRadius: 999,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: -0.1,
                boxShadow: "0 16px 36px -12px rgba(0,0,0,0.5)",
                opacity: generating ? 1 : 0,
                transition: "opacity .35s ease",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="prompt-anim-genStar"
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 6,
                  background: "#FEE546",
                  color: G.ink,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                <span style={{ color: "#FFFFFF" }}>★</span>
              </span>
              Generating your site with Esteemed Create AI
              <span style={{ display: "inline-flex", gap: 3, marginLeft: 1 }}>
                <span className="prompt-anim-gdot" />
                <span className="prompt-anim-gdot" style={{ animationDelay: ".2s" }} />
                <span className="prompt-anim-gdot" style={{ animationDelay: ".4s" }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PROMPT MODAL (in front) */}
      <div
        style={{
          position: "absolute",
          left: 26,
          top: "50%",
          transform: "translateY(-50%)",
          width: 288,
          background: "#FFFFFF",
          borderRadius: 18,
          padding: 16,
          boxShadow:
            "0 34px 70px -22px rgba(22,40,30,0.4), 0 0 0 1px rgba(22,40,30,0.05)",
          zIndex: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "#FEE546",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: G.ink,
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#FFFFFF" }}>★</span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: G.ink, letterSpacing: -0.2 }}>
            Esteemed Create
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 9.5,
              color: "rgba(22,40,30,0.4)",
              fontWeight: 500,
            }}
          >
            AI builder
          </span>
        </div>

        <div
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: 1,
            color: "rgba(22,40,30,0.4)",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Describe your site
        </div>
        <div
          style={{
            minHeight: 92,
            fontSize: 12.5,
            lineHeight: 1.55,
            color: G.ink,
            letterSpacing: -0.1,
            background: "#F6FAF6",
            border: "1px solid rgba(22,40,30,0.08)",
            borderRadius: 10,
            padding: "10px 12px",
          }}
        >
          {PROMPT.slice(0, typed)}
          <span
            className="prompt-anim-caret"
            style={{
              display: "inline-block",
              width: 1.5,
              height: 12,
              background: G.deep,
              marginLeft: 1,
              verticalAlign: -1,
              opacity: caretOn ? 1 : 0,
            }}
          />
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 6, alignItems: "center" }}>
          <div
            style={{
              padding: "5px 9px",
              borderRadius: 12,
              background: "rgba(22,40,30,0.05)",
              fontSize: 8.5,
              fontWeight: 600,
              color: "rgba(22,40,30,0.6)",
            }}
          >
            + Inspiration
          </div>
          <div
            style={{
              padding: "5px 9px",
              borderRadius: 12,
              background: "rgba(22,40,30,0.05)",
              fontSize: 8.5,
              fontWeight: 600,
              color: "rgba(22,40,30,0.6)",
            }}
          >
            + Logo
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              padding: "6px 13px",
              borderRadius: 12,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 0.2,
              background: generating ? G.mid : G.ink,
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: 5,
              transition: "background .3s ease",
            }}
          >
            {generating && (
              <span
                className="prompt-anim-btnSpin"
                style={{
                  width: 9,
                  height: 9,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  borderTopColor: "#FFF",
                  borderRadius: 9,
                }}
              />
            )}
            {generating ? "Generating" : "Generate"}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkG { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .prompt-anim-caret { animation: blinkG 1s steps(1) infinite; }
        .skl-prompt { background: linear-gradient(90deg, rgba(22,40,30,0.06) 25%, rgba(22,40,30,0.12) 37%, rgba(22,40,30,0.06) 63%); background-size: 400% 100%; animation: shimmerP 1.4s ease infinite; }
        @keyframes shimmerP { 0%{background-position:100% 0} 100%{background-position:-100% 0} }
        @keyframes gpulseP { 0%,100%{opacity:0.3;transform:translateY(0)} 50%{opacity:1;transform:translateY(-2px)} }
        .prompt-anim-gdot { width: 4px; height: 4px; border-radius: 4px; background: #FEE546; display: inline-block; animation: gpulseP 1.1s ease-in-out infinite; }
        @keyframes genstarP { 0%,100%{transform:rotate(0) scale(1)} 50%{transform:rotate(18deg) scale(1.08)} }
        .prompt-anim-genStar { animation: genstarP 1.4s ease-in-out infinite; }
        @keyframes spinBP { to { transform: rotate(360deg) } }
        .prompt-anim-btnSpin { animation: spinBP .7s linear infinite; }
      `}</style>
    </div>
  );
}
