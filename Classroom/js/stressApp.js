// variables.

var date = new Date();
// timer to keep track of elapsed time.
var timer = Date.now(); 
// the average you are trying to get.
var average = 800;
var clicks =0;

// second circle variable. which changes according to click
var circle = document.querySelector('.second-circle');
var stats = document.querySelector('.stats');

//if click = function tap function.
document.addEventListener('click', function(){
	tap();
	totalClicks();
});

//space bar pressed = tap function.
document.addEventListener("keydown", function(touche) { 
    if (touche.keyCode == 32) {
      tap();    	   
    }
}, false); 


// a new class list heart. to call a circle.classlist. And enable the . 
function air() {
	circle.classList.add('heart');
	setTimeout(function(){
		circle.classList.remove('heart');
	},200);
}


// a new function for clicks. You click and it keeps track of 'stats' based on rhythm.
function tap(){
    	average = Math.round( ( average + (Date.now() - timer) ) / 2) ;
    	stats.innerHTML = average;
    	if (average > 900 || average < 500) {
    		circle.style.border = "3px solid blue";
    	}
    	else {
    		circle.style.border = "3px solid darkgreen";
    	}
    	timer = Date.now();
      air();  
}



//clicker tracker
 function totalCicks(){
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
	document.getElementsByClassName('counter') = function(clicks){
		if (clicks = 0){
			console.log('Zero Clicks')
		}
		else if (clicks > 0){
			clicks++
			console.log()
		}
	}
}

totalClicks();

