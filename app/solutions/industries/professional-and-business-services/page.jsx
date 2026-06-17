import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Professional & Business Services Workforce Solutions | Esteemed",
  description:
    "AI-powered talent solutions for legal, financial, marketing, and consulting firms. Flexible hiring, compliance, and workforce management for professional services.",
};

const verticals = [
  {
    name: "Legal & Financial",
    image: "/images/industries/law-meeting.jpg",
    items: [
      {
        title: "Specialized Talent",
        description:
          "Access paralegals, attorneys, accountants, and consultants with verified credentials and experience.",
      },
      {
        title: "Confidentiality & Compliance",
        description:
          "Background checks, NDA management, and regulatory compliance built into every engagement.",
      },
      {
        title: "Project-Based Teams",
        description:
          "Staff litigation support, audits, and M&A projects with flexible contract professionals.",
      },
    ],
  },
  {
    name: "Marketing & Creative",
    image: "/images/industries/woman-working-coffee.webp",
    items: [
      {
        title: "Creative Talent On Demand",
        description:
          "Designers, copywriters, strategists, and digital marketers matched to your brand and culture.",
      },
      {
        title: "Campaign Staffing",
        description:
          "Scale teams up for launches and campaigns without long-term overhead commitments.",
      },
      {
        title: "Analytics & Performance",
        description:
          "Hire data analysts and marketing technologists who turn insights into growth.",
      },
    ],
  },
];

export default function ProfessionalAndBusinessServicesPage() {
  return (
    <IndustryPage
      title="Empowering Professional and Business Services"
      subtitle="Talent Solutions for Service-Driven Excellence"
      heroDescription="Professional and business services firms thrive on expertise and relationships. Esteemed provides AI-powered recruiting, flexible staffing, and workforce management that help you deliver exceptional client outcomes while managing costs."
      heroImage="/images/industries/professional-services-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Elevate Your Service Delivery"
      closingText="From legal to creative, Esteemed helps professional services firms find, manage, and retain the specialized talent that drives client success."
    />
  );
}
