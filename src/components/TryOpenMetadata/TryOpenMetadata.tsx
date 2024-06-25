import { TRY_OPENMETADATA } from "@/constants/TryOpenMetadata.constants";
import Image from "next/image";
import Link from "next/link";

const TryOpenMetadata = () => {
  return (
    <div className="mx-auto max-w-[1440px] relative mt-20">
      <div className="mx-auto relative z-[11] pt-16 px-4 md:px-16">
        <h3
          data-aos="fade-up"
          className="text-[#292929] font-medium text-center text-[32px] lg:text-[44px]"
        >
          Different ways to try out{" "}
          <span className="text-[#7147E8]">OpenMetadata</span>
        </h3>
        <div className="mt-[48px] grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRY_OPENMETADATA.map((item) => (
            <div
              data-aos="zoom-in"
              key={item.header}
              className="border border-[#D0C2F7] bg-white p-5 rounded-sm shadow-md relative"
            >
              {item.isNew && (
                <div className="tag absolute right-3 top-[26px] text-[#333333] font-bold bg-[#E2DAFA] text-center py-2 px-2 rotate-45 text-[20px]">
                  NEW!
                </div>
              )}

              <Image
                className="w-[70px] h-[60px]"
                src={item.icon}
                alt={item.header}
                width={100}
                height={100}
              />

              <p className="text-[#333333] font-medium mt-8 text-[24px] lg:text-[28px] xl:text-[36px]">
                {item.header}
              </p>
              <p className="text-[#777777] font-medium border-b border-b-[#D0C2F7] pb-4 xl:text-[20px]">
                {item.description}
              </p>
              <Link
                href={item.href}
                target="_blank"
                className="mt-[28px] w-full block text-center uppercase bg-[#7147E8] border-2 border-[#7147E8] text-white font-bold py-3 rounded-md lg:text-[18px] hover:no-underline hover:bg-[#6541c9]"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 z-[10]">
        <Image
          src="/assets/shadow-bg.webp"
          alt="shadow-bg"
          width={1440}
          height={400}
        />
      </div>
    </div>
  );
};

export default TryOpenMetadata;