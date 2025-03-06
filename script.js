document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('regform');
    const fullname = document.getElementById('fname');
    const email = document.getElementById('email');
    const phonenum = document.getElementById('phone');
    const password = document.getElementById('password');


    const fnameerror = document.getElementById('fnameerror');
    const emailerror = document.getElementById('emailerror');
    const phoneerror = document.getElementById('numbererror');
    const passworderror = document.getElementById('passworderror');

    const regexPatterns = {
        fullname: /^[a-zA-Z\s]{2,30}$/,  
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        phone: /^\d{10}$/,  
        password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,20}$/
    };

    function validation(field, regex, errorSpan, errorMsg) {
        if (regex.test(field.value)) {
            errorSpan.textContent = '';
            field.style.border = '1px solid green';
            return true;
        } else {
            errorSpan.textContent = errorMsg;
            field.style.border = '2px solid red';
            return false;
        }
    }

    fullname.addEventListener('input', () => {
        validation(
            fullname,
            regexPatterns.fullname, 
            fnameerror,              
            "Only alphabetic characters and spaces allowed"
        );
    });

    email.addEventListener('input', () => {
        validation(
            email,
            regexPatterns.email,
            emailerror,
            "Please enter a valid email address"
        );
    });

    phonenum.addEventListener('input', () => {
        validation(
            phonenum,
            regexPatterns.phone,
            phoneerror,
            "Please enter a valid 10-digit phone number"
        );
    });

    password.addEventListener('input', () => {
        validation(
            password,
            regexPatterns.password,
            passworderror,
            "Password must be 8-20 characters with at least one number and special character"
        );
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isFullNameValid = validation(
            fullname,
            regexPatterns.fullname,
            fnameerror,
            "Only alphabetic characters and spaces allowed"
        );

        const isEmailValid = validation(
            email,
            regexPatterns.email,
            emailerror,
            "Please enter a valid email address"
        );

        const isPhoneValid = validation(
            phonenum,
            regexPatterns.phone,
            phoneerror,
            "Please enter a valid 10-digit phone number"
        );

        const isPasswordValid = validation(
            password,
            regexPatterns.password,
            passworderror,
            "Password must be 8-20 characters with at least one number and special character"
        );

        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            alert('Form submitted successfully!');
            form.reset();
            [fullname, email, phonenum, password].forEach(field => {
                field.style.border = '1px solid #ccc';
            });
        }
    });
});
