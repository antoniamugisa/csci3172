// Lecture 7 Activity

// Function that returns a random number from range of values

function randomNumber() {

    return Math.random();
}

console.log("Here is a random number:" + randomNumber());





// Function that calculates area of a circle
// Given that radius is 6

function areaOfCircle() {

    const radius = 6;
    return Math.PI * radius * radius;
}

console.log("Calling areaOfCircle function, which calculates area with a radius of 6")
console.log("Area result:"+ areaOfCircle());