"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How many hours a day does it take to keep a house clean?",
    a: "If you do some housework every day, routine tasks such as dusting, tidying, and doing dishes shouldn’t take more than 20-30 minutes. However, if your place is larger or needs a more detailed home cleaning, it may take longer.",
  },
  {
    q: "How do I make an apartment cleaning schedule?",
    a: "Take your time to list all the tasks by frequency – daily, weekly, and monthly. Then, assign specific tasks to each day of the week. Feel free to make any adjustments as you go. If you don’t have the time to do this, feel free to reach out to us and book a professional apartment cleaning in New Hampshire and Massachusetts. We’ll make sure your appointment is fully tailored to meet your needs.",
  },
  {
    q: "What month do you start spring cleaning?",
    a: "People usually choose March or April as the weather begins to warm. This period is ideal for spring cleaning since the mild weather allows you to open windows, air out the house, and take up tasks like window washing, decluttering, and reorganizing. The change of seasons also makes us feel more motivated to refresh our space and make it feel lighter and more welcoming.",
  },
  {
    q: "What is janitorial cleaning?",
    a: "This service is designed to meet the cleaning needs of commercial and institutional spaces like offices, schools, hospitals, gyms, warehouses, government buildings, and so on. It includes a range of tasks such as sweeping, mopping, dusting, trash removal, and restroom sanitation. Reach out to our meticulous janitorial services in Massachusetts to maintain a clean, safe, and hygienic environment that will impress your clients, partners, and potential employees.",
  },
  {
    q: "What is the difference between domestic cleaning and business cleaning?",
    a: "Domestic upkeep is designed to meet the needs of private houses and apartments, while business cleaning specializes in workplaces such as offices, stores, or factories, providing services such as restroom sanitation, waste management, or floor waxing.",
  },
  {
    q: "What is the hardest thing to clean in a house?",
    a: "Most people would agree that the oven is the most difficult to maintain because of the buildup of baked-on grease and food residue. However, tile grout, shower doors, and the toilet are also among the top choices. Rely on our cleaning company in Massachusetts and New Hampshire to help you tackle any challenges.",
  },
  {
    q: "How much do most cleaning companies charge?",
    a: "The price mostly depends on the size of your home, the type of service you need, whether it’s a one-time or recurring plan, and other factors. Different cleaning companies across New Hampshire and Massachusetts also offer different packages and specialized services. Contact our friendly staff and quickly get your free quote based on your specific needs.",
  },
  {
    q: "Who offers reliable home & janitorial cleaning near me in Massachusetts & New Hampshire?",
    a: "Blive Cleaning is your trusted partner in keeping your residential and commercial spaces hygienic and well-organized. Our experienced, dedicated, and highly qualified professionals will carefully listen to your needs and provide you with a personalized service that ticks all the boxes. Get in touch with us today and experience the benefits working with a trusted and detail-oriented team!",
  },
  {
    q: "What cleaning products does Blive Cleaning uses for eco-friendly cleaning?",
    a: "We often use eco-friendly products that are non-toxic and biodegradable. Common products include vinegar, free and clear, essential oils, and EPA’s safer choice options for green cleaning solutions. These products effectively clean while minimizing environmental impact and health risks.",
  },
  {
    q: "Does Blive Cleaning offers eco-friendly/non-toxic cleaning services ?",
    a: "Yes. At Blive Cleaning, we are committed to providing cleaning services that meet your specific needs and preferences, including ECO-FRIENDLY options.",
  },
];

function FaqItem({
  index,
  q,
  a,
  isOpen,
  onToggle,
}: {
  index: number;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border-b border-[#e6e6e6]">
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors md:py-[25px]",
        )}
      >
        <span
          className={cn(
            "font-work text-[15px] font-bold leading-[16px] text-[#333333] transition-colors hover:text-blive-green md:text-base",
            isOpen && "text-blive-green"
          )}
        >
          {q}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={cn(
            "shrink-0 transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        >
          <path
            d="M8 1V15M1 8H15"
            stroke="#50C970"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="overflow-hidden"
        >
          <p className="pb-5 font-work text-base font-normal leading-[25px] text-[#6f6f6f] md:pb-[25px] md:text-[18px] md:leading-[27px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 lg:py-[60px] lg:pb-[100px]">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col px-5 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="mb-8 lg:mb-0 lg:w-[376px] lg:shrink-0">
          <h2 className="max-w-[376px] font-sofia text-[34px] font-semibold leading-[36px] text-black md:text-[44px] md:leading-[46px] lg:text-[56px] lg:leading-[56px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="lg:flex-1">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              index={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
