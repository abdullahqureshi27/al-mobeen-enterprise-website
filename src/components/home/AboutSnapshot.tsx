"use client";

import Link from "next/link";

const highlights = [
  {
    step: "01",
    title: "Prime Jodia Bazar Hub",
    description: "Located at G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi—Pakistan's largest chemical trading center with instant physical market access.",
    tag: "Established 1995",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "We Sell What We Claim",
    description: "Honest purity and exact chemical grading with zero adulteration. Sample testing and manufacturer specs available upon request.",
    tag: "Genuine Quality Guaranteed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Nationwide Bulk Logistics",
    description: "Swift dispatch to all Karachi industrial zones (SITE, Korangi, Landhi) plus regular freight to Lahore, Faisalabad, Gujranwala, and Peshawar.",
    tag: "Dispatched from Karachi",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
];

export default function AboutSnapshot() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-base border-b border-border transition-colors">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              SOURCING &amp; MARKET HUB
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Karachi&apos;s Chemical Capital
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-[440px]">
            Operating from Jodia Bazar since 1995, delivering direct wholesale savings on bulk solvents, plasticizers, resins, and acids.
          </p>
        </div>

        {/* 3-Card Nesting Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-surface-muted p-2.5 sm:p-3 rounded-[24px] sm:rounded-[30px] border border-border flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-surface rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 min-h-[260px] flex flex-col justify-between border border-border-subtle">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-surface-muted text-ink flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-accent group-hover:text-ink-inverse transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-sm font-extrabold text-accent">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight mb-2 min-h-[32px] sm:min-h-[36px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4 min-h-[64px] sm:min-h-[72px]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="text-[11px] font-bold text-ink">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 rounded-[24px] bg-surface-muted border border-border">
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-ink">
              Visiting Jodia Bazar Karachi?
            </h4>
            <p className="text-xs text-ink-muted">
              Our sales desk is open Monday to Saturday, 9:00 AM - 6:00 PM at Weaver Lane.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface text-xs font-bold text-ink border border-border hover:border-accent transition-colors shadow-xs"
            >
              <span>Our History</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-inverse text-xs font-bold text-ink-inverse hover:bg-accent transition-colors shadow-xs"
            >
              <span>Visit Office</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
