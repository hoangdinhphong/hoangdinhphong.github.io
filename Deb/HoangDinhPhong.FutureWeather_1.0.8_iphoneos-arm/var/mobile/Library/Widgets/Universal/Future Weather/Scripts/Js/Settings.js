function HDP(){checkSettings();}
function checkSettings(){

document.documentElement.style.setProperty('--cityCl', config.cityCl);

document.documentElement.style.setProperty('--infoCl', config.infoCl);

document.documentElement.style.setProperty('--hiCl', config.hiCl);

document.documentElement.style.setProperty('--loCl', config.loCl);

document.documentElement.style.setProperty('--batCl', config.batCl);

document.documentElement.style.setProperty('--upCl', config.upCl);

document.documentElement.style.setProperty('--weIconSize', config.weIconSize + '%');

// on off
if(!config.City){
document.getElementById('City').style.display = 'none';
}

if(!config.WeatherIcon){
document.getElementById('WeatherIcon').style.display = 'none';
}

if(!config.Info){
document.getElementById('Info').style.display = 'none';
}

if(!config.DayHi){
document.getElementById('Day1Hi').style.display = 'none';
document.getElementById('Day2Hi').style.display = 'none';
document.getElementById('Day3Hi').style.display = 'none';
document.getElementById('Day4Hi').style.display = 'none';
document.getElementById('Day5Hi').style.display = 'none';
}

if(!config.DayLo){
document.getElementById('Day1Lo').style.display = 'none';
document.getElementById('Day2Lo').style.display = 'none';
document.getElementById('Day3Lo').style.display = 'none';
document.getElementById('Day4Lo').style.display = 'none';
document.getElementById('Day5Lo').style.display = 'none';
}

if(!config.Tomorrow){
document.getElementById('Day1Icon').style.display = 'none';
document.getElementById('Day2Icon').style.display = 'none';
document.getElementById('Day3Icon').style.display = 'none';
document.getElementById('Day4Icon').style.display = 'none';
document.getElementById('Day5Icon').style.display = 'none';
}

if(!config.Battery){
document.getElementById('Battery').style.display = 'none';
}

if(!config.Update){
document.getElementById('Update').style.display = 'none';
}

if(!config.Bg){
document.getElementById('Bg').style.display = 'none';
}

if(config.scale){
document.body.style.webkitTransform = 'scale(' + config.scale + ')';}}