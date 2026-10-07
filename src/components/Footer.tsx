"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { categories } from "@/data/categories";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Chemical Catalog (80+ Items)" },
    { href: "/industries", label: "Industries Served" },
    { href: "/about", label: "About Our Company" },
    { href: "/contact", label: "Contact & Quotation" },
  ];

  return (
    <footer className="bg-surface-inverse text-ink-inverse pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-12 relative overflow-hidden w-full border-t border-border-inverse">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start mb-12 sm:mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 sm:gap-3.5 group mb-4 sm:mb-5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 aspect-square rounded-xl bg-surface border border-border shadow-sm p-1.5 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/ame-logo.png"
                  alt="Al Mobeen Enterprise Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-ink-inverse group-hover:text-accent transition-colors leading-none">
                  AL MOBEEN
                </span>
                <span className="text-[10px] font-bold tracking-widest text-ink-inverse-muted uppercase mt-1">
                  ENTERPRISE • KARACHI
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-ink-inverse-muted max-w-[420px] leading-relaxed mb-6">
              Premier wholesale industrial chemical distributor. Operating our commercial trading desk from Jodia Bazar, Karachi since 1995. Direct sourcing from trusted global importers and delivering bulk chemicals, drums, and metric tons directly to manufacturing plants nationwide.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/923321134530"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-whatsapp/20 text-whatsapp border border-whatsapp/30 text-xs font-bold hover:bg-whatsapp hover:text-ink-inverse transition-all"
              >
                <span>WhatsApp Desk</span>
                <FaArrowRight className="w-2.5 h-2.5" />
              </a>
              <a
                href="tel:+923321134530"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse-hover text-ink-inverse border border-border-inverse text-xs font-bold hover:bg-surface-hover hover:text-ink transition-all"
              >
                <span>0332-1134530</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm text-ink-inverse-muted mb-3 sm:mb-5 font-normal tracking-wider">
              /Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base font-semibold text-ink-inverse hover:text-accent transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Bulk Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm text-ink-inverse-muted mb-3 sm:mb-5 font-normal tracking-wider">
              /Categories
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm sm:text-base font-semibold text-ink-inverse hover:text-accent transition-colors duration-200 block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Physical Office & Supply Desk */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm text-ink-inverse-muted mb-3 sm:mb-5 font-normal tracking-wider">
              /Trading Office
            </h4>
            <div className="text-xs sm:text-sm text-ink-inverse-muted space-y-2 leading-relaxed">
              <p>
                <strong className="text-ink-inverse">Commercial Desk:</strong> G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi
              </p>
              <p>
                <strong className="text-ink-inverse">Delivery:</strong> Direct Factory Dispatch Across Pakistan
              </p>
              <p>Mon - Sat: 9:00 AM - 6:00 PM PKT</p>
              <p className="text-ink-inverse font-bold">
                Daily Spot Pricing • Genuine Grade Quality
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification */}
        <div className="pt-8 sm:pt-10 border-t border-border-inverse flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-inverse-muted">
          <p>© {new Date().getFullYear()} Al Mobeen Enterprise. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Karachi Industrial Chemical Hub</span>
            <span>•</span>
            <span>We Sell What We Claim</span>
          </div>
        </div>
      </div>

      {/* Massive Sanock-Style Low-Opacity Watermark */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0 flex items-end justify-center select-none pb-1">
        <span className="text-[clamp(40px,13vw,190px)] font-black tracking-[-0.04em] leading-none text-ink-inverse/[0.035] select-none uppercase whitespace-nowrap">
          AL MOBEEN
        </span>
      </div>
    </footer>
  );
}
