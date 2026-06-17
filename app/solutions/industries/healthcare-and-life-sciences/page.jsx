import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: "Healthcare & Life Sciences Workforce Solutions | Esteemed",
  description:
    "AI-powered staffing and workforce management for healthcare providers and life sciences organizations. Compliant hiring, credentialing, and scalable teams.",
};

const verticals = [
  {
    name: "Healthcare Providers",
    image: "/images/industries/med-tech.jpg",
    items: [
      {
        title: "Clinical & IT Staffing",
        description:
          "Source credentialed healthcare IT professionals, EHR specialists, and clinical support staff.",
      },
      {
        title: "Credentialing & Compliance",
        description:
          "Automated license verification, background checks, and HIPAA compliance management.",
      },
      {
        title: "Workforce Flexibility",
        description:
          "Scale clinical and administrative teams for seasonal demand, facility openings, or special projects.",
      },
    ],
  },
  {
    name: "Life Sciences",
    image: "/images/industries/lab.jpg",
    items: [
      {
        title: "Research & Development Talent",
        description:
          "Find scientists, biostatisticians, and regulatory affairs specialists with domain expertise.",
      },
      {
        title: "Clinical Trial Support",
        description:
          "Staff clinical trials with qualified monitors, data managers, and medical writers.",
      },
      {
        title: "Global Compliance",
        description:
          "Navigate FDA, EMA, and international regulatory requirements with compliant hiring practices.",
      },
    ],
  },
];

export default function HealthcareAndLifeSciencesPage() {
  return (
    <IndustryPage
      title="Solutions Tailored to Healthcare & Life Sciences"
      subtitle="Workforce Innovation for Better Outcomes"
      heroDescription="Healthcare and life sciences organizations face unique workforce challenges — from credentialing and compliance to rapid scaling for clinical trials. Esteemed delivers AI-powered talent solutions that keep your teams staffed, compliant, and focused on what matters most."
      heroImage="/images/industries/healthcare-hero.webp"
      ctaText="Get Started"
      ctaHref="/signup"
      verticals={verticals}
      closingHeading="Drive Healthcare & Research Innovation"
      closingText="From bedside to bench, Esteemed helps healthcare and life sciences organizations build the teams that advance patient care and scientific discovery."
    />
  );
}
