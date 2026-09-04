"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

// PLACEHOLDER: replace with Thermopair's real figures before launch.
const STATS = [
  { value: 0, suffix: "K+", label: "Homes Served" },
  { value: 0, suffix: "+", label: "Years Experience" },
  { value: 0, suffix: "%", label: "Repairs Completed" },
  { value: 0, suffix: "+", label: "Five Star Reviews" },
];

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export default function StatsSection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const animate = () => {
      const start = performance.now();
      const duration = 2000;

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);
        setCounts(STATS.map((s) => Math.round(s.value * eased)));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-5 px-5 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-5 pt-10 lg:w-[520px] lg:shrink-0 lg:pt-[60px]">
          <h3 className="max-w-[520px] font-heading text-[34px] font-bold uppercase leading-[36px] text-thermo-orange md:text-[44px] md:leading-[46px] lg:text-[57px] lg:leading-[57px]">
            COMFORT IS CLOSER <br />
            THAN YOU THINK!
          </h3>
          <p className="max-w-[486px] font-body text-base font-medium leading-[25px] text-black md:text-[18px] md:leading-[27px]">
            Wanderson started Thermopair after living through a failed
            heating system and service that never called back. We built the
            company we wished we had found: quick to answer, straight about
            cost, and careful with your home or business as if it were our
            own.
          </p>
          <Image
            src={`${ASSET_BASE}/Character-5.png`}
            alt="Thermopair character"
            width={180}
            height={259}
            className="mt-6 h-auto w-[180px]"
          />
        </div>

        <div
          ref={cardRef}
          className="min-h-0 rounded-lg grad-glow-warm px-8 py-12 lg:min-h-[580px] lg:flex-1 lg:px-12 lg:py-[60px]"
        >
          <div className="grid h-full grid-cols-1 place-content-center gap-x-10 gap-y-10 sm:grid-cols-2 lg:gap-y-14">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-[56px] font-bold leading-[56px] text-white md:text-[72px] md:leading-[72px] lg:text-[96px] lg:leading-[96px]">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="mt-2 font-body text-base font-medium text-white md:text-[18px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
