document.documentElement.style.setProperty('--textStyle', config.textStyle);
document.body.style.webkitTransform = 'scale(' + config.Scale + ')';
/*On off*/
if(!config.Al){
document.getElementById('AmLich').style.display = 'none';
}