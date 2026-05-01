"use client";

import Link from "next/link";

/**
 * CascadingCards — ported from esteemed.io's stack-cards / paragraph--type--layered-cards.
 * Cards are position:sticky so they stack on scroll. Exact markup from live site.
 *
 * Props:
 *   cards: Array of { heading, description, cta, ctaHref, image, bgColor }
 *   bgColor: "neutral" | "brand" | "sky" | "ink"
 */

const bgMap = {
  butter: { bg: "#FFF4B8", text: "#282828" },
  sky: { bg: "#E0E9F2", text: "#282828" },
  lilac: { bg: "#E4DBF0", text: "#282828" },
  mint: { bg: "#DCEDE0", text: "#282828" },
  ink: { bg: "#282828", text: "#FFFFFF" },
};

const ctaMap = {
  butter: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  sky: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  lilac: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  mint: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  ink: "border-white text-white hover:bg-white hover:text-[#282828]",
};

export default function CascadingCards({ cards }) {
  return (
    <div className="stack-cards" style={{ "--stack-cards-gap": "4.25rem" }}>
      {cards.map((card, i) => {
        const tone = bgMap[card.bgColor || "butter"];
        const cta = ctaMap[card.bgColor || "butter"];

        return (
          <div
            key={i}
            className="stack-cards__item overflow-hidden rounded-[18px]"
            style={{
              position: "sticky",
              top: `${2 + i * 1.5}rem`,
              transformOrigin: "center top",
              height: 0,
              paddingBottom: "35rem",
              marginBottom: i < cards.length - 1 ? "4.25rem" : 0,
              backgroundColor: tone.bg,
              color: tone.text,
              boxShadow: "0 24px 50px -20px rgba(26,26,26,0.18)",
            }}
          >
            <div className="card-wrapper grid md:items-center md:grid-cols-[60%_40%] absolute top-0 left-0 w-full h-full">
              {/* Content */}
              <div className="flex flex-col justify-between px-8 py-8 md:px-14 md:py-13">
                <div className="md:pb-[4.25rem]">
                  {card.label && (
                    <p className="text-[13px] font-semibold uppercase tracking-[2px] mb-4" style={{ color: `${tone.text}A6` }}>
                      {card.label}
                    </p>
                  )}
                  <h3 className="mb-0 text-3xl md:text-[56px] font-bold tracking-[-1.5px] leading-[1.05]">
                    {card.heading}
                  </h3>
                </div>
                <div className="card-content flex flex-col gap-6">
                  {card.description && (
                    <p className="text-base leading-relaxed max-w-[380px]" style={{ color: `${tone.text}A6` }}>
                      {card.description}
                    </p>
                  )}
                  {card.cta && card.ctaHref && (
                    <div>
                      <Link
                        href={card.ctaHref}
                        className={`inline-flex rounded-[24px] text-center border-2 px-[22px] py-[12px] text-sm font-semibold leading-none transition-colors ${cta}`}
                      >
                        {card.cta}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              {card.image && (
                <div className="relative min-h-[280px] md:min-h-full">
                  <img
                    loading="lazy"
                    src={card.image}
                    alt={card.heading}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
