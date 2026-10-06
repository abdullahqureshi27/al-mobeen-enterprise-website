"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useQuote } from "./QuoteProvider";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { type Language, languageNames } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useQuote();
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const openDrawer = () => {
    window.dispatchEvent(new CustomEvent("toggle-quote-drawer"));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/products", label: t("nav.products") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Top B2B Announcement Strip */}
      <div className="bg-surface-inverse text-ink-inverse py-1.5 px-4 text-[11px] sm:text-xs font-semibold border-b border-border-inverse">
        <div className="mx-auto max-w-[1320px] flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-ink-inverse-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                <strong className="text-ink-inverse">Jodia Bazar Karachi Desk:</strong> G/9 Golden Center, Weaver Lane
              </span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-ink-inverse-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Bulk Spot Pricing &amp; Certified COAs
            </span>
          </div>

          <div className="flex items-center gap-4 text-ink-inverse-muted">
            <span className="hidden sm:inline text-[11px]">Mon - Sat: 9:00 AM - 6:00 PM</span>
            <a
              href="tel:+923321134530"
              className="inline-flex items-center gap-1.5 text-ink-inverse hover:text-accent font-bold transition-colors"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              0332-1134530
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md py-2.5 sm:py-3 border-b border-border shadow-xs"
            : "bg-surface py-3 sm:py-3.5 border-b border-border-subtle"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-3.5 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Logo with Sanock-style circular badge */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-white flex items-center justify-center font-black text-sm sm:text-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-ink group-hover:text-accent transition-colors leading-none">
                AL MOBEEN
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-ink-muted tracking-wider uppercase mt-0.5">
                ENTERPRISE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs sm:text-sm font-semibold transition-colors py-1 ${
                    isActive
                      ? "text-accent"
                      : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center bg-surface-muted border border-border rounded-full p-0.5 text-[11px] font-bold">
              {(["en", "romanUrdu", "urdu"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    lang === l
                      ? "bg-surface text-ink shadow-xs"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {languageNames[l]}
                </button>
              ))}
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-muted text-ink hover:bg-surface-hover border border-border transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* Quote List Button */}
            <button
              onClick={openDrawer}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold text-ink bg-surface-muted hover:bg-surface-hover border border-border rounded-full transition-all cursor-pointer"
              aria-label="View Quote Cart"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Quote</span>
              {count > 0 && (
                <span className="w-4 h-4 rounded-full bg-accent text-white text-[10px] font-black flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Icon Button */}
            <a
              href="https://wa.me/923321134530"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-whatsapp hover:brightness-110 text-white flex items-center justify-center shadow-xs transition-transform duration-300 hover:scale-105 shrink-0"
              aria-label="WhatsApp Inquiry"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Sanock Pill CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold text-ink bg-surface-muted border border-border rounded-full hover:bg-surface-hover transition-all duration-300 shadow-xs group cursor-pointer"
            >
              <span>Request Quote</span>
              <span className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px] shadow-xs transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink bg-surface-muted hover:bg-surface-hover border border-border rounded-full transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[108px] z-50 bg-surface border-b border-border p-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-3 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-ink hover:bg-surface-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-border space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-accent text-white text-xs font-bold shadow-md"
              >
                <span>Request Spot Wholesale Quote</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
