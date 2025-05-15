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
      delay: 5000,
    },
    grabCursor: true,
    speed: 1000,

    navigation: {
      nextEl: '.slide-next',
      prevEl: '.slide-prev',
    }
  });
// Налаштування другого слайдеру асортименту
const titleSlides = [];
document.querySelectorAll('.asort-slide-desc h3').forEach(e => {
  titleSlides.push(e.innerText);
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
      return `<span class="${className}">${titleSlides[index]}</span>`;
    },
  }
});

var player = new Playerjs({
  id:"player", 
  file:"https://999jarik.github.io/project-evrobud/video/test-video.mp4",
  autoplay: 1
});