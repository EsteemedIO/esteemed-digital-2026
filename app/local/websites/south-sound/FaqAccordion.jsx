"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-lg font-semibold text-ink">{q}</span>
        {open ? (
          <Minus className="h-5 w-5 shrink-0 text-zinc-400" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-zinc-400" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-zinc-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  return (
    <div>
      {faqs.map((f) => (
        <FaqItem key={f.q} q={f.q} a={f.a} />
      ))}
    </div>
  );
}
