const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiplied = document.getElementById("multiplied")
const divided = document.getElementById("divided")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")
let operation = "+"

plus.onclick = function() {
    operation = "+"
}

minus.onclick = function() {
    operation = "-"
}

multiplied.onclick = function() {
    operation = "*"
}

divided.onclick = function() {
    operation = "/"
}

function getResult(value) {
    if (value < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = value
}


calculate.onclick = function() {
    if (operation === "+") {
        const sum = Number(firstInput.value) + Number(secondInput.value)
        getResult(sum)
    } else if (operation === "-") {
        const diff = Number(firstInput.value) - Number(secondInput.value)
        getResult(diff)
    } else if (operation === "*") {
        const product = Number(firstInput.value) * Number(secondInput.value)
        getResult(product)
    } else if (operation === "/") {
        const quotient = Number(firstInput.value) / Number(secondInput.value)
        getResult(quotient)
    } 
}
// console.log(Number(firstInput.value) + Number(secondInput.value))
