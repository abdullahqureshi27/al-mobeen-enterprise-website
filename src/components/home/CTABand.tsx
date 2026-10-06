"use client";

import { useState } from "react";

const volumeOptions = [
  "1 - 5 Drums",
  "5 - 20 Drums",
  "1 - 5 Metric Tons",
  "10+ Metric Tons",
  "Full Container (FCL)",
];

export default function CTABand() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [chemical, setChemical] = useState("");
  const [volume, setVolume] = useState("1 - 5 Metric Tons");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Wholesale Chemical RFQ (Al Mobeen Enterprise Website)*\n` +
      `• *Client Name:* ${name || "Not provided"}\n` +
      `• *Phone/WhatsApp:* ${phone || "Not provided"}\n` +
      `• *Chemical Needed:* ${chemical || "General Bulk Inquiry"}\n` +
      `• *Estimated Volume:* ${volume}\n` +
      `• *Desk:* Jodia Bazar Karachi`
    );
    window.open(`https://wa.me/923321134530?text=${text}`, "_blank");
  };

  return (
    <section id="contact-desk" className="py-14 sm:py-20 md:py-24 bg-base border-b border-border">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Desk Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-inverse text-ink-inverse text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              B2B TRADING DESK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink mb-3 sm:mb-4">
              Let’s Talk <span className="text-accent">Supply.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6 sm:mb-8 max-w-[380px]">
              Need spot rates, technical data sheets, or metric-ton contract pricing? Contact our Jodia Bazar desk directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="bg-surface-muted p-4 sm:p-5 rounded-[20px] flex flex-col justify-between border border-border min-h-[120px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-accent shadow-xs border border-border">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold text-ink-muted uppercase tracking-wider mb-0.5">
                    /EMAIL QUOTE
                  </h4>
                  <a
                    href="mailto:almobeenenterprise@gmail.com"
                    className="text-xs sm:text-sm font-extrabold text-ink hover:text-accent transition-colors break-all"
                  >
                    almobeenenterprise@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-surface-muted p-4 sm:p-5 rounded-[20px] flex flex-col justify-between border border-border min-h-[120px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-accent shadow-xs border border-border">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold text-ink-muted uppercase tracking-wider mb-0.5">
                    /CALL DIRECT
                  </h4>
                  <a
                    href="tel:+923321134530"
                    className="text-xs sm:text-sm font-extrabold text-ink hover:text-accent transition-colors"
                  >
                    +92 332 1134530
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Dark Form */}
          <div className="lg:col-span-7 bg-surface-inverse text-ink-inverse p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-border-inverse">
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight mb-2 leading-snug text-ink-inverse">
              Request Fast Bulk Quotation
            </h3>
            <p className="text-xs sm:text-sm text-ink-inverse-muted mb-6 sm:mb-8">
              Specify your volume requirement and get an immediate WhatsApp quotation from our Jodia Bazar desk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink-inverse-muted mb-2">
                  Chemical Name or CAS *
                </label>
                <input
                  type="text"
                  required
                  value={chemical}
                  onChange={(e) => setChemical(e.target.value)}
                  placeholder="e.g. DOP Plasticizer, Titanium Dioxide, IPA..."
                  className="w-full bg-surface-inverse-hover border border-border-inverse rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-ink-inverse placeholder:text-ink-muted focus:outline-none focus:border-accent transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink-inverse-muted mb-2">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name or Company"
                    className="w-full bg-surface-inverse-hover border border-border-inverse rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-ink-inverse placeholder:text-ink-muted focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink-inverse-muted mb-2">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0332-1234567"
                    className="w-full bg-surface-inverse-hover border border-border-inverse rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-ink-inverse placeholder:text-ink-muted focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink-inverse-muted mb-2 sm:mb-3">
                  Estimated Order Volume *
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {volumeOptions.map((v) => {
                    const isSelected = volume === v;
                    return (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setVolume(v)}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-accent text-white shadow-xs"
                            : "bg-surface-inverse-hover text-ink-inverse-muted border border-border-inverse hover:border-ink-muted hover:text-ink-inverse"
                        }`}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold bg-accent text-white rounded-full hover:bg-accent-hover transition-all duration-300 shadow-lg group cursor-pointer"
                >
                  <span>Submit WhatsApp RFQ</span>
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-accent flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
