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
    <div className="mx-auto mt-20 max-w-[1440px] px-4 md:px-16">
      <h3
        data-aos="fade-up"
        className="text-[#292929] font-medium text-center text-[32px] lg:text-[44px]"
      >
        Integrations
      </h3>
      <p
        data-aos="fade-up"
        className="text-[#555555] font-normal text-center mx-auto text-[18px] lg:text-[24px] lg:max-w-[60%]"
      >
        OpenMetadata's ingestion framework supports connectors for a wide range
        of services, and the list is constantly growing...
      </p>
      <div className="mt-8 sm:shadow-lg sm:rounded-lg sm:flex sm:h-[655px] md:h-[712px]">
        <div className="flex text-[#5E3BC1] overflow-x-scroll text-center sm:overflow-x-auto sm:border-[#E3DAFA] sm:flex-col sm:border-r md:text-[20px] lg:max-w-[20%] xl:max-w-[25%]">
          <div
            className={`px-5 py-4 cursor-pointer text-nowrap ${
              selectedTab === "All Connectors" && "font-semibold bg-[#EDF3FD]"
            } sm:border-b sm:border-[#E3DAFA] lg:px-9 xl:px-12`}
            onClick={() => handleTabClick("All Connectors")}
          >
            All Connectors
          </div>
          {INTEGRATION_SERVICES.map((service) => (
            <div
              key={service.connector}
              className={`px-5 py-4 border-b border-[#E3DAFA] cursor-pointer ${
                selectedTab === service.connector &&
                "font-semibold bg-[#EDF3FD]"
              } lg:px-9 xl:px-12`}
              onClick={() => handleTabClick(service.connector)}
            >
              {service.connector}
            </div>
          ))}
        </div>
        <div className="py-8 gap-8 w-full overflow-y-scroll flex flex-wrap justify-center sm:px-8 sm:gap-4 sm:grid sm:grid-cols-3 sm:auto-rows-max md:grid-cols-4 lg:grid-cols-5 lg:px-12 xl:grid-cols-6">
          {services.map((item) => (
            <div key={item.name} className="max-h-[110px]">
              <Link
                href={item.href ?? "#"}
                target="_blank"
                className="text-center flex flex-col items-center "
              >
                <Image
                  alt={item.alt}
                  width={1000}
                  className="w-12 h-12 mb-2"
                  height={1000}
                  src={item.src}
                />
                <p className="mt-2">{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsDev;
