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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#FF6512"
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
    <section className="min-h-[868px] w-full bg-white py-14 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col px-5 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="mb-8 w-full lg:mb-0 lg:w-[40%]">
          <Image
            src={`${ASSET_BASE}/homepage-testimonials-924x1024.jpg`}
            alt="Thermopair testimonials"
            width={462}
            height={512}
            className="h-[280px] w-full rounded-[8px] object-cover md:h-[380px] lg:h-auto"
          />
        </div>

        <div className="w-full lg:flex-1">
          <h3 className="mb-3 font-heading text-[24px] font-bold leading-[24px] text-thermo-orange">
            TESTIMONIALS
          </h3>
          <h2 className="mb-8 font-heading text-[32px] font-bold leading-[34px] text-black md:text-[40px] md:leading-[42px] lg:text-[48px] lg:leading-[48px]">
            What Our Clients Say About Us
          </h2>

          <div key={active} className="min-h-[240px] transition-opacity duration-300 lg:min-h-[200px]">
            <div className="mb-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="font-body text-[18px] font-normal italic leading-[28px] text-[#2C2E33] lg:text-[20px] lg:leading-[32px]">
              {review.quote}
            </p>
            <p className="mt-4 font-body text-[16px] font-semibold text-black">
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
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active ? "bg-thermo-orange" : "bg-thermo-slate/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
