import { useEffect, useState } from "react";
import { OmdLogo } from "@/components/Icons/OmdLogo";
import HubspotForm from "@/components/HubspotForm";

const SUMMIT_FORM_ID = "efc08db1-6ca0-4cd0-91e0-6ff6c94e6943";
const TARGET_DATE = new Date("2026-06-10T16:00:00Z");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    function calc() {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
      const totalMinutes = Math.floor(diff / 60000);
      return {
        days: Math.floor(totalMinutes / 1440),
        hours: Math.floor((totalMinutes % 1440) / 60),
        minutes: totalMinutes % 60,
      };
    }
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const SummitBanner = () => {
  const { days, hours, minutes } = useCountdown();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requiredTime = [
    { label: "d", value: days },
    { label: "h", value: hours },
    { label: "m", value: minutes },
  ];

  return (
    <>
      <div className="bg-[linear-gradient(0deg,_#FFF_-13.37%,_#A585FF_181.46%)]">
        <div className="max-w-[1300px] mx-auto py-8 lg:py-16 px-4 w-full">
          <div className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden">
            <div
              className="rounded-t-[20px] lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-tr-none lg:rounded-br-none p-6 lg:p-10 lg:pr-16 flex-1 bg-[#F9F6FF]"
            >
              <div className="flex gap-4 items-center">
                <img src="/assets/collate-logo.svg" alt="Collate" width={169} height={39} />
                <span className="text-gray-400 text-xl font-light">×</span>
                <OmdLogo />
              </div>
              <div className="text-white text-sm py-1 px-3 max-w-fit rounded-full my-3 bg-[#181D27]">
                VIRTUAL
              </div>
              <h2 className="text-4xl lg:text-6xl font-medium text-[#222244]">
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
              <div className="flex items-center gap-4 mt-6">
                <div className="text-lg font-normal text-black">
                  Reserve your spot for{" "}
                  <span className="text-[#7147E8]">
                    June 10th
                  </span>
                  .
                </div>
                <div className="flex gap-3">
                  {requiredTime.map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div
                        className="text-[28px] font-medium text-black rounded-md px-4 py-2 border-2 border-[#2B5999]"
                      >
                        {String(value).padStart(2, "0")}
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-b-[20px] lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-tl-none lg:rounded-bl-none overflow-hidden w-full lg:w-auto">
              <img
                src="/assets/summit/summit-banner-mobile.svg"
                alt="Collate Summit 2026"
                className="block lg:hidden w-full h-auto"
              />
              <img
                src="/assets/summit/summit-banner.svg"
                alt="Collate Summit 2026"
                className="hidden lg:block h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white px-5 sm:px-10 pt-6 pb-0 box-border rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-5 text-gray-500 hover:text-black text-2xl leading-none"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <HubspotForm id="summitHubspotForm" formId={SUMMIT_FORM_ID} />
          </div>
        </div>
      )}
    </>
  );
};

export default SummitBanner;
