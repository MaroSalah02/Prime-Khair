let show_password = document.getElementById("show");
let input_password = document.getElementById("password");

show_password.addEventListener('click',function() {
    if(input_password.type == 'password'){
        input_password.type = 'text';
        show_password.innerText = 'hide password'
    }
    else {
        input_password.type = 'password';
        show_password.innerText = 'show password'
    }
});
