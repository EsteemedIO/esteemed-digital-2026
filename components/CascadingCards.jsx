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
  neutral: "bg-neutral-100 text-gray-900",
  brand: "bg-indigo-500 text-white",
  sky: "bg-sky-300 text-gray-900",
  ink: "bg-[#282828] text-white",
};

const ctaBorder = {
  neutral: "border-[#231F20] text-[#231F20] hover:bg-[#231F20] hover:text-white",
  brand: "border-white text-white hover:bg-white hover:text-indigo-600",
  sky: "border-[#231F20] text-[#231F20] hover:bg-[#231F20] hover:text-white",
  ink: "border-white text-white hover:bg-white hover:text-[#282828]",
};

export default function CascadingCards({ cards }) {
  return (
    <div className="stack-cards" style={{ "--stack-cards-gap": "4.25rem" }}>
      {cards.map((card, i) => {
        const bg = bgMap[card.bgColor || "neutral"];
        const cta = ctaBorder[card.bgColor || "neutral"];

        return (
          <div
            key={i}
            className={`${bg} stack-cards__item overflow-hidden shadow-2xl rounded-2xl`}
            style={{
              position: "sticky",
              top: `${2 + i * 1.5}rem`,
              transformOrigin: "center top",
              height: 0,
              paddingBottom: "35rem",
              marginBottom: i < cards.length - 1 ? "4.25rem" : 0,
            }}
          >
            <div className="card-wrapper grid md:items-center md:grid-cols-[60%_40%] absolute top-0 left-0 w-full h-full">
              {/* Content */}
              <div className="flex flex-col justify-between px-5 py-5 md:px-10">
                <div className="md:pb-[4.25rem]">
                  <h3 className="mb-0 text-2xl md:text-4xl font-semibold tracking-tight text-balance">
                    {card.heading}
                  </h3>
                </div>
                <div className="card-content flex flex-col gap-6">
                  {card.description && (
                    <p className="leading-relaxed">{card.description}</p>
                  )}
                  {card.cta && card.ctaHref && (
                    <div>
                      <Link
                        href={card.ctaHref}
                        className={`inline-flex rounded-[6.25rem] text-center border-2 px-6 py-3.5 text-sm font-semibold leading-none transition-colors ${cta}`}
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
