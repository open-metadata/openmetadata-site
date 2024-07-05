import Image from "next/image";
import Link from "next/link";
import Clients from "./Clients";
import { JoinSlackIcon } from "../Icons/JoinSlackIcon";
import { BoltIcon } from "../Icons/BoltIcon";

const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="mt-32 w-full custom-container">
      <div className="flex justify-between items-start gap-10">
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="eager"
        />
        <div className="pt-28 pb-16 text-center px-4 md:pt-20 lg:px-0">
          <h1 className="text-4xl text-[#292929] font-medium tracking-[-0.02em] lg:leading-[54px] lg:text-[50px]">
            Open and unified metadata platform for data{" "}
            <span className="text-[#7147E8]">
              discovery, observability and governance
            </span>
          </h1>
          <p className="mt-3 max-w-[85%] mx-auto leading-[30px] tracking-[-0.02em] sm:text-lg lg:text-[20px]">
            A single place for all your data and all your data practitioners to
            build and manage high quality data assets. Built by Collate and the
            founders of Apache Hadoop, Apache Atlas, and Uber Databook.
          </p>
          <div className="relative z-[11] flex flex-col sm:flex-row justify-center gap-3 items-center mt-12">
            <Link
              className="uppercase flex items-center gap-2 text-[#7147E8] font-semibold border-[1px] border-[#7147E8] px-14 py-[14px] hover:text-[#6540c8]"
              href="https://slack.open-metadata.org/"
              target="_blank"
            >
              <JoinSlackIcon />{" "}
              <span className="mt-[3px]">Join Slack</span>
            </Link>
            <button
              onClick={onClick}
              className="uppercase flex items-center gap-2 font-semibold border-[1px] border-[#7147E8] text-white bg-[#7147E8] px-14 py-[14px] hover:bg-[#6540c8]"
            >
              <BoltIcon />{" "}
              <span className="mt-[3px]">Try Openmetadata</span>
            </button>
          </div>
          <div className="relative -top-20 z-[10]">
            <Image
              height={800}
              width={1200}
              src="/assets/header/shadow.svg"
              alt="shadow-svg"
              loading="eager"
            />
            <div className="absolute top-24 md:top-32">
              <Image
                height={600}
                width={1200}
                src="/assets/header/header.webp"
                alt="header-svg"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
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
