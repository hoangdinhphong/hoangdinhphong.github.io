const NUMBER_OF_FLAKES = 600; // flakes to show on screen
const NUMBER_OF_IMAGES = 33; // images + 1


/* 
	Called when the "Falling Flakes" page is completely loaded.
*/

function init() {
    /* Get a reference to the element that will contain the flakes */
    var container = document.getElementById("flakeContainer");
    /* Fill the empty container with new flakes */
    for (var i = 0; i < NUMBER_OF_FLAKES; i++) {
        container.appendChild(createAFlake());
    }
}


/*
	Receives the lowest and highest values of a range and
	returns a random integer that falls within that range.
*/

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}


/*
	Receives the lowest and highest values of a range and
	returns a random float that falls within that range.
*/

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}


/*
	Receives a number and returns its CSS pixel value.
*/

function pixelValue(value) {
    return value + "px";
}


/*
	Returns a duration value for the falling animation.
*/

function durationValue(value) {
    return value + "s";
}


/*
	Uses an img element to create each flake. "Flakes.css" implements two spin 
	animations for the flakes: clockwiseSpin and counterclockwiseSpinAndFlip. This
	function determines which of these spin animations should be applied to each flake.
*/

function createAFlake() {
    /* Start by creating a wrapper div, and an empty img element */
    var flakeDiv = document.createElement("div");
    var image = document.createElement("img");
    
    /* Randomly choose a flake image and assign it to the newly created element */
    image.src = "../System/images/flake" + randomInteger(1, NUMBER_OF_IMAGES) + ".png";
    
    /* Position the flake at a random location within the screen */
    flakeDiv.style.top = pixelValue(randomInteger(-150, -50));
    flakeDiv.style.left = pixelValue(randomInteger(0, 1512));
    
    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
    
    /* Set the -webkit-animation-name property with these values */
    flakeDiv.style.webkitAnimationName = "fade, drop";
    image.style.webkitAnimationName = spinAnimationName;
    
    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(10, 60));
    
    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(4, 8));
    /* Set the -webkit-animation-duration property with these values */
    flakeDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
    image.style.webkitAnimationDuration = spinDuration;

    /* Add the created image to the div */
    flakeDiv.appendChild(image);

    /* Return this div so it can be added to the document */
    return flakeDiv;
}


/*
	Calls the init function when the "Falling Flakes" page is full loaded
*/

window.addEventListener("load", init, false);
