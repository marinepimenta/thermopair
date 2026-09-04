const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function AboutGreenSection() {
  return (
    <section className="min-h-[260px] w-full grad-aurora md:min-h-[380px] lg:flex lg:min-h-[875px] lg:flex-row">
      <div
        className="h-[260px] w-full bg-cover bg-center md:h-[380px] lg:h-auto lg:w-[46%] lg:min-h-[875px]"
        style={{
          backgroundImage: `url(${ASSET_BASE}/hvac/technician-installing-unit.avif)`,
        }}
      />
      <div className="relative flex flex-col justify-center px-5 py-10 md:px-8 md:py-14 lg:w-[54%] lg:px-[80px] lg:py-[80px] lg:pl-[70px]">
        <div className="relative">
          <h2 className="mb-[28px] max-w-[610px] font-heading text-[36px] font-bold leading-[38px] text-white md:text-[44px] md:leading-[46px] lg:text-[56px] lg:leading-[56px]">
            Stay warm in winter, cool in summer, and{" "}
            <span className="italic">worry-free</span>
          </h2>
          <p className="mb-8 max-w-[610px] font-body text-[17px] font-normal leading-[27px] text-white md:text-[19px] md:leading-[29px] lg:text-[22px] lg:leading-[33px]">
            At Thermopair, we install, repair, and maintain heating and
            cooling systems for homes and businesses across Massachusetts.
            From a furnace that quit on the coldest night to a rooftop unit
            that keeps your restaurant running, we show up quickly, explain
            the fix in plain language, and tell you what it costs before we
            start.
          </p>
          <h5 className="mb-8 max-w-[530px] space-y-1 font-body text-[17px] font-semibold leading-[28px] text-thermo-orange-pale md:text-[20px]">
            <span className="block">THERMOPAIR IS A TRUSTED PROVIDER OF</span>
            <span className="block">HEATING AND COOLING CARE IN MA</span>
          </h5>
          <a
            href="/about-us/"
            className="inline-block bg-thermo-orange px-6 py-3 text-center font-body text-[15px] font-medium leading-[15px] text-white transition-opacity hover:opacity-85"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}
