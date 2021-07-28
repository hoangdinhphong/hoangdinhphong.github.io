function checkMusic(newData){
document.getElementById('YouTube').src = newData.nowPlaying.artwork.length > 0 ? newData.nowPlaying.artwork : 'Scripts/Js/Mu.js';

if (isplaying === 1) {
document.getElementById('City').style.animation = 'hide 1.5s linear 1 forwards';
document.getElementById('Album').style.animation = '';
document.getElementById('YouTube').style.animation = '';
document.getElementById('MuCont').style.animation = '';
//document.getElementById('Controls').style.animation = '';
document.getElementById('PlayPause').classList.remove("zeek-buttonplay");		document.getElementById('PlayPause').classList.add("zeek-buttonpause");
} else {
document.getElementById('City').style.animation = '';
document.getElementById('Album').style.animation = 'none';
document.getElementById('YouTube').style.animation = 'none';
document.getElementById('MuCont').style.animation = 'hide 1.5s linear 1 forwards';
//document.getElementById('Controls').style.animation = 'hide 1.5s linear 1 forwards';
document.getElementById('PlayPause').classList.remove("zeek-buttonpause");		document.getElementById('PlayPause').classList.add("zeek-buttonplay");
}

if(title === "(null)"){
document.getElementById('Artist').innerHTML = '';
document.getElementById('Title').innerHTML = titletext;
} else {
document.getElementById('Artist').innerHTML = artist;
document.getElementById('Title').innerHTML = title;

if (checkOverflow(document.getElementById('Title')) === true){
document.getElementById('Title').classList.add("marquee");
} else {
document.getElementById('Title').classList.remove("marquee");}
}

if(album === "(null)"){
document.getElementById('Album').src = 'Scripts/Js/Blank.js';
} else {		
var xhr = new XMLHttpRequest();
xhr.open('HEAD', "file:///var/mobile/Documents/Artwork.jpg", false);
xhr.send();

if (xhr.status === "404") {
document.getElementById('Album').src = 'Scripts/Js/Mu.js';
} else {
document.getElementById('Album').src = "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime();
}}}

function checkOverflow(el) {
var curOverflow = el.style.overflow;
if ( !curOverflow || curOverflow === "visible" ){
el.style.overflow = "none"; 
}

var isOverflowing = el.clientWidth < el.scrollWidth;
el.style.overflow = curOverflow;
return isOverflowing; 
}

function XenApi(){
api.media.observeData(function (newData) {
appPlaying = newData.nowPlayingApplication.identifier;
checkMusic(newData);});
}

function HP(){
XenApi();
}

function openApp(app){
api.apps.launchApplication(app);
}

function playPause() {
if(
document.getElementById('PlayPause').classList.contains("zeek-buttonplay")){ 
document.getElementById('PlayPause').classList.remove("zeek-buttonplay");
document.getElementById('PlayPause').classList.add("zeek-buttonpause");
} else { 
document.getElementById('PlayPause').classList.remove("zeek-buttonpause");
document.getElementById('PlayPause').classList.add("zeek-buttonplay");}

window.location = 'xeninfo:playpause';
document.getElementById('PlayPause').style.opacity = 0;
setTimeout(function (){
document.getElementById('PlayPause').style.opacity = 1;
}, 200);
}
		
function next() {
window.location = 'xeninfo:nexttrack';
document.getElementById('Next').style.opacity = 0;
document.getElementById('Album').style.opacity = 0.2;
document.getElementById('Album').classList.add('move');
setTimeout(function (){
document.getElementById('Next').style.opacity = 1;

document.getElementById('Album').style.opacity = 1;
document.getElementById('Album').classList.remove('move');
}, 200);
}
			
function prev() {
window.location = 'xeninfo:prevtrack';
document.getElementById('Prev').style.opacity = 0;

document.getElementById('Album').style.opacity = 0.2;
document.getElementById('Album').classList.add('move');
setTimeout(function (){
document.getElementById('Prev').style.opacity = 1;

document.getElementById('Album').style.opacity = 1;
document.getElementById('Album').classList.remove('move');
}, 200);
}