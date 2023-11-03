document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");
    let currentInput = "";
    let currentOperation = null;
    let firstInput = null;

    document.querySelector(".buttons").addEventListener("click", function(event) {
        let value = event.target.getAttribute("data-value");
        if (value) handleInput(value);
    });

    function handleInput(value) {
        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.value = currentInput;
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (firstInput === null) {
                firstInput = currentInput;
                currentInput = "";
                currentOperation = value;
            } else {
                firstInput = operate(firstInput, currentInput, currentOperation);
                display.value = firstInput;
                currentInput = "";
                currentOperation = value;
            }
        } else if (value === "=") {
            if (firstInput !== null) {
                display.value = operate(firstInput, currentInput, currentOperation);
                firstInput = null;
                currentOperation = null;
            }
        } else if (value === "clear") {
            firstInput = null;
            currentInput = "";
            currentOperation = null;
            display.value = "";
        }
    }

    function operate(a, b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operation) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b !== 0) return a / b;
                alert("Division by zero!");
                return "";
            default:
                return "";
        }
    }
});
