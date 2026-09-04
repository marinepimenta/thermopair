const greaterBostonCities = [
  "Boston",
  "Cambridge",
  "Somerville",
  "Newton",
  "Brookline",
  "Quincy",
  "Waltham",
  "Medford",
  "Malden",
  "Everett",
  "Revere",
  "Lynn",
  "Watertown",
  "Dedham",
  "Needham",
  "Milton",
  "Arlington",
  "Belmont",
  "Chelsea",
  "Winthrop",
];

const centralNorthShoreCities = [
  "Worcester",
  "Framingham",
  "Natick",
  "Marlborough",
  "Woburn",
  "Salem",
  "Peabody",
  "Beverly",
  "Danvers",
  "Andover",
  "Lowell",
  "Leominster",
  "Fitchburg",
  "Gloucester",
  "Ipswich",
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
      <h3 className="mb-5 font-heading text-[32px] font-bold leading-[32px] text-black">
        {heading}
      </h3>
      <ul className="grid grid-cols-2 gap-x-6">
        {cities.map((city) => (
          <li key={city} className="pb-[3.5px]">
            <a
              href="#"
              className="flex items-center gap-1.5 font-body text-[16px] leading-[24px] text-[#2C2E33] transition-colors hover:text-thermo-orange"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-thermo-orange"
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
    <section className="min-h-[auto] w-full bg-thermo-mist px-5 py-14 lg:min-h-[830px] lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:gap-20">
        <div className="mb-10 lg:mb-0 lg:w-[34%]">
          <h2 className="mb-5 font-heading text-[34px] font-bold leading-[36px] text-[#131313] md:text-[42px] md:leading-[44px] lg:text-[51px] lg:leading-[51px]">
            Areas We Serve
          </h2>
          <p className="max-w-[360px] font-body text-[18px] font-normal leading-[28px] text-black lg:text-[22px] lg:leading-[33px]">
            We install and service heating and cooling systems across
            Massachusetts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:flex-1">
          <CityList heading="Greater Boston:" cities={greaterBostonCities} />
          <CityList
            heading="Central & North Shore:"
            cities={centralNorthShoreCities}
          />
        </div>
      </div>
    </section>
  );
}
