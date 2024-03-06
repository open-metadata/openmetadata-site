// @ts-nocheck
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      const res = await fetch("/js/testimonials.json");
      const data = await res.json();
      setTestimonials(data);
    };

    fetchTestimonialsData();
  }, []);
  const slider = React.useRef(null);
  function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
      <div
        style={{width: "30px", height: "30px", marginRight: "-20px"}}
        className={className}
        onClick={onClick}
      >
        <Image
          alt="right-arrow"
          src={"/assets/icons/right-arrow.svg"}
          width={30}
          height={30}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
      <div
        style={{width: "30px", height: "30px", marginLeft: "-20px"}}
        className={className}
        onClick={onClick}
      >
        <Image
          alt="left-arrow"
          src={"/assets/icons/left-arrow.svg"}
          width={30}
          height={30}
        />
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
    prevArrow: <SamplePrevArrow />, // Custom previous arrow component
    nextArrow: <SampleNextArrow />, // Custom next arrow component
  };

  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...testimonialSettings} ref={slider}>
        {testimonials.map(
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
                      <a className="text-primary" href={url} target="_blank">
                        {company}
                      </a>
                    </strong>
                  </div>
                  <div className="text-left">{description}</div>
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
    </div>
  );
};

export default Testimonials;
