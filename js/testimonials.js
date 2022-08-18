const testimonialContainer = document.querySelector("#testimonialContainer");

const fetchTestimonials = async () => {
  const res = await fetch("./js/testimonials.json");
  const data = await res.json();

  testimonialContainer.innerHTML = data
    .map(
      (
        {
          name,
          image,
          date,
          description,
          social: { company, slack, linkedin, email },
        },
        index
      ) => {
        return `  <div class="swiper-slide" key=${index} >
     <div class="card card-team">
     <div class="card-body">
       <div class="card-team-name">${name}</div>
       ${
         company ? ` <div class="card-team-position mb-3">${company}</div>` : ""
       }
      
       <p class="small mb-0">
       ${description}
       </p>
     </div>
     <div class="card-footer text-center">
     ${
       slack
         ? `<a
     class="btn btn-icon btn-transparent-dark mx-1"
     href=${slack} target="_blank"
     ><i class="fab fa-slack"></i></a>`
         : ""
     }

     ${
       linkedin
         ? ` <a
     class="btn btn-icon btn-transparent-dark mx-1"
     href=${linkedin} target="_blank"
     ><i class="fab fa-linkedin-in"></i></a>`
         : ""
     }
      
    ${
      email
        ? ` <a
    class="btn btn-icon btn-transparent-dark mx-1"
    href=${email} target="_blank"
    ><i class="fa fa-envelope"></i>
  </a>`
        : ""
    }
      
     </div>
   </div>
   </div>`;
      }
    )
    .join("");
};

fetchTestimonials();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 10,
    autoplay:true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
