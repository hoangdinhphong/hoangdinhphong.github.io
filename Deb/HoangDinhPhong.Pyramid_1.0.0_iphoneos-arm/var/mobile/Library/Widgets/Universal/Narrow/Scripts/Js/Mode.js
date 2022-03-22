$('head').removeAttr('Mode');
if (config.Mode == 'Light') {
$ ('head').append('<link rel="stylesheet" media="screen" href="Scripts/Css/Light.css" type="text/css" >');
}

else if (config.Mode == 'Dark') {
$ ('head').append('<link rel="stylesheet" media="screen" href="Scripts/Css/Dark.css" type="text/css" >');
}