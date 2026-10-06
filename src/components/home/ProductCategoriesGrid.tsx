"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import CategoryIcon from "@/components/ui/CategoryIcon";

const categoryTags: Record<string, string[]> = {
  solvents: ["IPA 99%", "Butyl Glycol", "Xylene", "Ethyl Alcohol"],
  plasticizers: ["DOP 99.5%", "DOTP", "DBP", "DINP"],
  "pigments-fillers": ["Titanium TiO2", "Lithopone", "Carbon Black"],
  "titanium-dioxide": ["Rutile Grade", "Anatase Grade", "High Opacity"],
  "synthetic-resins": ["Epoxy CYD-128", "Alkyd Resin", "Maleic Resin"],
  "industrial-acids": ["Formic Acid 85%", "Acetic Acid", "Phosphoric"],
  "other-raw-materials": ["Hydrogen Peroxide", "Caustic Soda", "Additives"],
};

export default function ProductCategoriesGrid() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-base border-b border-border">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              INDUSTRIAL CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Bulk Chemical Categories
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-[420px]">
            Direct wholesale inventory stored in Karachi. Fulfilling single drums, IBC totes, and metric tons with guaranteed honest grade purity.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.slug).length;
            const tags = categoryTags[cat.slug] || ["Ready Stock", "Bulk Packaging", "Genuine Quality"];

            return (
              <div
                key={cat.slug}
                className="bg-surface-muted p-2.5 sm:p-3 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between border border-border-subtle hover:border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-surface rounded-[20px] sm:rounded-[26px] p-5 sm:p-6 sm:min-h-[290px] flex flex-col justify-between border border-border shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-accent text-white shadow-xs group-hover:scale-105 group-hover:bg-accent-hover transition-all duration-300">
                        <CategoryIcon category={cat.slug} size={26} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-muted text-[11px] font-bold text-ink border border-border">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {count} Items
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight mb-2 min-h-[56px] sm:min-h-[64px] flex items-center group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4 min-h-[48px] line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Chemical Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-muted text-[10px] sm:text-[11px] font-semibold text-ink-secondary border border-border-subtle"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Pill inside container */}
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="mt-2 px-5 py-3 rounded-[18px] bg-surface hover:bg-surface-hover border border-border flex items-center justify-between text-xs font-bold text-ink transition-all group-hover:shadow-xs"
                >
                  <span>Explore {cat.name}</span>
                  <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs group-hover:translate-x-1 group-hover:bg-accent-hover transition-all shadow-xs">
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Catalog Link */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-surface-inverse text-ink-inverse text-xs sm:text-sm font-extrabold hover:bg-accent hover:text-white transition-all shadow-md group"
          >
            <span>View Complete 80+ Chemical Catalog &amp; Specifications</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
