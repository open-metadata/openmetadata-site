import Image from "next/image";
import React from "react";
import { OmdFooterLogo } from "../Icons/OmdFooterLogo";
import { SOCIAL_LINKS } from "@/constants/Footer.constants";
import ParamLink from "../ParamLink";

const FooterDev = () => {
  return (
    <footer className="pt-24 pb-12 mt-auto w-full bg-[#333333] text-white">
      <div className="custom-container sm:grid sm:gap-5 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 px-8 md:px-20 xl:px-28">
        <div className="hidden sm:block lg:col-span-2 xl:col-span-3">
          <div className="flex flex-col gap-5">
            <div>
              <OmdFooterLogo />
            </div>
            <div className="font-normal tracking-[-0.005em] text-[14px] md:max-w-[80%] xl:max-w-[50%]">
              Unlock the value of data assets with an end-to-end metadata
              management solution that includes data discovery, governance, data
              quality, observability, and people collaboration.
            </div>
            <div className="text-[12px] tracking-[-0.02em] font-normal mb-5">
              Copyright OpenMetadata {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="text-uppercase text-[16px] font-medium tracking-[4px] mb-3">
            Docs
          </div>
          <ul className="tracking-[-0.02em] text-[14px]">
            <li className="mb-2">
              <ParamLink
                name="What is OpenMetadata?"
                href="https://docs.open-metadata.org/"
                target="_blank"
                className="hover:text-gray-500"
              />
            </li>
            <li className="mb-2">
              <ParamLink
                name="APIs"
                href="https://docs.open-metadata.org/latest/main-concepts/metadata-standard/apis"
                target="_blank"
                className="hover:text-gray-500"
              />
            </li>
            <li className="mb-2">
              <ParamLink
                name="Schema"
                href="https://open-metadata.org/schema/"
                target="_blank"
                className="hover:text-gray-500"
              />
            </li>
            <li className="mb-2">
              <ParamLink
                name="Install"
                href="https://docs.open-metadata.org/latest/quick-start/local-docker-deployment"
                target="_blank"
                className="hover:text-gray-500"
              />
            </li>
            <li className="mb-2">
              <ParamLink
                name="Ingestion"
                href="https://docs.open-metadata.org/latest/connectors/ingestion"
                target="_blank"
                className="hover:text-gray-500"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="text-uppercase text-[16px] font-medium tracking-[4px] mb-4">
            Community
          </div>
          <ul className="relative flex gap-2 items-center">
            {SOCIAL_LINKS.map(item => (
              <li key={item.name} className={`relative self-center ${item.className ? item.className : 'w-[28px] h-[30px]'} mb-2`}>
                <ParamLink href={item.url} target="_blank">
                  <Image 
                    src={item.icon} 
                    alt={item.name} 
                    loading="eager"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </ParamLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 mt-5 sm:hidden">
          <div>
            <OmdFooterLogo />
          </div>
          <div className="font-normal tracking-[-0.02em] text-[14px] md:max-w-[80%] xl:max-w-[40%]">
            Open Standard for Metadata with a centralized Metadata Store.
            Discover, collaborate and get your Data Right.
          </div>
          <div className="text-[12px] tracking-[-0.02em] font-normal mb-5">
            Copyright OpenMetadata {new Date().getFullYear()}
          </div>
        </div>
        <div className="mt-2 lg:ml-5 sm:mt-0 sm:row-start-1 sm:col-start-2 lg:col-start-auto lg:row-start-auto">
          <div className="text-uppercase text-[8px] text-nowrap text-gray-400 font-medium tracking-[3px] mb-2">
            Site Hosted By
          </div>
          <Image
            alt="netlify"
            width={100}
            height={30}
            src="/assets/netlify.webp"
            priority
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterDev;
