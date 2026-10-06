"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { useQuote } from "@/components/QuoteProvider";
import { useToast } from "@/components/ui/Toast";

const categories = [
  { key: "all", label: "All Bulk" },
  { key: "solvents", label: "Solvents" },
  { key: "plasticizers", label: "Plasticizers" },
  { key: "pigments", label: "Pigments" },
  { key: "resins", label: "Resins" },
  { key: "acids", label: "Acids" },
];

export default function HeroChemicalTerminal() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const { addItem, isInQuote } = useQuote();
  const { showToast } = useToast();

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          activeTab === "all" || p.category.toLowerCase().includes(activeTab);
        const matchesSearch =
          !search.trim() ||
          p.displayName.toLowerCase().includes(search.toLowerCase()) ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .slice(0, 4);
  }, [activeTab, search]);

  const handleAdd = (p: Product) => {
    addItem(p.slug, p.displayName, p.category);
    showToast(`${p.displayName} added to Quote List`);
  };

  return (
    <div className="bg-surface-muted p-2.5 sm:p-3.5 rounded-[28px] sm:rounded-[32px] border border-border shadow-xl transition-all">
      <div className="bg-surface rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 border border-border-subtle shadow-xs">
        {/* Top Terminal Status Header */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3.5 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs font-black tracking-tight uppercase text-ink">
              Procurement Desk Stock
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-light border border-accent-border text-[10px] sm:text-[11px] font-bold text-accent">
            <span>80+ Items Ready Stock</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3.5">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-subtle"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search chemical (e.g. DOP, Titanium, IPA, Resin)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-muted text-xs sm:text-sm font-medium text-ink placeholder:text-ink-subtle border border-border focus:border-accent focus:bg-surface focus:outline-none transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-subtle hover:text-ink cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-hide mb-4">
          {categories.map((c) => {
            const isActive = activeTab === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActiveTab(c.key)}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-surface-inverse text-ink-inverse shadow-xs"
                    : "bg-surface-muted text-ink-muted hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Product List */}
        <div className="space-y-2.5">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-ink-subtle">
              No chemical found matching &quot;{search}&quot;.{" "}
              <Link href="/products" className="text-accent font-bold underline ml-1">
                View Full Catalog
              </Link>
            </div>
          ) : (
            filtered.map((item) => {
              const inQuote = isInQuote(item.slug);
              const waText = encodeURIComponent(
                `Hello Al Mobeen Enterprise, I need quotation for bulk ${item.displayName} (${item.packaging}).`
              );
              const waUrl = `https://wa.me/923321134530?text=${waText}`;

              return (
                <div
                  key={item.slug}
                  className="p-3 sm:p-3.5 rounded-[18px] bg-surface-muted border border-border-subtle flex items-center justify-between gap-3 hover:border-border transition-all duration-200 group"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-xs sm:text-sm font-extrabold text-ink truncate hover:text-accent transition-colors"
                      >
                        {item.displayName}
                      </Link>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface text-ink-secondary border border-border shrink-0">
                        {item.purity || "Bulk Spec"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-ink-subtle">
                      <span>{item.packaging}</span>
                      <span>•</span>
                      <span className="text-success font-semibold">
                        Ready Stock
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                        inQuote
                          ? "bg-success text-ink-inverse"
                          : "bg-surface text-ink border border-border hover:bg-surface-inverse hover:text-ink-inverse"
                      }`}
                      title={inQuote ? "In Quote List" : "Add to Quote"}
                    >
                      {inQuote ? "✓ Added" : "+ Quote"}
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-success text-ink-inverse hover:opacity-90 flex items-center justify-center transition-transform hover:scale-105"
                      title="WhatsApp Inquiry"
                      aria-label={`Inquire about ${item.displayName} on WhatsApp`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Link in Terminal */}
        <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] sm:text-xs">
          <span className="text-ink-subtle font-medium">Original Manufacturer COA Included</span>
          <Link
            href="/products"
            className="font-extrabold text-ink hover:text-accent inline-flex items-center gap-1 transition-colors"
          >
            <span>View All 80+ Chemicals</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
