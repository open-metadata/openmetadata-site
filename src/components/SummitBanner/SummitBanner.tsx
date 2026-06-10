import Image from "next/image";
import { OmdLogo } from "@/components/Icons/OmdLogo";

const SummitBanner = () => {
  return (
    <>
      <div className="bg-[linear-gradient(0deg,_#FFF_-3.19%,_#A585FF_281.53%)]">
        <div className="max-w-[1300px] mx-auto py-8 lg:py-16 px-4 w-full">
          <div className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden">
            <div
              className="rounded-t-[20px] lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-tr-none lg:rounded-br-none p-6 lg:p-10 lg:pr-16 flex-1 bg-[#F9F6FF]"
            >
              <div className="flex gap-3 items-center">
                <img src="/assets/collate-logo.svg" alt="Collate" width={169} height={39} />
                <span className="text-gray-400 text-xl font-light">×</span>
                <OmdLogo />
              </div>
              <div className="text-white text-sm py-1 px-3 max-w-fit rounded-full my-3 bg-[#181D27]">
                VIRTUAL
              </div>
              <h2 className="text-4xl lg:text-6xl font-normal text-[#222244]">
                Collate Summit &apos;<span className="text-[#7147E8]">26</span>
              </h2>
              <div className="text-lg mb-3 text-[#414651]">
                AI agents at work. Governed data. Powered by Semantic Intelligence.
              </div>
              <a
                href="https://www.getcollate.io/summit2026"
                target="_blank"
                className="cursor-pointer px-5 py-2 block w-fit rounded-[8px] font-medium text-lg my-4 transition-colors bg-[#7147E8] border border-[#7147E8] text-white hover:bg-[#6d3eef]"
              >
                Register Now
              </a>
              <div className="text-lg sm:flex gap-2 items-center bg-white w-fit border !border-[#FF7B7B] rounded-[10px] px-3 py-1.5">
                <div className="flex gap-2 items-center">
                  <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                    <span className="animate-live-ring absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="relative h-3 w-3 rounded-full bg-[#E11E29]"></span>
                  </div>
                  <div className="font-bold text-[#E11E29]">LIVE NOW</div>
                </div>
                <div className="relative hidden sm:block">
                  <img src='/assets/divider.svg' alt="Divider" className="w-2 h-8" />
                </div>
                <div className="text-[#252B37]">Join the summit happening now.</div>
              </div>
            </div>
            <div className="relative rounded-b-[20px] lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-tl-none lg:rounded-bl-none w-full min-h-[260px] lg:w-[480px] shrink-0 overflow-hidden">
              <Image
                src="/assets/summit/summit_banner.svg"
                alt="Collate Summit 2026"
                fill
                priority
                className="object-cover object-center scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummitBanner;
