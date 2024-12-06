import { INTEGRATION_SERVICES } from '@/constants/Integrations.constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Service {
  width?: number;
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

  const [selectedTab, setSelectedTab] = useState<string>('All Connectors');
  const [services, setServices] = useState<Service[]>(allServices);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [mobileServices, setMobileServices] = useState<Service[]>(
    services.slice(0, 12)
  );

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsDropdownVisible(false);
    let filteredServices: Service[];
    if (tab && tab !== 'All Connectors') {
      const selectedConnector = INTEGRATION_SERVICES.find(
        (connector) => connector.connector === tab
      );
      if (selectedConnector) {
        filteredServices = selectedConnector.services.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setServices(filteredServices);
        setMobileServices(filteredServices.slice(0, 12));
      }
    } else {
      setServices(allServices);
      setMobileServices(allServices.slice(0, 12));
    }
  };

  const handleLoadMoreClick = () => {
    const moreServices = services.slice(
      mobileServices.length,
      mobileServices.length + 12
    );
    setMobileServices((prev) => [...prev, ...moreServices]);
  };

  return (
    <div className="custom-container mt-20 px-4 md:px-16">
      <h3 className="text-[#292929] tracking-[-0.02em] font-medium text-center text-[32px] lg:text-[48px]">
        Integrations
      </h3>
      <p className="text-[#382374] max-w-[80%] mt-2 font-normal text-center mx-auto tracking-[-0.02em] text-[16px] lg:mt-0 lg:text-[#555555] lg:text-[20px] lg:max-w-[54%]">
        OpenMetadata's ingestion framework supports connectors for 80+ data services, 
        with more added every release.
      </p>
      <div className="mt-[48px] overflow-y-scroll relative shadow-primary rounded-lg md:rounded-2xl sm:flex sm:h-[890px] md:h-[956px]">
        <button
          onClick={() => setIsDropdownVisible((prev) => !prev)}
          className="py-[32px] w-full sticky top-0 bg-white z-[15] flex items-center border-b border-[#E3DAFA] justify-center gap-2 text-[#5E3BC1] text-[20px] font-normal tracking-[-0.02em] sm:hidden"
        >
          <span>{selectedTab}</span>
          <svg
            className={`${
              isDropdownVisible ? 'rotate-180' : ''
            } transition-all duration-300`}
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 2L9.5 10L1.5 2"
              stroke="#5E3BC1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={`${
            isDropdownVisible ? 'block' : 'hidden'
          } integration w-full absolute flex flex-col bg-white text-[#5E3BC1] text-[20px] text-center sm:w-auto sm:block sm:relative sm:text-[16px] sm:border-[#E3DAFA] sm:border-r md:text-[20px] sm:rounded-l-lg md:rounded-l-2xl lg:max-w-[20%] xl:max-w-[25%]`}
        >
          <div
            className={`px-5 py-[28px] cursor-pointer tracking-[-0.02em] text-nowrap ${
              selectedTab === 'All Connectors' &&
              'font-semibold bg-[#EDF3FD] sm:rounded-tl-lg md:rounded-tl-2xl'
            } border-b border-[#E3DAFA] lg:px-9 xl:px-12`}
            onClick={() => handleTabClick('All Connectors')}
          >
            All Connectors
          </div>
          {INTEGRATION_SERVICES.map((service) => (
            <div
              key={service.connector}
              className={`px-5 py-[28px] tracking-[-0.02em] cursor-pointer ${
                selectedTab === service.connector &&
                'font-semibold bg-[#EDF3FD]'
              } ${
                selectedTab === 'Others' &&
                service.connector === 'Others' &&
                'sm:rounded-tr-lg md:rounded-bl-2xl'
              } ${
                service.connector === 'Others' && 'sm:border-none'
              } border-b border-[#E3DAFA] lg:px-9 xl:px-12`}
              onClick={() => handleTabClick(service.connector)}
            >
              {service.connector}
            </div>
          ))}
        </div>
        <div className="py-8 px-3 gap-5 w-full hidden overflow-y-scroll justify-center sm:px-8 sm:gap-4 sm:grid grid-cols-2 sm:auto-rows-max md:grid-cols-3 lg:grid-cols-5 lg:px-12 xl:grid-cols-6">
          {services.map((item) => (
            <div key={item.name} className="max-h-[110px]">
              <Link
                href={item.href ?? '#'}
                target="_blank"
                className="text-center flex flex-col items-center"
              >
                <Image
                  alt={item.alt}
                  className={`h-12 mb-2`}
                  src={item.src}
                  loading="lazy"
                  width={item.width ? item.width : 50}
                  height={100}
                />
                <p className="mt-2 text-nowrap text-[14px] sm:text-wrap md:text-[16px]">
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="sm:hidden">
          <div className="py-8 px-3 gap-5 w-full overflow-y-scroll justify-center grid grid-cols-2">
            {mobileServices.map((item) => (
              <div key={item.name} className="max-h-[110px]">
                <Link
                  href={item.href ?? '#'}
                  target="_blank"
                  className="text-center flex flex-col items-center"
                >
                  <Image
                    alt={item.alt}
                    className={`h-12 mb-2`}
                    src={item.src}
                    loading="lazy"
                    width={item.width ? item.width : 50}
                    height={100}
                  />
                  <p className="mt-2 text-nowrap text-[14px] sm:text-wrap md:text-[16px]">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {services.length > mobileServices.length && (
            <button
              onClick={handleLoadMoreClick}
              className="text-[20px] text-[#5E3BC1] font-normal mb-9 mx-auto w-full"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsDev;
