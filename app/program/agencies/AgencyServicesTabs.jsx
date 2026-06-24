"use client";

import Image from "next/image";
import { Tab, Tabs } from "@heroui/react";

const serviceTabs = [
  {
    key: "staffing",
    title: "Recruitment & Staffing",
    image: "/images/program/agencies/coworking.jpg",
    items: [
      {
        title: "Total Talent Management",
        body: "Freelance, contract, and full-time hiring for creative, digital, and tech agencies, with AI-powered matching and scalable solutions for project-based or ongoing hiring needs.",
      },
      {
        title: "Direct Account Manager",
        body: "Your account manager handles everything on your account. They are your Esteemed Program Manager.",
      },
      {
        title: "Recruitment Process Outsourcing (RPO)",
        body: "Esteemed RPO provides access to top recruiters under your management as a seamless part of your team. Our team is spread across the globe and can accommodate operations in several countries.",
      },
    ],
  },
  {
    key: "workforce",
    title: "Workforce Management",
    image: "/images/program/agencies/workforce.jpg",
    items: [
      {
        title: "Effortless Onboarding & Payments",
        body: "Ensure smooth hiring, payroll processing, and benefits administration for remote and global teams.",
      },
      {
        title: "Employer of Record (EOR) Services",
        body: "Hire internationally without the legal and tax complexities, ensuring compliance in every location.",
      },
      {
        title: "Data-Driven Workforce Insights",
        body: "Gain real-time visibility into staffing trends, performance, and workforce optimization.",
      },
    ],
  },
  {
    key: "workspace",
    title: "Flexible Workspace",
    image: "/images/program/agencies/workspace.webp",
    items: [
      {
        title: "Global Workspace Access",
        body: "Get instant access to coworking spaces, private offices, and meeting rooms across 4,000+ locations in 130 countries.",
      },
      {
        title: "Exclusive Member Benefits",
        body: "Esteemed members enjoy discounted rates on flexible office solutions through our partnership with Regus and IWG brands.",
      },
      {
        title: "Hybrid Team Support",
        body: "Seamlessly blend remote and in-office work with scalable workspace solutions designed for modern teams.",
      },
    ],
  },
];

export default function AgencyServicesTabs() {
  return (
    <Tabs
      aria-label="Managed services for agencies"
      variant="underlined"
      classNames={{
        base: "w-full",
        tabList: "w-full justify-center gap-2 border-b border-zinc-200",
        tab: "h-12 px-2 md:px-4",
        tabContent: "font-semibold text-zinc-600 group-data-[selected=true]:font-bold group-data-[selected=true]:text-ink",
        cursor: "bg-ink",
        panel: "pt-8",
      }}
    >
      {serviceTabs.map((tab) => (
        <Tab key={tab.key} title={tab.title}>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {tab.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="relative min-h-[340px] overflow-hidden rounded-[20px] bg-zinc-100 md:min-h-[430px]">
              <Image src={tab.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
