"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    num: "01",
    title: "Commercial Specification & Inquiries",
    desc: "We analyze your factory requirements: required chemical purity, monthly consumption, and preferred packaging (200L drums, 1000L IBC totes, or ISO bulk tanks).",
  },
  {
    num: "02",
    title: "Exact Grade Purity — We Sell What We Claim",
    desc: "Whether your process requires 91%, 95%, or 99% purity, we deliver the exact honest grade specified with zero adulteration. Sample testing and manufacturer specs available upon request.",
  },
  {
    num: "03",
    title: "Competitive Wholesale Spot Pricing",
    desc: "Leveraging 30 years of high-volume market presence in Jodia Bazar to deliver transparent daily market rates, bulk cost savings, and direct delivery to your factory floor.",
  },
  {
    num: "04",
    title: "Rigorous Quality & Tamper-Evident Sealing",
    desc: "Consignments sourced directly from verified importers are dispatched with rigorous tamper-evident seals and certified specifications.",
  },
  {
    num: "05",
    title: "Nationwide Freight Delivery",
    desc: "Direct delivery across Karachi industrial estates (Korangi, Landhi, FB Area, Hub) and expedited transit to industrial facilities across Punjab and KPK.",
  },
  {
    num: "06",
    title: "Commercial Handover & Documentation",
    desc: "Complete documentation package including commercial invoice, delivery challan, verified test reports, and continuous after-sales technical support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="workflow" className="py-14 sm:py-20 md:py-24 bg-base border-b border-border">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Workflow Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              PROCUREMENT PIPELINE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink mb-3 sm:mb-5">
              The Action Behind <span className="text-accent">Bulk Supply</span>
            </h2>
            <p className="text-xs sm:text-base text-ink-muted leading-relaxed max-w-[400px] mb-6 sm:mb-8">
              A disciplined, verified methodology engineered to bring purity verification, price transparency, and rapid dispatch to every industrial customer.
            </p>

            <div className="hidden lg:flex flex-col gap-3">
              <div className="p-4 rounded-[20px] bg-surface-muted border border-border">
                <span className="text-xs font-bold text-ink block mb-0.5">
                  ✓ We Sell Exactly What We Claim
                </span>
                <span className="text-[11px] text-ink-muted">
                  Guaranteed honest grade purity with zero adulteration on every order.
                </span>
              </div>
              <div className="p-4 rounded-[20px] bg-surface-muted border border-border">
                <span className="text-xs font-bold text-ink block mb-0.5">
                  ✓ Urgent Karachi &amp; Upcountry Dispatches
                </span>
                <span className="text-[11px] text-ink-muted">
                  Trusted freight partners for rapid nationwide delivery.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Process Cards */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-surface p-4 sm:p-7 rounded-[18px] sm:rounded-[24px] border border-border shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 flex items-start gap-3 sm:gap-6 cursor-pointer group"
              >
                <span className="text-xl sm:text-3xl font-black text-accent tracking-tight shrink-0 font-mono">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-ink tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Highlight Final Step */}
            <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md mt-6">
              <div className="bg-surface-inverse text-ink-inverse p-5 sm:p-7 flex items-start gap-4 sm:gap-6 border border-border-inverse">
                <span className="text-2xl sm:text-3xl font-black text-accent tracking-tight shrink-0 font-mono">
                  ✓
                </span>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-ink-inverse tracking-tight mb-1.5">
                    Ready to Procure Bulk Chemicals?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-inverse-muted leading-relaxed">
                    Contact our Jodia Bazar desk directly for spot quotes, technical specifications, and physical sample inspection.
                  </p>
                </div>
              </div>
              <div className="bg-accent text-ink-inverse py-3.5 sm:py-4 px-6 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-extrabold text-ink-inverse uppercase tracking-wider">
                  Karachi Trading Desk
                </span>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-extrabold text-ink-inverse uppercase tracking-widest hover:underline flex items-center gap-1.5"
                >
                  <span>Request Spot Quote</span>
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
