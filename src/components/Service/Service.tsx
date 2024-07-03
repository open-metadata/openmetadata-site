import { SERVICE_LIST } from "@/constants/Service.constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="custom-container mt-5 px-4 md:px-16 xl:px-28">
      <h2 className="text-[#292929] text-4xl font-medium text-center lg:text-[48px]">
        Why <span className="text-[#7147E8]">OpenMetadata?</span>
      </h2>
      <div className="mt-28">
        {SERVICE_LIST.map((service) => (
          <div
            key={service.serviceName.header1 + service.serviceName.header2}
            className="my-[52px] grid items-center sm:gap-5 lg:gap-20 lg:grid-cols-2"
          >
            <Image
              src={service.icon}
              alt={service.serviceName.header1 + service.serviceName.header2}
              width={800}
              height={500}
              loading="eager"
            />
            <div className="text-center lg:text-left">
              <h3 className="font-medium text-3xl leading-[40px] xl:text-[34px]">
                {service.serviceName.header1}
                <span className="text-[#7147E8]">
                  {service.serviceName.header2}
                </span>
                {service.serviceName.header3 && service.serviceName.header3}
              </h3>
              <p className="mt-2 font-light text-[18px] lg:max-w-[98%] xl:text-[18px]">
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
