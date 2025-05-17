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
  
};
export {createSlide};