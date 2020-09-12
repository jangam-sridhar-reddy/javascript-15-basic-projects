// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const button = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

button.addEventListener("click", videoControls());
window.addEventListener("load", preLoaderHide());

function videoControls() {
    return function() {
        if(!button.classList.contains("slide")){
            button.classList.add("slide");
            video.pause();
        } else {
            button.classList.remove("slide");
            video.play();
        }

    }
}


function preLoaderHide() {
    return function(){
        preloader.classList.add("hide-preloader");
    }
}