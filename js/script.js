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
  file:"./video/test-video.mp4",
  autoplay: 1
});

let slides = [
  {
    title: "Плитка тротуарна",
    desc: "Тротуарна плитка від виробника – великий вибір кольорів та форм, гарантія якості та довговічності.",
    urlImg: "./img/bricks.jpg",
    alt: "img",
    url: "#"
  },
  {
    title: "Шлакоблок",
    desc: "Шлакоблок для швидкого та економічного будівництва – міцний, надійний та екологічно чистий матеріал.",
    urlImg: "./img/blocks.jpg",
    alt: "img",
    url: "#"
  },
  {
    title: "Сипучі матеріали",
    desc: "Сипучі матеріали для будівництва – пісок, щебінь, відсів, шлак з доставкою на об'єкт, завжди в наявності та за вигідними цінами.",
    urlImg: "./img/stones.jpg",
    alt: "img",
    url: "#"
  },
  {
    title: "Бетонні вироби",
    desc: "Бетонні вироби для будівництва – блоки, плити, бордюри, колодязні кільця з доставкою на об'єкт, завжди в наявності та за доступними цінами.",
    urlImg: "./img/concrete.jpg",
    alt: "img",
    url: "#"
  },

]

function createSlide(arr) {
  let slider = document.querySelector('.slider-1 .swiper-wrapper');
  arr.forEach(item => {
    let slide = document.createElement("div");
    slide.classList.add('slide');
    slide.classList.add('swiper-slide');
    let img = document.createElement('div');
    img.classList.add('slide-img-box');
    img.innerHTML = `<img src=${item.urlImg} alt=${item.alt} class="img100per-cover">`
    let slideDesc = document.createElement('div');
    slideDesc.classList.add('slide-content');
    slideDesc.innerHTML = `<span class="slide-count">${arr.indexOf(item) + 1}/${arr.length}</span>
                            <span class="slide-title">${item.title}</span>
                            <p>${item.desc}</p>
                            <a href=${item.url} class="contacts-link">
                                    <span>Дізнатись більше</span>
                                </a>`;
    slide.append(img);
    slide.append(slideDesc);
    slider.append(slide);               
  })
  
}

createSlide(slides);