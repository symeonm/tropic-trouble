import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

new Swiper('.swiper', {
  direction: 'horizontal',

  loop: true,

  slidesPerView: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    // clickable: true,
  },
});
