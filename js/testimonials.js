const testimonialContainer = document.querySelector('#testimonialContainer');

const fetchTestimonials = async () => {
  const res = await fetch('./js/testimonials.json');
  const data = await res.json();

  testimonialContainer.innerHTML = data
    .map(({ name, image, description, company, url, title }, index) => {
      return `<div class="swiper-slide" key=${index} >
                  <div class="testimonial-card card card-team">
                    <div class="card-body">
                        <img class="card-team-img mb-3"
                        src=${image}
                        alt=${company}/>
                      <div class="card-team-name mb-3"><strong><a href=${url} target="_blank">${company}</a></strong></div>
                      ${description}           
                      <p class="card-footer-custom font-500"><strong>- ${name}</strong></p>
                      <p class="card-footer-custom opacity-6 text-italic">${title}</p>
                    </div>  
                 </div>
              </div>`;
    })
    .join('');
};

fetchTestimonials();

var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  loop: true,
});
