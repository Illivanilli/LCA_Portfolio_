var date = new Date();
var timer = Date.now(); 
var average = 800;

var circle = document.querySelector('.second-circle');
var stats = document.querySelector('.stats');


document.addEventListener('click', function(){
  tap();
});

document.addEventListener("keydown", function(touche) { 
    if (touche.keyCode == 32) {
      tap();    	   
    }
}, false); 

function air() {
	circle.classList.add('heart');
	setTimeout(function(){
		circle.classList.remove('heart');
	},200);
}


function tap(){
    	average = Math.round( ( average + (Date.now() - timer) ) / 2) ;
    	stats.innerHTML = average;
    	if (average > 820 || average < 700) {
    		circle.style.border = "3px solid red";
    	}
    	else {
    		circle.style.border = "3px solid green";
    	}
    	timer = Date.now();
      air();  
}