"use client";

import { useState, useEffect } from "react";
import { X, CalendarDays, Phone, CheckCircle } from "lucide-react";

export default function ContactModal({ open, onClose, plan }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-zinc-500" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left — service info */}
          <div className="bg-zinc-50 p-8 md:p-10 rounded-l-2xl">
            <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://esteemed.io/sites/default/files/styles/global_webp/public/2025-01/team-women.jpg.webp?itok=UlmXLT1n"
                alt="Esteemed design experts"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Website Design Services",
                  desc: "We'll build your website so you get time back to focus on your business.",
                },
                {
                  title: "Content & Marketing",
                  desc: "Our team of experts will create and manage your content strategy and digital presence.",
                },
                {
                  title: "SEO & AI Visibility",
                  desc: "We use best practices to ensure your site gets the traffic it deserves — from search and AI.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-ink flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <h4 className="font-bold text-ink text-sm">{item.title}</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2">We'll be in touch!</h3>
                <p className="text-zinc-600 max-w-sm">
                  Thanks for your interest{plan ? ` in our ${plan} plan` : ""}. An expert from our team will reach out within one business day.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 px-8 py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-ink leading-snug mb-2">
                  Get expert help building and marketing your website.
                </h3>
                <p className="text-sm text-zinc-600 mb-6">
                  Talk with an expert about your online goals.
                  {plan && <span className="block mt-1 font-semibold text-ink">Selected plan: {plan}</span>}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-3 py-3 rounded-lg border border-zinc-300 text-sm bg-white focus:outline-none focus:border-ink">
                        <option>+1</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Phone"
                        className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-bold hover:bg-zinc-800 transition-colors"
                    >
                      <CalendarDays className="w-4 h-4" />
                      Schedule a Call
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-ink text-sm font-bold hover:bg-zinc-50 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Me
                    </button>
                  </div>

                  <p className="text-sm text-zinc-500 pt-2">
                    Or call us at{" "}
                    <a href="tel:+13607914270" className="font-semibold text-ink underline">
                      (360) 791-4270
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
