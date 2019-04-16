// Random Generated number 1-10
var randomGenerated = Math.floor(Math.random() *  15 + 1 );
//user input from form
var userInput = document.getElementById("userGuess");
// number of Guesses
var guess = 1;
// A constant to get the value from submit
const btn = document.querySelector('.guessSubmit');

console.log(randomGenerated);

btn.addEventListener('click',  getValue);



function getValue() {

    console.log(userInput.value);

}
var x = userInput.value


/*function guessValue(){
    

    if (x = randomGenerated){
        alert('Congratulations you must be psychic');
    }

    else if (x > randomGenerated){
       alert('To bad, try again. You are looking to far ahead')
    }

    else if (x < randomGenerated){
       alert('Try looking up instead of down')
    }
        console.log(x, 'number' )
        
}*/

function newValue(){
    if (x =    
}



/*
 document.getElementById("userGuess").onsubmit=function(enter){

     var x = document.getElementById("userGuess").value;
    
    if (x = btn){
         alert('Congratulations you must be psychic');
     }
     else if (x > btn){
        alert('To bad, try again. You are looking to far ahead')
     }
     else if (x < btn){
        alert('Try looking up instead of down')
     } 
}
*/
