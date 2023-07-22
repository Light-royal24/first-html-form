
const i = document.querySelector('#password');
const showPassword = document.querySelector("#togglePassword");

showPassword.addEventListener('click', function() {
    if(i.type === 'password') {
        i.type = 'text';
    }else {
        i.type = 'password';
    }
})
