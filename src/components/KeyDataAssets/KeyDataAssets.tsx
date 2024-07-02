import { useState } from "react";
import { TABS } from "@/constants/KeyDataAssets.constants";
import Image from "next/image";

const KeyDataAssets = () => {
  const [openTab, setOpenTab] = useState("Discovery");

  const handleTabClick = (tab: string) => setOpenTab(tab);

  const currentUsecase = TABS.find((item) => item.name === openTab)?.useCases;

  return (
    <div className="custom-container mt-40 px-4 md:px-16">
      <div className="flex justify-between overflow-x-scroll gap-3 pb-3 lg:gap-5">
        {TABS.map((item) => (
          <div
            className={`flex items-center cursor-pointer text-[#4B2F9B] border-2 border-[#4B2F9B] rounded-full px-8 py-1 ${
              item.name === openTab && "bg-[#4B2F9B] text-white"
            }`}
            onClick={() => handleTabClick(item.name)}
          >
            <item.icon color={openTab === item.name ? "white" : "#4B2F9B"} />
            <span className="lg:text-[20px] ml-2">{item.name}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-9 text-center text-[#292929] font-medium text-[36px] lg:text-[48px]">
        {currentUsecase?.header.text}{" "}
        <span className="text-[#7147E8]">
          {currentUsecase?.header.highlightedText}
        </span>
      </h3>
      <p className="font-normal text-center text-[#382374] mx-auto md:max-w-[85%] lg:max-w-[60%] sm:text-[20px]">
        {currentUsecase?.description}
      </p>
      <div className="my-5 items-center text-[#382374] text-[18px] gap-5 sm:px-10 md:px-24 lg:flex xl:text-[22px]">
        {currentUsecase?.cases.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <Image
              className="w-[40px] h-[40px]"
              src="/assets/keydata/tick.svg"
              alt="Key Assets"
              width={40}
              height={40}
              loading="lazy"
            />
            <span className="text-wrap">
              <i>{item}</i>
            </span>
          </div>
        ))}
      </div>
      <div>
        {currentUsecase?.imgSrc && (
          <Image
            className="mx-auto"
            src={currentUsecase.imgSrc}
            alt="Key Data Assets"
            width={1000}
            height={600}
            priority={openTab === currentUsecase.imgSrc}
          />
        )}
      </div>
    </div>
  );
};

export default KeyDataAssets;
