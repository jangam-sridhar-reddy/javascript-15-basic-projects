const buttons = document.querySelectorAll(".tab-btn");
const about  = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", openTabs());

function openTabs(){
    return function(e) {
        const id = e.target.dataset.id;
        if(id){
            buttons.forEach(function(button) {
                button.classList.remove("active");
                e.target.classList.add("active");
            });

            articles.forEach(function(article){
                article.classList.remove("active");
            });
        }

        const element = document.getElementById(id);
        element.classList.add("active");
    }
}