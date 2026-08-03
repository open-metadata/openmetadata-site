import { useState, useRef, useEffect } from "react";
import { TABS } from "@/constants/KeyDataAssets.constants";
import Image from "next/image";

const KeyDataAssets = () => {
  const [openTab, setOpenTab] = useState("AI Readiness");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setOpenTab(tab);
    setDropdownOpen(false);
  };

  const currentUsecase = TABS.find((item) => item.name === openTab)?.useCases;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="usecase-gradient pb-10">
      <div className="custom-container mt-44 px-5 md:mt-32 md:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-start">

          {/* Mobile dropdown */}
          <div className="relative w-full mb-4 md:hidden" ref={dropdownRef}>
            <button
              className="w-full flex items-center justify-between bg-[#7147E8] text-white rounded-[10px] px-6 py-[16px] text-[18px] tracking-[-0.01em]"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>{openTab}</span>
              <svg
                className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-[#C2C5D5] rounded-[10px] overflow-hidden shadow-lg">
                {TABS.map((item) => (
                  <button
                    key={item.name}
                    className={`w-full text-left px-6 py-[14px] text-[18px] tracking-[-0.01em] transition-colors ${
                      item.name === openTab
                        ? "bg-[#7147E8] text-white"
                        : "text-[#7147E8] hover:bg-[#f3eeff]"
                    }`}
                    onClick={() => handleTabClick(item.name)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab list */}
          <div className="hidden md:flex flex-col gap-3 w-[220px] shrink-0 mt-8">
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

          <div className="flex-1 bg-white rounded-2xl border border-[#C2C5D5] p-5">
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
            <div className="mt-5 flex flex-col sm:grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 text-[#717680] text-[14px] gap-4">
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
