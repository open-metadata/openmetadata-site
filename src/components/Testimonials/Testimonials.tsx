import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS_LIST } from "@/constants/Testimonials.constants";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots`,
    afterChange: (current: number) => setActiveSlide(current),
    customPaging: (i: number) => (
      <div
        style={{
          marginTop: "54px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: activeSlide === i ? "#7147E8" : "#D8D8D8",
        }}
      />
    ),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="mx-auto relative z-[12] max-w-[1440px]">
      <div className="flex justify-between">
        <Image
          className="hidden mt-5 lg:block"
          height={20}
          width={140}
          src="/assets/header/left-box.svg"
          alt="left-box-svg"
          loading="lazy"
        />
        <div className="mt-32 mx-auto px-4 md:px-16 lg:px-10">
          <h3 className="text-[#292929] font-medium text-center text-[36px] lg:text-[44px]">
            Trusted <span className="text-[#7147E8]">Across Industries</span>
          </h3>
          <div className="slider-container testimonial-content">
            <Slider {...settings}>
              {TESTIMONIALS_LIST.map((item) => (
                <div key={item.company}>
                  <p className="text-[#170E2E] sm:columns-2 lg:text-[20px]">
                    {item.description}
                  </p>
                  <div className="mt-5 mx-auto flex items-center justify-center sm:gap-3 md:gap-5 lg:max-w-[600px]">
                    <Link href={item.url} target="_blank">
                      <Image
                        className={item.imgSize}
                        width={100}
                        height={100}
                        src={item.image}
                        alt={item.company}
                      />
                    </Link>
                    <div className="bg-[#E2DAFA] w-[6px] rounded-full h-[100px]"></div>
                    <div>
                      <p className="text-[#382374] text-[20px] font-medium">
                        {item.name}
                      </p>
                      <p className="text-[#888888] text-[16px] xl:-mt-4">
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
