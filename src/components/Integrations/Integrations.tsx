import {INTEGRATION_SERVICES} from "@/constants/Integrations.constants";
import React, {useEffect, useState} from "react";

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
  const [allServices, setAllServices] = useState<Service[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("All connectors");

  useEffect(() => {
    const services: Service[] = [];
    INTEGRATION_SERVICES.forEach((connector: Connector) => {
      connector.services.forEach((service: Service) => {
        services.push(service);
      });
    });
    setAllServices(services);
  }, []);

  const sortServicesByName = (services: Service[]): Service[] => {
    return services.sort((a, b) => a.name.localeCompare(b.name));
  };

  const filterServices = (connectorCategory?: string) => {
    let filteredServices: Service[] = allServices;
    if (connectorCategory && connectorCategory !== "All connectors") {
      const selectedConnectorCategory = INTEGRATION_SERVICES.find(
        (connector) => connector.connector === connectorCategory
      );
      if (selectedConnectorCategory) {
        filteredServices = selectedConnectorCategory.services;
      }
    }

    return sortServicesByName(filteredServices).map((service) => (
      <div
        key={service.name}
        className="col-lg-2 col-md-3 col-sm-4 mb-4 flex justify-center items-center"
        data-aos="fade-up"
      >
        <a href={service.href ?? "#"} target="_blank" className="text-center">
          <img
            src={service.src}
            className="w-20 h-20 mb-2"
            alt={service.alt}
            loading="lazy"
            style={{display: "block", margin: "auto"}}
          />
          <h5 className="mb-2">{service.name}</h5>
        </a>
      </div>
    ));
  };

  const handleTabClick = (category: string) => {
    setSelectedTab(category);
  };

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
            >
              <div
                key="All connectors"
                className={`py-2 ${
                  selectedTab === "All connectors" ? "text-primary" : "bg-white"
                }`}
                role="button"
                data-tab="All connectors"
                onClick={() => handleTabClick("All connectors")}
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
                  onClick={() => handleTabClick(connector.connector)}
                >
                  <h5>{connector.connector}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row" id="integration-container">
              {filterServices(selectedTab)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
