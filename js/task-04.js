const form = document.querySelector(".login-form")

function formValidation(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const data = {
        email: email,
        password: password
    }

    if (email === "" || password === "") {
        alert("Please enter your email and password")
    } else {
        console.log(data)
        form.reset();
    }
}

form.addEventListener("submit", formValidation);


const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
emailInput.placeholder = 'Enter your email';
passwordInput.placeholder = 'Enter your password';
emailInput.classList.add("inputEmail");
passwordInput.classList.add("inputPassword");