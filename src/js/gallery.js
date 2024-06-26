import 'swiper/css';

new Swiper('#swiper1', {
  direction: 'horizontal',
  centeredSlides: true,
  // centeredSlidesBounds: true,

  spaceBetween: 25,
  loop: true,

  slidesPerView: 3,

  navigation: {
    nextEl: '#swiper1 .swiper-button-next',
    prevEl: '#swiper1 .swiper-button-prev',
    // clickable: true,
  },
});
