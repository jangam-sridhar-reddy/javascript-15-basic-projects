const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");


slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextButton.addEventListener("click", function(){    
    
    counter++;
    carousel();
});

prevButton.addEventListener("click", function(){
    
    counter--;
    carousel();
});


function carousel(){
    if(counter < (slides.length -1)){
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }

    if(counter > 0){
        prevButton.style.display = "block";
    } else {
        prevButton.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevButton.style.display = "none";