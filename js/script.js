import {createSlide} from "./createSlide.js";
import {slides} from "./slides1.js"

createSlide(slides);

// Налаштування плавності скролу
SmoothScroll({
animationTime : 600,
stepSize : 90,
accelerationDelta : 40,
accelerationMax : 2,
keyboardSupport : true,
arrowScroll : 50,
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,
touchpadSupport : true,
})

// Налаштування верхнього слайдеру категорій
const swiperSlider = new Swiper('.slider-1', {
    direction: 'horizontal',
    loop: false,
    autoplay: {
      delay: 10000,
    },
    grabCursor: true,
    speed: 1000,

    navigation: {
      nextEl: '.slide-next',
      prevEl: '.slide-prev',
    }
  });
// Налаштування другого слайдеру асортименту
const titleSecondSlides = [];
document.querySelectorAll('.asort-slide-desc h3').forEach(e => {
  titleSecondSlides.push(e.innerText);
})


const asortSlider = new Swiper('.slider-2', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  effect: 'slide',
  speed: 1000,

  pagination: {
    el: '.asort-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${titleSecondSlides[index]}</span>`;
    },
  }
});

var player = new Playerjs({
  id:"player", 
  file:"./video/test-video.mp4",
  autoplay: 1
});



