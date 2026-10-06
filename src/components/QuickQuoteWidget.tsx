"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useQuote } from "./QuoteProvider";
import { useToast } from "@/components/ui/Toast";

export default function QuickQuoteWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, isInQuote, count } = useQuote();
  const { showToast } = useToast();

  const openDrawer = () => {
    window.dispatchEvent(new CustomEvent("toggle-quote-drawer"));
  };

  const featuredBulk = products.filter((p) => p.bestSeller).slice(0, 5);
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : featuredBulk;

  const handleAdd = (p: typeof products[0]) => {
    addItem(p.slug, p.displayName, p.category);
    showToast(`${p.displayName} added to Quote List`);
  };

  const waLink = `https://wa.me/923321134530?text=${encodeURIComponent(
    "Hello Al Mobeen Enterprise (Jodia Bazar), I am inquiring about bulk chemical supply."
  )}`;

  return (
    <>
      {/* Floating Modern B2B Quick Desk Pill */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto">
        {/* Expanded Quick Sourcing Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-[340px] sm:w-[380px] rounded-2xl bg-surface border border-border shadow-2xl p-4 mb-2 text-ink overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-ink">
                      Jodia Bazar Trading Desk
                    </h4>
                    <p className="text-[11px] text-ink-muted">Live Bulk Chemical Rates &amp; RFQ</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-surface-muted text-ink-subtle hover:text-ink transition-colors"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Fast Search Input */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search 80+ bulk chemicals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-border bg-base text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-secondary/30 font-medium"
                />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              {/* Quick Results */}
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {searchResults.map((p) => {
                  const added = isInQuote(p.slug);
                  return (
                    <div
                      key={p.slug}
                      className="p-2.5 rounded-xl border border-border bg-base/50 flex items-center justify-between text-xs hover:border-secondary transition-colors"
                    >
                      <div className="truncate pr-2">
                        <p className="font-bold text-ink truncate">{p.displayName}</p>
                        <p className="text-[10px] text-ink-muted truncate">
                          {p.packaging} • {p.grade}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAdd(p)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors shrink-0 ${
                          added
                            ? "bg-success-light text-success border border-success-border"
                            : "bg-surface-inverse text-ink-inverse hover:bg-accent"
                        }`}
                      >
                        {added ? "✓ In Quote" : "+ Add"}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 mt-3 border-t border-border grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openDrawer();
                  }}
                  className="w-full py-2 px-3 text-xs font-bold rounded-xl border border-border bg-base text-ink hover:bg-surface-hover transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Quote List</span>
                  {count > 0 && (
                    <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-black">
                      {count}
                    </span>
                  )}
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-bold rounded-xl bg-whatsapp hover:brightness-110 text-white transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Sleek Floating Action Button Bar */}
        <div className="flex items-center gap-2">
          {/* Direct WhatsApp Quick Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-whatsapp hover:brightness-110 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            aria-label="Direct WhatsApp Contact"
            title="Chat with Jodia Bazar Chemical Desk"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Quick Quote Pill Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-inverse text-ink-inverse border border-border-inverse shadow-xl hover:bg-surface-inverse-hover transition-all duration-200 hover:scale-105 group"
            aria-label="Toggle Quick Chemical RFQ Desk"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-bold tracking-wide">Quick RFQ Desk</span>
            {count > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-black">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
