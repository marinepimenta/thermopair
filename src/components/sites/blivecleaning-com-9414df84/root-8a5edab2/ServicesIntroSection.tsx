export default function ServicesIntroSection() {
  return (
    <section className="min-h-[500px] w-full grad-ember py-12 pb-28 md:pb-32 lg:py-[80px] lg:pb-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-5 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="w-full lg:w-[48%]">
          <h2 className="mb-4 font-heading text-[20px] font-bold leading-[24px] text-white lg:text-[24px]">
            CHOOSE YOUR SERVICE
          </h2>
          <h3 className="max-w-[610px] font-heading text-[32px] font-bold leading-[34px] text-white md:text-[40px] md:leading-[42px] lg:text-[48px] lg:leading-[48px]">
            We keep your space comfortable in every season
          </h3>
        </div>

        <div className="w-full lg:flex-1">
          <p className="max-w-[640px] font-body text-[17px] font-normal leading-[26px] text-white lg:text-[18px] lg:leading-[27px]">
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
