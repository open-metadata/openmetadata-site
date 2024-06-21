import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex justify-between gap-10">
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="lazy"
        />
        <div className="mt-32 pt-24 pb-16 text-center px-4 lg:px-0">
          <h1
            data-aos="fade-up"
            className="text-4xl text-[#292929] lg:leading-[54px] lg:text-5xl"
          >
            Open and unified metadata platform for data{" "}
            <span className="text-[#7147E8]">
              discovery, observbility and governance
            </span>
          </h1>
          <p
            data-aos="fade-up"
            className="mt-3 font-light max-w-[88%] mx-auto text-lg"
          >
            A single place for all your data and all your data practitioners to
            build and manage high quality data assets. Built by Collate and the
            founders of Apache Hadoop, Apache Atlas, and Uber Databook.
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row justify-center gap-3 items-center mt-5"
          >
            <Link
              className="uppercase flex items-center gap-2 text-[#7147E8] font-semibold border-[1px] border-[#7147E8] px-10 py-3 rounded-sm hover:no-underline hover:rounded-md sm:text-lg"
              href="https://slack.open-metadata.org/"
              target="_blank"
            >
              <Image
                src="/assets/header/message-icon.svg"
                alt="message-icon-svg"
                width={25}
                height={25}
                loading="lazy"
              />{" "}
              Join Slack
            </Link>
            <Link
              href="#"
              className="uppercase flex items-center gap-2 font-semibold border-[1px] border-[#7147E8] text-white bg-[#7147E8] px-10 py-3 rounded-sm hover:no-underline hover:bg-[#6540c8] sm:text-lg"
            >
              <Image
                src="/assets/header/bolt.svg"
                alt="bolt-icon-svg"
                width={20}
                height={20}
                loading="lazy"
              />{" "}
              Try Openmetadata
            </Link>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/assets/header/shadow.svg"
              alt="shadow-svg"
              width={1300}
              height={900}
            />
            <div className="absolute top-28">
              <Image 
                className="mx-auto text-center"
                data-aos="zoom-in"
                height={500}
                width={1300}
                src="/assets/header/header.svg"
                alt="header-svg"
                loading="lazy"
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
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Header;
