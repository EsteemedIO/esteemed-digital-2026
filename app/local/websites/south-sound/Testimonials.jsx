"use client";

import { useState } from "react";

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

export default function Testimonials({ testimonials }) {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length);

  return (
    <section className="container" style={{ padding: "38px 32px 20px" }}>
      <div className="tc-head">
        <h2 style={{ fontFamily: "var(--es-font-display)", fontWeight: 800, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-.025em", lineHeight: 1.06, margin: 0 }}>Why South Sound businesses trust us</h2>
        <div className="tc-arrows">
          <button onClick={() => go(-1)} aria-label="Previous testimonial"><Icon name="arrowLeft" size={20} stroke={2} /></button>
          <button onClick={() => go(1)} aria-label="Next testimonial"><Icon name="arrow" size={20} stroke={2} /></button>
        </div>
      </div>

      <div className="tcard">
        <div className="tcard-text">
          <div className="tcard-logo">{t.company}</div>
          <blockquote className="tcard-quote">&ldquo;{t.quote}&rdquo;</blockquote>
          <div className="tcard-attr">&mdash; {t.name}, {t.role}</div>
          <a href="#" className="tcard-more">Read more <Icon name="arrow" size={15} stroke={2.25} /></a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="tcard-img"><img src={t.src} alt={t.company} /></div>
      </div>

      <div className="tc-track">
        <div className="tc-fill" style={{ width: `${100 / testimonials.length}%`, transform: `translateX(${i * 100}%)` }}></div>
      </div>
    </section>
  );
}
