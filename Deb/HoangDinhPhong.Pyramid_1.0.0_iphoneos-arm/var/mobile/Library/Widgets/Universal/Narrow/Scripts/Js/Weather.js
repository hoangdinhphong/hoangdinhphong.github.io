function mainUpdate(type) {
    if (type === "weather") {
        checkWeather();
    }
}

function checkWeather() {
    document.getElementById('WeIcon').src = 'Scripts/Weather/' + weather.conditionCode + '.png';
    document.getElementById("City").innerHTML = weather.city;
    document.getElementById("Hilo").innerHTML = hitext +  ' ' + weather.high + '&deg;' + ' - ' + lotext + ' ' + weather.low + '&deg;';
    document.getElementById("Temp").innerHTML = weather.temperature + '&deg;' + 'C';
}