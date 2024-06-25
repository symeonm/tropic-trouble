import 'swiper/css';
import 'swiper/css/effect-coverflow';

const settings = {
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const swiper = new Swiper('.swiper-container', settings);
