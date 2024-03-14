import {useEffect, useState} from "react";
import Image from "next/image";
import {TEAMS_LIST} from "@/constants/Testimonials.constants";

const TeamsSection = () => {
  return (
    <div className="container position-relative px-5 pt-10">
      <div className="row gx-md-5 justify-content-center">
        <div className="col-lg-12">
          <div className="text-center mb-5">
            <h2 className="display-5 mb-3 text-dark">
              Empowering Smart Data Teams
            </h2>
          </div>
        </div>
      </div>

      <div
        id="testimonialImagesContainer"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-md:justify-items-center max-md:items-center"
      >
        {TEAMS_LIST.map(({name, image, url}, index) => (
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
