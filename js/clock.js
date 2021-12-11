const clock = document.querySelector("h2#clock");

function getClock() {
   const date = new Date();
   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 }

setInterval(getClock, 1000) // 실행할 함수, 1000 = 1초 정한 시간마다 함수를 실행한다.