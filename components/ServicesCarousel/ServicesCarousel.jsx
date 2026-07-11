"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "./ServicesCarousel.css";

function Icon({ name, size = 20, stroke = 1.75 }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5M11 5l-7 7 7 7" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

/* ── Mock UI helpers ── */
const pxThumb = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`;
const Stars = () => <span style={{ color: "#E8B93B", fontSize: 12, letterSpacing: "1px" }}>★★★★★</span>;
const mockBtn = { marginTop: 14, width: "100%", border: "none", borderRadius: 999, padding: "10px 0", background: "var(--sc-yellow-500)", color: "var(--sc-ink-1000)", fontWeight: 700, fontSize: 13, cursor: "default" };
const pill = (on) => ({ flex: 1, textAlign: "center", fontSize: 11.5, fontWeight: 700, padding: "7px 0", borderRadius: 8, border: "1px solid var(--sc-border)", background: on ? "var(--sc-ink-900)" : "#fff", color: on ? "#fff" : "var(--sc-fg-2)" });

const MOCK_MAP = { "cap-store": "store", "cap-book": "book", "cap-blog": "blog", "cap-forms": "form", "cap-donate": "donate", "cap-member": "member", "cap-seo": "seo", "cap-gallery": "gallery" };

function Mock({ type }) {
  if (type === "store") return (
    <div className="sc-mock">
      <div style={{ display: "flex", gap: 12 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pxThumb(2467287)} alt="" style={{ width: 62, height: 62, borderRadius: 12, objectFit: "cover", flexShrink: 0 }} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--sc-ink-900)" }}>Harbor Blend · 12 oz</div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}><Stars /><span style={{ fontSize: 11, color: "var(--sc-fg-3)" }}>(48)</span></div>
          <div style={{ fontWeight: 800, fontSize: 15, color: "var(--sc-ink-900)", marginTop: 4 }}>$18.00</div>
        </div>
      </div>
      <button style={mockBtn}>Add to cart</button>
      <div style={{ textAlign: "center", fontSize: 11, color: "var(--sc-fg-3)", marginTop: 9 }}>Free shipping on orders over $50</div>
    </div>
  );
  if (type === "book") {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
      <div className="sc-mock">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pxThumb(34164459)} alt="" style={{ width: 34, height: 34, borderRadius: 999, objectFit: "cover" }} />
          <div><div style={{ fontWeight: 700, fontSize: 13, color: "var(--sc-ink-900)" }}>Design consultation</div><div style={{ fontSize: 11, color: "var(--sc-fg-3)" }}>30 min · Free</div></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <div style={{ fontWeight: 800, fontSize: 14, fontFamily: "var(--sc-font-display)" }}>September</div>
          <div style={{ fontSize: 11, color: "var(--sc-fg-3)" }}>2026</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, textAlign: "center" }}>
          {days.map((d, i) => <div key={"d" + i} style={{ fontSize: 10, fontWeight: 700, color: "var(--sc-fg-3)" }}>{d}</div>)}
          {nums.map(n => <div key={n} style={{ fontSize: 11, fontWeight: 600, padding: "4px 0", borderRadius: 8, background: n === 14 ? "var(--sc-ink-900)" : "transparent", color: n === 14 ? "#fff" : "var(--sc-fg-2)" }}>{n}</div>)}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
          {["10:30", "11:15", "1:00"].map((t, i) => <span key={t} style={pill(i === 0)}>{t}</span>)}
        </div>
      </div>
    );
  }
  if (type === "blog") return (
    <div className="sc-mock">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pxThumb(35134952)} alt="" style={{ width: "100%", height: 92, borderRadius: 12, objectFit: "cover", display: "block" }} />
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".09em", color: "var(--sc-warm-600)", marginTop: 12 }}>JOURNAL</div>
      <div style={{ fontFamily: "var(--sc-font-display)", fontWeight: 800, fontSize: 15, lineHeight: 1.2, marginTop: 5, color: "var(--sc-ink-900)" }}>5 ways to bring locals through your door</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 11 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pxThumb(34164459)} alt="" style={{ width: 22, height: 22, borderRadius: 999, objectFit: "cover" }} />
        <span style={{ fontSize: 11.5, color: "var(--sc-fg-3)" }}>Marisol Reyes · Aug 12</span>
      </div>
    </div>
  );
  if (type === "form") {
    const field = (label, ph, h) => (
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--sc-fg-3)", marginBottom: 4 }}>{label}</div>
        <div style={{ height: h || 34, borderRadius: 8, background: "#fff", border: "1px solid var(--sc-border-strong)", padding: "9px 11px", fontSize: 12, color: "var(--sc-warm-500)" }}>{ph}</div>
      </div>
    );
    return (
      <div className="sc-mock">
        <div style={{ fontWeight: 800, fontSize: 14, fontFamily: "var(--sc-font-display)", marginBottom: 12 }}>Get in touch</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {field("Name", "Marisol Reyes")}
          {field("Email", "hello@harborcoffee.com")}
          {field("Message", "Tell us about your project…", 50)}
        </div>
        <button style={mockBtn}>Send message</button>
      </div>
    );
  }
  if (type === "donate") return (
    <div className="sc-mock">
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pxThumb(34164459)} alt="" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--sc-ink-900)" }}>Community Food Bank</div>
          <div style={{ fontSize: 11, color: "var(--sc-fg-3)" }}>Fall giving campaign</div>
        </div>
      </div>
      <div style={{ marginTop: 13 }}>
        <div style={{ height: 7, borderRadius: 999, background: "var(--sc-warm-200)", overflow: "hidden" }}><div style={{ width: "68%", height: "100%", background: "var(--sc-success)" }}></div></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11.5 }}><span style={{ fontWeight: 700, color: "var(--sc-ink-900)" }}>$6,800 raised</span><span style={{ color: "var(--sc-fg-3)" }}>of $10,000</span></div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
        {["$25", "$50", "$100"].map((a, i) => <span key={a} style={pill(i === 1)}>{a}</span>)}
      </div>
      <button style={mockBtn}>Donate</button>
    </div>
  );
  if (type === "member") return (
    <div className="sc-mock">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontWeight: 800, fontSize: 14, fontFamily: "var(--sc-font-display)" }}>Members&apos; Circle</div>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--sc-success)", background: "var(--sc-success-bg)", borderRadius: 999, padding: "3px 8px" }}>Active</span>
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {[["Supporter", "$12", "mo", false], ["Patron", "$120", "yr", true]].map(([n, p, per, on]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 10, border: on ? "1px solid var(--sc-ink-900)" : "1px solid var(--sc-border)", background: on ? "var(--sc-warm-50)" : "#fff" }}>
            <div><div style={{ fontWeight: 700, fontSize: 13, color: "var(--sc-ink-900)" }}>{n}</div><div style={{ fontSize: 11, color: "var(--sc-fg-3)" }}>Billed {per === "mo" ? "monthly" : "yearly"}</div></div>
            <div style={{ fontWeight: 800, fontSize: 14, color: "var(--sc-ink-900)" }}>{p}<span style={{ fontSize: 11, color: "var(--sc-fg-3)", fontWeight: 600 }}>/{per}</span></div>
          </div>
        ))}
      </div>
      <button style={mockBtn}>Join now</button>
    </div>
  );
  if (type === "seo") return (
    <div className="sc-mock">
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--sc-warm-100)", borderRadius: 999, padding: "9px 13px", fontSize: 12.5, color: "var(--sc-fg-2)" }}>
        <Icon name="search" size={14} stroke={2} /> your business here
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 13 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pxThumb(2467287)} alt="" style={{ width: 38, height: 38, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--sc-ink-900)" }}>Your Business Name</div>
          <div style={{ fontSize: 11, color: "var(--sc-fg-3)" }}><span style={{ color: "#E8B93B" }}>★</span> 4.9 (212) · Open now</div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, color: "#fff", background: "var(--sc-success)", borderRadius: 999, padding: "3px 8px" }}>#1</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, opacity: .45 }}>
        <div style={{ width: 38, height: 38, borderRadius: 8, background: "var(--sc-warm-200)", flexShrink: 0 }}></div>
        <div style={{ flex: 1 }}><div style={{ height: 8, width: "70%", borderRadius: 4, background: "var(--sc-warm-200)" }}></div><div style={{ height: 7, width: "45%", borderRadius: 4, background: "var(--sc-warm-200)", marginTop: 5 }}></div></div>
      </div>
    </div>
  );
  if (type === "gallery") return (
    <div className="sc-mock" style={{ padding: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {[2467287, 35134952, 34164459].map(id => <img key={id} src={pxThumb(id)} alt="" style={{ width: "100%", height: 66, borderRadius: 8, objectFit: "cover", display: "block" }} />)}
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pxThumb(29884920)} alt="" style={{ width: "100%", height: 66, borderRadius: 8, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, borderRadius: 8, background: "rgba(10,10,10,.55)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14 }}>+9</div>
        </div>
      </div>
    </div>
  );
  return null;
}

export default function ServicesCarousel({ capabilities, title, subtitle }) {
  const N = capabilities.length;
  const items = [...capabilities, ...capabilities, ...capabilities];
  const [pos, setPos] = useState(N);
  const [tx, setTx] = useState(0);
  const [anim, setAnim] = useState(true);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const active = ((pos % N) + N) % N;

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const card = track.children[pos];
    if (!card) return;
    setTx(wrap.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [pos]);

  useEffect(() => { recalc(); }, [recalc]);
  useEffect(() => {
    window.addEventListener("resize", recalc);
    const id = setTimeout(recalc, 300);
    return () => { window.removeEventListener("resize", recalc); clearTimeout(id); };
  }, [recalc]);

  const go = (d) => { setAnim(true); setPos(p => p + d); };
  const toTab = (i) => { setAnim(true); setPos(p => p - (((p % N) + N) % N) + i); };
  const onEnd = () => {
    if (pos < N || pos >= 2 * N) { setAnim(false); setPos(N + active); }
  };

  return (
    <section className="sc-wrap">
      <div className="sc-container" style={{ textAlign: "center" }}>
        <h2 className="sc-title">{title || "Everything your site needs to grow."}</h2>
        <p className="sc-sub">{subtitle || "Built-in tools that come with your Cloud site."}</p>
        <div className="sc-tabs">
          {capabilities.map((c, i) => (
            <button key={i} className={`sc-tab${i === active ? " on" : ""}`} onClick={() => toTab(i)}>{c.title}</button>
          ))}
        </div>
      </div>
      <div className="sc-viewport" ref={wrapRef}>
        <div className="sc-track" ref={trackRef} onTransitionEnd={onEnd} style={{ transform: `translateX(${tx}px)`, transition: anim ? undefined : "none" }}>
          {items.map((c, i) => (
            <div key={i} className={`sc-card${i === pos ? " on" : ""}`} onClick={() => toTab(i % N)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="sc-overlay">
                {c.tag && <span className="sc-tag">{c.tag}</span>}
                <div className="sc-card-text">
                  <h3 className="sc-card-title">{c.headline}</h3>
                  <p className="sc-card-desc">{c.body}</p>
                </div>
              </div>
              {c.img && MOCK_MAP[c.img] && <Mock type={MOCK_MAP[c.img]} />}
            </div>
          ))}
        </div>
      </div>
      <div className="sc-container" style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <div className="sc-arrows">
          <button onClick={() => go(-1)} aria-label="Previous"><Icon name="arrowLeft" size={20} stroke={2} /></button>
          <button onClick={() => go(1)} aria-label="Next"><Icon name="arrow" size={20} stroke={2} /></button>
        </div>
      </div>
    </section>
  );
}
