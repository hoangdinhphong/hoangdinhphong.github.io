function HDP(){checkSettings();}
function checkSettings(){
document.documentElement.style.setProperty('--ClockTopCl', config.ClockTopCl);
document.documentElement.style.setProperty('--AlbumSize', config.AlbumSize + 'px');
if(!config.AE){
document.getElementById('AE').style.display = 'none';}
if(!config.Album){
document.getElementById('AlbumCont').style.display = 'none';}
document.getElementById("text").innerHTML = config.CustomText;
document.getElementById('YouTube').src = 'Scripts/Js/Mu.js';
document.getElementById('AE').src = 'Scripts/Js/Ae.js';}