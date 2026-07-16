"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the process work?",
    a: "Start with a free consultation where we learn about your business and goals. We scope the work, assign the right expert from our network, and keep you updated throughout. You review, approve, and we launch.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most standard website projects go live within 2–4 weeks. Content, design, and support projects vary — we'll give you a clear timeline during your consultation.",
  },
  {
    q: "Who will work on my project?",
    a: "You'll be matched with vetted professionals from our 35,000-strong Esteemed Colleagues network. Every expert is screened for skill, reliability, and communication.",
  },
  {
    q: "Do I own my website and content?",
    a: "Always. Your site, content, domain, and data are yours. If you ever leave, you take everything with you.",
  },
  {
    q: "What if I already have a website?",
    a: "We can rebuild it fresh on our platform, migrate it from WordPress, Drupal, Squarespace, or Wix — or simply host and maintain your current site as-is.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts for one-time projects. Support plans and hosting run month-to-month or on an annual term with savings. Cancel anytime.",
  },
  {
    q: "What's included in the free consultation?",
    a: "A 30-minute call with one of our experts to understand your goals, review your current site (if any), and recommend the right approach and budget.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-bold text-ink pr-4">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function HireExpertFAQ() {
  return (
    <section className="py-20 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-ink mb-10 text-center">
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
