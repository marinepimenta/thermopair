const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

export default function CtaGridSection() {
  return (
    <section className="bg-white py-[10px] pb-20">
      <div className="mx-auto grid w-full max-w-[1340px] gap-5 px-5 lg:grid-cols-3 lg:grid-rows-2">
        {/* Tile 1 - text CTA card */}
        <div className="flex min-h-[300px] flex-col justify-center rounded-lg bg-blive-cream px-6 py-8 md:px-10 md:py-12 lg:col-span-1 lg:row-span-2 lg:min-h-[340px]">
          <h2 className="max-w-[298px] font-sofia text-[26px] font-medium leading-[28px] text-black md:text-[32px] md:leading-[32px]">
            <span className="block">
              Need a eco-friendly cleaning? You got it!
            </span>
            <span className="mt-6 block">
              Start your journey with us today!
            </span>
          </h2>
          <a
            href="#request-a-quote"
            className="mt-8 inline-block w-fit bg-black px-6 py-3 text-center font-work text-[15px] font-medium leading-[15px] text-white transition-opacity hover:opacity-85"
          >
            REQUEST A QUOTE
          </a>
        </div>

        {/* Tile 2 - photo tile with headline */}
        <div className="group relative min-h-[300px] overflow-hidden rounded-lg lg:col-span-2 lg:row-span-1 lg:min-h-[340px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${ASSET_BASE}/hp_grid_1-1.jpg)` }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <h2 className="absolute bottom-6 left-6 right-6 max-w-[551px] font-sofia text-[32px] font-bold leading-[34px] text-white md:bottom-10 md:left-10 md:right-10 md:text-[40px] md:leading-[42px] lg:text-[56px] lg:leading-[56px]">
            At Blive, we clean with love and care.
          </h2>
        </div>

        {/* Tiles 3 & 4 - plain photo tiles */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          <div
            role="img"
            aria-label="Blive cleaning team at work"
            className="group relative min-h-[240px] overflow-hidden rounded-lg lg:min-h-[340px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${ASSET_BASE}/hp_grid_2-1.jpg)`,
              }}
            />
          </div>
          <div
            role="img"
            aria-label="A freshly cleaned home interior"
            className="group relative min-h-[240px] overflow-hidden rounded-lg lg:min-h-[340px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${ASSET_BASE}/hp_grid_3-1.jpg)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
