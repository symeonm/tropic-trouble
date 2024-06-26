import 'swiper/css';

new Swiper('#swiper1', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  breakpoints: {
    375: {
      slidesPerView: 'auto',
      spaceBetween: 25,
    },

    1440: {
      slidesPerView: 'auto',
    },
  },

  coverflowEffect: {
    rotate: 0,
    stretch: 25,
    depth: 140,
    modifier: 0.4,
    slideShadows: false,

    scale: 0.5,
  },
  navigation: {
    nextEl: '#swiper1 .swiper-button-next',
    prevEl: '#swiper1 .swiper-button-prev',
    clickable: true,
  },
});
