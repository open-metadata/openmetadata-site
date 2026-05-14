import Image from "next/image";
import Clients from "./Clients";
import { BoltIcon } from "../Icons/BoltIcon";
import ParamLink from "../ParamLink";

const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="relative w-full mx-auto mt-20 md:mt-24">
      <div className="hero-header">
        <div className="relative z-[1] max-w-[1500px] mx-auto">
          <Image
            className="side-block absolute left-0 top-0 z-10"
            height={20}
            width={140}
            src="/assets/header/left-box.svg"
            alt="left-box-svg"
            loading="eager"
          />
          <div className="w-full pt-32 text-center px-6 md:pt-20 lg:px-0">
            <div
              className="inline-flex items-center gap-[10px] bg-[#222244] text-white text-sm rounded-[10px] p-[10px]"
            >
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-lg shrink-0 overflow-hidden">
                <img src="/assets/collate.svg" alt="Collate" className="w-5 h-5" />
              </span>
              <span>
                Managed service via Collate —{" "}
                <a
                  href="https://cloud.getcollate.io/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 hover:text-gray-200"
                >
                  Get started free →
                </a>
              </span>
            </div>
            <h1 className="text-[40px] leading-[44px] text-[#292929] font-medium lg:leading-[54px] lg:text-[50px] lg:max-w-[55%] mx-auto mt-4">
              The open-source AI context layer, powered by{" "}
              <span className="text-[#7147E8]">semantic intelligence</span>
            </h1>
            <p className="mt-3 mx-auto sm:leading-[26px] max-w-[88%] sm:text-lg text-[#333] lg:max-w-[63%]">
              A single place for all your data, AI agents, and data practitioners to build and manage high quality, semantically-rich metadata assets that give both people and agents shared context at scale. Built by Collate and the founders of Apache Hadoop, Apache Atlas, and Uber Databook.
            </p>
            <div className="relative z-[11] flex flex-col sm:flex-row justify-center gap-3 items-center mt-8">
              <button
                onClick={onClick}
                className="uppercase w-full flex justify-center items-center gap-2 font-semibold border-[1px] border-[#7147E8] text-white bg-[#7147E8] sm:px-8 py-[12px] sm:w-auto hover:bg-[#6540c8]"
              >
                <BoltIcon /> <span className="mt-[3px]">Try Openmetadata</span>
              </button>
              <ParamLink
                href="https://slack.open-metadata.org/"
                target="_blank"
                className="uppercase w-full flex justify-center items-center gap-2 text-[#7147E8] font-semibold border-[1px] border-[#7147E8] sm:px-8 py-[12px] sm:w-auto hover:text-[#6540c8]"
              >
                <img src="/assets/logo/slack.webp" alt="Slack" className="w-[18px] h-[18px]" /> <span className="mt-[3px]">Join Slack</span>
              </ParamLink>
            </div>
          </div>
          <div className="w-full overflow-hidden max-h-[660px]">
            <Image
              className="w-full h-auto block"
              height={500}
              width={1500}
              src="/assets/header/hero-header.webp"
              alt="header-svg"
              loading="eager"
            />
          </div>
          <Image
            className="side-block absolute right-0 top-0 z-10"
            height={20}
            width={180}
            src="/assets/header/right-box.svg"
            alt="right-box-svg"
            loading="eager"
          />
        </div>
      </div>
      <div className="max-w-[1500px]">
        <Clients />
      </div>
    </div>
  );
};

export default Header;
