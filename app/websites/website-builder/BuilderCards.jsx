"use client";

import CascadingCards from "@/components/CascadingCards";
import ProductIcon from "@/components/ProductIcon";
import {
  PromptToSite,
  DragAndDrop,
  CascadingAgent,
  MultiDevice,
} from "@/components/BuilderVisuals";

const cards = [
  {
    bgColor: "accent",
    label: "Build",
    heading: "Describe.",
    description:
      "Tell our AI what you need. It drafts a real, brand-aware site in seconds — copy, layout, and all.",
    cta: "Try a prompt →",
    ctaHref: "/websites/website-builder/start",
    visual: <PromptToSite />,
  },
  {
    bgColor: "grey",
    label: "Customize",
    heading: "Refine.",
    description:
      "Drag, drop, edit anything inline. Hundreds of sections snap into place — no templates to fight.",
    cta: "See the editor →",
    ctaHref: "/websites/website-builder/start",
    visual: <DragAndDrop />,
  },
  {
    bgColor: "ink",
    label: "Automate",
    heading: "Ship.",
    description:
      "AI agents handle SEO, images, forms, and publishing while you focus on the business.",
    cta: "Watch it work →",
    ctaHref: "/websites/website-builder/start",
    visual: <CascadingAgent />,
  },
  {
    bgColor: "butter",
    label: "Responsive",
    heading: "Everywhere.",
    description:
      "One site, every screen. Preview desktop, tablet, and mobile side-by-side as you build.",
    cta: "Preview live →",
    ctaHref: "/websites/website-builder/start",
    visual: <MultiDevice />,
  },
];

export default function BuilderCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <ProductIcon product="create" className="mx-auto mb-6 h-14 w-14" />
        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
          Meet Esteemed Create
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Chat with AI to design, build, and iterate on real websites. No
          templates, no code required — just describe what you need and watch
          it come to life.
        </p>
      </div>
      <CascadingCards cards={cards} />
    </section>
  );
}
