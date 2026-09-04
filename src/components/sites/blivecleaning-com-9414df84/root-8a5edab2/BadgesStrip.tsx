import Image from "next/image";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

type Badge = {
  file: string;
  alt: string;
};

const BADGES: Badge[] = [
  { file: "7127657-Crystal_Award-Copy.png", alt: "Crystal Award" },
  { file: "5-star-google-reviews-img.png", alt: "5 star Google reviews" },
  { file: "OSHA.png", alt: "OSHA certified" },
  {
    file: "blive-cleaning-certified-professional-house-logo.png",
    alt: "Certified professional house cleaner",
  },
  { file: "bbb-accredited-business.png", alt: "BBB accredited business" },
  { file: "download.png", alt: "Industry certification" },
  { file: "ncc-massachusetts-member.png", alt: "NCC Massachusetts member" },
  { file: "ahc-professional-cleaning-logo.png", alt: "AHC professional cleaning" },
  {
    file: "certified-covid-19-infectious-logo.png",
    alt: "Certified COVID-19 infectious control",
  },
];

export default function BadgesStrip() {
  return (
    <section className="w-full bg-white py-10 md:h-[223px] md:py-10 flex items-center">
      <div className="mx-auto w-full max-w-[1320px] px-5">
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10">
          {BADGES.map((badge) => (
            <Image
              key={badge.file}
              src={`${ASSET_BASE}/${badge.file}`}
              alt={badge.alt}
              width={120}
              height={74}
              className="h-[52px] w-auto object-contain md:h-[74px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
