"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { products } from "@/lib/data";
import { CpuIcon } from "@/components/ui/cpu";
import { ZapIcon } from "@/components/ui/zap";
import { UsersIcon } from "@/components/ui/users";
import { CogIcon } from "@/components/ui/cog";
import { ActivityIcon } from "@/components/ui/activity";

// Map product keys to animated icons
const productIcons = {
  intelligence: CpuIcon,
  ai: ZapIcon,
  agents: CogIcon,
  appbuilder: ActivityIcon,
  hcai: UsersIcon,
};

const slides = [
  {
    id: 1,
    title: "Esteemed Intelligence",
    description:
      "Neural memory and organizational intelligence that learns from your company's knowledge to deliver context-aware responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1680&h=944&fit=crop",
    learnMoreLink: "/products",
    tryLink: "/contact",
  },
  {
    id: 2,
    title: "Esteemed AI",
    description:
      "Powerful language models with 50B+ parameters for generation, analysis, and complex reasoning with multi-modal capability.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1680&h=944&fit=crop",
    learnMoreLink: "/products",
    tryLink: "/contact",
  },
  {
    id: 3,
    title: "Esteemed Agents",
    description:
      "Autonomous AI agents that execute complex workflows and business processes with tool integration and human handoff.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1680&h=944&fit=crop",
    learnMoreLink: "/products",
    tryLink: "/contact",
  },
  {
    id: 4,
    title: "Enterprise Deployment",
    description:
      "Cloud, private cloud, your VPC, or on-premises deployment with SOC 2 Type II compliance and enterprise-grade security.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1680&h=944&fit=crop",
    learnMoreLink: "/deployment",
    tryLink: "/contact",
  },
  {
    id: 5,
    title: "Developer Platform",
    description:
      "RESTful APIs, SDKs for popular languages, and comprehensive documentation to integrate AI into your applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1680&h=944&fit=crop",
    learnMoreLink: "/developers",
    tryLink: "/contact",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  // Calculate visible slides (show partial cards on sides)
  const getVisibleSlides = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = slides.length + index;
      if (index >= slides.length) index = index - slides.length;
      result.push({ ...slides[index], position: i });
    }
    return result;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="w-full bg-white dark:bg-zinc-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-normal">
            <span className="text-zinc-900 dark:text-white">Explore</span>{" "}
            <span className="text-zinc-500 dark:text-zinc-400">our</span>{" "}
            <span className="text-zinc-900 dark:text-white">Next Generation</span>{" "}
            <span className="text-zinc-500 dark:text-zinc-400">AI and Agentic Solutions</span>
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden mb-8">
        <div
          ref={carouselRef}
          className="flex items-center justify-center gap-5 transition-transform duration-500 ease-out"
        >
          {visibleSlides.map((slide, idx) => {
            const isCenter = slide.position === 0;

            return (
              <div
                key={`${slide.id}-${slide.position}`}
                className="relative flex-shrink-0 w-[840px] h-[472px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 cursor-pointer"
                onClick={() => {
                  if (slide.position < 0) goToPrevious();
                  if (slide.position > 0) goToNext();
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Frost overlay for non-selected cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-500" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content and Navigation */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Slide info */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-medium text-zinc-900 dark:text-white mb-2">
              {currentSlide.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {currentSlide.description}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={currentSlide.learnMoreLink}
                className="inline-flex items-center px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Learn more
              </Link>
              <Link
                href={currentSlide.tryLink}
                className="inline-flex items-center gap-1 px-4 py-2 text-zinc-900 dark:text-white text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
                Try
              </Link>
            </div>
          </div>

          {/* Arrow navigation */}
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid - 3 across like DeepMind */}
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {products.map((product) => {
            const IconComponent = productIcons[product.key];
            return (
              <Link key={product.key} href="/products" className="group block">
                <div className="mb-4 text-zinc-500 transition-colors" style={{ "--hover-color": "var(--brand-start)" }}>
                  <div className="group-hover:[color:var(--brand-start)]">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-zinc-900 dark:text-white mb-3 transition-colors group-hover:[color:var(--brand-start)]">
                  {product.name}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
