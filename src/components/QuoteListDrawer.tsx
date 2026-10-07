"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuote } from "./QuoteProvider";
import { useLanguage } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function QuoteListDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, updateNotes, count } = useQuote();
  const { t } = useLanguage();

  // Listen for toggle event from Navbar & QuickQuoteWidget
  useEffect(() => {
    const handler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-quote-drawer", handler);
    return () => window.removeEventListener("toggle-quote-drawer", handler);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex flex-col h-full w-full max-w-md p-0">
        {/* Header */}
        <SheetHeader className="px-4 sm:px-6 py-4 sm:py-5 border-b border-border text-left">
          <SheetTitle className="text-lg font-extrabold text-ink">
            {t("quote.title")} {count > 0 && `(${count})`}
          </SheetTitle>
          <SheetDescription className="text-xs text-ink-muted">
            Review your selected bulk chemicals before requesting official commercial rates.
          </SheetDescription>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 text-ink-subtle"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              <p className="font-semibold text-sm text-ink-muted">{t("quote.empty")}</p>
            </div>
          ) : (
            <ul className="space-y-3.5">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="p-3.5 sm:p-4 rounded-xl border border-border bg-base text-ink shadow-2xs"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-extrabold text-sm text-ink">{item.displayName}</p>
                      <p className="text-xs font-semibold text-ink-muted mt-0.5 capitalize">
                        {item.category.replace(/-/g, " ")}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="text-ink-muted hover:text-danger transition-colors p-1 cursor-pointer rounded-lg hover:bg-surface-muted"
                      aria-label={`Remove ${item.displayName}`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder={t("quote.quantity")}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.slug, e.target.value)}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    />
                    <input
                      type="text"
                      placeholder={t("quote.notes")}
                      value={item.notes}
                      onChange={(e) => updateNotes(item.slug, e.target.value)}
                      className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-border bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-border bg-surface">
            <Button variant="default" size="lg" className="w-full justify-center text-center font-bold" asChild>
              <Link
                href={`/contact?products=${items.map((i) => i.slug).join(",")}`}
                onClick={() => setIsOpen(false)}
              >
                {t("quote.send")}
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
