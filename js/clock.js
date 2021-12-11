const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0")
    let second = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}:${second}`;
}

setInterval(getClock, 1000) // 실행할 함수, 1000 = 1초 정한 시간마다 함수를 실행한다.