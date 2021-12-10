const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onloginBtnClick() {
    const username = loginInput.value;
    if(username ===""){
        alert("write your name");
    }
    else if(username.length>5){
        alert("so long");
    }
    else{
        alert(username);
    }
}

loginButton.addEventListener("click",onloginBtnClick);