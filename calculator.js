//create a function represetning a calculator
//create a function that adds two numbers
//create a function that subtracts two numbers
//create a function that multiplies two numbers
//create a function that divides two numbers


function calculator() {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    return {
        add,
        subtract,
        multiply,
        divide
    }
}