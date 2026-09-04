import Link from "next/link";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="pb-0 lg:pb-20">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT column */}
          <div className="grad-soft-light relative w-full px-5 py-10 md:px-8 md:py-14 lg:w-[51%] lg:pl-[max(24px,calc((100vw-1320px)/2+12px))] lg:py-0">
            <div className="relative z-10 w-full max-w-[559px] py-0 lg:py-[83.9px]">
              <h1 className="mb-8 max-w-[500px] font-heading text-[40px] font-bold uppercase leading-[42px] text-[#131313] md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px]">
                COMFORT YOU CAN COUNT ON IN{" "}
                <span className="italic text-thermo-orange">EVERY SEASON</span>
              </h1>

              <p className="mb-10 max-w-[505px] font-body text-[18px] font-normal leading-[28px] text-[#131313] md:text-[20px] md:leading-[30px] lg:text-[22px] lg:leading-[33px]">
                Thermopair installs and maintains heating and cooling systems
                across Massachusetts. We handle the hard part, so your home
                stays comfortable and you always know what it costs.
              </p>

              <div className="mb-12 flex flex-wrap gap-4">
                <Link
                  href="#request-a-quote"
                  className="inline-block bg-thermo-orange px-6 py-3 text-center font-body text-[15px] font-medium uppercase leading-[15px] text-white transition-opacity hover:opacity-85"
                >
                  Get A Free Quote
                </Link>
                <Link
                  href="tel:+10000000000"
                  className="inline-block bg-thermo-purple px-6 py-3 text-center font-body text-[15px] font-medium uppercase leading-[15px] text-white transition-opacity hover:opacity-85"
                >
                  (000) 000-0000
                </Link>
              </div>

              <p className="font-body text-[20px] font-semibold italic leading-[30px] text-thermo-orange">
                Thermopair is licensed, insured and local to MA.
              </p>
            </div>
          </div>

          {/* RIGHT column */}
          <div
            className="relative h-[300px] w-full bg-cover bg-center md:h-[420px] lg:h-[809px] lg:w-[44%] lg:ml-auto"
            style={{
              backgroundImage: `url(${ASSET_BASE}/hvac/technician-ceiling-install.jpg)`,
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
}
