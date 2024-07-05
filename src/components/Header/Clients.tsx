import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CLIENT_LIST } from "@/constants/Clients.constants";

const Clients = () => {
  const settings = {
    className: "slider slick-track variable-width",
    pauseOnHover: false,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 8,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-[16px] mb-12 px-4 md:px-16">
      <Slider {...settings}>
        {CLIENT_LIST.map((client) => (
          <div
            key={client.name}
            className={`slide-item opacity-50 h-[60px] ${
              client.width ? "w-[70px]" : "w-[150px]"
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width ? client.width : 100}
              height={100}
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
