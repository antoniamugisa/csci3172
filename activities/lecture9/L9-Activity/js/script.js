// Done in class

function inFocus(temp) {

    temp.classList.add('active');
}

function outFocus(temp) {

    temp.classList.remove('active');
}

// First name

let firstName = document.getElementById("firstName");

firstName.addEventListener('focus', function (){

    inFocus(firstName)
}, false);

firstName.addEventListener('blur', function (){

    outFocus(firstName)
}, false);

// Last name

let lastName = document.getElementById('lastName');

lastName.addEventListener('focus', function (){

    inFocus(lastName)
}, false);

lastName.addEventListener('blur', function (){

    outFocus(lastName)
}, false);

// Email

let email = document.getElementById('email');

email.addEventListener('focus', function (){

    inFocus(email)
}, false);

email.addEventListener('blur', function (){

    outFocus(email)
}, false);

// Password

let password = document.getElementById('password');

password.addEventListener('focus', function (){

    inFocus(password)
}, false);

password.addEventListener('blur', function (){

    outFocus(password)
}, false);

function validate() {

    // First Name Validation

    let firstNameRegEx = /^[a-zA-Z ]+$/;

    let firstNameValue = document.getElementById('firstName').value;

    if (!firstNameRegEx.test(firstNameValue)) {

        alert("There are some errors in your First Name");
    }
    else {
        alert("The form is successfully submitted");
    }

    // Last Name Validation

    let lastNameRegEx = /^[a-zA-Z '-]+$/;

    let lastNameValue = document.getElementById('lastName').value;

    if (!lastNameRegEx.test(lastNameValue)) {

        alert("There are some errors in your Last Name");
    }
    else {
        alert("The form is successfully submitted");
    }

    // Email Validation

    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let emailValue = document.getElementById('email').value;

    if (!emailRegEx.test(emailValue)) {

        alert("There are some errors in your Email");
    }
    else {
        alert("The form is successfully submitted");
    }

    // Password Validation

    let passwordRegEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{12,}$/;

    let passwordValue = document.getElementById('password').value;

    if (!passwordRegEx.test(passwordValue)) {

        alert("Password must be at least 12 characters long, and include at least one number, one uppercase letter, one lowercase letter, and one special character.");
    }
    else {
        alert("The form is successfully submitted");
    }
}



