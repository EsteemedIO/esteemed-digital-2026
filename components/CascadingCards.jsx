"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const bgMap = {
  butter: { bg: "#FFF4B8", text: "#282828" },
  sky: { bg: "#E0E9F2", text: "#282828" },
  lilac: { bg: "#E4DBF0", text: "#282828" },
  mint: { bg: "#DCEDE0", text: "#282828" },
  ink: { bg: "#282828", text: "#FFFFFF" },
  grey: { bg: "#E6E7E8", text: "#282828" },
  accent: { bg: "#FEE546", text: "#282828" },
};

const ctaMap = {
  butter: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  sky: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  lilac: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  mint: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  ink: "border-white text-white hover:bg-accent hover:text-[#282828]",
  grey: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  accent: "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
};

/**
 * Ported directly from esteemed.io's stack-cards JS.
 * Cards translateY by gap * index, and scale down as they scroll behind the next card.
 * Last card never scales (stays 1). Scale factor: (cardHeight - scrolling * 0.05) / cardHeight
 */
export default function CascadingCards({ cards }) {
  const containerRef = useRef(null);

  const animate = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".js-stack-cards__item");
    if (!items.length) return;

    // Measure gap in px using a temp element (matches original esteemed.io implementation)
    const gapVal = getComputedStyle(el).getPropertyValue("--stack-cards-gap") || "4.25rem";
    const temp = document.createElement("div");
    temp.setAttribute("style", "opacity:0;visibility:hidden;position:absolute;height:" + gapVal);
    el.appendChild(temp);
    const gapPx = parseInt(getComputedStyle(temp).getPropertyValue("height"));
    el.removeChild(temp);
    const cardTop = Math.floor(parseFloat(getComputedStyle(items[0]).getPropertyValue("top")));
    const cardHeight = Math.floor(parseFloat(getComputedStyle(items[0]).getPropertyValue("height")));
    const top = el.getBoundingClientRect().top;

    for (let i = 0; i < items.length; i++) {
      const scrolling = cardTop - top - i * (cardHeight + gapPx);
      if (scrolling > 0) {
        const scaling = i === items.length - 1 ? 1 : (cardHeight - scrolling * 0.05) / cardHeight;
        items[i].style.transform = `translateY(${gapPx * i}px) scale(${Math.max(scaling, 0.9)})`;
      } else {
        items[i].style.transform = `translateY(${gapPx * i}px)`;
      }
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set padding-bottom on container for scroll space (measure gap via temp element)
    const items = el.querySelectorAll(".js-stack-cards__item");
    const gapVal = getComputedStyle(el).getPropertyValue("--stack-cards-gap") || "4.25rem";
    const temp = document.createElement("div");
    temp.setAttribute("style", "opacity:0;visibility:hidden;position:absolute;height:" + gapVal);
    el.appendChild(temp);
    const gapPx = parseInt(getComputedStyle(temp).getPropertyValue("height"));
    el.removeChild(temp);
    el.style.paddingBottom = gapPx * (items.length - 1) + "px";

    // Set initial transforms
    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = "translateY(" + gapPx * i + "px)";
    }

    let scrolling = false;
    const onScroll = () => {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(() => {
        animate();
        scrolling = false;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.addEventListener("scroll", onScroll, { passive: true });
          animate();
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      },
      { threshold: [0, 1] }
    );

    observer.observe(el);
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className="js-stack-cards mx-auto relative"
      style={{ "--stack-cards-gap": "4.25rem", maxWidth: 1040 }}
    >
      {cards.map((card, i) => {
        const tone = bgMap[card.bgColor || "butter"];
        const cta = ctaMap[card.bgColor || "butter"];

        return (
          <div
            key={i}
            className="js-stack-cards__item overflow-hidden"
            style={{
              position: "sticky",
              top: 80,
              transformOrigin: "center top",
              backgroundColor: tone.bg,
              color: tone.text,
              boxShadow: "0 24px 50px -20px rgba(26,26,26,0.18)",
            }}
          >
            <div className="grid md:items-center md:grid-cols-[60%_40%]">
              {/* Content */}
              <div className="flex flex-col px-8 py-8 md:px-14 md:py-12" style={{ minHeight: 600 }}>
                <div>
                  {card.label && (
                    <p className="text-[13px] font-semibold uppercase tracking-[2px]" style={{ color: tone.text, marginBottom: 25 }}>
                      {card.label}
                    </p>
                  )}
                  <h3 className="mb-0 text-3xl md:text-[56px] font-bold tracking-[-1.5px] leading-[1.05]">
                    {card.heading}
                  </h3>
                </div>
                <div className="card-content flex flex-col" style={{ marginTop: "auto", paddingBottom: 20, gap: 24 }}>
                  {card.description && (
                    <p className="leading-relaxed max-w-[420px]" style={{ fontSize: "1.5625rem", color: tone.text }}>
                      {card.description}
                    </p>
                  )}
                  {card.cta && card.ctaHref && (
                    <div>
                      <Link
                        href={card.ctaHref}
                        className={`inline-flex rounded-[24px] text-center border-2 px-[22px] py-[12px] text-[20px] font-bold leading-none transition-colors ${cta}`}
                      >
                        {card.cta}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Visual / Image */}
              {card.visual ? (
                <div className="relative overflow-hidden w-full" style={{ height: 600 }}>
                  <div className="absolute inset-0">{card.visual}</div>
                </div>
              ) : card.image ? (
                <div className="relative w-full" style={{ height: 600 }}>
                  <img
                    loading="lazy"
                    src={card.image}
                    alt={card.heading}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
