const show_password = document.getElementById("show_password");
const input_password = document.getElementById("password");
const user_name = document.getElementById("user_name");
const password = document.getElementById("password");

show_password.addEventListener("click", function () {
  if (input_password.type == "password") {
    input_password.type = "text";
    show_password.innerText = "hide password";
  } else {
    input_password.type = "password";
    show_password.innerText = "show password";
  }
});
function return_back() {
  window.location.href = "../main/main.html";
}
function check_empty(...args) {
  error.textContent = "";
  for (let item of args) {
    item.style.border = "";
  }
  for (let input_field of args) {
    if (input_field.value === "") {
      input_field.style.border = "2px solid red";
      error.textContent = "The highlighted field(s) is empty";
    }
  }
}
function login(){
  error.textContent = "";
  if(user_name.value === 'mohamad' && password.value === '123456' ){
      window.location.href = "../Account_management/account.html?type=admin";
  }
  else {
      error.textContent = "Invalid inputs";
  }
}
login.addEventListener("click", function () {
  check_empty(user_name, password);
});
