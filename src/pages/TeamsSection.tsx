// components/Testimonials.js

import {useEffect, useState} from "react";

import Image from "next/image";

const TeamsSection = () => {
  const [testimonialImages, setTestimonialImages] = useState([]);

  useEffect(() => {
    const fetchTestimonialImagesData = async () => {
      const res = await fetch("/js/testimonialImages.json");
      const data = await res.json();
      setTestimonialImages(data);
    };

    fetchTestimonialImagesData();
  }, []);

  return (
    <div className="container position-relative px-5">
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-12">
          <div className="text-center mb-5">
            <h2 className="display-5 mb-3 text-dark">
              Empowering Smart Data Teams
            </h2>
          </div>
        </div>
      </div>

      <div id="testimonialImagesContainer" className="grid grid-cols-5 gap-4">
        {testimonialImages.map(({name, image, url}, index) => (
          <div key={index}>
            <a href={url} target="_blank">
              <Image
                width={200}
                height={200}
                className={`testimonial-image ${name}`}
                src={image}
                alt={name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
