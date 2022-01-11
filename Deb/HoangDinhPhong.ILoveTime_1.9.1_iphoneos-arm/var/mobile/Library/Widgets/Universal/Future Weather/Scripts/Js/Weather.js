function mainUpdate(type){ 
if (type === "weather"){checkWeather();}

/*---- WEATHER ----*/
function checkWeather(){
document.getElementById("City").innerHTML = weather.city;
document.getElementById('WeatherIcon').src = 'Scripts/Weather/' + config.IconSet + '/' + weather.conditionCode + '.png';
document.getElementById("Info").innerHTML = weather.naturalCondition;
document.getElementById("Day1Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[1].icon + ".png";
document.getElementById("Day2Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[2].icon + ".png";
document.getElementById("Day3Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[3].icon + ".png";
document.getElementById("Day4Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[4].icon + ".png";
document.getElementById("Update").innerHTML = 'Cập nhật lúc ' + weather.updateTimeString.substring(8,20);
}}