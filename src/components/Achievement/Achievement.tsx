import { ACHIEVEMENT_LIST } from "@/constants/Achievement.constants";
import Image from "next/image";

const Achievement = () => {
  return (
    <div className="shadow-bg">
      <div className="custom-container py-16 sm:px-0 md:px-16 md:py-18">
        <div className="grid gap-8 rounded-2xl lg:grid-cols-2 lg:gap-0 lg:shadow-secondary">
          <div className="rounded-l-2xl px-4 md:px-12 lg:bg-white xl:px-24">
            <div
              className="flex flex-col justify-center h-full text-center lg:text-left"
              data-aos="fade-right"
            >
              <h2 className="text-4xl font-semibold md:text-[52px] md:leading-[62px]">
                Fastest Growing{" "}
                <span className="text-[#7147E8]">
                  Open Source Metadata Platform
                </span>
              </h2>
              <p className="text-2xl font-light mt-3">
                Driven by an active community of thousands globally,
                OpenMetadata is becoming a standard for modern data catalogs.
              </p>
            </div>
          </div>
          <div className="bg-[#D3ECF7] bg-opacity-70 px-4 py-16 sm:px-10 lg:rounded-r-2xl">
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
                  <div className="text-[#382374] tracking-wider font-bold sm:text-[32px] lg:text-[42px]">
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
