var globalScore,currentScore,activePlayer,gameOn;
globalScore=[0,0];
currentScore = 0;
activePlayer = 0;
gameOn = 0;


noDice();

    
       
                    document.getElementById('rollDice').addEventListener('click',function(){
                    //choose any random number 
                    if(gameOn === 0){
                        var dice=Math.floor(Math.random()*6)+1;
                        //display the random number through dice
                        var query=document.querySelector('.dice');
                        query.style.display='block';
                        query.src='dice-'+dice+'.png';
                    
                        //add the score
                        if (dice !==1){
                            currentScore +=dice;
                            document.querySelector('#player'+(activePlayer+1)+'CS').textContent=currentScore;
                        }
                        
                        else{
                            currentScore=0;
                            document.querySelector('#player'+(activePlayer+1)+'CS').textContent=currentScore;
                            activePlayer = (activePlayer ===0) ? 1 : 0 ;
                            document.querySelector('#player1').classList.toggle('deactive');
                            document.querySelector('#player2').classList.toggle('deactive');
                            setTimeout(function(){
                                noDice();
                            }, 2000);
                        }
                    }
                    
                    
                    
                });
            
                 //Hold logic
                document.querySelector('#hold').addEventListener('click',function(){
                    if(gameOn === 0){
                        console.log('1 '+activePlayer);
                        globalScore[activePlayer] +=currentScore ;
                        console.log(globalScore);
                        document.querySelector('#player'+(activePlayer+1)+'GS').textContent = globalScore[activePlayer];
                        currentScore=0;
                        document.querySelector('#player'+(activePlayer+1)+'CS').textContent=currentScore;
                        if(globalScore[activePlayer] > 20 ){
                            document.querySelector('#player'+(activePlayer +1 )+'name').textContent = 'WINNER !!';
                            gameOn = 1;
                            console.log(gameOn);
                        }
                        else{
                            activePlayer = (activePlayer ===0) ? 1 : 0 ;
                            document.querySelector('#player1').classList.toggle('deactive');
                            document.querySelector('#player2').classList.toggle('deactive');
                        }
                        console.log(gameOn);
                        noDice();
                        console.log('break');
                    }
            });
        //newgame
            document.querySelector('#newGame').addEventListener('click',newGame);

function noDice(){
    document.querySelector('.noDice').src='dice-no.png';
}

function newGame(){
    noDice();
    globalScore=[0,0];
    currentScore = 0;
    activePlayer = 0;
    gameOn = 0;
    document.querySelector('#player'+(activePlayer +1 )+'name').textContent = 'PLAYER '+(activePlayer + 1);
    document.querySelector('#player1').classList. remove('deactive');
    document.querySelector('#player2').classList.add('deactive');
    document.querySelector('#player1GS').textContent = '0';
    document.querySelector('#player2GS').textContent = '0';
    document.querySelector('#player1CS').textContent=currentScore;
    document.querySelector('#player2CS').textContent=currentScore;
}