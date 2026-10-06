"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Why is Al Mobeen Enterprise considered the premier bulk chemical dealer in Karachi?",
    a: "Operating from Jodia Bazar since 1995, Al Mobeen Enterprise has built a 30-year legacy of transparent dealing, direct wholesale pricing, and uninterrupted bulk chemical supply. We maintain direct partnerships with tier-1 international importers, ensuring certified purity, original manufacturer COAs, and rapid dispatch across Karachi and Pakistan.",
  },
  {
    q: "Where is your main office located in Jodia Bazar, Karachi?",
    a: "Our central trading desk is located at G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi. Procurement officers and plant managers are welcome to visit our office during business hours (Monday to Saturday, 9:00 AM to 6:00 PM) for in-person consultations, sample inspections, and contract terms.",
  },
  {
    q: "What bulk chemicals do you specialize in supplying?",
    a: "We specialize in high-volume industrial raw materials including Solvents (IPA, Butanol, Butyl Glycol, Ethyl Alcohol, Xylene), Plasticizers (DOP, DOTP, DBP), Pigments & Fillers (Titanium Dioxide Rutile & Anatase, Lithopone), Synthetic Resins (Epoxy, Alkyd, Maleic), Industrial Acids, and specialized performance additives for paints, textiles, and plastics.",
  },
  {
    q: "Do you supply bulk chemical orders outside Karachi across Pakistan?",
    a: "Yes. While our primary warehouse hubs are in Karachi, we routinely dispatch bulk consignments across Pakistan, including major industrial zones in Lahore, Faisalabad, Gujranwala, Sialkot, Sheikhupura, Rawalpindi, and Peshawar via trusted freight and logistics partners.",
  },
  {
    q: "How can procurement managers obtain bulk price quotes and Certificate of Analysis (COA)?",
    a: "You can assemble your required chemical items using our online Quote Drawer, or message our Jodia Bazar desk directly on WhatsApp at +92 332 1134530. We promptly provide formal commercial quotations, batch purity specifications, and manufacturer test certificates (COA).",
  },
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-14 sm:py-20 md:py-24 bg-base border-b border-border">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              FAQ&apos;S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink mb-3 sm:mb-5">
              You Ask, <br className="hidden sm:inline" />We Answer
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-[360px]">
              Everything you need to know about purchasing bulk industrial chemicals, delivery terms, and purity verification in Karachi.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`p-4 sm:p-6 rounded-[18px] sm:rounded-[22px] cursor-pointer transition-all duration-300 border ${
                    isOpen
                      ? "bg-surface border-border shadow-xs"
                      : "bg-surface-subtle border-border-subtle hover:bg-surface-muted"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-accent text-white shadow-xs"
                          : "bg-surface text-ink border border-border"
                      }`}
                    >
                      <span className="text-base sm:text-lg font-bold leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 sm:pt-4 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border mt-3 sm:mt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
