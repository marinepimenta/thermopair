"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  desiredService: string;
  squareFootage: string;
  hearAboutUs: string;
  discountCode: string;
  consent: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  desiredService: "",
  squareFootage: "",
  hearAboutUs: "",
  discountCode: "",
  consent: false,
};

const desiredServiceOptions = [
  "Heating Installation",
  "Heating Repair",
  "AC Installation",
  "AC Repair",
  "Seasonal Maintenance",
  "Emergency Service",
  "Commercial HVAC",
  "System Inspection",
  "Other services",
];

const squareFootageOptions = [
  "900 or less",
  "901-1200",
  "1201-1500",
  "1501-1800",
  "1801-2100",
  "2101-2300",
  "2301-2600",
  "2601-2900",
  "2901-3500",
  "3501-4100",
  "4101-4700",
  "4701-5300",
  "5301-6000",
  "6000-Above",
];

const hearAboutUsOptions = [
  "Better Business Bureau",
  "Email",
  "Facebook",
  "Google",
  "Instagram",
  "Referral",
  "Yelp",
  "Other",
];

const fieldBaseClasses =
  "h-[46px] w-full rounded-[2px] border border-[#EBECEE] bg-white px-[14px] font-body text-[15px] text-[#2C2E33] outline-none transition-colors placeholder:text-[#8F97A2] focus:border-thermo-orange focus:ring-1 focus:ring-thermo-orange";

function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="#8F97A2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function QuoteFormSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="request-a-quote"
      className="w-full bg-thermo-paper px-5 py-10 sm:px-8 sm:py-[60px] md:px-8 md:py-[60px] lg:px-[60px] lg:pt-[60px] lg:pb-[80px]"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="mx-auto mb-10 max-w-[900px] text-center font-heading text-[26px] font-bold uppercase leading-[32px] text-black lg:text-[36px] lg:leading-[42px]">
          BOOK A VISIT WITH A HEATING AND COOLING TEAM YOU CAN TRUST
        </h2>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h3 className="font-heading text-[28px] font-bold text-black">Thank you!</h3>
            <p className="mt-3 font-body text-[18px] text-[#8F97A2]">
              We received your request and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
              {/* Row 1 */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  aria-label="First Name (Required)"
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  aria-label="Last Name (Required)"
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  aria-label="Email (Required)"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>

              {/* Row 2 */}
              <div className="md:col-span-2">
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  aria-label="Phone (Required)"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="Address"
                  aria-label="Address (Required)"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="Zip Code"
                  aria-label="Zip Code (Required)"
                  value={form.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>

              {/* Row 3 */}
              <div className="relative md:col-span-3">
                <select
                  required
                  aria-label="Desired Service (Required)"
                  value={form.desiredService}
                  onChange={(e) => handleChange("desiredService", e.target.value)}
                  className={cn(fieldBaseClasses, "appearance-none pr-9", form.desiredService === "" && "text-[#8F97A2]")}
                >
                  <option value="" disabled hidden>
                    Desired Service
                  </option>
                  {desiredServiceOptions.map((option) => (
                    <option key={option} value={option} className="text-[#2C2E33]">
                      {option}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>
              <div className="relative md:col-span-3">
                <select
                  required
                  aria-label="Square Footage (Required)"
                  value={form.squareFootage}
                  onChange={(e) => handleChange("squareFootage", e.target.value)}
                  className={cn(fieldBaseClasses, "appearance-none pr-9", form.squareFootage === "" && "text-[#8F97A2]")}
                >
                  <option value="" disabled hidden>
                    Square Footage
                  </option>
                  {squareFootageOptions.map((option) => (
                    <option key={option} value={option} className="text-[#2C2E33]">
                      {option}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>

              {/* Row 4 */}
              <div className="relative md:col-span-6">
                <select
                  required
                  aria-label="How did you hear about us? (Required)"
                  value={form.hearAboutUs}
                  onChange={(e) => handleChange("hearAboutUs", e.target.value)}
                  className={cn(fieldBaseClasses, "appearance-none pr-9", form.hearAboutUs === "" && "text-[#8F97A2]")}
                >
                  <option value="" disabled hidden>
                    How did you hear about us?
                  </option>
                  {hearAboutUsOptions.map((option) => (
                    <option key={option} value={option} className="text-[#2C2E33]">
                      {option}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>

              {/* Row 5 */}
              <div className="md:col-span-6">
                <input
                  type="text"
                  required
                  placeholder="Discount code"
                  aria-label="Discount code (Required)"
                  value={form.discountCode}
                  onChange={(e) => handleChange("discountCode", e.target.value)}
                  className={fieldBaseClasses}
                />
              </div>
            </div>

            <div className="mt-5 flex items-start gap-[10px]">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => handleChange("consent", e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#FF6512]"
                aria-label="Consent to receive text and email messages (Required)"
              />
              <label className="font-body text-[13px] leading-[20px] text-[#8F97A2]">
                I agree to receive text and email messages from this company. I understand I
                can opt out anytime per their{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div className="mt-7 flex justify-center">
              <button
                type="submit"
                className="cursor-pointer bg-thermo-orange px-8 py-[14px] font-body text-[15px] font-medium uppercase leading-[15px] text-white transition-opacity hover:opacity-85"
              >
                Request My Free Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
