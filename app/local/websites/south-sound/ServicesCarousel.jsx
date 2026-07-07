"use client";

import { useState, useRef, useEffect, useCallback } from "react";

function Icon({ name, size = 20, stroke = 1.75 }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5M11 5l-7 7 7 7" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

export default function ServicesCarousel({ capabilities }) {
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
    <section className="ss-sec">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="ss-title">Scale your business, local or global.</h2>
        <p className="ss-sub">We have the experts and tools to help.</p>
        <div className="ss-tabs">
          {capabilities.map((c, i) => (
            <button key={i} className={`ss-tab${i === active ? " on" : ""}`} onClick={() => toTab(i)}>{c.title}</button>
          ))}
        </div>
      </div>
      <div className="ss-viewport" ref={wrapRef}>
        <div className="ss-track" ref={trackRef} onTransitionEnd={onEnd} style={{ transform: `translateX(${tx}px)`, transition: anim ? undefined : "none" }}>
          {items.map((c, i) => (
            <div key={i} className={`ss-card${i === pos ? " on" : ""}`} onClick={() => toTab(i % N)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="ss-overlay">
                <div className="ss-card-text">
                  <h3 className="ss-card-title">{c.headline}</h3>
                  <p className="ss-card-desc">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <div className="tc-arrows">
          <button onClick={() => go(-1)} aria-label="Previous"><Icon name="arrowLeft" size={20} stroke={2} /></button>
          <button onClick={() => go(1)} aria-label="Next"><Icon name="arrow" size={20} stroke={2} /></button>
        </div>
      </div>
    </section>
  );
}
