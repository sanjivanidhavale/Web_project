let city = document.querySelector('.cityname');
let btn = document.querySelector('.btn');
let output = document.getElementById('output');

btn.addEventListener('click', checkWeather);
function checkWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=metric&appid=1ebc5861bba83e0214cd8df3b995ffca')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            output.innerHTML = data['main']['temp'] + '°C' + `<br>` + data['weather'][0]['description'];
        })
        .catch(err => alert("error"));
}
function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat='${lat}&lon=${lon}&units=metric&appid=1ebc5861bba83e0214cd8df3b995ffca`)
                .then(response => response.json())
                .then(data => {
                    output.innerHTML = `<h4>` + data['main']['temp'] + '°C and Location: ' + data['name'] + `<br>` + data['weather'][0]['description'] + `</h4>`;
                })
                .catch(err => alert("error"));

        });

    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}