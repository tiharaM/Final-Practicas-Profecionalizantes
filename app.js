// JavaScript para controlar el carrusel
const carouselList = document.querySelector('.carousel-list');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselList.children.length) % carouselList.children.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselList.children.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100 + '%';
    carouselList.style.transform = `translateX(${offset})`;
}