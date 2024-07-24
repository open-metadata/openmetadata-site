import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS_LIST } from "@/constants/Testimonials.constants";
import { ArrowRight } from "../Icons/ArrowRight";
import { ArrowLeft } from "../Icons/ArrowLeft";

const PreviousArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="prev-slick-arrow absolute z-[5] cursor-pointer w-[10px] h-[14px] -top-[62px] -left-[14px] sm:w-[14px] sm:h-[20px] sm:left-[70px] md:left-[108px] lg:left-[182px]"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="next-slick-arrow absolute z-[5] cursor-pointer right-0 w-[10px] h-[14px] -top-[62px] sm:w-[14px] sm:h-[20px] sm:right-[78px] md:right-[113px] lg:right-[190px]"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedDescription, setExpandedDescription] = useState(-1)

  const handleMoreLessBtnClick = (index: number) => 
    setExpandedDescription(expandedDescription === index ? -1 : index)

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
    adaptiveHeight: true,
  };

  return (
    <div className="custom-container relative z-[12]">
      <div className="mt-9 mx-auto px-0 md:px-16 md:mt-28 lg:px-0">
        <h3 className="text-[#292929] tracking-[-0.02em] font-medium text-center max-w-[75%] mx-auto text-[32px] leading-[40px] mb-16 lg:text-[48px]">
          Trusted <span className="text-[#7147E8]">Across Industries</span>
        </h3>
        <div className="slider-container relative z-[4] testimonial-content">
          <Slider {...settings}>
            {TESTIMONIALS_LIST.map((item, i) => (
              <div key={item.company}>
                <span className="text-[#170E2E] text-justify mr-[10px] lg:text-[20px]">
                  "{expandedDescription !== i && item.description.length > 230 ? (
                    item.description.slice(0, 230) + "..."
                  ) : item.description}"
                </span>
                {item.description.length > 230 && (
                  <button 
                    onClick={() => handleMoreLessBtnClick(i)} 
                    className="relative z-[7] text-[#7147E8] cursor-pointer lg:text-[18px] hover:underline"
                  >
                    read {expandedDescription === i ? "less" : "more"}
                  </button>
                )}
                <div
                  className="mt-5 mx-auto flex items-center justify-center lg:max-w-[600px]"
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    className="w-[250px] relative flex items-center"
                  >
                    <Image
                      className={`text-right absolute right-0`}
                      width={item.imgSize.width}
                      height={item.imgSize.height}
                      src={item.image}
                      alt={item.company}
                      priority
                    />
                  </Link>
                  <div className="bg-[#E2DAFA] w-[5px] rounded-full h-[80px] mx-3 sm:mx-4"></div>
                  <div className="w-[250px] self-center">
                    <p className="text-[#382374] tracking-[-0.02em] text-[16px] font-medium">
                      {item.name}
                    </p>
                    <p className="text-[#888888] tracking-[-0.02em] text-[14px] md:h-[20px] xl:-mt-4">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>  
    </div>
  );
};

export default Testimonials;
