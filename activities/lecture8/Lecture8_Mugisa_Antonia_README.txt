# Lecture8 Activity - CSCI 3172

* *Date Created*: 29 09 2024
* *Last Modification Date*: 01 10 2024
* *Lab URL*: https://web.cs.dal.ca/~mugisa/csci3172/activities/lecture8/
* *Git URL*: https://git.cs.dal.ca/mugisa/lab1/-/tree/main/activities/lecture8?ref_type=heads


## Authors

* [Antonia Mugisa](an235582@dal.ca) - (Developer)

## Sources Used

## Lecture 5 activity

```
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

```

The code above was created by adapting the code in [Lecture 5 Activity](https://git.cs.dal.ca/mugisa/lab1/-/tree/main/activities/lecture5/L5%20Activity?ref_type=heads) as shown below:

```
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

```
- <!---How---> The code in [Lecture 5 Activity](https://git.cs.dal.ca/mugisa/lab1/-/tree/main/activities/lecture5/L5%20Activity?ref_type=heads) was implemented by myself (Antonia Mugisa)
- <!---Why---> [Lecture 5 Activity](https://git.cs.dal.ca/mugisa/lab1/-/tree/main/activities/lecture5/L5%20Activity?ref_type=heads)'s Code was used because the arithmetic function was already created in that activity and can be reused for this activity
- <!---How---> [Lecture 5 Activity](https://git.cs.dal.ca/mugisa/lab1/-/tree/main/activities/lecture5/L5%20Activity?ref_type=heads)'s Code was modified by myself (Antonia Mugisa)

## Acknowledgments

* Professor's code in Lecture 8 script made in class