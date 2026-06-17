import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Construction Staffing & Workforce Solutions | Esteemed",
  description:
    "Keep projects on time and on budget with AI-powered construction staffing, compliance management, and scalable workforce planning.",
};

const verticals = [
  {
    name: "General Contracting",
    image: "/images/industries/construction-hero.webp",
    items: [
      {
        title: "Skilled Trade Staffing",
        description:
          "Access pre-vetted electricians, plumbers, welders, and project managers on demand.",
      },
      {
        title: "Safety & Compliance",
        description:
          "Automated OSHA compliance tracking, certifications management, and safety documentation.",
      },
      {
        title: "Project-Based Hiring",
        description:
          "Scale crews up or down per project phase without long-term overhead.",
      },
    ],
  },
  {
    name: "Specialty & Infrastructure",
    image: "/images/industries/construction-bg.webp",
    items: [
      {
        title: "Multi-Site Coordination",
        description:
          "Manage workforce allocation across multiple job sites from a single platform.",
      },
      {
        title: "Payroll & Prevailing Wage",
        description:
          "Handle prevailing wage requirements, certified payroll, and union compliance effortlessly.",
      },
      {
        title: "Retention & Upskilling",
        description:
          "Reduce turnover with career development programs and apprenticeship support.",
      },
    ],
  },
];

export default function ConstructionPage() {
  return (
    <IndustryPage
      title="Construction Staffing & Workforce Solutions"
      subtitle="Build Smarter Teams for Every Project"
      heroDescription="Having the right team is critical to keeping construction projects on time and within budget. Esteemed provides AI-powered staffing, compliance management, and workforce planning designed for the unique demands of the construction industry."
      heroImage="/images/industries/construction-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Ready to Build a Smarter Workforce?"
      closingText="From skilled trades to project management, Esteemed helps you staff every phase of construction with confidence."
    />
  );
}
