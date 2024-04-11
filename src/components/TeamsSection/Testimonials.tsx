// @ts-nocheck
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {TESTIMONIALS_LIST} from "@/constants/Testimonials.constants";
import Link from "next/link";

const Testimonials = () => {
  const slider = React.useRef(null);
  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
        className={`w-20 h-20 absolute max-md:-right-[10px] -right-[25px] translate-x-[90%] top-[50%]`}
      >
        <div
          className={
            "h-[40px] w-[40px] bg-[#7147EB] rounded-full flex justify-center items-center cursor-pointer hover:shadow-xl"
          }
          onClick={onClick}
        >
          <Image
            alt="next-arrow"
            src={"/assets/icons/next-arrow.svg"}
            width={30}
            height={30}
          />
        </div>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className={`w-20 h-20 absolute max-md:-translate-x-[50%] -translate-x-[70%] top-[50%]`}
      >
        <div
          className={
            "h-[40px] w-[40px] bg-[#7147EB] rounded-full flex justify-center items-center cursor-pointer hover:shadow-xl"
          }
          onClick={onClick}
        >
          <Image
            alt="previous-arrow"
            src={"/assets/icons/previous-arrow.svg"}
            width={30}
            height={30}
          />
        </div>
      </div>
    );
  }
  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <Slider {...testimonialSettings} ref={slider}>
      {TESTIMONIALS_LIST.map(
        ({name, image, description, company, url, title}, index) => (
          <div key={index}>
            <div className="testimonial-card card card-team">
              <div className="card-body">
                <Image
                  width={200}
                  height={200}
                  className="card-team-img mb-3"
                  src={image}
                  alt={company}
                />
                <div className="card-team-name mb-3">
                  <strong>
                    <Link
                      tabIndex="-1"
                      className="text-primary"
                      href={url}
                      target="_blank"
                    >
                      {company}
                    </Link>
                  </strong>
                </div>
                <div
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, "<br />"),
                  }}
                />
                <p className="card-footer-custom font-500">
                  <strong>- {name}</strong>
                </p>
                <p className="card-footer-custom opacity-6 text-italic">
                  {title}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};

export default Testimonials;
