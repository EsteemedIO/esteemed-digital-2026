"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import HeroContactButton from "@/components/HeroContactButton";

const CLIPS = [
  {
    mp4: "/videos/cloud-hero.mp4",
    webm: "/videos/cloud-hero.webm",
    poster: "/videos/cloud-hero-poster.jpg",
    label: "Best Offer",
  },
  {
    mp4: "/videos/cloud-hero-2.mp4",
    webm: "/videos/cloud-hero-2.webm",
    poster: "/videos/cloud-hero-2-poster.jpg",
    label: "AI Builder",
  },
];

export default function VideoHero({ children }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);

  const switchTo = useCallback((idx) => {
    const vid = videoRef.current;
    if (!vid) return;
    const clip = CLIPS[idx];

    const canWebm = vid.canPlayType("video/webm; codecs=vp9");
    vid.src = canWebm ? clip.webm : clip.mp4;
    vid.poster = clip.poster;
    vid.load();
    vid.play().catch(() => {});
    setActive(idx);
    setProgress(0);
    setPaused(false);
  }, []);

  const togglePause = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setPaused(false);
    } else {
      vid.pause();
      setPaused(true);
    }
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
    <section className="relative min-h-[calc(85vh-120px)] flex items-center justify-center overflow-hidden px-6 py-14 sm:px-8">
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
      <div className="relative z-10 max-w-4xl mx-auto px-0 text-center">
        {children}
      </div>

      <div className="absolute bottom-20 right-5 z-30 hidden sm:block">
        <HeroContactButton context={{ hero: "video_hero", active_clip: CLIPS[active].label }} />
      </div>
      <div className="absolute bottom-16 right-4 z-30 sm:hidden">
        <HeroContactButton
          context={{ hero: "video_hero", active_clip: CLIPS[active].label }}
          className="px-4 py-2.5 text-sm"
        />
      </div>

      {/* Pill nav + Pause */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {CLIPS.map((clip, i) => (
          <button
            key={i}
            onClick={() => switchTo(i)}
            aria-label={`Play clip: ${clip.label}`}
            className={`relative h-2.5 w-2.5 overflow-hidden rounded-full p-0 transition-all sm:h-8 sm:w-auto sm:px-6 sm:text-sm sm:font-bold ${
              i === active
                ? "bg-white text-ink shadow-sm"
                : "bg-white/45 text-ink hover:bg-white/60"
            }`}
          >
            {/* Progress fill for active pill */}
            {i === active && (
              <div
                className="absolute inset-y-0 left-0 hidden bg-zinc-300 rounded-full transition-[width] duration-200 ease-linear sm:block"
                style={{ width: `${progress * 100}%`, zIndex: 0 }}
              />
            )}
            <span className="relative z-10 hidden sm:inline">{clip.label}</span>
          </button>
        ))}

        {/* Pause / Play */}
        <button
          onClick={togglePause}
          aria-label={paused ? "Play" : "Pause"}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/45 text-ink transition-colors hover:bg-white sm:h-8 sm:w-8 sm:bg-white/30"
        >
          {paused ? (
            <Play className="w-4 h-4" strokeWidth={2.5} />
          ) : (
            <Pause className="w-4 h-4" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </section>
  );
}
