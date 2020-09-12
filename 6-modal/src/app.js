// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");


modalButton.addEventListener("click", openModal());

function openModal() {
    return function() {
        modalOverlay.classList.add("open-modal");
    }
}

closeButton.addEventListener("click", closeModal());

function closeModal() {
     return function () {
         modalOverlay.classList.remove("open-modal");
     }
}
document.addEventListener("click", closeModal2());

function closeModal2() {
    return function(e) {
        if(e.target === modalOverlay) {
            closeModal()();
        }
    }
}