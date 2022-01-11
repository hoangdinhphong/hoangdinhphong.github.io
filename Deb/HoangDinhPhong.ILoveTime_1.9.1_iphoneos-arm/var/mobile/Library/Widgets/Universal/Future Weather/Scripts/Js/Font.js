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
document.getElementById("body").style.fontFamily = "CustomFont";}