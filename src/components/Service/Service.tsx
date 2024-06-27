import { SERVICE_LIST } from "@/constants/Service.constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="custom-container mt-5 px-4 md:px-16">
      <h2 className="text-[#292929] text-4xl font-medium text-center lg:text-[52px]">
        Why <span className="text-[#7147E8]">OpenMetadata?</span>
      </h2>
      <div className="mt-16">
        {SERVICE_LIST.map((service) => (
          <div
            key={service.serviceName.header1 + service.serviceName.header2}
            className="my-[50px] grid gap-5 items-center lg:gap-10 lg:grid-cols-2"
          >
            <Image
              src={service.icon}
              alt={service.serviceName.header1 + service.serviceName.header2}
              width={800}
              height={500}
            />
            <div className="text-center lg:text-left">
              <h3 className="font-medium lg:max-w-[80%] text-3xl xl:text-4xl">
                {service.serviceName.header1}
                <span className="text-[#7147E8]">
                  {service.serviceName.header2}
                </span>
                {service.serviceName.header3 && service.serviceName.header3}
              </h3>
              <p className="mt-2 font-normal text-[18px] lg:max-w-[90%] xl:text-[20px]">
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
