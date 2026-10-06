"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number | string;
  suffix: string;
  label: string;
  sub: string;
  isNumeric: boolean;
}

const stats: StatItem[] = [
  {
    value: 30,
    suffix: "+",
    label: "Trading Legacy",
    sub: "Established 1995 in Jodia Bazar",
    isNumeric: true,
  },
  {
    value: 80,
    suffix: "+",
    label: "Bulk Chemicals",
    sub: "Solvents, Plasticizers & Resins",
    isNumeric: true,
  },
  {
    value: 100,
    suffix: "%",
    label: "Genuine Quality",
    sub: "We sell exactly what we claim",
    isNumeric: true,
  },
  {
    value: "Nationwide",
    suffix: "",
    label: "Direct Bulk Dispatch",
    sub: "Dispatched from Karachi hubs",
    isNumeric: false,
  },
];

export default function StatsStrip() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<(number | string)[]>(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReduced) {
            setCounts(stats.map((s) => s.value));
            return;
          }

          const duration = 1200;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => {
                if (!s.isNumeric) return progress >= 0.5 ? s.value : "";
                return Math.round((s.value as number) * eased);
              })
            );

            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={ref} className="bg-base py-10 sm:py-14 border-b border-border transition-colors">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="bg-surface-muted p-3.5 sm:p-5 md:p-6 rounded-[28px] sm:rounded-[36px] border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-surface p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] border border-border-subtle shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center font-mono font-bold text-xs">
                    0{i + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-none mb-1.5">
                    {stat.isNumeric ? (
                      <>
                        {counts[i]}
                        <span className="text-accent ml-0.5">{stat.suffix}</span>
                      </>
                    ) : (
                      <span>{counts[i] || "Nationwide"}</span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-ink mb-0.5">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-ink-muted leading-tight">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
