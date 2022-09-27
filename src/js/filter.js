const filterBtn = document.querySelector('.content__filter-btn');
const adaptiveFilterBtn = document.querySelector('.adaptive-filter__btn');

const modal = document.querySelector('.modal');
const adaptiveFilter = document.querySelector('.adaptive-filter');
const adaptiveBrand = document.querySelector('.adaptive-brand');

const modalToggle = (event) => {
    modal.classList.toggle('active');
    adaptiveFilter.classList.toggle('active');
    event.preventDefault();
}

filterBtn.addEventListener('click', modalToggle);
adaptiveFilterBtn.addEventListener('click', modalToggle);

let brand = document.querySelector('.content__brand');
let cpu = document.querySelector('.content__cpu');

let adaptiveFilterBrand = document.querySelector('.adaptive-filter__brand');
let adaptiveFilterCPU = document.querySelector('.adaptive-filter__cpu');
let contentTitle = document.querySelector('.content__title');

adaptiveFilterBrand.addEventListener('click', (evt => {
    adaptiveBrand.append(brand);
    contentTitle.classList.remove('content__title');
    contentTitle.classList.toggle('modal__title');
    adaptiveBrand.classList.toggle('active');
}));

adaptiveFilterCPU.addEventListener('click', (evt => {
    adaptiveBrand.append(cpu);
    contentTitle.classList.remove('content__title');
    contentTitle.classList.toggle('modal__title');
    adaptiveBrand.classList.toggle('active');
}));

contentTitle.addEventListener('click', (evt => {
    adaptiveBrand.classList.toggle('active');
}))
