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
        fullname: /^[a-z\d]{5,12}$/i,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,20}$/,
      };
    
    function validation(field, regex, errorSpan, errorMsg){
        if(regex.test(field.value)){
            errorSpan.textContent = ''; 
            return true;
        } else{
            errorSpan.textContent = errorMsg;
            field.style.border = '2px solid red';
            return false;
        }
    }
    fullname.addEventListener('input', () => {
        validation(fullname,fnameerror,"Only alphabetic characters, spaces allowed")
    });

})
