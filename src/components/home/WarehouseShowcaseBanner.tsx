"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function WarehouseShowcaseBanner() {
  return (
    <section
      className="relative min-h-[560px] sm:min-h-[620px] lg:h-screen w-full overflow-hidden bg-surface-inverse flex items-center justify-center text-ink-inverse py-14 sm:py-20 lg:py-0"
      aria-label="Direct Bulk Chemical Logistics Showcase"
    >
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/warehouse-showcase.jpg"
          alt="Al Mobeen Enterprise Bulk Chemical Warehouse & Logistics Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
        />
        {/* Layered Vignette Overlays for Maximum Contrast & Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-inverse via-surface-inverse/50 to-surface-inverse/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-inverse/60 via-transparent to-surface-inverse/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 text-center flex flex-col items-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-surface-inverse/85 backdrop-blur-md border border-border-inverse text-[10.5px] sm:text-[13px] font-bold uppercase tracking-wider mb-4 sm:mb-6 shadow-lg max-w-full">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="truncate">Nationwide Chemical Logistics • Karachi Terminal</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-ink-inverse leading-[1.12] max-w-4xl mb-3 sm:mb-5">
          Ready Warehouse Inventory.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-accent">
            Direct Factory Supply.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-ink-inverse-muted max-w-2xl leading-relaxed mb-6 sm:mb-8">
          Continuous warehouse inventory of 200L steel drums, 1,000L IBC totes, and bulk metric tons. Sourced from trusted global manufacturers and dispatched directly to industrial plants across Pakistan.
        </p>

        {/* Dual Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full sm:w-auto">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold bg-surface text-primary rounded-full hover:bg-surface-hover transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>Explore 80+ Chemicals</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-ink-inverse flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
              <FaArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>

          <a
            href="https://wa.me/923321134530?text=Hello%20Al%20Mobeen%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20chemical%20warehouse%20inventory%20and%20spot%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold bg-surface-inverse/70 hover:bg-surface-inverse text-ink-inverse border border-border-inverse rounded-full backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span>Contact Trading Desk</span>
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          </a>
        </div>

        {/* 3 Trust Metric Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 pt-5 sm:pt-6 border-t border-border-inverse/60 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-semibold text-ink-inverse-muted">
            <span className="text-accent text-base shrink-0">✓</span>
            <span>200L Sealed Drums &amp; IBC Totes</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-semibold text-ink-inverse-muted">
            <span className="text-accent text-base shrink-0">✓</span>
            <span>Zero-Adulteration Purity Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-semibold text-ink-inverse-muted">
            <span className="text-accent text-base shrink-0">✓</span>
            <span>Same-Day Dispatch in Karachi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
