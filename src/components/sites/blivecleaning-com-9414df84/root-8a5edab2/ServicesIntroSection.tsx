export default function ServicesIntroSection() {
  return (
    <section className="min-h-[500px] w-full bg-blive-green py-12 pb-28 md:pb-32 lg:py-[80px] lg:pb-40">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-5 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="w-full lg:w-[48%]">
          <h2 className="mb-4 font-sofia text-[20px] font-bold leading-[24px] text-blive-lime lg:text-[24px]">
            CHOOSE YOUR SERVICE
          </h2>
          <h3 className="max-w-[610px] font-sofia text-[32px] font-bold leading-[34px] text-white md:text-[40px] md:leading-[42px] lg:text-[48px] lg:leading-[48px]">
            We provide cleaning services to meet all your needs
          </h3>
        </div>

        <div className="w-full lg:flex-1">
          <p className="max-w-[640px] font-work text-[17px] font-normal leading-[26px] text-white lg:text-[18px] lg:leading-[27px]">
            Our mission is to transform every home or office into a
            perpetually spotless and welcoming space, reminiscent of a
            luxury hotel experience. We offer comprehensive solutions for
            both homes and businesses throughout Leominster, Lunenburg, and
            the area, meticulously delivered to ensure a comfortable and
            relaxing environment.
          </p>
        </div>
      </div>
    </section>
  );
}
