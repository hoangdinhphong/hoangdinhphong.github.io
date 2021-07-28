var iPhoneType = "auto";
if (iPhoneType == "auto") {
if (screen.height == 480) { iPhoneType = "iPh4"; }
else if (screen.height == 568) { iPhoneType = "iPh5"; }
else if (screen.height == 667) { iPhoneType = "iPh678"; }
else if (screen.height == 736) { iPhoneType = "iPh678Plus"; }
else if (screen.height == 812) { iPhoneType = "iPhX"; }
else if (screen.height == 896) { iPhoneType = "iPhMax"; }
else if (screen.height == 844) { iPhoneType = "iPh12Pro"; }
else { iPhoneType = "iPh12Max"; }
}

window.addEventListener("load", function() { 
switch(iPhoneType) {

case "iPh4":
document.body.style.width='320px';
document.body.style.height='480px';
$("#text").css({ "font-size":"15px" });
$("#Clock").css({ "font-size":"50px" });
$("#Calendar").css({ "font-size":"12px" });
$("#Title").css({ "font-size":"12px" });
$("#City").css({ "font-size":"12px" });
$("#Controls").css({ "top":"4%" });
$("#PlayPause").css({ "font-size":"18px", "top":"-3px" });
$("#Prev, #Next").css({ "font-size":"12px" });
$("#RingLeft, #RingRight").css({ "width":"33px", "height":"33px" });
break;

case "iPh5":
document.body.style.width='320px';
document.body.style.height='568px';
$("#text").css({ "font-size":"15px" });
$("#Clock").css({ "font-size":"60px" });
$("#Calendar").css({ "font-size":"14px" });
$("#Title").css({ "font-size":"14px" });
$("#City").css({ "font-size":"14px" });
$("#Controls").css({ "top":"5.5%" });
$("#PlayPause").css({ "font-size":"18px", "top":"-3px" });
$("#Prev, #Next").css({ "font-size":"12px" });
$("#RingLeft, #RingRight").css({ "width":"38px", "height":"38px" });
break;

case "iPh678":
document.body.style.width='375px';
document.body.style.height='667px';
$("#City").css({ "font-size":"17px" });
$("#text").css({ "font-size":"18px" });
$("#Clock").css({ "font-size":"70px" });
$("#Calendar").css({ "font-size":"17px" });
$("#Controls").css({ "top":"5.5%" });
$("#Bottom").css({ "height":"20.5%" });
$("#BotBox1").css({ "height":"41%" });
$("#BotBox2").css({ "top":"39px", "height":"47%", "width": "81%" });
$("#RingLeft, #RingRight").css({ "width":"53px", "height":"53px" });
break;

case "iPh678Plus":
document.body.style.width='414px';
document.body.style.height='736px';
$("#text").css({ "font-size":"19px" });
$("#Controls").css({ "top":"6.5%" });
$("#Bottom").css({ "height":"20.5%" });
$("#BotBox1").css({ "height":"41%" });
$("#BotBox2").css({ "height":"47%", "width": "80%" });
$("#RingLeft, #RingRight").css({ "width":"53px", "height":"53px" });
break;

case "iPhX":
document.body.style.width='375px';
document.body.style.height='812px';
$("#BotBox2").css({ "width": "81%" });
$("#RingLeft, #RingRight").css({ "width":"53px", "height":"53px" });
break;

case "iPhMax":
document.body.style.width='414px';
document.body.style.height='896px';
break;

case "iPh12Pro":
document.body.style.width='390px';
document.body.style.height='844px';
$("#BotBox2").css({ "width": "81%" });
$("#RingLeft, #RingRight").css({ "width":"53px", "height":"53px" });
break;

case "iPh12Max":
document.body.style.width='428px';
document.body.style.height='926px';
break;

case "editMode":
document.body.style.width='563px';
document.body.style.height='1000px';
screenWidth = 563;
break;}
}, false);

// font
if (window.config.fontURL) {
var fontArray = window.config.fontURL.split(".");
var newStyle = document.createElement('style');
if ((window.config.fontURL) && (fontArray[fontArray.length - 1] === "ttf")) {
newStyle.appendChild(document.createTextNode("\
@font-face {\ font-family: CustomFont;\
src: url('" + window.config.fontURL + "') format('truetype');\
}\
"));
} else {
newStyle.appendChild(document.createTextNode("\
@font-face {\ font-family: CustomFont;\
src: url('" + window.config.fontURL + "') format('" + fontArray[fontArray.length - 1] + "');\
}\
"));}
document.head.appendChild(newStyle);
document.getElementById("body").style.fontFamily = "CustomFont";
}