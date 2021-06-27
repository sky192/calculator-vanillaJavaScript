let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if(displayBox.innerText == 0) {
        return displayBox.innerText = x;
    }
    return displayBox.innerText += x;
}
let list = document.querySelectorAll(".show-display")
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})

function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result)
}
 document.querySelector(".calculate").addEventListener("click", calculate)