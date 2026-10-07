"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  badgeText?: string;
}

export default function PageHero({ title, description, badgeText }: PageHeroProps) {
  return (
    <div className="relative pt-14 pb-10 sm:pt-20 sm:pb-16 md:pt-28 md:pb-20 overflow-hidden bg-base border-b border-border">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-[0.15] blur-[100px]"></div>
        <div className="absolute left-1/3 right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent opacity-[0.1] blur-[120px]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-accent-light border border-accent-border text-ink text-[11px] sm:text-xs font-semibold tracking-tight mb-4 sm:mb-5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{badgeText}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-ink mb-3 sm:mb-4 leading-[1.12] tracking-[-0.03em]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto text-ink-muted"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
