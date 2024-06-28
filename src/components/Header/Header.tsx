import Image from "next/image";
import Link from "next/link";
import Clients from "./Clients";

const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="mt-40 w-full custom-container">
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
          <h1 className="text-4xl text-[#292929] font-medium lg:leading-[54px] lg:text-[52px]">
            Open and unified metadata platform for data{" "}
            <span className="text-[#7147E8]">
              discovery, observability and governance
            </span>
          </h1>
          <p className="mt-3 max-w-[90%] mx-auto leadimg-[30px] sm:text-lg lg:text-[22px]">
            A single place for all your data and all your data practitioners to
            build and manage high quality data assets. Built by Collate and the
            founders of Apache Hadoop, Apache Atlas, and Uber Databook.
          </p>
          <div className="relative z-[11] flex flex-col sm:flex-row justify-center gap-3 items-center mt-12">
            <Link
              className="uppercase flex items-center gap-2 text-[#7147E8] font-bold border-[1px] border-[#7147E8] px-16 py-3 rounded-sm sm:text-xl hover:text-[#6540c8]"
              href="https://slack.open-metadata.org/"
              target="_blank"
            >
              <Image
                src="/assets/header/message-icon.svg"
                alt="message-icon-svg"
                width={24}
                height={24}
                loading="eager"
              />{" "}
              Join Slack
            </Link>
            <button
              onClick={onClick}
              className="uppercase flex items-center gap-2 font-bold border-[1px] border-[#7147E8] text-white bg-[#7147E8] px-10 py-3 rounded-sm hover:bg-[#6540c8] sm:text-xl"
            >
              <Image
                src="/assets/header/bolt.svg"
                alt="bolt-icon-svg"
                width={24}
                height={24}
                loading="eager"
              />{" "}
              Try Openmetadata
            </button>
          </div>
          <div className="relative -top-12 z-[10]">
            <Image
              height={800}
              width={1200}
              src="/assets/header/shadow.svg"
              alt="shadow-svg"
              loading="eager"
            />
            <div className="absolute top-24 md:top-36">
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
