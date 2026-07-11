"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const CLIPS = [
  {
    mp4: "/videos/cloud-hero.mp4",
    webm: "/videos/cloud-hero.webm",
    poster: "/videos/cloud-hero-poster.jpg",
  },
  {
    mp4: "/videos/cloud-hero-2.mp4",
    webm: "/videos/cloud-hero-2.webm",
    poster: "/videos/cloud-hero-2-poster.jpg",
  },
];

export default function VideoHero({ children }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const switchTo = useCallback((idx) => {
    const vid = videoRef.current;
    if (!vid) return;
    const clip = CLIPS[idx];

    // Find the right source based on browser support
    const canWebm = vid.canPlayType("video/webm; codecs=vp9");
    vid.src = canWebm ? clip.webm : clip.mp4;
    vid.poster = clip.poster;
    vid.load();
    vid.play().catch(() => {});
    setActive(idx);
    setProgress(0);
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onTime = () => {
      if (vid.duration) {
        setProgress(vid.currentTime / vid.duration);
      }
    };

    const onEnded = () => {
      const next = (active + 1) % CLIPS.length;
      switchTo(next);
    };

    vid.addEventListener("timeupdate", onTime);
    vid.addEventListener("ended", onEnded);
    return () => {
      vid.removeEventListener("timeupdate", onTime);
      vid.removeEventListener("ended", onEnded);
    };
  }, [active, switchTo]);

  return (
    <section className="relative min-h-[calc(85vh-120px)] flex items-center justify-center overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        poster={CLIPS[0].poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={CLIPS[0].webm} type="video/webm" />
        <source src={CLIPS[0].mp4} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {children}
      </div>

      {/* Progress nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {CLIPS.map((_, i) => (
          <button
            key={i}
            onClick={() => switchTo(i)}
            aria-label={`Play clip ${i + 1}`}
            className="group relative w-16 sm:w-20 h-1 rounded-full overflow-hidden bg-white/30 cursor-pointer transition-all hover:bg-white/40"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-white transition-[width] duration-200 ease-linear"
              style={{
                width: i === active ? `${progress * 100}%` : i < active ? "100%" : "0%",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
