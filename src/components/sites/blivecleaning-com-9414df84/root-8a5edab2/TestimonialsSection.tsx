"use client";

import { useState } from "react";
import Image from "next/image";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

// PLACEHOLDER: replace with real, permissioned Thermopair customer reviews before launch.
const REVIEWS = [
  {
    quote:
      "Customer review 1 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 1",
  },
  {
    quote:
      "Customer review 2 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 2",
  },
  {
    quote:
      "Customer review 3 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 3",
  },
  {
    quote:
      "Customer review 4 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 4",
  },
  {
    quote:
      "Customer review 5 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 5",
  },
  {
    quote:
      "Customer review 6 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 6",
  },
  {
    quote:
      "Customer review 7 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 7",
  },
  {
    quote:
      "Customer review 8 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 8",
  },
  {
    quote:
      "Customer review 9 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 9",
  },
  {
    quote:
      "Customer review 10 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 10",
  },
  {
    quote:
      "Customer review 11 goes here — replace with a real review collected from a Thermopair client.",
    author: "Client Name 11",
  },
];

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="text-thermo-orange"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.26 6.9.6-5.2 4.55 1.57 6.79L12 16.9l-6.17 3.3 1.57-6.79-5.2-4.55 6.9-.6L12 2z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  return (
    <section className="w-full px-5 py-24 md:px-8 md:py-32 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:items-center lg:gap-[60px]">
        <div
          className="reveal mb-8 w-full lg:mb-0 lg:w-[40%]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div className="overflow-hidden rounded-[28px] ring-1 ring-black/5">
            <Image
              src={`${ASSET_BASE}/hvac/technician-hivis.jpg`}
              alt="Thermopair technician servicing a condenser unit"
              width={462}
              height={578}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:flex-1">
          <h3
            className="reveal mb-3 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-thermo-orange"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            TESTIMONIALS
          </h3>
          <h2
            className="reveal mb-8 max-w-[20ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-thermo-ink"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            What Our Clients Say About Us
          </h2>

          <div
            className="reveal"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <div
              key={active}
              className="min-h-[260px] transition-opacity duration-300 lg:min-h-[220px]"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="max-w-[56ch] font-heading text-[clamp(1.45rem,2.6vw,2.15rem)] font-medium leading-[1.35] text-thermo-ink">
                {review.quote}
              </p>
              <p className="mt-5 font-body text-[14px] uppercase tracking-[0.14em] text-thermo-slate">
                {review.author}
              </p>
            </div>

            <div className="mt-7 flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === active ? "bg-thermo-orange" : "bg-black/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
