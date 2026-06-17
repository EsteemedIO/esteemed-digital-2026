import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Government, Education & Non-Profit Workforce Solutions | Esteemed",
  description:
    "Technology and talent solutions for mission-driven organizations. AI-powered hiring, compliance, and workforce management for government, education, and non-profits.",
};

const verticals = [
  {
    name: "Government & Public Sector",
    image: "/images/industries/library.webp",
    items: [
      {
        title: "Cleared & Credentialed Talent",
        description:
          "Access candidates with security clearances, certifications, and public-sector experience.",
      },
      {
        title: "Procurement Compliance",
        description:
          "Navigate government procurement requirements, set-aside programs, and contract vehicles.",
      },
      {
        title: "Digital Modernization",
        description:
          "Staff IT modernization and digital transformation initiatives with experienced technologists.",
      },
    ],
  },
  {
    name: "Education & Non-Profit",
    image: "/images/industries/gov-edu-nonprofit-hero.webp",
    items: [
      {
        title: "Mission-Aligned Hiring",
        description:
          "Find candidates who are passionate about education and social impact.",
      },
      {
        title: "Grant-Funded Staffing",
        description:
          "Flexible engagement models that align with grant timelines and budget cycles.",
      },
      {
        title: "Volunteer & Staff Management",
        description:
          "Streamline onboarding and management for both paid staff and volunteer teams.",
      },
    ],
  },
];

export default function GovEduNonProfitPage() {
  return (
    <IndustryPage
      title="Empowering Government, Education, and Non-profit"
      subtitle="Technology & Talent Solutions for Mission-Driven Impact"
      heroDescription="Mission-driven organizations need workforce partners who understand accountability, compliance, and purpose. Esteemed provides AI-powered talent solutions that help government agencies, schools, and non-profits build effective teams on time and on budget."
      heroImage="/images/industries/gov-edu-nonprofit-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Let's Work Together to Drive Your Mission"
      closingText="Whether you serve citizens, students, or communities, Esteemed helps you find and manage the talent that makes your mission possible."
    />
  );
}
