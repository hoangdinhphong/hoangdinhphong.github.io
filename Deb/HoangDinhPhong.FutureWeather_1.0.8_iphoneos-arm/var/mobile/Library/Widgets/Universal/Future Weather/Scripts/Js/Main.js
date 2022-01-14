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
$("#City").css({ "top":"59%","font-size":"13px" });
$("#WeatherIcon").css({ "ptop":"58%" });
$("#Info").css({ "font-size":"9px" });
$("#DayCont").css({ "height":"11%" });
$("#Day1Hi, #Day2Hi, #Day3Hi, #Day4Hi, #Day5Hi").css({ "top":"5%" });
$("#Day1Hi, #Day2Hi, #Day3Hi, #Day4Hi, #Day5Hi, #Day1Lo, #Day2Lo, #Day3Lo, #Day4Lo, #Day5Lo").css({ "font-size":"9px" });
$("#Battery, #Charging").css({ "font-size":"9px" });
$("#Update").css({ "font-size":"8px" });
break;

case "iPh5":
document.body.style.width='320px';
document.body.style.height='568px';
$("#City").css({ "top":"60%","font-size":"14px" });
$("#Info").css({ "font-size":"10px" });
$("#DayCont").css({ "height":"10%" });
$("#Day1Hi, #Day2Hi, #Day3Hi, #Day4Hi, #Day5Hi").css({ "top":"5%" });
$("#Day1Hi, #Day2Hi, #Day3Hi, #Day4Hi, #Day5Hi, #Day1Lo, #Day2Lo, #Day3Lo, #Day4Lo, #Day5Lo").css({ "font-size":"10px" });
$("#Battery, #Charging").css({ "font-size":"10px" });
$("#Update").css({ "font-size":"9px" });
break;

case "iPh678":
document.body.style.width='375px';
document.body.style.height='667px';
$("#City").css({ "font-size":"15px" });
$("#Day1Hi, #Day2Hi, #Day3Hi, #Day4Hi, #Day5Hi").css({ "top":"5%" });
break;

case "iPh678Plus":
document.body.style.width='414px';
document.body.style.height='736px';
$("#City").css({ "font-size":"16px" });
break;

case "iPhX":
document.body.style.width='375px';
document.body.style.height='812px';
break;

case "iPhMax":
document.body.style.width='414px';
document.body.style.height='896px';
break;

case "iPh12Pro":
document.body.style.width='390px';
document.body.style.height='844px';
break;

case "iPh12Max":
document.body.style.width='428px';
document.body.style.height='926px';
break;
}}, false);