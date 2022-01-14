function mainUpdate(type){ 
if (type === "weather"){checkWeather();
} else 
if (type === "battery"){updateBattery();
}

/*---- WEATHER ----*/
function checkWeather(){
document.getElementById("City").innerHTML = weather.city;
document.getElementById('WeatherIcon').src = 'Scripts/Weather/' + config.IconSet + '/' + weather.conditionCode + '.png';
document.getElementById("Info").innerHTML = weather.naturalCondition;
document.getElementById("Day1Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[1].icon + ".png";

document.getElementById("Day1Hi").innerHTML = weather.dayForecasts[1].high  + "&deg;";
document.getElementById("Day1Lo").innerHTML = weather.dayForecasts[1].low  + "&deg;";

document.getElementById("Day2Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[2].icon + ".png";

document.getElementById("Day2Hi").innerHTML = weather.dayForecasts[2].high  + "&deg;";
document.getElementById("Day2Lo").innerHTML = weather.dayForecasts[2].low  + "&deg;";

document.getElementById("Day3Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[3].icon + ".png";

document.getElementById("Day3Hi").innerHTML = weather.dayForecasts[3].high  + "&deg;";
document.getElementById("Day3Lo").innerHTML = weather.dayForecasts[3].low  + "&deg;";

document.getElementById("Day4Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[4].icon + ".png";

document.getElementById("Day4Hi").innerHTML = weather.dayForecasts[4].high  + "&deg;";
document.getElementById("Day4Lo").innerHTML = weather.dayForecasts[4].low  + "&deg;";

document.getElementById("Day5Icon").src = "Scripts/Weather/" + config.IconSet + "/" + weather.dayForecasts[5].icon + ".png";

document.getElementById("Day5Hi").innerHTML = weather.dayForecasts[5].high  + "&deg;";
document.getElementById("Day5Lo").innerHTML = weather.dayForecasts[5].low  + "&deg;";

document.getElementById("Update").innerHTML = uptext + weather.updateTimeString.substring(8,20);
}}

function updateBattery(){
document.getElementById("Battery").innerHTML = (batteryCharging) ? charging : notcharging + batteryPercent + "%";

}