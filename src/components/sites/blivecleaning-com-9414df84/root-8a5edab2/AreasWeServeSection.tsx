const massachusettsCities = [
  "Leominster",
  "Lunenburg",
  "Sterling",
  "Harvard",
  "Groton",
  "Holden",
  "Fitchburg",
  "Lancaster",
  "Pepperell",
  "Littleton",
  "Westminster",
  "Worcester",
  "Ashburnham",
  "West Boylston",
  "Gardner",
  "Shirley",
  "Hopkinton",
  "Dunstable",
  "Princeton",
  "Townsend",
];

const newHampshireCities = [
  "Hollis",
  "Brookline",
  "Amherst",
  "Bedford",
  "Peterborough",
  "Jaffrey",
  "Temple",
  "Rindge",
  "Dublin",
  "Wilton",
  "Hancock",
  "Harrisville",
  "Richmond",
  "Swanzey",
  "Keene",
];

function CityList({
  heading,
  cities,
}: {
  heading: string;
  cities: string[];
}) {
  return (
    <div>
      <h3 className="mb-5 font-sofia text-[32px] font-bold leading-[32px] text-black">
        {heading}
      </h3>
      <ul className="grid grid-cols-2 gap-x-6">
        {cities.map((city) => (
          <li key={city} className="pb-[3.5px]">
            <a
              href="#"
              className="flex items-center gap-1.5 font-work text-[16px] leading-[24px] text-[#333] transition-colors hover:text-blive-green"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-blive-green"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AreasWeServeSection() {
  return (
    <section className="min-h-[auto] w-full bg-blive-cream-2 px-5 py-14 lg:min-h-[830px] lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:gap-20">
        <div className="mb-10 lg:mb-0 lg:w-[34%]">
          <h2 className="mb-5 font-sofia text-[34px] font-bold leading-[36px] text-[rgb(2,2,2)] md:text-[42px] md:leading-[44px] lg:text-[51px] lg:leading-[51px]">
            Areas We Serve
          </h2>
          <p className="max-w-[360px] font-work text-[18px] font-normal leading-[28px] text-black lg:text-[22px] lg:leading-[33px]">
            We offer our cleaning services in Massachusetts and New
            Hampshire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:flex-1">
          <CityList heading="Massachusetts:" cities={massachusettsCities} />
          <CityList heading="New Hampshire:" cities={newHampshireCities} />
        </div>
      </div>
    </section>
  );
}
