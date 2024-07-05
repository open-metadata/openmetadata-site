import Image from "next/image";
import Link from "next/link";
import Clients from "./Clients";

const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full custom-container mt-20 md:mt-24 lg:mt-36">
      <div className="flex justify-between items-start gap-10">
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="eager"
        />
        <div className="pt-28 pb-16 text-center px-6 md:pt-20 lg:px-0">
          <h1 className="text-[40px] leading-[44px] text-[#292929] font-medium lg:leading-[54px] lg:text-[50px]">
            Open and unified metadata platform for data{" "}
            <span className="text-[#7147E8]">
              discovery, observability and governance
            </span>
          </h1>
          <p className="mt-3 mx-auto sm:leading-[30px] max-w-[95%] sm:max-w-[85%] sm:text-lg lg:text-[20px]">
            A single place for all your data and all your data practitioners to
            build and manage high quality data assets. Built by Collate and the
            founders of Apache Hadoop, Apache Atlas, and Uber Databook.
          </p>
          <div className="relative z-[11] flex flex-col-reverse sm:flex-row justify-center gap-3 items-center mt-12">
            <Link
              className="uppercase w-full flex justify-center items-center gap-2 text-[#7147E8] font-semibold border-[1px] border-[#7147E8] sm:px-14 py-[14px] sm:w-auto hover:text-[#6540c8]"
              href="https://slack.open-metadata.org/"
              target="_blank"
            >
              <Image
                src="/assets/header/message-icon.svg"
                alt="message-icon-svg"
                width={18}
                height={18}
                loading="eager"
              />{" "}
              <span className="mt-[3px]">Join Slack</span>
            </Link>
            <button
              onClick={onClick}
              className="uppercase w-full flex justify-center items-center gap-2 font-semibold border-[1px] border-[#7147E8] text-white bg-[#7147E8] sm:px-14 py-[14px] sm:w-auto hover:bg-[#6540c8]"
            >
              <Image
                src="/assets/header/bolt.svg"
                alt="bolt-icon-svg"
                width={18}
                height={18}
                loading="eager"
              />{" "}
              <span className="mt-[3px]">Try Openmetadata</span>
            </button>
          </div>
          <div className="relative z-[10] top-2 sm:-top-10 md:-top-20">
            <Image
              height={800}
              width={1200}
              src="/assets/header/shadow.svg"
              alt="shadow-svg"
              loading="eager"
            />
            <div className="absolute top-8 sm:top-24 md:top-32">
              <Image
                className="hidden md:block"
                height={600}
                width={1200}
                src="/assets/header/header.webp"
                alt="header-svg"
                loading="eager"
              />
              <Image
                className="md:hidden"
                height={200}
                width={800}
                src="/assets/header/header-mobile.webp"
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
