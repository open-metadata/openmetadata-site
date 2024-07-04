import { ACHIEVEMENT_LIST } from "@/constants/Achievement.constants";
import Image from "next/image";

const Achievement = () => {
  return (
    <div className="shadow-bg">
      <div className="custom-container py-16 sm:px-0 md:px-16 md:py-18">
        <div className="flex gap-8 rounded-2xl flex-col w-full lg:flex-row lg:gap-0 lg:shadow-secondary">
          <div className="rounded-l-2xl px-4 lg:max-w-[43%] md:px-12 lg:bg-white lg:px-[80px]">
            <div className="flex flex-col justify-center h-full text-center lg:text-left">
              <h2 className="text-4xl font-semibold tracking-[-0.01em] md:text-[44px] md:leading-[52px]">
                Fastest Growing{" "}
                <span className="text-[#7147E8]">
                  Open Source Metadata Platform
                </span>
              </h2>
              <p className="text-[19px] leading-[28px] tracking-[-0.01em] mt-3 text-[#555555]">
                Driven by an active community of thousands globally,
                OpenMetadata is becoming a standard for modern data catalogs.
              </p>
            </div>
          </div>
          <div className="bg-[#D3ECF7] bg-opacity-70 w-full px-4 py-[84px] sm:px-10 xl:px-[68px] lg:rounded-r-2xl">
            <div className="grid grid-cols-2 gap-3">
              {ACHIEVEMENT_LIST.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-md flex flex-col gap-[2px] items-center justify-center text-center py-5 min-h-[40px]"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    loading="eager"
                  />
                  <div className="text-[#382374] tracking-wider font-bold sm:text-[32px] lg:text-[32px]">
                    {item.count}+
                  </div>
                  <div className="uppercase text-[#555555] font-normal max-w-[78%] sm:tracking-[0.2em]">
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
