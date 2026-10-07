"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { industries } from "@/data/industries";

const industryIcons: Record<string, ReactNode> = {
  "paints-coatings": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M12 11v5" />
      <path d="M8 16h8l-1 5H9l-1-5z" />
    </svg>
  ),
  "printing-inks": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3h12v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  ),
  "plastics-pvc": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  "textile-dyeing": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="M13 6h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3" />
      <path d="M13 14h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4" />
    </svg>
  ),
  leather: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  "detergents-cleaning": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  ),
  "general-industrial": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  ),
};

export default function IndustriesSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-base border-b border-border">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              MANUFACTURING SECTORS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Industries We Power
            </h2>
          </div>
          <p className="text-xs sm:text-base text-ink-muted leading-relaxed max-w-[420px]">
            Tailored chemical formulation raw materials supplied to industrial manufacturers in Karachi, Punjab, and KPK.
          </p>
        </div>

        {/* Nested Cards Grid - Equal 4x2 Symmetrical Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="bg-surface-muted p-2 sm:p-3 rounded-[20px] sm:rounded-[28px] flex flex-col justify-between border border-border-subtle hover:border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-surface rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 h-full min-h-[210px] sm:min-h-[250px] flex flex-col justify-between border border-border shadow-xs">
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-accent text-ink-inverse flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent-hover group-hover:scale-105 transition-all duration-300 shadow-xs">
                    {industryIcons[ind.slug] || industryIcons["general-industrial"]}
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-ink tracking-tight mb-1.5 sm:mb-2 min-h-[36px] sm:min-h-[54px] flex items-center group-hover:text-accent transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 min-h-[44px] sm:min-h-[52px]">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-border flex items-center justify-between text-[11px] font-bold text-ink">
                  <span>View Chemicals</span>
                  <span className="w-5 h-5 rounded-full bg-accent text-ink-inverse flex items-center justify-center text-xs group-hover:translate-x-1 group-hover:bg-accent-hover transition-all shadow-xs">
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* 8th Slot: Custom Formulation & Other Sectors */}
          <Link
            href="/contact"
            className="bg-surface-muted p-2.5 sm:p-3 rounded-[24px] sm:rounded-[28px] flex flex-col justify-between border border-border-subtle hover:border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="bg-surface rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 h-full min-h-[250px] flex flex-col justify-between border border-border shadow-xs">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-accent text-ink-inverse flex items-center justify-center mb-4 group-hover:bg-accent-hover group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-ink tracking-tight mb-2 min-h-[50px] sm:min-h-[54px] flex items-center group-hover:text-accent transition-colors">
                  Custom Industry Sourcing
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 min-h-[52px]">
                  Looking for bulk raw materials for other specialized sectors? Inquire with our Jodia Bazar desk for tailored sourcing.
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-bold text-ink">
                <span>Request Custom Supply</span>
                <span className="w-5 h-5 rounded-full bg-accent text-ink-inverse flex items-center justify-center text-xs group-hover:translate-x-1 group-hover:bg-accent-hover transition-all shadow-xs">
                  <FaArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
