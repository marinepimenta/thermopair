"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

type NavItem = {
  label: string;
  href: string;
  sub: string[];
};

const NAV: NavItem[] = [
  {
    label: "Residential HVAC",
    href: "/residential-hvac/",
    sub: [
      "Residential HVAC",
      "Heating Installation",
      "Heating Repair",
      "AC Installation",
      "AC Repair",
      "Seasonal Maintenance",
    ],
  },
  {
    label: "Commercial HVAC",
    href: "/commercial-hvac/",
    sub: [
      "Commercial HVAC",
      "Restaurant Climate Systems",
      "Office Heating & Cooling",
      "Retail Climate Systems",
      "Preventive Maintenance",
    ],
  },
  { label: "Maintenance Plans", href: "/maintenance-plans/", sub: [] },
  {
    label: "Areas We Serve",
    href: "/areas-we-serve/",
    sub: [
      "Areas We Serve",
      "Boston, MA",
      "Cambridge, MA",
      "Somerville, MA",
      "Newton, MA",
      "Brookline, MA",
      "Quincy, MA",
      "Waltham, MA",
      "Medford, MA",
      "Malden, MA",
      "Everett, MA",
      "Revere, MA",
      "Lynn, MA",
      "Salem, MA",
      "Peabody, MA",
      "Woburn, MA",
      "Framingham, MA",
      "Natick, MA",
      "Dedham, MA",
      "Needham, MA",
      "Watertown, MA",
    ],
  },
  {
    label: "About Us",
    href: "/about-us/",
    sub: ["About Us", "Our Story", "Join Our Team"],
  },
  { label: "Contact Us", href: "/contact-us/", sub: [] },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2C2E33"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 flex w-full flex-row items-center justify-between gap-2 md:gap-[10px] bg-white px-4 py-[10px] md:px-6 transition-[background,border,box-shadow,transform] duration-300 h-[84px] md:h-[133px]"
    >
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src={`${ASSET_BASE}/logo-thermopair-horizontal-gradient.svg`}
          alt="Thermopair — Climate Care"
          width={268}
          height={45}
          className="h-[26px] w-auto sm:h-[32px] md:h-[45px]"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <ul className="flex flex-row items-center gap-6">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className="relative font-body text-[13px] font-medium text-[#2C2E33] transition-colors duration-300 hover:text-[#FF6512]"
              >
                {item.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#FF6512] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {item.sub.length > 0 && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] max-h-[420px] overflow-y-auto bg-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                  {item.sub.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block px-4 py-2 font-body text-[13px] text-[#2C2E33] transition-colors hover:bg-[#FF6512] hover:text-white"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA buttons */}
      <div className="flex shrink-0 flex-row items-center gap-[10px]">
        <Link
          href="#request-a-quote"
          className="hidden lg:inline-block px-6 py-3 font-body text-[15px] font-medium uppercase leading-[15px] text-center bg-thermo-orange text-white"
        >
          Get A Free Quote
        </Link>
        <Link
          href="tel:+10000000000"
          className="inline-block px-3 py-2 font-body text-[12px] font-medium uppercase leading-[15px] text-center bg-thermo-purple text-white sm:px-4 lg:px-6 lg:py-3 lg:text-[15px]"
        >
          (000) 000-0000
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center lg:hidden"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 max-h-[calc(100vh-84px)] w-full overflow-y-auto bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-black/10">
                <Link
                  href={item.href}
                  className="block px-6 py-3 font-body text-[13px] font-medium text-[#2C2E33]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sub.length > 0 && (
                  <ul className="pb-2">
                    {item.sub.map((sub) => (
                      <li key={sub}>
                        <Link
                          href="#"
                          className="block px-10 py-1.5 font-body text-[13px] text-[#555555]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                href="#request-a-quote"
                className="block px-6 py-4 font-body text-[13px] font-medium uppercase text-center bg-thermo-orange text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get A Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
