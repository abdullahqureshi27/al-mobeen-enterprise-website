"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroChemicalTerminal from "./HeroChemicalTerminal";

export default function HeroSection() {
  const waLink = `https://wa.me/923321134530?text=${encodeURIComponent(
    "Hello Al Mobeen Enterprise, I am inquiring about bulk chemical supply from your Jodia Bazar Karachi desk."
  )}`;

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-base border-b border-border transition-colors">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typography, CTAs & 4-Stat Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Authority Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 sm:mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light border border-accent-border text-ink text-xs sm:text-[13px] font-semibold tracking-tight shadow-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span>
                  Karachi&apos;s Trusted Bulk Chemical Hub •{" "}
                  <strong className="text-accent font-extrabold">Jodia Bazar Since 1995</strong>
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[clamp(2.1rem,4.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink mb-4 sm:mb-5"
            >
              Bulk Industrial Chemicals For{" "}
              <span className="text-ink-muted">Modern Industry.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6 sm:mb-8 max-w-[500px]"
            >
              Direct wholesale supply of bulk solvents, plasticizers (DOP/DOTP), pigments, titanium dioxide, resins, and acids. Sourced from tier-1 global importers with guaranteed manufacturer COAs.
            </motion.p>

            {/* Dual Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-ink-inverse bg-accent hover:bg-accent-hover rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore 80+ Chemicals</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-surface text-accent flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-ink bg-surface-muted hover:bg-surface-hover border border-border rounded-full transition-all duration-300 group"
              >
                <span>WhatsApp Trading Desk</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success text-ink-inverse flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* 4 Compact Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
            >
              <div className="bg-surface-muted p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] text-center border border-border flex flex-col justify-center min-h-[86px] sm:min-h-[96px]">
                <div className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-none mb-1">
                  30 <span className="text-accent">+</span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-ink-muted leading-tight">
                  Years Legacy
                </p>
              </div>

              <div className="bg-surface-muted p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] text-center border border-border flex flex-col justify-center min-h-[86px] sm:min-h-[96px]">
                <div className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-none mb-1">
                  80 <span className="text-accent">+</span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-ink-muted leading-tight">
                  Bulk Chemicals
                </p>
              </div>

              <div className="bg-surface-muted p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] text-center border border-border flex flex-col justify-center min-h-[86px] sm:min-h-[96px]">
                <div className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-none mb-1">
                  100 <span className="text-accent">%</span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-ink-muted leading-tight">
                  Verified COA
                </p>
              </div>

              <div className="bg-surface-muted p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] text-center border border-border flex flex-col justify-center min-h-[86px] sm:min-h-[96px]">
                <div className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-none mb-1">
                  500 <span className="text-accent">+</span>
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-ink-muted leading-tight">
                  MT Supplied
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Zero-Lag Chemical Procurement Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <HeroChemicalTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
