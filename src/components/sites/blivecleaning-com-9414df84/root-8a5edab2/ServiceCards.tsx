const ASSET_BASE =
  "/sites/blivecleaning-com-9414df84/root-8a5edab2/images";

const CARDS = [
  {
    title: ["Heating", "Installation"],
    href: "/heating-installation/",
    image: "hvac/technician-installing-unit.avif",
  },
  {
    title: ["Heating", "Repair"],
    href: "/heating-repair/",
    image: "hvac/technician-servicing-unit.avif",
  },
  {
    title: ["Air", "Conditioning"],
    href: "/air-conditioning/",
    image: "hvac/wall-unit-remote.jpg",
  },
  {
    title: ["Commercial", "HVAC"],
    href: "/commercial-hvac/",
    image: "hvac/commercial-ceiling-unit.jpg",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative z-10 -mt-24 w-full lg:-mt-40">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group relative block h-[280px] overflow-hidden rounded-[8px] md:h-[340px] lg:h-[388px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${ASSET_BASE}/${card.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <h3 className="absolute bottom-[28px] left-6 right-6 max-w-[255px] font-heading text-[28px] font-bold leading-[28px] text-white md:text-[30px] md:leading-[30px] lg:text-[36px] lg:leading-[36px]">
              <span className="block">{card.title[0]}</span>
              <span className="block">{card.title[1]}</span>
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
