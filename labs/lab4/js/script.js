let button = document.getElementById('register');
button.addEventListener("click",displayFormData);

function displayFormData(event) {

    event.preventDefault();

    let firstname = document.getElementById("fName").value;
    document.getElementById('fNameData').innerHTML = "First name: " + firstname;

    let lastname = document.getElementById("lName").value;
    document.getElementById('lNameData').innerHTML = "Last name: " + lastname;

    let email = document.getElementById("email").value;
    document.getElementById('emailData').innerHTML = "Email: " + email;

    let gender;
    if (document.getElementById("male").checked) {

        gender = document.getElementById("male").value;
    }
    else if (document.getElementById("female").checked) {

        gender = document.getElementById("female").value;
    }
    else if (document.getElementById("non-binary").checked){

        gender = document.getElementById("non-binary").value;
    }
    else {

        gender = document.getElementById("prefer-not").value;
    }
    document.getElementById('genderData').innerHTML = "Gender: " + gender;

    let country = document.getElementById("country").value;
    document.getElementById('countryData').innerHTML = "Country: " + country;

    // First Name Validation (only letters and spaces)
    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    if (!nameRegex.test(firstname)) {
        alert("Please enter a valid first name (letters and spaces only).");
        return;
    }

    // Last Name Validation (letters, hyphens, apostrophes)
    const lastNameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)*$/;
    if (!lastNameRegex.test(lastname)) {
        alert("Please enter a valid last name (letters, hyphens, and apostrophes allowed).");
        return;
    }

    // Email Validation (2 to 6 character domains)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select your gender.");
    }

}

//(a) What is the use of preventDefault ( )?

/*- PreventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. It prevents the default behavior of event.
For example, submitting a form, it usually posts the data to sever and empties the form. When I tried to add event handler to submit button, the function runs for a second and when the form
refreshes, the data is gone. I had to use preventDefault to keep the data on the form, so it can be displayed.  */

//(b) What changes require in code to keep previous data on the page? (Write the code line that requires to modify)

/*- In your function that is used in event handler, you add event as a parameter and inside the method you add event.preventDefault(); You can look at the displayFormData function above as example.  */