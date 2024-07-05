import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS_LIST } from "@/constants/Testimonials.constants";

const PreviousArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="prev-slick-arrow absolute z-[5] cursor-pointer -left-4 w-[10px] h-[14px] -top-[62px] sm:w-[14px] sm:h-[20px] sm:left-16 md:left-[120px] lg:left-48"
      onClick={onClick}
    >
      <Image
        alt="previous button"
        src="/assets/left-arrow.svg"
        width={14}
        height={20}
      />
    </div>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="next-slick-arrow absolute z-[5] cursor-pointer -right-2 w-[10px] h-[14px] -top-[62px] sm:w-[14px] sm:h-[20px] sm:right-[72px] md:right-[128px] lg:right-[200px]"
      onClick={onClick}
    >
      <Image
        alt="next button"
        src="/assets/right-arrow.svg"
        width={14}
        height={20}
      />
    </div>
  );
};

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: true,
    pauseOnHover: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    dotsClass: `slick-dots`,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          top: "-60px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
        style={{
          borderRadius: "50%",
          backgroundColor: activeSlide === i ? "#7147E8" : "#D8D8D8",
        }}
      />
    ),
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="custom-container relative z-[12]">
      <div className="flex justify-between">
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="lazy"
        />
        <div className="mt-28 mx-auto px-4 md:px-16 lg:px-0">
          <h3 className="text-[#292929] tracking-[-0.02em] font-medium text-center text-[36px] mb-16 lg:text-[48px]">
            Trusted <span className="text-[#7147E8]">Across Industries</span>
          </h3>
          <div className="slider-container testimonial-content">
            <Slider {...settings}>
              {TESTIMONIALS_LIST.map((item) => (
                <div key={item.company}>
                  <p className="text-[#170E2E] sm:columns-2 sm:gap-x-4 lg:gap-x-8 lg:text-[20px]">
                    "{item.description}"
                  </p>
                  <div className="mt-5 mx-auto flex items-center justify-center lg:max-w-[600px]">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="w-[250px] relative flex items-center"
                    >
                      <Image
                        className={`text-right ${item.imgSize} absolute right-0`}
                        width={70}
                        height={70}
                        src={item.image}
                        alt={item.company}
                        priority
                      />
                    </Link>
                    <div className="bg-[#E2DAFA] w-[4px] rounded-full h-[80px] mx-4"></div>
                    <div className="w-[250px] self-center">
                      <p className="text-[#382374] tracking-[-0.02em] text-[20px] font-medium">
                        {item.name}
                      </p>
                      <p className="text-[#888888] tracking-[-0.02em] text-[16px] xl:-mt-4">
                        {item.title}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Image
          className="hidden lg:block"
          height={20}
          width={140}
          src="/assets/header/right-box.svg"
          alt="right-box-svg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Testimonials;
