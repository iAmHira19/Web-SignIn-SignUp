document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // Toggle eye icon
        togglePassword.innerHTML = type === 'password' ? '👁️' : '👁️';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate email
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // Validate password
        const passwordValue = passwordInput.value.trim();
        if (!isValidPassword(passwordValue)) {
            alert('Password must be 6 characters or more, contain uppercase, lowercase, and a number.');
            passwordInput.focus();
            return;
        }

        // Form is valid, you can submit the data or perform further actions
        // Add your code for form submission or other actions here
        console.log('Form is valid! Submitting data...');
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password validation function
    function isValidPassword(password) {
        // Password must be 6 characters or more and contain at least one uppercase, one lowercase, and one number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
    }
});
