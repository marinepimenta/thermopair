import Image from "next/image";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function FeaturesHandSection() {
  return (
    <section className="min-h-[auto] w-full bg-white px-5 py-10 md:px-8 md:py-12 lg:min-h-[495px] lg:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:items-center lg:gap-[60px]">
        <Image
          src={`${ASSET_BASE}/Hand-01.jpg`}
          alt="Cleaning professional"
          width={300}
          height={382}
          className="h-[240px] w-full rounded-lg object-cover md:h-[320px] lg:h-[382px] lg:w-auto"
        />

        <div className="mt-8 flex flex-1 flex-col gap-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="mb-3 font-sofia text-[24px] font-bold leading-[26px] text-black md:text-[28px] md:leading-[30px] lg:text-[32px] lg:leading-[32px]">
              Qualified &amp; experienced team
            </h3>
            <p className="max-w-[620px] font-work text-[17px] font-normal leading-[27px] text-black md:text-[19px] md:leading-[29px] lg:text-[22px] lg:leading-[33px]">
              Our professionals are highly trained and experienced, ensuring
              your home is cleaned to the highest standards.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-sofia text-[24px] font-bold leading-[26px] text-black md:text-[28px] md:leading-[30px] lg:text-[32px] lg:leading-[32px]">
              100% <br />
              Guaranteed
            </h3>
            <p className="max-w-[620px] font-work text-[17px] font-normal leading-[27px] text-black md:text-[19px] md:leading-[29px] lg:text-[22px] lg:leading-[33px]">
              We stand behind our work. If you&apos;re not completely
              satisfied, we&apos;ll make it right — your satisfaction is
              fully guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
