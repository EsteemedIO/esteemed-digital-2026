"use client";

import { useRef, useEffect, useState } from "react";

export default function ParallaxFrost({ src, alt, height = 715, maxFrost = 0.3 }) {
  const containerRef = useRef(null);
  const [frost, setFrost] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Frost starts when the sticky image is pinned and user keeps scrolling
      // The scroll-away zone is the extra padding below (half the height)
      const stickyTop = 80;
      const pinnedAt = rect.top <= stickyTop;

      if (pinnedAt) {
        // How far past the pin point have we scrolled?
        const scrollPast = stickyTop - rect.top;
        const fadeZone = height * 0.5;
        const progress = Math.min(1, scrollPast / fadeZone);
        setFrost(progress * maxFrost);
      } else {
        setFrost(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxFrost, height]);

  return (
    <div style={{ marginBottom: height * 0.2 }}>
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full"
        style={{ height, position: "sticky", top: 80 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(255, 255, 255, ${frost})` }}
        />
      </div>
    </div>
  );
}
