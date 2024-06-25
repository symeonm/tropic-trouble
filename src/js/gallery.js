import 'swiper/css';

new Swiper('.swiper', {
  direction: 'horizontal',
  centeredSlides: true,

  spaceBetween: 25,
  loop: true,

  slidesPerView: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    // clickable: true,
  },
});
