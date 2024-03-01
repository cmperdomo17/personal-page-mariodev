const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert("El formulario se ha enviado correctamente.");
        form.reset();
    }
});

function validateForm() {
    let isValid = true;
    if (name.value.trim() === "") {
        setErrorFor(name, "El nombre es obligatorio");
        isValid = false;
    } else {
        setSuccessFor(name);
    }
    if (email.value.trim() === "") {
        setErrorFor(email, "El correo electrónico es obligatorio");
        isValid = false;
    } else if (!isEmail(email.value.trim())) {
        setErrorFor(email, "El correo electrónico no es válido");
        isValid = false;
    } else {
        setSuccessFor(email);
    }
    if (subject.value.trim() === "") {
        setErrorFor(subject, "El asunto es obligatorio");
        isValid = false;
    } else {
        setSuccessFor(subject);
    }
    if (message.value.trim() === "") {
        setErrorFor(message, "El mensaje es obligatorio");
        isValid = false;
    } else {
        setSuccessFor(message);
    }
    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentNode;
    const errorMessage = formControl.querySelector(".error-message");
    formControl.classList.add("form-control");
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentNode;
    formControl.classList.add("form-control");
    formControl.classList.add("success");
}

function isEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}