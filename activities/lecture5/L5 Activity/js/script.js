// Calculate Function that uses all 4 arithmetic operations:
// Addition
// Subtraction
// Multiplication
// Division

function arithmetics(num1, num2, operations) {
    let result;
    if (operations === "add") {
        result = num1 + num2;
    }
    if (operations === "subtract") {
        result = num1 - num2;
    }
    if (operations === "multiply") {
        result = num1 * num2;
    }
    if (operations === "divide") {
        result = num1 / num2;
    }
    return result;
}

// Get user input for numbers and operation

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();


// Outputs

// Validate the operation and calculate the result

if (["add", "subtract", "multiply", "divide"].includes(operation)) {
    let result = arithmetics(num1, num2, operation);
    console.log(`Result of ${operation}ing ${num1} and ${num2}: ${result}`);
    alert(`Result of ${operation}ing ${num1} and ${num2}: ${result}`);
} else {
    console.log("Invalid operation. Please choose add, subtract, multiply, or divide.");
    alert("Invalid operation. Please choose add, subtract, multiply, or divide.");
}

