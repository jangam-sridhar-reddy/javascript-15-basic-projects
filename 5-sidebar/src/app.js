const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", openSideBarToggle());


closeBtn.addEventListener("click", closeSideBarToggle());

function openSideBarToggle() {
    return function() {
        sideBar.classList.toggle("show-sidebar");        
    }
}

function closeSideBarToggle() {
    return function() {
        sideBar.classList.remove("show-sidebar");
    }
}