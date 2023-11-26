
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phonenumber = document.forms["contactForm"]["phonenumber"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "") {
        showAlert("Name must be filled out!");
        setFocus("name");
        return false;
    }

    if (email === "") {
        showAlert("Email must be filled out!");
        setFocus("email");
        return false;
    }

    // Add email format validation here

    if (phonenumber === "") {
        showAlert("Phone number must be filled out!");
        setFocus("phonenumber");
        return false;
    }

    // Add phone number validation here

    if (message === "") {
        showAlert("Message must be filled out!");
        setFocus("message");
        return false;
    }

    // If all validations pass, the form is considered valid
    return true;
}

function showAlert(message) {
    alert(message);
}

function setFocus(field) {
    document.forms["contactForm"][field].select();
    document.forms["contactForm"][field].focus();
}
