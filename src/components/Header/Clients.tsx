import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CLIENT_LIST } from "@/constants/Clients.constants";

const Clients = () => {
  const settings = {
    className: "slider variable-width",
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-10 mb-24 px-4 md:px-16">
      <Slider {...settings}>
        {CLIENT_LIST.map((client) => (
          <div key={client.name} className="slide-item opacity-50">
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={40}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;