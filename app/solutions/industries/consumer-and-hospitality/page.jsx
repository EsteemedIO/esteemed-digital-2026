import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Consumer & Hospitality Workforce Solutions | Esteemed",
  description:
    "AI-powered staffing and workforce management for retail, hospitality, and consumer brands. Flexible hiring, compliance, and scalable teams.",
};

const verticals = [
  {
    name: "Retail",
    image: "/images/industries/man-retail.jpg",
    items: [
      {
        title: "Hiring",
        description:
          "Source and onboard seasonal and full-time retail talent quickly with AI-matched candidates.",
      },
      {
        title: "Payroll & Compliance",
        description:
          "Automate payroll across locations and stay compliant with local labor regulations.",
      },
      {
        title: "Employee Engagement",
        description:
          "Boost retention with data-driven engagement programs tailored to frontline teams.",
      },
    ],
  },
  {
    name: "Hospitality",
    image: "/images/industries/hotel.jpg",
    items: [
      {
        title: "Scalable Staffing",
        description:
          "Ramp up or down for peak seasons without sacrificing service quality.",
      },
      {
        title: "Global Hiring & Compliance",
        description:
          "Hire internationally with full EOR support, tax handling, and benefits administration.",
      },
      {
        title: "Workforce Optimization",
        description:
          "Use analytics to forecast demand, optimize scheduling, and reduce labor costs.",
      },
    ],
  },
];

export default function ConsumerAndHospitalityPage() {
  return (
    <IndustryPage
      title="Workforce Transformation for Consumer & Hospitality"
      subtitle="Talent Solutions for Retail & Hospitality"
      heroDescription="From seasonal surges to global expansion, consumer and hospitality brands need flexible, compliant workforce solutions. Esteemed delivers AI-powered hiring, payroll, and workforce management so you can focus on delivering exceptional experiences."
      heroImage="/images/industries/consumer-hospitality-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Ready to Elevate Your Workforce?"
      closingText="Partner with Esteemed to build agile teams that scale with demand and deliver exceptional customer experiences."
    />
  );
}
