"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

const STATS = [
  { value: 2, suffix: "K+", label: "Happy Customers" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Project Success" },
  { value: 140, suffix: "+", label: "Five Star Reviews" },
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
          <h3 className="max-w-[520px] font-sofia text-[34px] font-bold uppercase leading-[36px] text-blive-green md:text-[44px] md:leading-[46px] lg:text-[57px] lg:leading-[57px]">
            GET SOME RELIEF BY <br />
            CHOOSING US!
          </h3>
          <p className="max-w-[486px] font-work text-base font-medium leading-[25px] text-black md:text-[18px] md:leading-[27px]">
            At the core of our service is a commitment to treat your home or
            workplace in Fitchburg, Harvard, or Sterling with the same
            respect and attention to detail as our own. We&rsquo;re
            passionate about not just cleaning, but also giving you back
            time to cherish life&rsquo;s important moments.
          </p>
          <Image
            src={`${ASSET_BASE}/Character-5.png`}
            alt="Blive cleaning character"
            width={180}
            height={259}
            className="mt-6 h-auto w-[180px]"
          />
        </div>

        <div
          ref={cardRef}
          className="min-h-0 rounded-lg bg-blive-dark px-8 py-12 lg:min-h-[580px] lg:flex-1 lg:px-12 lg:py-[60px]"
        >
          <div className="grid h-full grid-cols-1 place-content-center gap-x-10 gap-y-10 sm:grid-cols-2 lg:gap-y-14">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-sofia text-[56px] font-bold leading-[56px] text-blive-lime md:text-[72px] md:leading-[72px] lg:text-[96px] lg:leading-[96px]">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="mt-2 font-work text-base font-medium text-white md:text-[18px]">
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
