"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

export default function HeroCarousel({ slides, interval = 8000 }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = slides.length;
  const videoRef = useRef(null);

  const goTo = useCallback((i) => {
    setCurrent(i);
    setProgress(0);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 50;
    const tick = setInterval(() => {
      setProgress((p) => {
        const n = p + (step / interval) * 100;
        if (n >= 100) {
          setCurrent((c) => (c + 1) % N);
          return 0;
        }
        return n;
      });
    }, step);
    return () => clearInterval(tick);
  }, [paused, current, interval, N]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[calc(85vh-120px)] flex items-center justify-center overflow-hidden">
      {/* Background — video or image */}
      {slide.video ? (
        <video
          key={slide.video}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ) : slide.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: slide.bg || "#1B1E25" }} />
      )}

      {/* Overlay — only on video/image slides */}
      {(slide.video || slide.image) && (
        <div className="absolute inset-0 bg-black/55" />
      )}

      {/* Content */}
      <div
        key={current}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-[fadeIn_0.4s_ease-in-out]"
      >
        {slide.eyebrow && (
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4">
            {slide.eyebrow}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {slide.title}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          {slide.body}
          {slide.bodyBold && <>{" "}<strong className="text-white">{slide.bodyBold}</strong></>}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {slide.cta && slide.href && (
            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              {slide.cta}
            </Link>
          )}
          {slide.cta2 && slide.href2 && (
            <Link
              href={slide.href2}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors"
            >
              {slide.cta2}
            </Link>
          )}
        </div>
      </div>

      {/* Progress bars + pause */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-end gap-2.5">
        <div className="flex gap-4">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <span
                className="text-xs font-semibold transition-colors"
                style={{ color: i === current ? "#FFFFFF" : "rgba(255,255,255,0.45)" }}
              >
                {s.label || s.eyebrow}
              </span>
              <div className="relative w-20 sm:w-24 h-1 rounded-full overflow-hidden bg-white/30">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-white transition-[width] duration-[50ms] ease-linear"
                  style={{
                    width:
                      i === current
                        ? `${progress}%`
                        : i < current
                          ? "100%"
                          : "0%",
                  }}
                />
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play" : "Pause"}
          className="w-7 h-7 rounded-full bg-white/20 hover:bg-white flex items-center justify-center transition-colors group/pause"
        >
          {paused ? (
            <Play className="h-3 w-3 text-white/45 group-hover/pause:text-ink transition-colors" />
          ) : (
            <Pause className="h-3 w-3 text-white/45 group-hover/pause:text-ink transition-colors" />
          )}
        </button>
      </div>
    </section>
  );
}
