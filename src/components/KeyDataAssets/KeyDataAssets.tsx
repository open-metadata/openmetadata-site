import { useState } from "react";
import { TABS } from "@/constants/KeyDataAssets.constants";
import Image from "next/image";

const KeyDataAssets = () => {
  const [openTab, setOpenTab] = useState("AI Readiness");

  const handleTabClick = (tab: string) => setOpenTab(tab);

  const currentUsecase = TABS.find((item) => item.name === openTab)?.useCases;

  return (
    <div className="usecase-gradient pb-10">
      <div className="custom-container mt-44 px-5 md:mt-32 md:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="flex flex-col gap-3 w-[220px] shrink-0 mt-8">
            {TABS.map((item) => (
              <button
                key={item.name}
                className={`cursor-pointer rounded-l-[10px] px-6 py-[16px] text-left whitespace-nowrap text-[20px] tracking-[-0.01em] transition-colors ${item.name === openTab
                    ? "bg-[#7147E8] text-white"
                    : "text-[#7147E8]"
                  }`}
                onClick={() => handleTabClick(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-[#C2C5D5] p-8">
            <h3 className="text-[#292929] tracking-[0.001em] font-medium text-[26px] leading-[32px] lg:text-[32px] lg:leading-[36px]">
              {currentUsecase?.header}
            </h3>
            <p className="font-normal text-[#252B37] mt-2 text-[15px] sm:text-[16px] max-w-[90%]">
              {currentUsecase?.description}
            </p>
            {currentUsecase?.imgSrc && (
              <div className="mt-6 rounded-xl overflow-hidden">
                <Image
                  className="mx-auto w-full"
                  src={currentUsecase.imgSrc}
                  alt={`Use case: ${openTab}`}
                  width={1000}
                  height={600}
                  priority
                />
              </div>
            )}
            <div className="mt-5 flex flex-col sm:grid sm:grid-cols-3 text-[#717680] text-[14px] gap-4">
              {currentUsecase?.cases.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Image
                    className="w-[24px] h-[24px] mt-0.5 shrink-0"
                    src="/assets/keydata/tick.svg"
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyDataAssets;
