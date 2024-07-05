import { INTEGRATION_SERVICES } from "@/constants/Integrations.constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  href?: string;
  src: string;
  alt: string;
  name: string;
}

const IntegrationsDev = () => {
  const allServices = INTEGRATION_SERVICES.map((category) =>
    category.services.map((service) => service).flat()
  )
    .flat()
    .sort((a, b) => a.name.localeCompare(b.name));

  const [selectedTab, setSelectedTab] = useState<string>("All Connectors");
  const [services, setServices] = useState<Service[]>(allServices);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    let filteredServices: Service[];
    if (tab && tab !== "All Connectors") {
      const selectedConnector = INTEGRATION_SERVICES.find(
        (connector) => connector.connector === tab
      );
      if (selectedConnector) {
        filteredServices = selectedConnector.services.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setServices(filteredServices);
      }
    } else {
      setServices(allServices);
    }
  };

  return (
    <div className="custom-container mt-20 px-4 md:px-16">
      <h3 className="text-[#292929] tracking-[-0.02em] font-medium text-center text-[32px] lg:text-[48px]">
        Integrations
      </h3>
      <p className="text-[#382374] max-w-[80%] mt-2 font-normal text-center mx-auto tracking-[-0.02em] text-[16px] lg:mt-0 lg:text-[#555555] lg:text-[20px] lg:max-w-[54%]">
        OpenMetadata's ingestion framework supports connectors for a wide range
        of services, and the list is constantly growing...
      </p>
      <div className="mt-[48px] shadow-primary rounded-lg md:rounded-2xl sm:flex sm:h-[728px] md:h-[780px]">
        <div className="integration flex text-[#5E3BC1] text-center sm:border-[#E3DAFA] sm:flex-col sm:border-r md:text-[20px] lg:max-w-[20%] xl:max-w-[25%]">
          <div
            className={`px-5 py-[28px] cursor-pointer tracking-[-0.02em] text-nowrap ${
              selectedTab === "All Connectors" &&
              "font-semibold bg-[#EDF3FD] rounded-tl-lg md:rounded-tl-2xl"
            } sm:border-b sm:border-[#E3DAFA] lg:px-9 xl:px-12`}
            onClick={() => handleTabClick("All Connectors")}
          >
            All Connectors
          </div>
          {INTEGRATION_SERVICES.map((service) => (
            <div
              key={service.connector}
              className={`px-5 py-[28px] tracking-[-0.02em] cursor-pointer ${
                selectedTab === service.connector &&
                "font-semibold bg-[#EDF3FD]"
              } ${
                selectedTab === "Others" &&
                service.connector === "Others" &&
                "rounded-tr-lg md:rounded-bl-2xl"
              } ${
                service.connector === "Others" && "border-none"
              } sm:border-b sm:border-[#E3DAFA] lg:px-9 xl:px-12`}
              onClick={() => handleTabClick(service.connector)}
            >
              {service.connector}
            </div>
          ))}
        </div>
        <div className="py-8 px-3 gap-5 w-full overflow-y-scroll justify-center sm:px-8 sm:gap-4 grid grid-cols-2 sm:auto-rows-max md:grid-cols-4 lg:grid-cols-5 lg:px-12 xl:grid-cols-6">
          {services.map((item) => (
            <div key={item.name} className="max-h-[110px]">
              <Link
                href={item.href ?? "#"}
                target="_blank"
                className="text-center flex flex-col items-center"
              >
                <Image
                  alt={item.alt}
                  width={1000}
                  className={`h-12 mb-2 w-12 ${item.name === "SAP HANA" && 'w-20'}`}
                  height={1000}
                  src={item.src}
                  loading="lazy"
                />
                <p className="mt-2 text-nowrap text-[14px] md:text-[16px]">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsDev;
