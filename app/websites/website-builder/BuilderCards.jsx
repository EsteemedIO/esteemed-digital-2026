"use client";

import CascadingCards from "@/components/CascadingCards";
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
    ctaHref: "/signup?redirect=create",
    visual: <PromptToSite />,
  },
  {
    bgColor: "grey",
    label: "Customize",
    heading: "Refine.",
    description:
      "Drag, drop, edit anything inline. Hundreds of sections snap into place — no templates to fight.",
    cta: "See the editor →",
    ctaHref: "/signup?redirect=create",
    visual: <DragAndDrop />,
  },
  {
    bgColor: "ink",
    label: "Automate",
    heading: "Ship.",
    description:
      "AI agents handle SEO, images, forms, and publishing while you focus on the business.",
    cta: "Watch it work →",
    ctaHref: "/signup?redirect=create",
    visual: <CascadingAgent />,
  },
  {
    bgColor: "butter",
    label: "Responsive",
    heading: "Everywhere.",
    description:
      "One site, every screen. Preview desktop, tablet, and mobile side-by-side as you build.",
    cta: "Preview live →",
    ctaHref: "/signup?redirect=create",
    visual: <MultiDevice />,
  },
];

export default function BuilderCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          Build, customize, ship, preview
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Four steps from idea to live website — powered by AI.
        </p>
      </div>
      <CascadingCards cards={cards} />
    </section>
  );
}
