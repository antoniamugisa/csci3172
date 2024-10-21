let button = document.getElementById("calculate");
button.addEventListener("click", calculate)

function calculate(event) {

    event.preventDefault();
    let input = document.getElementById("numbers").value;
    let numbers = input.split(",").map(Number);

    //checking if prime or not
    let results = numbers.map(isPrime);

    //counting prime numbers
    let primeSum = 0;
    results.forEach(function countPrime(num) {

        if (num === 1) {

            primeSum++;
        }
    });

    //counting composite numbers
    let compositeSum = countComposite(results);

    //counting neither numbers
    let neitherSum = 0;
    results.map(function countNeither(num) {

        if (num === 0) {

            neitherSum++;
        }
    });

    //output
    document.getElementById("prime").innerHTML = "Prime Numbers: " + primeSum;
    document.getElementById("composite").innerHTML = "Composite Numbers: " + compositeSum;
    document.getElementById("neither").innerHTML = "Neither: " + neitherSum;
}

function isPrime(num) {

    //prime
    let result = 1;
    if (num === 1) {

        //neither
        result = 0;
    }

    else if (num > 1) {

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {

                //composite
                result = 2;
                break;
            }
        }

    }
    return result;
}
function countComposite(numArr) {

    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {

        if (numArr[i] === 2) {

            sum++;
        }
    }
    return sum;
}