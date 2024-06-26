import { useState } from "react";
import { TABS } from "@/constants/KeyDataAssets.constants";
import Image from "next/image";

const KeyDataAssets = () => {
  const [openTab, setOpenTab] = useState('Discovery')

  const handleTabClick = (tab: string) => setOpenTab(tab)

  return (
    <div className="custom-container mt-32 px-4 md:px-16">
      <div
        data-aos="fade-up"
        className="flex justify-between overflow-x-scroll gap-3 pb-3 lg:gap-5"
      >
        {TABS.map((item) => (
          <div
            className={`flex items-center cursor-pointer text-[#4B2F9B] border-2 border-[#4B2F9B] rounded-full px-8 py-1 ${
              item.name === openTab && "bg-[#4B2F9B] text-white"
            }`}
            onClick={() => handleTabClick(item.name)}
          >
            <item.icon color={openTab === item.name ? 'white' : '#4B2F9B'} />
            <span className="lg:text-[20px] ml-2">{item.name}</span>
          </div>
        ))}
      </div>
      <h3
        data-aos="fade-up"
        className="mt-9 text-center text-[#292929] font-medium text-[36px] lg:text-[48px]"
      >
        Enable teams to find{" "}
        <span className="text-[#7147E8]">key data assets</span>
      </h3>
      <p
        data-aos="fade-up"
        className="font-normal text-center text-[#382374] mx-auto md:max-w-[75%] lg:max-w-[60%] sm:text-[20px] lg:text-[22px]"
      >
        Get the right data to the right people to do their work. OpenMetadata
        delivers a single source of truth for all your data sources, data
        pipelines, and data products.
      </p>
      <div data-aos="fade-up" className="my-5 items-center text-[#382374] text-[18px] gap-5 sm:px-10 md:px-24 lg:flex xl:text-[24px]">
        <div className="flex items-center gap-3">
          <Image
            className="w-[40px] h-[40px]"
            src="/assets/keydata/tick.svg"
            alt="Key Assets"
            width={40}
            height={40}
          />
          <span className="text-wrap">
            <i>80+ Data Connectors for all your data sources</i>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            className="w-[40px] h-[40px]"
            src="/assets/keydata/tick.svg"
            alt="Key Assets"
            width={40}
            height={40}
          />
          <span>
            <i>Search, facet and preview across your data estate</i>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            className="w-[40px] h-[40px]"
            src="/assets/keydata/tick.svg"
            alt="Key Assets"
            width={40}
            height={40}
          />
          <span>
            <i>Collaborate with other data practitioners</i>
          </span>
        </div>
      </div>
      <div data-aos="zoom-in">
        <Image
          className="mx-auto"
          src="/assets/keydata/key-data-assets.webp"
          alt="Key Data Assets"
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
};

export default KeyDataAssets;
