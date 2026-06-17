import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Financial Services Workforce Solutions | Esteemed",
  description:
    "Hire, manage, and retain top financial talent with AI-powered recruiting, compliance, and scalable workforce planning for banking, fintech, and insurance.",
};

const verticals = [
  {
    name: "Banking & Capital Markets",
    image: "/images/industries/banking.jpg",
    items: [
      {
        title: "Regulatory-Ready Talent",
        description:
          "Source compliance officers, analysts, and risk specialists pre-screened for financial regulations.",
      },
      {
        title: "Rapid Onboarding",
        description:
          "Accelerate time-to-productivity with streamlined background checks and credentialing.",
      },
      {
        title: "Retention Strategies",
        description:
          "Reduce costly turnover with AI-driven engagement and career pathing programs.",
      },
    ],
  },
  {
    name: "Fintech & Payments",
    image: "/images/industries/fintech.jpg",
    items: [
      {
        title: "Engineering Talent",
        description:
          "Access software engineers, data scientists, and product managers who understand fintech.",
      },
      {
        title: "Global Scaling",
        description:
          "Hire internationally with EOR services that handle payroll, taxes, and local compliance.",
      },
      {
        title: "Agile Teams",
        description:
          "Build and disband project teams quickly to match your product development cycles.",
      },
    ],
  },
  {
    name: "Insurance & Risk Management",
    image: "/images/industries/insurance.jpg",
    items: [
      {
        title: "Actuarial & Underwriting",
        description:
          "Find niche actuarial, underwriting, and claims talent through AI-powered matching.",
      },
      {
        title: "Compliance Automation",
        description:
          "Stay ahead of state and federal insurance regulations with automated monitoring.",
      },
      {
        title: "Digital Transformation",
        description:
          "Staff digital initiatives with technologists who understand insurance workflows.",
      },
    ],
  },
];

export default function FinancialServicesPage() {
  return (
    <IndustryPage
      title="Hire, Manage, and Retain Top Financial Talent"
      subtitle="Workforce Solutions for Financial Services"
      heroDescription="The financial services industry demands precision, compliance, and speed. Esteemed delivers AI-powered recruiting, employer-of-record services, and workforce analytics tailored to banking, fintech, and insurance."
      heroImage="/images/industries/financial-services-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Ready to Strengthen Your Financial Workforce?"
      closingText="From compliance-ready talent to global scaling, Esteemed helps financial services firms hire smarter and grow faster."
    />
  );
}
