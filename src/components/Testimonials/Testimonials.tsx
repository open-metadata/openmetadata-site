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
      className="prev-slick-arrow absolute z-[5] -bottom-[6px] cursor-pointer w-[10px] h-[14px] -left-[14px] sm:left-[60px] md:left-[92px] lg:left-[168px]"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="next-slick-arrow absolute z-[5] cursor-pointer -bottom-[6px] right-0 w-[10px] h-[14px] sm:right-[67px] md:right-[98px] lg:right-[180px]"
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
    customPaging: (i: number) => (
      <div
        className="w-[10px] h-[10px]"
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
        <h3 className="text-[#292929] tracking-[-0.02em] font-medium text-center mb-4 max-w-[75%] mx-auto text-[32px] leading-[40px] lg:text-[48px]">
          Trusted <span className="text-[#7147E8]">Across Industries</span>
        </h3>
        <div className="slider-container relative z-[4] testimonial-content">
          <Slider {...settings}>
            {TESTIMONIALS_LIST.map((item, i) => (
              <div key={item.company}>
                <Link
                  href={item.url}
                  target="_blank"
                  className="h-[100px]"
                >
                  <Image
                    className={`mx-auto mb-8`}
                    width={item.imgSize.width}
                    height={item.imgSize.height}
                    src={item.image}
                    alt={item.company}
                    priority
                  />
                </Link>
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
                  className="mt-5 mb-[60px] text-center"
                >
                  <p className="text-[#382374] tracking-[-0.02em] text-[16px] font-medium text-[20px] lg:text-[24px]">
                    {item.name}
                  </p>
                  <p className="text-[#888888] tracking-[-0.02em] text-[14px] md:h-[20px] lg:text-[18px] xl:-mt-4">
                    {item.title}, {item.company}
                  </p>      
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
