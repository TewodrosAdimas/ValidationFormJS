function showErrorMessage(field, message) {
    const formGroup = field.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    field.classList.add('error');
}

function clearErrorMessage(field) {
    const formGroup = field.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = '';
    field.classList.remove('error');
}

function validateField(field) {
    const id = field.id;
    const value = field.value.trim();

    switch (id) {
        case 'username':
            if (value.length < 3) {
                showErrorMessage(field, 'Username must be at least 3 characters long.');
            } else {
                clearErrorMessage(field);
            }
            break;

        case 'password':
            if (value.length < 6) {
                showErrorMessage(field, 'Password must be at least 6 characters long.');
            } else {
                clearErrorMessage(field);
            }
            break;

        case 'email':
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                showErrorMessage(field, 'Please enter a valid email address.');
            } else {
                clearErrorMessage(field);
            }
            break;

        case 'age':
            if (value <= 0 || value === '') {
                showErrorMessage(field, 'Please enter a valid age.');
            } else {
                clearErrorMessage(field);
            }
            break;

        case 'country':
            if (value === '') {
                showErrorMessage(field, 'Please select a country.');
            } else {
                clearErrorMessage(field);
            }
            break;

        case 'birthdate':
            if (value === '') {
                showErrorMessage(field, 'Please select a birth date.');
            } else {
                clearErrorMessage(field);
            }
            break;

        default:
            break;
    }
}

// Add event listeners for real-time validation
document.querySelectorAll('#registrationForm input, #registrationForm select').forEach(field => {
    field.addEventListener('input', () => validateField(field));
});

// Prevent form submission if there are validation errors
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    let isValid = true;

    document.querySelectorAll('#registrationForm input, #registrationForm select').forEach(field => {
        validateField(field);
        if (field.classList.contains('error')) {
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Please correct the errors in the form before submitting.');
    }
});
