import { SERVICE_LIST } from "@/constants/Service.constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="custom-container mt-12 px-4 md:mt-5 md:px-16 xl:px-28">
      <h2 className="text-[#292929] text-[32px] font-medium text-center tracking-[-0.01em] lg:text-[48px]">
        Why <span className="text-[#7147E8]">OpenMetadata?</span>
      </h2>
      <div className="mt-3 lg:mt-28">
        {SERVICE_LIST.map((service) => (
          <div
            key={service.serviceName.header1 + service.serviceName.header2}
            className="my-[52px] flex flex-col-reverse items-center gap-5 lg:gap-20 lg:grid lg:grid-cols-2"
          >
            <Image
              src={service.icon}
              alt={service.serviceName.header1 + service.serviceName.header2}
              width={800}
              height={500}
              loading="eager"
            />
            <div className="text-left max-w-[84%] mx-auto md:max-w-[95%]">
              <h3 className="font-medium text-[24px] tracking-[-0.02em] leading-[30px] md:leading-[40px] md:text-3xl lg:max-w-[90%] xl:text-[34px]">
                {service.serviceName.header1}
                <span className="text-[#7147E8]">
                  {service.serviceName.header2}
                </span>
                {service.serviceName.header3 && service.serviceName.header3}
              </h3>
              <p className="mt-2 font-light text-[16px] tracking-[-0.01em] lg:max-w-[95%] xl:text-[18px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
