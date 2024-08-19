// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? '👁️' : '👁️';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        const passwordValue = passwordInput.value.trim();
        if (!isValidPassword(passwordValue)) {
            alert('Password must be 6 characters or more, contain uppercase, lowercase, and a number.');
            passwordInput.focus();
            return;
        }

        console.log('Form is valid! Submitting data...');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    }
});
