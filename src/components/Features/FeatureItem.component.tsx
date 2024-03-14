"use client";

import {useEffect, useState} from "react";

interface FeatureItemProps {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: React.ReactNode;
  learnMoreLink: string;
  imageOnLeft: boolean;
}
export const FeatureItem = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  learnMoreLink,
  imageOnLeft,
}: FeatureItemProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center mb-5">
      {imageOnLeft ? (
        <>
          <div className="order-2 md:order-1 w-11/12">
            <div className="mb-4 w-full" data-aos="fade-right">
              <img
                loading="eager"
                className="fluid"
                alt={imageAlt}
                src={imageSrc}
              />
            </div>
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl mb-4 font-medium">{heading}</h2>
            {description}
            <a
              className="text-primary inline-flex items-center"
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-2 w-11/12">
            <h2 className="text-2xl mb-4 font-medium">{heading}</h2>
            <p className="mb-4">{description}</p>
            <a
              className="text-primary inline-flex items-center"
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="order-2 md:order-1">
            <div className="mb-4 w-full" data-aos="fade-left">
              <img
                loading="eager"
                className="fluid"
                alt={imageAlt}
                src={imageSrc}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
