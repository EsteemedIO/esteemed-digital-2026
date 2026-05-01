"use client";

import Link from "next/link";

export default function BuilderCard({ tone, label, title, copy, cta, ctaHref, children }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 rounded-[18px] shadow-[0_24px_50px_-20px_rgba(26,26,26,0.18)] overflow-hidden"
      style={{ background: tone }}
    >
      {/* Left column — text */}
      <div className="flex flex-col justify-between p-[52px_56px] text-[#282828]">
        <div
          className="text-[13px] tracking-[2px] font-semibold uppercase"
          style={{ color: "rgba(40,40,40,0.65)" }}
        >
          {label}
        </div>
        <div>
          <h2 className="text-5xl font-bold tracking-tight leading-[1.05] mb-[18px]">
            {title}
          </h2>
          <p
            className="text-base leading-relaxed mb-[26px] max-w-[380px]"
            style={{ color: "rgba(40,40,40,0.65)" }}
          >
            {copy}
          </p>
          {cta && (
            <Link
              href={ctaHref || "#"}
              className="inline-block rounded-full bg-[#282828] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {cta} &rarr;
            </Link>
          )}
        </div>
      </div>

      {/* Right column — visual */}
      <div className="relative min-h-[300px] md:min-h-0">
        {children}
      </div>
    </div>
  );
}
