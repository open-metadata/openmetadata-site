import { ACHIEVEMENT_LIST } from "@/constants/Achievement.constants";
import Image from "next/image";

const Achievement = () => {
  return (
    <div className="shadow-bg">
      <div className="custom-container py-[32px] px-5 md:px-16 md:py-[72px]">
        <div className="flex rounded-lg flex-col w-full shadow-secondary lg:rounded-2xl lg:flex-row">
          <div className="left-top-box py-8 px-7 bg-white lg:max-w-[43%] md:px-12 lg:px-[50px] xl:px-[80px]">
            <div className="flex flex-col justify-center h-full text-center lg:text-left">
              <h2 className="text-[32px] font-semibold tracking-[-0.01em] leading-[38px] lg:text-[38px] xl:text-[44px] xl:leading-[52px]">
                Fastest Growing{" "}
                <span className="text-[#7147E8]">
                  Open Source Metadata Platform
                </span>
              </h2>
              <p className="text-base tracking-[-0.01em] mt-3 text-[#555555] md:leading-[28px] md:text-[19px]">
                Driven by an active community of thousands globally,
                OpenMetadata is becoming a standard for unified metadata platforms.
              </p>
            </div>
          </div>
          <div className="right-bottom-box bg-[#D3ECF7] bg-opacity-70 w-full px-4 pt-[48px] pb-[16px] sm:pt-[84px] sm:pb-[84px] sm:px-10 xl:px-[68px]">
            <div className="grid gap-[14px] sm:grid-cols-2">
              {ACHIEVEMENT_LIST.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded flex flex-col gap-1 lg:gap-[2px] items-center justify-center text-center py-5 min-h-[40px] sm:rounded-sm"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    loading="eager"
                  />
                  <div className="text-[#382374] tracking-wider font-bold text-[40px] sm:text-[32px]">
                    {item.count}
                  </div>
                  <div className="uppercase text-[#555555] font-normal leading-[20px] max-w-[78%] tracking-[0.2em] text-[18px] sm:text-[16px]">
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
