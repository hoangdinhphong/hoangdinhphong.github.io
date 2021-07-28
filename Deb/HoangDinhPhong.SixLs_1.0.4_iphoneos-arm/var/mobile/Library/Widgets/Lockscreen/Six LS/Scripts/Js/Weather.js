function mainUpdate(type){ 
if (type === "weather"){checkWeather();
}
if (type === "music"){checkMusic();
}

function checkWeather(){
document.getElementById("City").innerHTML = weather.city;}
}