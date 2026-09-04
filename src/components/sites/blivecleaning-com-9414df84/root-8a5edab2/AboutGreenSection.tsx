const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function AboutGreenSection() {
  return (
    <section className="min-h-[260px] w-full bg-blive-green md:min-h-[380px] lg:flex lg:min-h-[875px] lg:flex-row">
      <div
        className="h-[260px] w-full bg-cover bg-center md:h-[380px] lg:h-auto lg:w-[46%] lg:min-h-[875px]"
        style={{
          backgroundImage: `url(${ASSET_BASE}/homepage-about-us.jpg)`,
        }}
      />
      <div
        className="before:bg-[length:70%_auto] before:bg-[position:100%_100%] before:bg-no-repeat before:opacity-20 relative flex flex-col justify-center px-5 py-10 md:px-8 md:py-14 lg:w-[54%] lg:px-[80px] lg:py-[80px] lg:pl-[70px] before:absolute before:inset-0 before:content-[''] before:pointer-events-none"
        style={{
          backgroundImage: `url(${ASSET_BASE}/Vector-1024x638.png.webp)`,
        }}
      >
        <div className="relative">
          <h2 className="mb-[28px] max-w-[610px] font-sofia text-[36px] font-bold leading-[38px] text-white md:text-[44px] md:leading-[46px] lg:text-[56px] lg:leading-[56px]">
            Outsource your chores &amp; enjoy your newfound{" "}
            <span className="italic">free time</span>
          </h2>
          <p className="mb-8 max-w-[610px] font-work text-[17px] font-normal leading-[27px] text-white md:text-[19px] md:leading-[29px] lg:text-[22px] lg:leading-[33px]">
            At Blive Cleaning, we deliver comprehensive home, apartment,
            business, and janitorial cleanings across New Hampshire and
            Massachusetts, including locations like Leominster, Lunenburg,
            Fitchburg, Harvard, and Sterling. You can rely on us to
            meticulously handle every inch of your space, leaving you with a
            warm and welcoming environment and more time to dedicate to your
            family or managing your business.
          </p>
          <h5 className="mb-8 max-w-[530px] space-y-1 font-work text-[17px] font-semibold leading-[28px] text-blive-lime md:text-[20px]">
            <span className="block">BLIVE IS A PROUDLY PROVIDER OF</span>
            <span className="block">PREMIUM CLEANINGS IN MA &amp; NH</span>
          </h5>
          <a
            href="/about-us/"
            className="inline-block bg-black px-6 py-3 text-center font-work text-[15px] font-medium leading-[15px] text-white transition-opacity hover:opacity-85"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}
