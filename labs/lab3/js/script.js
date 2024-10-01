let selector = document.getElementById('weekday');
selector.addEventListener("change",changeColour)
let selectorDiv = document.querySelector("div.weekdaySelector");

// Change colour of weekday when selected
function changeColour() {

    let daySelected = selector.value;
    switch(daySelected) {

        case "monday":
            selectorDiv.style.backgroundColor = 'red';
            break;
        case "tuesday":
            selectorDiv.style.backgroundColor = 'orange';
            break;
        case "wednesday":
            selectorDiv.style.backgroundColor = 'yellowgreen';
            break;
        case "thursday":
            selectorDiv.style.backgroundColor = 'green';
            break;
        case "friday":
            selectorDiv.style.backgroundColor = 'darkblue';
            break;
        case "saturday":
            selectorDiv.style.backgroundColor = 'lightblue';
            break;
        case "sunday":
            selectorDiv.style.backgroundColor = 'purple';
            break;
        default:
            selectorDiv.style.backgroundColor = 'red';
    }

}

let button = document.getElementById("button");
button.addEventListener("click",numberChecker)

// Check the range of inputted number then output
function numberChecker(event) {

    event.preventDefault()

    let number = parseInt(document.getElementById('numberInput').value);
    let output = "The number entered is an"

    number%2===0 ?  output+=" even" : output+=" odd"
    isPrime(number) ? output+=" prime number" : output+=" composite number"

    if (number<=50) {

        output+=" less than or equal to 50."
    }
    else if (number>50 && number <=75) {

        output+=" greater than 50 and less than or equal to 75."
    }
    else if(number>75 && number <=100) {

        output+=" greater than 75 and less than or equal to 100."
    }
    else if(number>100) {

        output+=" greater than 100."
    }

    document.getElementById("output").innerHTML = output;
}

// Check if number is Prime
function isPrime(num) {

    var sqrtNum=Math.floor(Math.sqrt(num));
    var prime = num !== 1;
    for(var i= 2; i < sqrtNum + 1; i++) {

        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}