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
$("#City").css({ "top":"58%","font-size":"18px" });
$("#Info").css({ "font-size":"10px" });
$("#WeatherIcon").css({ "top":"55%","width":"90px" });
$("#DayCont").css({ "top":"79%" });
$("#Day1Icon").css({ "left":"11%" });
$("#Day2Icon").css({ "left":"32.1%" });
$("#Day3Icon").css({ "left":"53.2%" });
$("#Day4Icon").css({ "left":"74.3%" });
$("#Update").css({ "top":"93%","font-size":"10px" });
break;

case "iPh5":
document.body.style.width='320px';
document.body.style.height='568px';
$("#City").css({ "top":"63%","font-size":"18px" });
$("#Info").css({ "font-size":"10px", "top":"75%" });
$("#WeatherIcon").css({ "top":"60%","width":"90px" });
$("#DayCont").css({ "top":"80%" });
$("#Day1Icon").css({ "left":"11%" });
$("#Day2Icon").css({ "left":"32.1%" });
$("#Day3Icon").css({ "left":"53.2%" });
$("#Day4Icon").css({ "left":"74.3%" });
$("#Update").css({ "top":"93%","font-size":"10px" });
break;

case "iPh678":
document.body.style.width='375px';
document.body.style.height='667px';
$("#City").css({ "top":"62%","font-size":"20px" });
$("#Info").css({ "font-size":"12px","top":"73.5%" });
$("#WeatherIcon").css({ "top":"58%","width":"95px" });
$("#DayCont").css({ "top":"79%" });
$("#Day1Icon").css({ "left":"11%" });
$("#Day2Icon").css({ "left":"32.1%" });
$("#Day3Icon").css({ "left":"53.2%" });
$("#Day4Icon").css({ "left":"74.3%" });
$("#Update").css({ "top":"92%","font-size":"12px" });
break;

case "iPh678Plus":
document.body.style.width='414px';
document.body.style.height='736px';
$("#City").css({ "top":"61%","font-size":"21px" });
$("#Day1Icon").css({ "left":"10%" });
$("#Day2Icon").css({ "left":"31.6%" });
$("#Day3Icon").css({ "left":"53.1%" });
$("#Day4Icon").css({ "left":"74.3%" });
break;

case "iPhX":
document.body.style.width='375px';
document.body.style.height='812px';
$("#City").css({ "top":"61.5%","font-size":"22px" });
$("#Day1Icon").css({ "left":"11%" });
$("#Day2Icon").css({ "left":"32.35%" });
$("#Day3Icon").css({ "left":"53.5%" });
$("#Day4Icon").css({ "left":"74.6%" });
break;

case "iPhMax":
document.body.style.width='414px';
document.body.style.height='896px';
break;

case "iPh12Pro":
document.body.style.width='390px';
document.body.style.height='844px';
$("#City").css({ "top":"61.5%","font-size":"22px" });
$("#Day1Icon").css({ "left":"11%" });
$("#Day2Icon").css({ "left":"32.35%" });
$("#Day3Icon").css({ "left":"53.5%" });
$("#Day4Icon").css({ "left":"74.6%" });
break;

case "iPh12Max":
document.body.style.width='428px';
document.body.style.height='926px';
break;

case "editMode":
document.body.style.width='563px';
document.body.style.height='1000px';
break;}
}, false);