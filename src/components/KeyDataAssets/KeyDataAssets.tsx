import { useState } from "react";
import { TABS } from "@/constants/KeyDataAssets.constants";
import Image from "next/image";

const KeyDataAssets = () => {
  const [openTab, setOpenTab] = useState("Discovery");

  const handleTabClick = (tab: string) => setOpenTab(tab);

  const currentUsecase = TABS.find((item) => item.name === openTab)?.useCases;

  return (
    <div className="custom-container mt-48 px-4 ms:px-16 xl:px-32">
      <div className="flex justify-between overflow-x-scroll gap-3 pb-3 lg:gap-5">
        {TABS.map((item) => (
          <div
            className={`flex items-center cursor-pointer text-[#4B2F9B] border-2 border-[#4B2F9B] rounded-full px-9 py-1 ${
              item.name === openTab && "bg-[#4B2F9B] text-white"
            }`}
            onClick={() => handleTabClick(item.name)}
          >
            <item.icon color={openTab === item.name ? "white" : "#4B2F9B"} />
            <span className="lg:text-[16px] mt-[2px] ml-2 tracking-[-0.01em]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <h3 className="mt-9 text-center text-[#292929] tracking-[-0.001em] font-medium text-[36px] lg:text-[48px]">
        {currentUsecase?.header.text}{" "}
        <span className="text-[#7147E8]">
          {currentUsecase?.header.highlightedText}
        </span>
      </h3>
      <p className="font-normal text-center text-[#382374] tracking-[-0.02em] mx-auto md:max-w-[85%] lg:max-w-[70%] sm:text-[20px]">
        {currentUsecase?.description}
      </p>
      <div className="my-5 items-center text-[#382374] mx-auto text-[16px] gap-3 tracking-[0.01em] sm:px-10 md:px-24 lg:max-w-[85%] lg:flex">
        {currentUsecase?.cases.map((item) => (
          <div key={item} className="flex items-center gap-[10px]">
            <Image 
              className="w-[34px] h-[34px]"
              src="/assets/keydata/tick.svg"
              alt="Key Assets"
              width={34}
              height={34}
              loading="lazy"
            />
            <span className="text-wrap">{item}</span>
          </div>
        ))}
      </div>
      <div>
        {currentUsecase?.imgSrc && (
          <Image
            className="mx-auto"
            src={currentUsecase.imgSrc}
            alt={`Use case: ${openTab}`}
            width={1000}
            height={600}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default KeyDataAssets;
