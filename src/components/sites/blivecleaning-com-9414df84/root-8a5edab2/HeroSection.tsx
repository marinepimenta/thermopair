import Image from "next/image";
import Link from "next/link";

const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="pb-0 lg:pb-20">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT column */}
          <div
            className="relative w-full bg-no-repeat bg-[position:83%_86%] bg-[length:90%_auto] px-5 py-10 md:bg-[length:53%_auto] md:px-8 md:py-14 lg:w-[51%] lg:pl-[max(24px,calc((100vw-1320px)/2+12px))] lg:py-0"
            style={{
              backgroundImage: `url(${ASSET_BASE}/Logo-Blive-Symbol-OffWhite-1.png)`,
            }}
          >
            <div className="relative z-10 w-full max-w-[559px] py-0 lg:py-[83.9px]">
              <h1 className="mb-8 max-w-[500px] font-sofia-sc text-[40px] font-bold uppercase leading-[42px] text-black md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px]">
                TRANSFORMING YOUR LIFE BY TRANSFORMING{" "}
                <span className="italic text-blive-green">YOUR HOME</span>
              </h1>

              <p className="mb-10 max-w-[505px] font-work text-[18px] font-normal leading-[28px] text-black md:text-[20px] md:leading-[30px] lg:text-[22px] lg:leading-[33px]">
                Blive Cleaning provides professional home and business
                cleaning in Massachusetts and New Hampshire. We handle the
                cleaning so you can relax in a beautifully maintained space.
              </p>

              <div className="mb-12 flex flex-wrap gap-4">
                <Link
                  href="#request-a-quote"
                  className="inline-block bg-black px-6 py-3 text-center font-work text-[15px] font-medium uppercase leading-[15px] text-white transition-opacity hover:opacity-85"
                >
                  Request A Quote
                </Link>
                <Link
                  href="tel:+17744980527"
                  className="inline-block bg-blive-yellow px-6 py-3 text-center font-work text-[15px] font-medium uppercase leading-[15px] text-black transition-opacity hover:opacity-85"
                >
                  (774) 498-0527
                </Link>
              </div>

              <p className="font-work text-[20px] font-semibold italic leading-[30px] text-blive-green">
                Blive is Fully Licensed, Insured and Bonded.
              </p>
            </div>
          </div>

          {/* RIGHT column */}
          <div
            className="relative h-[300px] w-full bg-cover bg-center md:h-[420px] lg:h-[809px] lg:w-[44%] lg:ml-auto"
            style={{
              backgroundImage: `url(${ASSET_BASE}/Mock-Sofa.jpg)`,
            }}
          >
            <div className="absolute bottom-0 left-1/2 z-[1] h-[200px] w-[80%] -translate-x-1/2 md:h-[280px] lg:left-[140px] lg:top-[520.7px] lg:h-[317px] lg:w-[636px] lg:translate-x-0">
              <Image
                src={`${ASSET_BASE}/Character-05.png.webp`}
                alt="Cleaning character mopping"
                width={636}
                height={317}
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
