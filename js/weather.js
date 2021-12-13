const API_KEY;//API KEY를 넣으면된다.



function onGeoOK(position) { // 위도 경도

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("your live in", lat, lng)
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => { // fetch == URL로 이동하는것이 아닌 내용을 불러온다.
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); // 위치를 알려주는 메소드