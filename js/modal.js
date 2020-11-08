let openModal = document.querySelector('.adress-btn');
let modal = document.querySelector('.modal-window');
let closeModal = modal.querySelector('.close-modal-button');

openModal.onclick = function() {
 modal.classList.add('modal-show');
};

closeModal.onclick = function() {
 modal.classList.remove('modal-show');
};