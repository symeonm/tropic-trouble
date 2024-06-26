import 'swiper/css';

new Swiper('#swiper2', {
  direction: 'horizontal',

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 25,
    },

    1440: {
      spaceBetween: 25,
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: '#swiper2 .swiper-button-next',
    prevEl: '#swiper2 .swiper-button-prev',
    // clickable: true,
  },
});
