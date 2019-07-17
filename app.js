/* 
GAME FUNCTION

- Player must guess a number between a min and max

- Playergets a certain amount of guesses

- Notify player of guesses remaining

- Let player choose to play again

*/

// Game values 

let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min,max),
    guessesLeft = 3;

//UI Elements 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('max-num');
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input');
      message = document.querySelector('.message');


//Assign Min and Max value
minNum.textContent = min;
minNum.textContent = max;

//Play Again Event Listener

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click',function(e){
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess>max || guess<min){
        setMessage(`Please Enter a number bettwen ${min} and ${max}`,'red');
    }
    if(guess === winningNumber){
        //Game Over

        gameOver(true,`${winningNumber} is correct, YOU WIN!`);

    }else{
        //Wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //Game Over lost
            gameOver(false,`Game Over, YOU LOST!. The correct number was ${winningNumber}`);
        }else{
            //Game Continues

            //Change Border colot
            guessInput.style.borderColor = 'red';
            //Clear Input
            guessInput.value='';
            //Tell user its the wrong number
            setMessage(`${guess} is not CORRECT!, You have guess left ${guessesLeft}`,'red');
        }
    }

    e.preventDefault();
});

function gameOver(won,msg){

    let color;

    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Text Color
    message.style.color= color;
    //Set Message
    setMessage(msg);
    
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg , color){
    message.style.color = color;
    message.textContent = msg;

}


      