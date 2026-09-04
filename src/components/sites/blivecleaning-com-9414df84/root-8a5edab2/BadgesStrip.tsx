// PLACEHOLDER: swap for Thermopair's real certification logos once confirmed.

const BADGES = [
  "Credential 1",
  "Credential 2",
  "Credential 3",
  "Credential 4",
  "Credential 5",
  "Credential 6",
  "Credential 7",
  "Credential 8",
  "Credential 9",
];

export default function BadgesStrip() {
  return (
    <section className="w-full bg-white py-10 md:h-[223px] md:py-10 flex items-center">
      <div className="mx-auto w-full max-w-[1320px] px-5">
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10">
          {BADGES.map((badge) => (
            <div
              key={badge}
              className="flex h-[52px] w-[92px] items-center justify-center rounded-md border border-dashed border-thermo-slate/50 bg-thermo-paper px-3 text-center font-body text-[10px] leading-tight text-thermo-slate md:h-[74px] md:w-[120px] md:text-[11px]"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
