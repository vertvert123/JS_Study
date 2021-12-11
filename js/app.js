const loginForm = document.querySelector("#login-form"); // #은 id를 지정할 수 있다.
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본적인 기능을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    const username = loginInput.value;
    paintGreetings(username);
}



function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}




//localStorage.setItem(USERNAME_KEY "kim"); //key, value
//localStorage.getItem(USERNAME_KEY);
//localStorage.removeItem(USERNAME_KEY);