import { ABOUT_OPENMETADATA } from "@/constants/AboutOpenMetadata.constants";
import Image from "next/image";
import Link from "next/link";

const AboutOpenMetadata = () => {
  return (
    <div className="mx-auto relative z-[12] mt-28 max-w-[1440px] px-4 md:px-16">
      <h3 className="text-[#292929] font-medium text-center text-[32px] lg:text-[44px]">
        Learn More <span className="text-[#7147E8]">About OpenMetadata</span>
      </h3>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_OPENMETADATA.map((item) => (
          <div key={item.header} className="shadow-xl rounded-md">
            <Image
              className="w-full h-[180px] rounded-t-md"
              src={item.image}
              alt={item.header}
              width={100}
              height={100}
            />
            <div className="px-5 py-7 flex flex-col items-between">
              <p className="text-[24px] text-[#4B2F9B] font-semibold -mb-2">{item.header}</p>
              <p className="text-[#170E2E] font-medium my-3 min-h-[46px]">{item.description}</p>
              <Link href={item.href} target="_blank" className="flex gap-2 mt-2 text-[#5E3BC1] font-bold justify-self-end">
                READ{" "}
                <Image
                  src="/assets/aboutOpenMetadata/arrow.svg"
                  alt="Arrow-svg"
                  width={20}
                  height={5}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOpenMetadata;
