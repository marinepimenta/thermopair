"use client";

import { useState } from "react";
import Image from "next/image";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

const REVIEWS = [
  {
    quote:
      "These girls are amazing and by far the best cleaning service we have ever used. We used Blive for a few move in/outs and it was incredible how amazing the house looked. We also use her for a weekly cleaning. She is kind, consistent and detail oriented. Ale cleaned my house in Princeton MA and now cleans our new house in Hopkinton MA.",
    author: "Jill Klasko",
  },
  {
    quote:
      "Every inch of my house was cleaned thoroughly - it has never been so clean! I was so impressed and happy with these cleaners.",
    author: "Kate Dahmen",
  },
  {
    quote:
      "This is my second time hiring Ale’s cleaning service and I am very happy with the results. Ale and her team accommodated my available day and time and did a thorough cleaning job. Thank you so much!",
    author: "Meagan Poh",
  },
  {
    quote:
      "Our experience with Blive Cleaning Services has been great! Team was on time (early even!), friendly, efficient, and the results were even better than I had expected. Very very grateful to have found Blive Cleaning Services!",
    author: "Shannon P",
  },
  {
    quote:
      "Blive Cleaning did a fantastic job doing a deep clean of our dental office. They made sure to get all the nooks and crannies and everything looked very clean when they were finished. Our Team would certainly recommend them for any cleaning needed!",
    author: "Raynor Dental Peterborough",
  },
  {
    quote:
      "This is a great company. The turn around time is what you as a customer is looking for.",
    author: "Jennifer Hancock",
  },
  {
    quote: "Excellent service and extremely dependable. So pleased with this service.",
    author: "Elizabeth Hofstetter",
  },
  {
    quote: "Very responsive and they do a great job would definitely recommend!",
    author: "Country Kidz TV",
  },
  {
    quote: "Responsive, friendly, very thorough cleaning. It looks and smells fantastic.",
    author: "Gloria Cloutier",
  },
  {
    quote:
      "Did a good cleaning of our house before we moved in. Dependable. Notified us of weather postponement and easy reschedule.",
    author: "Claire Radice",
  },
  {
    quote:
      "Ale is dependable and trustworthy. I am very picky about how my house is cleaned and Ale met all of my expectations.",
    author: "Matt Thomas",
  },
];

function Star() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#FFBF40"
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
            alt="Blive Cleaning testimonials"
            width={462}
            height={512}
            className="h-[280px] w-full rounded-[8px] object-cover md:h-[380px] lg:h-auto"
          />
        </div>

        <div className="w-full lg:flex-1">
          <h3 className="mb-3 font-sofia text-[24px] font-bold leading-[24px] text-blive-lime">
            TESTIMONIALS
          </h3>
          <h2 className="mb-8 font-sofia text-[32px] font-bold leading-[34px] text-black md:text-[40px] md:leading-[42px] lg:text-[48px] lg:leading-[48px]">
            What Our Clients Say About Us
          </h2>

          <div key={active} className="min-h-[240px] transition-opacity duration-300 lg:min-h-[200px]">
            <div className="mb-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="font-work text-[18px] font-normal italic leading-[28px] text-[#333333] lg:text-[20px] lg:leading-[32px]">
              {review.quote}
            </p>
            <p className="mt-4 font-work text-[16px] font-semibold text-black">
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
                  i === active ? "bg-blive-green" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
