"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectTypes = [
  {
    title: "Marketing Sites",
    headline: "Launch your brand",
    desc: "Custom marketing websites that tell your story and convert visitors into customers.",
    src: "https://images.pexels.com/photos/7400281/pexels-photo-7400281.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Ecommerce",
    headline: "Sell online",
    desc: "Fast, secure online stores with checkout, inventory, subscriptions, and payment integrations.",
    src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Landing Pages",
    headline: "Convert more leads",
    desc: "Focused, high-converting pages for campaigns, product launches, or paid media.",
    src: "https://images.pexels.com/photos/35134952/pexels-photo-35134952.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Web Applications",
    headline: "Build your platform",
    desc: "Custom tools, dashboards, portals, and internal apps — designed and engineered to spec.",
    src: "https://images.pexels.com/photos/29884920/pexels-photo-29884920.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Redesigns & Migrations",
    headline: "Modernize your site",
    desc: "Move legacy sites into a faster, modern stack — without losing SEO or content.",
    src: "https://images.pexels.com/photos/9303590/pexels-photo-9303590.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Blogs & Content",
    headline: "Publish with ease",
    desc: "Content-first sites with CMS integration, SEO structure, and publishing workflows.",
    src: "https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Scheduling & Booking",
    headline: "Get booked",
    desc: "Seamless appointment booking and calendar management, built right into your site.",
    src: "https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Donations & Memberships",
    headline: "Grow your community",
    desc: "Accept donations, manage memberships, and build recurring revenue with built-in tools.",
    src: "https://images.pexels.com/photos/12735489/pexels-photo-12735489.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

export default function ProjectCarousel() {
  const N = projectTypes.length;
  const items = [...projectTypes, ...projectTypes, ...projectTypes];
  const [pos, setPos] = useState(N);
  const [tx, setTx] = useState(0);
  const [anim, setAnim] = useState(true);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const active = ((pos % N) + N) % N;

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const card = track.children[pos];
    if (!card) return;
    setTx(wrap.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [pos]);

  useEffect(() => { recalc(); }, [recalc]);
  useEffect(() => {
    window.addEventListener("resize", recalc);
    const id = setTimeout(recalc, 300);
    return () => { window.removeEventListener("resize", recalc); clearTimeout(id); };
  }, [recalc]);

  const go = (d) => { setAnim(true); setPos((p) => p + d); };
  const toTab = (i) => { setAnim(true); setPos((p) => p - (((p % N) + N) % N) + i); };
  const onEnd = () => {
    if (pos < N || pos >= 2 * N) { setAnim(false); setPos(N + active); }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          What we build
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          From a single landing page to a full platform — we handle projects of
          every size and complexity.
        </p>
        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
          {projectTypes.map((c, i) => (
            <button
              key={c.title}
              onClick={() => toTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                i === active
                  ? "bg-ink text-white"
                  : "text-zinc-500 hover:text-ink hover:bg-zinc-100"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="mt-10" ref={wrapRef}>
        <div
          ref={trackRef}
          className="flex gap-7"
          onTransitionEnd={onEnd}
          style={{
            transform: `translateX(${tx}px)`,
            transition: anim ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            willChange: "transform",
          }}
        >
          {items.map((card, i) => (
            <div
              key={i}
              onClick={() => toTab(i % N)}
              className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: "min(66vw, 1060px)",
                aspectRatio: "16 / 9",
                opacity: i === pos ? 1 : 0.4,
                transform: i === pos ? "scale(1)" : "scale(0.94)",
                transition: "opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(100deg, rgba(10,10,10,.66) 0%, rgba(10,10,10,.34) 40%, rgba(10,10,10,0) 66%)",
                }}
              />
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end">
                <div className="max-w-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                    {card.title}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                    {card.headline}
                  </h3>
                  <p className="text-base text-white/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="w-12 h-12 rounded-full border border-zinc-300 bg-white text-ink flex items-center justify-center hover:bg-zinc-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="w-12 h-12 rounded-full border border-zinc-300 bg-white text-ink flex items-center justify-center hover:bg-zinc-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
