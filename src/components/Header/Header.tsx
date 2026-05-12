import Image from "next/image";
import Clients from "./Clients";
import { JoinSlackIcon } from "../Icons/JoinSlackIcon";
import { BoltIcon } from "../Icons/BoltIcon";
import ParamLink from "../ParamLink";

const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full max-w-[1500px] mx-auto mt-20 md:mt-24 lg:mt-36">
      <div className="flex justify-between items-start gap-4 xl:gap-10 2xl:gap-0">
        <Image
          className="side-block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="eager"
        />
        <div className="pt-32 pb-16 text-center px-6 md:pt-20 lg:px-0">
          <h1 className="text-[40px] leading-[44px] text-[#292929] font-medium lg:leading-[54px] lg:text-[50px] lg:max-w-[75%] mx-auto mt-5">
            The open-source AI context layer, powered by{" "}
            <span className="text-[#7147E8]">semantic intelligence</span>
          </h1>
          <p className="mt-3 mx-auto sm:leading-[26px] max-w-[88%] sm:text-lg text-[#333]">
            A single place for all your data, AI agents, and data practitioners to build and manage high quality, semantically-rich metadata assets that give both people and agents shared context at scale. Built by Collate and the founders of Apache Hadoop, Apache Atlas, and Uber Databook.
          </p>
          <div className="relative z-[11] flex flex-col sm:flex-row justify-center gap-3 items-center mt-8 mb-16">
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
          <div className="overflow-hidden aspect-[1000/385]">
            <Image
              height={500}
              width={1200}
              src="/assets/header/hero-image.webp"
              alt="header-svg"
              loading="eager"
            />
          </div>
        </div>
        <Image
          className="side-block"
          height={20}
          width={180}
          src="/assets/header/right-box.svg"
          alt="right-box-svg"
          loading="eager"
        />
      </div>
      <Clients />
    </div>
  );
};

export default Header;
