//Cerrar menu al hacer click afuera
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('toogle-menu').checked = false;
});

const slides = document.querySelector('.carousel-slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
const interval = 4000; // Tiempo en milisegundos entre transiciones

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, interval);
