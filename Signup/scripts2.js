document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? '👁' : '👁';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const companyNameInput = document.getElementById('companyName');
        const mobileNumberInput = document.getElementById('mobileNumber');
        const countryInput = document.getElementById('country');
        const enterNumberInput = document.getElementById('enterNumber');
        const annualAttendeesInput = document.getElementById('annualAttendees');
        const subdomainInput = document.getElementById('subdomain');
        const domainInput = document.getElementById('domain');
        const websiteInput = document.getElementById('website');

        // Additional validation or processing logic can be added here

        console.log('Form is valid! Submitting data...');
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password validation function
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    }
});
