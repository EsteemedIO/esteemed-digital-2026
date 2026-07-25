"use client";

import { useState } from "react";
import TickRounded from "@/components/TickRounded";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const plans = [
  {
    name: "Starter Website",
    price: "$499",
    period: "one-time",
    desc: "A clean, professional website to get your business online fast.",
    features: [
      "Up to 5 custom-designed pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "Launch within 2 weeks",
    ],
  },
  {
    name: "Professional Website",
    price: "$1,499",
    period: "one-time",
    popular: true,
    desc: "A full marketing site with content strategy and conversion optimization.",
    features: [
      "Up to 10 custom-designed pages",
      "Content strategy & copywriting",
      "Advanced SEO & analytics",
      "Blog or news section",
      "CMS integration",
      "Social media integration",
      "2 rounds of revisions",
      "Launch within 3 weeks",
    ],
  },
  {
    name: "Premium Ecommerce",
    price: "$2,999",
    period: "one-time",
    desc: "A full online store built on WordPress + WooCommerce or Esteemed Commerce.",
    features: [
      "Up to 20 custom-designed pages",
      "WordPress + WooCommerce or Esteemed Commerce",
      "Product catalog & inventory management",
      "Shopping cart & secure checkout",
      "Subscription & recurring billing support",
      "Payment gateway integration",
      "Advanced SEO & analytics",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Enterprise Website",
    price: "Custom",
    period: "scoped",
    desc: "Complex builds — web apps, migrations, multi-site, and large-scale projects.",
    features: [
      "Unlimited pages & custom features",
      "Custom web application development",
      "API integrations & data migration",
      "Multi-site & multi-language support",
      "Dedicated project manager",
      "Ongoing support & hosting",
      "Performance & security audit",
      "Flexible timeline",
    ],
  },
];

export default function ServicePlans() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <>
      <section id="plans" className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto px-6" style={{ maxWidth: 1240 }}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Choose a Website Design service plan
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Pick the plan that fits your project. Every plan includes a
              dedicated designer and managed delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 p-8 flex flex-col ${
                  plan.popular
                    ? "border-ink shadow-lg"
                    : "border-zinc-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink h-12 flex items-start">{plan.name}</h3>
                <div className="h-14 flex items-center">
                  <span className="text-4xl font-extrabold text-ink tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period !== "scoped" && (
                    <span className="text-sm text-zinc-500 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 min-h-[40px]">
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <TickRounded className="w-7 h-7" />
                      <span className="text-sm text-zinc-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan.name)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-colors ${
                    plan.popular
                      ? "bg-accent text-ink hover:bg-accent-hover"
                      : "bg-ink text-white hover:bg-zinc-800"
                  }`}
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-500 mt-8">
            Additional pages available at $85/hr or $75/hr with a 10-hour commitment.
            Free rebuild included with a 12-month hosting plan.
          </p>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={selectedPlan}
      />
    </>
  );
}
