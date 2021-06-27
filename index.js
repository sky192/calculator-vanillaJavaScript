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

 document.querySelector(".all-clear").addEventListener("click", function() {
     return displayBox.innerText = 0;  
 })

document.querySelector(".last-clear").addEventListener("click", function() {
    let text = displayBox.innerText;
    if(text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length -1)
    }
})