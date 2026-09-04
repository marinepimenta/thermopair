export default function ServicesIntroSection() {
  return (
    <section className="w-full pt-24 pb-40 md:pt-32 lg:pt-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="w-full lg:w-[48%]">
          <h2
            className="reveal mb-4 font-body text-[12px] font-medium uppercase tracking-[0.22em] text-thermo-orange"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            CHOOSE YOUR SERVICE
          </h2>
          <h3
            className="reveal max-w-[20ch] text-balance font-heading text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.06] text-white"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            We keep your space comfortable in every season
          </h3>
        </div>

        <div className="w-full lg:flex-1">
          <p
            className="reveal max-w-[56ch] font-body text-[17px] leading-[1.65] text-thermo-mist/70 md:text-[19px]"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Our goal is simple: a home or business that stays comfortable
            without you having to think about it. We install, repair, and
            maintain heating and cooling systems for households and
            businesses across Massachusetts, and we explain every option in
            plain language so you can decide with confidence and no
            surprises on the invoice.
          </p>
        </div>
      </div>
    </section>
  );
}
