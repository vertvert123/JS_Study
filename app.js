const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onloginBtnClick() {
    console.log(loginInput.value);
}

loginButton.addEventListener("click",onloginBtnClick);