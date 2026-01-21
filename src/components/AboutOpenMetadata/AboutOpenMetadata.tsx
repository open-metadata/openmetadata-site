import { ABOUT_OPENMETADATA } from "@/constants/AboutOpenMetadata.constants";
import Image from "next/image";
import Slider, { CustomArrowProps } from "@/components/SlickSlider/SlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow } from "../Icons/Arrow";
import ParamLink from "../ParamLink";

const PreviousArrow = ({ onClick }: CustomArrowProps): JSX.Element => {
  return (
    <div
      className="absolute z-[5] -translate-y-1/2 cursor-pointer -left-8 sm:-left-10 lg:-left-14 top-2/4"
      onClick={onClick}
    >
      <Image
        alt="previous button"
        src="/assets/icons/previous-arrow.svg"
        width={24}
        height={24}
      />
    </div>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps): JSX.Element => {
  return (
    <div
      className="absolute z-[5] -translate-y-1/2 cursor-pointer -right-8 sm:-right-10 lg:-right-14 top-2/4"
      onClick={onClick}
    >
      <Image
        className="text-black"
        alt="next button"
        src="/assets/icons/next-arrow.svg"
        width={24}
        height={24}
      />
    </div>
  );
};

const AboutOpenMetadata = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-container relative z-[12] mt-9 mb-16 md:mt-16 md:mb-28 px-12 sm:px-16 xl:px-24">
      <h3 className="text-[#292929] font-medium mx-auto tracking-[-0.02em] text-center leading-[40px] text-[32px] lg:text-[48px]">
        Learn More <span className="text-[#7147E8]">About OpenMetadata</span>
      </h3>
      <div className="slider-container about-om mt-12 md:mt-16 mb-5">
        <Slider {...settings}>
          {ABOUT_OPENMETADATA.map((item) => (
            <div key={item.header} className="shadow-md rounded-sm">
              <ParamLink
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
              >
                <div className="bg-gradient-to-tl from-[#0B3547] to-[#176B8F] flex justify-center items-center h-[180px] rounded-t-sm">
                  <Image
                    className="mx-auto w-[87%] h-[150px] rounded-md"
                    src={item.image}
                    alt={item.header}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <div className="px-[24px] py-7 flex flex-col items-between">
                  <p className="text-[24px] text-[#4B2F9B] tracking-[-0.01em] font-semibold -mb-2 md:text-[28px]">
                    {item.header}
                  </p>
                  <p className="text-[#170E2E] font-medium my-3 min-h-[72px]">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 uppercase text-[#5E3BC1] font-bold">
                    {item.linkText} <Arrow />
                  </div>
                </div>
              </ParamLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutOpenMetadata;
