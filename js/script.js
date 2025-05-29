import {createSlide} from "./createSlide.js";
import {slides} from "./slides1.js";
import {slidesCatalog} from "./slidesCatalog.js";
import {createCatalogItem} from "./createCatalogSlide.js";
import {faqs} from "./faqList.js"
import {createFaq} from "./createFaq.js"


createSlide(slides);
createCatalogItem(slidesCatalog)

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

// Налаштування слайдеру каталогу
const catalogSlider = new Swiper('.slider-catalog', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  grabCursor: true,
  effect: 'slide',
  speed: 1000,

  navigation: {
      nextEl: '.catalog-slide-next',
      prevEl: '.catalog-slide-prev',
    }
})



var player = new Playerjs({
  id:"player", 
  file:"./video/test-video.mp4",
  autoplay: 1
});

// Валідація номеру телефону в формі
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
const errorMessage = document.getElementById('error-message');
const requiredLength = 17;
phoneInputs.forEach(input => {
    input.addEventListener('input', ()=> {
        if(input.value === '+') input.value = '';
        const charCount = input.value.length;
    
        if (charCount == requiredLength) {
          input.setCustomValidity(''); // Скидає помилку
          errorMessage.style.display = 'none';
          input.style.borderColor = 'green';
        }
    })
    input.addEventListener('blur', ()=> {
        if(input.value === '+') {input.value = '';}
        const charCount = input.value.length;

        if (charCount !== requiredLength) {
            input.setCustomValidity('Введіть правильний номер');
            errorMessage.style.display = 'block';
            input.style.borderColor = 'red';
        } else {
            input.setCustomValidity(''); // Скидає помилку
            errorMessage.style.display = 'none';
            input.style.borderColor = 'green';
        }
    })
    input.addEventListener('invalid', () => {
    if (input.value.length !== requiredLength) {
        input.setCustomValidity('Введіть правильний номер');
        errorMessage.style.display = 'block';
    }
});
});

const textarea = document.getElementById('message');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = `${Math.min(this.scrollHeight, 240)}px`;
    });

let form = document.forms.feedbackForm;
document.querySelector('.feedback-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].value = "";
  }

  iziToast.success({
    title: 'Дякуємо',
    message: 'Зателефонуємо найближчим часом',
});
})

createFaq(faqs, document.querySelector('.faq'))