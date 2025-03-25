//create a function represetning a calculator
//create a function that adds two numbers
//create a function that subtracts two numbers
//create a function that multiplies two numbers
//create a function that divides two numbers
//make this function available to be used in console

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
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }
    return {
        add,
        subtract,
        multiply,
        divide
    };
}

// Make the calculator usable from the console
const calc = calculator();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Calculator!");
console.log("Available operations: add, subtract, multiply, divide");
console.log("Usage: <operation> <number1> <number2>");
console.log("Type 'exit' to quit.");

rl.on("line", (input) => {
    if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
        return;
    }

    const [operation, num1, num2] = input.split(" ");
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        console.log("Error: Please provide valid numbers.");
        return;
    }

    switch (operation) {
        case "add":
            console.log(`Result: ${calc.add(a, b)}`);
            break;
        case "subtract":
            console.log(`Result: ${calc.subtract(a, b)}`);
            break;
        case "multiply":
            console.log(`Result: ${calc.multiply(a, b)}`);
            break;
        case "divide":
            console.log(`Result: ${calc.divide(a, b)}`);
            break;
        default:
            console.log("Error: Unknown operation. Please use add, subtract, multiply, or divide.");
    }
});