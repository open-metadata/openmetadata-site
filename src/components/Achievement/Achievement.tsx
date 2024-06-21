import { ACHIEVEMENT_LIST } from "@/constants/Achievement.constants";
import Image from "next/image";

const Achievement = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto">
      <Image
        src="/assets/shadow-bg.webp"
        alt="shadow-bg"
        width={1440}
        height={500}
      />
      <div className="absolute top-0">
        <div className="py-16 grid gap-8 sm:px-0 md:px-16 md:py-18 lg:grid-cols-2 lg:gap-0">
          <div className="rounded-l-lg px-4 md:px-12 lg:shadow-lg lg:bg-white xl:px-24">
            <div
              className="flex flex-col justify-center h-full text-center lg:text-left"
              data-aos="fade-right"
            >
              <h2 className="text-4xl font-semibold md:text-5xl md:leading-[55px]">
                Fastest Growing{" "}
                <span className="text-[#7147E8]">
                  Open Source Metadata Platform
                </span>
              </h2>
              <p className="text-lg font-light mt-3">
                Driven by an active community of thousands globally,
                OpenMetadata is becoming a standard for modern data catalogs.
              </p>
            </div>
          </div>
          <div className="bg-[#D3ECF7] shadow-md bg-opacity-70 px-4 py-16 sm:px-10 lg:rounded-r-lg">
            <div data-aos="fade-left" className="grid grid-cols-2 gap-2">
              {ACHIEVEMENT_LIST.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-md flex flex-col items-center text-center py-5"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={35}
                    height={35}
                  />
                  <div className="text-[#382374] tracking-wider font-bold sm:text-[24px] lg:text-[42px]">
                    {item.count}+
                  </div>
                  <div className="uppercase font-light max-w-[78%] sm:tracking-widest text-[18px]">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
