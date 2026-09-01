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
    <section className="relative min-h-[calc(85vh-120px)] flex flex-col items-center justify-center overflow-hidden px-6 py-14 sm:px-8">
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
        className="relative z-10 max-w-4xl mx-auto px-0 text-center animate-[fadeIn_0.4s_ease-in-out]"
      >
        {slide.eyebrow && (
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4">
            {slide.eyebrow}
          </p>
        )}
        <h1 className="font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 95px)", letterSpacing: "-0.02em" }}>
          {slide.title}
        </h1>
        <p className="text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontSize: 25 }}>
          {slide.body}
          {slide.bodyBold && <>{" "}<strong className="text-white">{slide.bodyBold}</strong></>}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {slide.cta && slide.href && (
            <Link
              href={slide.href}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
            >
              {slide.cta}
            </Link>
          )}
          {slide.cta2 && slide.href2 && (
            <Link
              href={slide.href2}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 transition-colors"
            >
              {slide.cta2}
            </Link>
          )}
        </div>
      </div>

      {/* Pill nav + pause */}
      <div className="relative z-20 mt-10 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide: ${s.label || s.eyebrow}`}
            className={`relative h-2.5 w-2.5 overflow-hidden rounded-full p-0 transition-all sm:h-8 sm:w-auto sm:px-6 sm:text-sm sm:font-bold ${
              i === current
                ? "bg-white text-ink shadow-sm"
                : "bg-white/45 text-ink hover:bg-white/60"
            }`}
          >
            {i === current && (
              <div
                className="absolute inset-y-0 left-0 hidden rounded-full bg-zinc-300 transition-[width] duration-[50ms] ease-linear sm:block"
                style={{ width: `${progress}%`, zIndex: 0 }}
              />
            )}
            <span className="relative z-10 hidden whitespace-nowrap sm:inline">{s.label || s.eyebrow}</span>
          </button>
        ))}
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play" : "Pause"}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/45 text-ink transition-colors hover:bg-white sm:h-8 sm:w-8 sm:bg-white/30"
        >
          {paused ? (
            <Play className="h-4 w-4" strokeWidth={2.5} />
          ) : (
            <Pause className="h-4 w-4" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </section>
  );
}
