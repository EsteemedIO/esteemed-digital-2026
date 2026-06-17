import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Technology & Media Workforce Solutions | Esteemed",
  description:
    "Talent and technology solutions built for growth. AI-powered hiring, global scaling, and workforce management for tech, media, and startups.",
};

const verticals = [
  {
    name: "Technology",
    image: "/images/industries/web-team.jpg",
    items: [
      {
        title: "Engineering & DevOps",
        description:
          "Source full-stack engineers, cloud architects, and DevOps specialists matched to your tech stack.",
      },
      {
        title: "Product & Design",
        description:
          "Find product managers, UX designers, and data scientists who ship great products.",
      },
      {
        title: "Global Engineering Teams",
        description:
          "Build distributed teams across time zones with EOR support for international hires.",
      },
    ],
  },
  {
    name: "Media & Entertainment",
    image: "/images/industries/editor.jpg",
    items: [
      {
        title: "Content & Production",
        description:
          "Hire editors, producers, animators, and content strategists for digital and traditional media.",
      },
      {
        title: "Streaming & Platform Talent",
        description:
          "Staff platform engineering, recommendation systems, and content delivery infrastructure.",
      },
      {
        title: "Rights & Compliance",
        description:
          "Manage IP, licensing, and labor compliance across jurisdictions and union requirements.",
      },
    ],
  },
  {
    name: "Startups",
    image: "/images/industries/jobseeker.jpg",
    items: [
      {
        title: "Founding Team Hires",
        description:
          "Find co-founders, early engineers, and key hires who thrive in fast-moving environments.",
      },
      {
        title: "Fractional Leadership",
        description:
          "Access fractional CTOs, CFOs, and VPs of Engineering without full-time overhead.",
      },
      {
        title: "Scale-Up Support",
        description:
          "Ramp hiring quickly as you close funding rounds, with payroll and compliance handled.",
      },
    ],
  },
];

export default function TechnologyAndMediaPage() {
  return (
    <IndustryPage
      title="Solutions for Technology & Media Companies"
      subtitle="Talent and Technology Built for Growth"
      heroDescription="Technology and media companies move fast — your workforce strategy should too. Esteemed provides AI-powered recruiting, global EOR services, and scalable teams that help you ship products, create content, and grow without limits."
      heroImage="/images/industries/man-on-phone.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Drive Innovation and Growth"
      closingText="From seed-stage startups to enterprise tech, Esteemed helps technology and media companies hire the talent that turns ideas into impact."
    />
  );
}
