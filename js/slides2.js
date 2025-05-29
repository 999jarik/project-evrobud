let slidesCatalog = [
  {
    title: "Плитка тротуарна",
    items: ["Камінь", "Глянець", "Сірий", "Кольоровий", "блакитний", "Нарізний", "Квадратний"],
    urlImg: "./img/bricks.jpg",
    alt: "img"
  },
  {
    title: "Плитка тротуарна",
    items: ["Камінь", "Глянець", "Сірий", "Кольоровий", "блакитний", "Нарізний", "Квадратний"],
    urlImg: "./img/concrete.jpg",
    alt: "img"
  },
  {
    title: "Плитка тротуарна",
    items: ["Камінь", "Глянець", "Сірий", "Кольоровий", "блакитний", "Нарізний", "Квадратний"],
    urlImg: "./img/concrete.jpg",
    alt: "img"
  },
  {
    title: "Плитка тротуарна",
    items: ["Камінь", "Глянець", "Сірий", "Кольоровий", "блакитний", "Нарізний", "Квадратний"],
    urlImg: "./img/concrete.jpg",
    alt: "img"
  },
  {
    title: "Плитка тротуарна",
    items: ["Камінь", "Глянець", "Сірий", "Кольоровий", "блакитний", "Нарізний", "Квадратний"],
    urlImg: "./img/bricks.jpg",
    alt: "img"
  },
]

function createCatalogItem (arr) {
  let slider = document.querySelector('.slider-catalog .swiper-wrapper');
  arr.forEach(element => {
    let item = document.createElement('div');
    item.classList.add('catalog-slide');
    item.classList.add('swiper-slide');
    item.innerHTML = `<img src=${element.urlImg} alt=${element.alt} class="img100per-cover">`;

    let itemBtnBox = document.createElement('div')
    itemBtnBox.classList.add('catalog-btn');
    let itemBtn = document.createElement('a');
    itemBtn.classList.add('contacts-link');
    itemBtn.href = "#footer"
    itemBtn.innerText = "Дізнатись більше";
    itemBtnBox.append(itemBtn);

    let itemContent = document.createElement('div');
    itemContent.classList.add('catalog-slide-content');
    itemContent.innerHTML = `<h3 class="catalog-slide-title">${element.title}</h3>`
    let ul = document.createElement('ul')
    ul.classList.add('catalog-ul');
    
    element.items.forEach(el => {
      let li = document.createElement('li')
      li.classList.add('catalog-li');
      li.innerText = el;
      ul.append(li);
    })
    
    itemContent.append(ul);
    item.append(itemBtnBox);
    item.append(itemContent);
    slider.append(item)
  });
}


export {slidesCatalog}
export {createCatalogItem}