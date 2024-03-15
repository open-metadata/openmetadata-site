import {INTEGRATION_SERVICES} from "@/constants/Integrations.constants";
import Image from "next/image";
import React, {useEffect, useMemo, useState} from "react";

interface Service {
  href?: string;
  src: string;
  alt: string;
  name: string;
}

interface Connector {
  connector: string;
  services: Service[];
}

const Integrations: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("All connectors");

  const filteredServices = useMemo(() => {
    if (selectedTab === "All connectors") {
      return INTEGRATION_SERVICES.reduce(
        (acc: Service[], connector: Connector) => {
          acc.push(...connector.services);
          return acc;
        },
        []
      );
    } else {
      const selectedConnector = INTEGRATION_SERVICES.find(
        (connector) => connector.connector === selectedTab
      );
      return selectedConnector ? selectedConnector.services : [];
    }
  }, [selectedTab]);

  const handleTabClick = (category: string) => {
    setSelectedTab(category);
  };

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const category = (e.target as HTMLDivElement).getAttribute("data-tab");
    if (category) handleTabClick(category);
  };

  const renderService = (service: Service) => (
    <div key={service.name} className="mb-4 flex" data-aos="fade-up">
      <a href={service.href ?? "#"} target="_blank" className="text-center">
        <Image
          alt={service.alt}
          width={1000}
          className="w-20 h-20 mb-2"
          height={1000}
          src={service.src}
          style={{display: "block", margin: "auto"}}
        />
        <h5 className="mb-2">{service.name}</h5>
      </a>
    </div>
  );

  return (
    <section className="bg-white pb-15 pt-10" id="integrations">
      <div className="px-10">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className="font-semibold text-3xl">Integrations</h2>
              <p className="text-lg">
                OpenMetadata's ingestion framework supports connectors for a
                wide range of services, and the list is constantly growing...
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2" id="connector-categories-tab-container">
            <div
              className="flex flex-col"
              id="integration-category"
              data-selected={selectedTab}
              onClick={handleCategoryClick}
            >
              <div
                key="All connectors"
                className={`py-2 ${
                  selectedTab === "All connectors" ? "text-primary" : "bg-white"
                }`}
                role="button"
                data-tab="All connectors"
              >
                <h5>All connectors</h5>
              </div>
              {INTEGRATION_SERVICES.map((connector) => (
                <div
                  key={connector.connector}
                  className={`py-2 ${
                    selectedTab === connector.connector
                      ? "text-primary"
                      : "bg-white"
                  }`}
                  role="button"
                  data-tab={connector.connector}
                >
                  <h5>{connector.connector}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-10">
            <div
              className="grid grid-cols-6 max-md:grid-cols-3 mt-6 md:mt-0 lg:mt-0 place-items-center"
              id="integration-container"
            >
              {filteredServices.map(renderService)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
