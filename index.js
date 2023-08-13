const errorMessage = document.getElementsByClassName("errorMessage")
const iconoError = document.getElementsByClassName("iconoError")
const fullForm = document.getElementById("form")

function validForm(event) {
    firsName()
    lastName()
    email()
    password()
    event.preventDefault()
}

function firsName() {
    let firstName = document.forms["fullForm"]["firstName"].value;
    if (firstName == "") {
        errorMessage[0].textContent = "First Name cannot be empty";
        fullForm[0].style.borderColor = "#f96262"
        iconoError[0].classList.remove("hidden")
        
        fullForm[0].addEventListener("click", function () {
            errorMessage[0].textContent = "";
            fullForm[0].style.borderColor = "#e2e1ed"
            iconoError[0].classList.add("hidden")
        });
    } else {
        errorMessage[0].textContent = "";
        fullForm[0].style.borderColor = "#38cc8c"
        iconoError[0].classList.add("hidden")
    }
}

function lastName() {
    let lastName = document.forms["fullForm"]["lastName"].value;
    if (lastName == "") {
        errorMessage[1].textContent = "Last Name cannot be empty";
        fullForm[1].style.borderColor = "#f96262"
        iconoError[1].classList.remove("hidden")
        
        fullForm[1].addEventListener("click", function () {
            errorMessage[1].textContent = "";
            fullForm[1].style.borderColor = "#e2e1ed"
            iconoError[1].classList.add("hidden")
        });
    } else {
        errorMessage[1].textContent = "";
        fullForm[1].style.borderColor = "#38cc8c"
        iconoError[1].classList.add("hidden")
    }
}

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

function email() {
    let email = document.forms["fullForm"]["email"].value;
    if (email == "" || !email.match(emailFormat)) {
        errorMessage[2].textContent = "Looks like this is not an email";
        fullForm[2].style.borderColor = "#f96262"
        iconoError[2].classList.remove("hidden")
        
        fullForm[2].addEventListener("click", function () {
            errorMessage[2].textContent = "";
            fullForm[2].style.borderColor = "#e2e1ed"
            iconoError[2].classList.add("hidden")
        });
    } else {
        errorMessage[2].textContent = "";
        fullForm[2].style.borderColor = "#38cc8c"
        iconoError[2].classList.add("hidden")
    }
}

function password() {
    let password = document.forms["fullForm"]["password"].value;
    if (password == "") {
        errorMessage[3].textContent = "password cannot be empty";
        fullForm[3].style.borderColor = "#f96262"
        iconoError[3].classList.remove("hidden")
        
        fullForm[3].addEventListener("click", function () {
            errorMessage[3].textContent = "";
            fullForm[3].style.borderColor = "#e2e1ed"
            iconoError[3].classList.add("hidden")
        });
    } else {
        errorMessage[3].textContent = "";
        fullForm[3].style.borderColor = "#38cc8c"
        iconoError[3].classList.add("hidden")
    }
}
