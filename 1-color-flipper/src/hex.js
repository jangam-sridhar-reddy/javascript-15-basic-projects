const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    colorSpan.textContent = hexColor;
}

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}