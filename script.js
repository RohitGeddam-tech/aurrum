const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 1,

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
