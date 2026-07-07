"use client";

import { useState } from "react";

function Icon({ name, size = 20, stroke = 1.75 }) {
  const paths = {
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <><path d="M5 12h14" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {faqs.map((f, i) => {
        const on = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--es-border)" }}>
            <button onClick={() => setOpen(on ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "22px 0", font: "inherit" }}>
              <span style={{ fontFamily: "var(--es-font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-.01em", color: "var(--es-fg-1)" }}>{f.q}</span>
              <span style={{ flexShrink: 0, color: "var(--es-ink-900)" }}><Icon name={on ? "minus" : "plus"} size={20} stroke={2.25} /></span>
            </button>
            {on && <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--es-fg-2)", margin: "0 0 22px", maxWidth: 620 }}>{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
