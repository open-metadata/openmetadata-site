import { ABOUT_OPENMETADATA } from "@/constants/AboutOpenMetadata.constants";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../Icons/Arrow";

const AboutOpenMetadata = () => {
  return (
    <div className="custom-container relative z-[12] mt-9 mb-16 md:mt-16 md:mb-28 px-6 md:px-16 xl:px-24">
      <h3 className="text-[#292929] font-medium mx-auto tracking-[-0.02em] text-center leading-[40px] text-[32px] lg:text-[48px]">
        Learn More <span className="text-[#7147E8]">About OpenMetadata</span>
      </h3>
      <div className="mt-12 grid gap-[16px] sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {ABOUT_OPENMETADATA.map((item) => (
          <div key={item.header} className="shadow-xl rounded-sm">
            <Link href={item.href} target="_blank">
              <div className="bg-gradient-to-tl from-[#0B3547] to-[#176B8F] flex justify-center items-center h-[180px] rounded-t-sm">
                <Image
                  className="mx-auto w-[87%] h-[150px] rounded-md"
                  src={item.image}
                  alt={item.header}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className="px-[40px] py-7 flex flex-col items-between">
                <p className="text-[24px] text-[#4B2F9B] tracking-[-0.01em] font-semibold -mb-2 md:text-[28px]">
                  {item.header}
                </p>
                <p className="text-[#170E2E] font-medium my-3 min-h-[46px]">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-2 uppercase text-[#5E3BC1] font-bold">
                  {item.linkText}{" "}
                  <Arrow />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOpenMetadata;
