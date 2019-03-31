
$( document ).ready(function() {
//jquery start after loading.    
//Player state. Define Variables for both players. Setup board.
    let playerOne = 'X';
    let playerTwo = 'O'; 
    let currentPlayer = '1'; 
    let movesMade ='0';
    let winner = [123, 234, 567, 147, 258, 369, 159, 357];
    let box = $(".square");
    
   //On click increases moveMade by one, then check whose turn it is. //

    box.on('click', function(e){
        movesMade ++;

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
    
        function winnerCheck (){
            if (movesMade > 4){
                $box.inArray(winner)({
                    
                })

            }
        }
        if(moveMade ==1){
            $('#restartGameButton').hide();
        }

});





