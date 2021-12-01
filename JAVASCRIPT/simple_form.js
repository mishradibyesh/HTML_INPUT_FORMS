/**
 * Update the salary value when user slides slider left or right
 */

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

/**
 * To validate the name field using the REGEX expression
 */

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

/**
 * To validate the email field using the REGEX expression
 */

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$");
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect";
});