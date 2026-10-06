"use client";

import Link from "next/link";
import { getBestSellers } from "@/data/products";

export default function BestSellersMarquee() {
  const bestSellers = getBestSellers();
  const items = [...bestSellers, ...bestSellers];

  return (
    <section className="py-8 sm:py-10 bg-surface-muted border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink">
            High-Demand Bulk Chemicals • Direct Nationwide Supply
          </h3>
        </div>
        <span className="text-[11px] font-bold text-ink-muted">
          Daily Spot Market Rates • Metric Ton &amp; Drum Consignments
        </span>
      </div>

      <div className="marquee-container select-none">
        <div className="marquee-track">
          {items.map((product, i) => (
            <Link
              href={`/products/${product.slug}`}
              key={`${product.slug}-${i}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap border border-border bg-surface text-ink shadow-xs hover:border-accent hover:text-accent transition-all cursor-pointer group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <span>{product.displayName}</span>
              <span className="text-[10px] text-ink-muted font-semibold px-2 py-0.5 rounded-full bg-surface-muted border border-border-subtle">
                {product.packaging}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
