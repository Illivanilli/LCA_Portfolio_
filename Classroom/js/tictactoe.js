
$( document ).ready(function() {
//jquery start after loading.    
//Player state. Define Variables for both players. Setup board.
    let playerOne = 'X';
    let playerTwo = 'O'; 
    let currentPlayer = '1'; 
    let movesMade ='0';
    
    let box = $(".square");
   
    box.on('click',function(e){
        movesMade ++;
//Whose turn
        if(currentPlayer ==1){
            event.target.innerHTML =playerOne;
            event.target.style.color="red";
            currentPlayer++;
        }
            else {
                event.target.innerHTML=playerTwo;
                event.target.style.color ="green";
                currentPlayer--;
            }
        })
    

});





