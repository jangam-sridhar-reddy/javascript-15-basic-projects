const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", changeBackgroundColor);


function changeBackgroundColor() {
    const randomNumber = generateRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    colorSpan.textContent = colors[randomNumber];
}

function generateRandom() {
    const generatedNumber = Math.floor(Math.random() * colors.length);
    return generatedNumber;
}
