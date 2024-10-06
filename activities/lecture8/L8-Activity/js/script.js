// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions

let todayDate = new Date();
let currentTime = currentTime.getHours();



// Create a variable to store your greeting message 

let greetingMessage = "";

// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM

if (currentTime < 12) {

    greetingMessage = "Good Morning";
}

// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'

else if (currentTime >= 12 && currentTime < 15) {

    greetingMessage = "Hey! I think we are in class!";
}

// For any other time (i.e., later than 3PM, we just want to say 'Welcome'

else {

    greetingMessage = "Welcome";
}


// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF


// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>

document.getElementById("greeting").innerHTML = greetingMessage;

// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values

function getNumbers() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    return { num1, num2 };
}



// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )
function arithmetics(num1, num2, operation) {

    let result;

    if (operation === "add") {
        result = num1 + num2;

    } else if (operation === "subtract") {
        result = num1 - num2;

    } else if (operation === "multiply") {
        result = num1 * num2;

    } else if (operation === "divide") {

        if (num2 === 0) {

            alert("Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;

    } else {

        alert("Invalid operation");
        return;
    }

    alert("The result of " + operation + " is: " + result);


    // Store the values from the form into the variables we declared above
    //num1 = parseInt(document.getElementById("num1").value);
    //num2 = parseInt(document.getElementById("num2").value);


    // Call the getNumbers() function to import the values the user enteres into the form into
    // this function


    // We perform our addition on the two values
    //let result = num1 + num2;

    // Display the result of the calculation
    //alert("The result of the addition is: " + result);

}

function calculate(operation) {
    let numbers = getNumbers();
    if (numbers) {
        arithmetics(numbers.num1, numbers.num2, operation);
    }
}
