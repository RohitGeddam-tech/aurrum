const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 2,
  spaceBetween: 1,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

const swiperBanner = new Swiper(".banner-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperGallery = new Swiper('.gallery-swiper', {
  loop: true,

  slidesPerView: 3,
  navigation: {
    nextEl: '.gallery-swiper-button-next',
    prevEl: '.gallery-swiper-button-prev',
  },
});
