import { ABOUT_OPENMETADATA } from "@/constants/AboutOpenMetadata.constants";
import Image from "next/image";
import Link from "next/link";

const AboutOpenMetadata = () => {
  return (
    <div className="custom-container relative z-[12] my-28 px-4 md:px-16">
      <h3 className="text-[#292929] font-medium text-center text-[36px] lg:text-[44px]">
        Learn More <span className="text-[#7147E8]">About OpenMetadata</span>
      </h3>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_OPENMETADATA.map((item) => (
          <div key={item.header} className="shadow-xl rounded-md">
            <Link href={item.href} target="_blank">
              <div className="bg-gradient-to-tl from-[#0B3547] to-[#176B8F] flex justify-center items-center h-[180px] rounded-t-md">
                <Image
                  className="mx-auto w-[87%] h-[150px] rounded-md"
                  src={item.image}
                  alt={item.header}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-7 flex flex-col items-between">
                <p className="text-[24px] text-[#4B2F9B] font-semibold -mb-2">
                  {item.header}
                </p>
                <p className="text-[#170E2E] font-medium my-3 min-h-[46px]">
                  {item.description}
                </p>
                <div className="flex gap-2 mt-2 uppercase text-[#5E3BC1] font-bold">
                  {item.linkText}{" "}
                  <Image
                    src="/assets/aboutOpenMetadata/arrow.svg"
                    alt="Arrow-svg"
                    width={20}
                    height={5}
                  />
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
