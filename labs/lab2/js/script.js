// Function to calculate the area of a circle with a radius of 6.
function areaOfCircle() {

    const radius = 6;
    return Math.PI * radius * radius;
}

console.log("Calling areaofCircle function, which calculates area with a radius of 6")
console.log("Area result:"+ areaOfCircle());

// Function implementing arithmetic functions: addition, subtraction, multiplication,and division.
// Function accepts two numbers as arguments and return the result as output
function arithmetics(num1, num2, operations){

    let result;

    if (operations==="add") {
        result = num1+num2;
    }

    if (operations==="subtract") {
        result = num1-num2;
    }

    if (operations==="multiply") {
        result = num1*num2;
    }

    if (operations==="divide") {
        result = num1/num2;
    }
    return result;
}

console.log("Calling arithmetics function, using numbers 4 and 2 and doing the following operations in this given order(addition, subtraction, multiplication , division)")
console.log("Addition Output:" + arithmetics(4,2,"add"));
console.log("Subtraction Output:" + arithmetics(4,2,"subtract"));
console.log("Multiplication Output:" + arithmetics(4,2,"multiply"));
console.log("Division Output:" + arithmetics(4,2,"divide"));

// Function to calculate the area of a rectangle with a length of 20, and width of 15.
function areaOfRectangle() {

    let length = 20;
    let width = 15;

    return length * width;
}

console.log("Calling rectangleArea function to calculate the area of a rectangle with a length of 20, and width of 15")
console.log("Area result:" + areaOfRectangle());

//Testing purposes
console.log("To test circle area function follow this format: circleAreaR6()");
console.log("To test arithmetic function follow this format: arithmetics(num1,num2,\"operation\")  for operation, use add/subtract/multiply/divide");
console.log("To test rectangle area function follow this format: rectangleArea()");

//answers to the questions from the lab

//(a) What is the scope of a const variable?

/* - The scope of a const variable is a block scope. */

//(b) When were the let and const keywords added to JavaScript?

/* - The let and the const keywords were added in 2015 in ES6. */





