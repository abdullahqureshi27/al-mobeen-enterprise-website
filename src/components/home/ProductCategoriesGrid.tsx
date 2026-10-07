"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
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
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Bulk Chemical Categories
            </h2>
          </div>
          <p className="text-xs sm:text-base text-ink-muted leading-relaxed max-w-[420px]">
            Direct wholesale supply of bulk industrial chemicals. Fulfilling single drums, IBC totes, and metric tons with daily spot rates and honest grade purity directly to factories nationwide.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.slug).length;
            const tags = categoryTags[cat.slug] || ["Direct Supply", "Bulk Packaging", "Genuine Quality"];

            return (
              <div
                key={cat.slug}
                className="bg-surface-muted p-2 sm:p-3 rounded-[20px] sm:rounded-[32px] flex flex-col justify-between border border-border-subtle hover:border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-surface rounded-[16px] sm:rounded-[26px] p-4 sm:p-6 sm:min-h-[290px] flex flex-col justify-between border border-border shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-accent text-ink-inverse shadow-xs group-hover:scale-105 group-hover:bg-accent-hover transition-all duration-300">
                        <CategoryIcon category={cat.slug} size={24} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-muted text-[10.5px] sm:text-[11px] font-bold text-ink border border-border">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {count} Items
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-extrabold text-ink tracking-tight mb-1.5 sm:mb-2 min-h-[44px] sm:min-h-[64px] flex items-center group-hover:text-accent transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-3 sm:mb-4 min-h-[40px] sm:min-h-[48px] line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Chemical Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-border">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-surface-muted text-[10px] sm:text-[11px] font-semibold text-ink-secondary border border-border-subtle"
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
                  className="mt-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-[14px] sm:rounded-[18px] bg-surface hover:bg-surface-hover border border-border flex items-center justify-between text-[11px] sm:text-xs font-bold text-ink transition-all group-hover:shadow-xs gap-2"
                >
                  <span className="truncate">Explore &amp; Order {cat.name}</span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent text-ink-inverse flex items-center justify-center text-[10px] sm:text-xs shrink-0 group-hover:translate-x-1 group-hover:bg-accent-hover transition-all shadow-xs">
                    <FaArrowRight className="w-2.5 h-2.5" />
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
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-surface-inverse text-ink-inverse text-xs sm:text-sm font-extrabold hover:bg-accent hover:text-ink-inverse transition-all shadow-md group"
          >
            <span>View Complete 80+ Chemical Catalog &amp; Order Online</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
