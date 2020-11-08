var slides = document.querySelectorAll('.slider-list .slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
function nextSlide() {
    slides[currentSlide].className = 'slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider-item current';
};

let openModal = document.querySelector('.adress-btn');
let modal = document.querySelector('.modal-window');
let closeModal = modal.querySelector('.close-modal-button');

openModal.onclick = function() {
 modal.classList.add('modal-show');
};

closeModal.onclick = function() {
 modal.classList.remove('modal-show');
};