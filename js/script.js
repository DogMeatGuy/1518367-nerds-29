var slides = document.querySelectorAll('.slider-list .slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);
function nextSlide() {
    slides[currentSlide].className = 'slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider-item current';
};

const openModal = document.querySelector(".adress-btn");
const modal = document.querySelector(".modal-window");
const closeModal = document.querySelector(".close-modal-button")
openModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");

});

closeModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});