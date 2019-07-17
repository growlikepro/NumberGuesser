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
    winningNumber = 2,
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

//Listen for guess
guessBtn.addEventListener('click',function(e){
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess>max || guess<min){
        setMessage(`Please Enter a number bettwen ${min} and ${max}`,'red');
    }
    if(guess === winningNumber){
        //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = 'green';
        //Set Message
        setMessage(`${winningNumber} is correct!, YOU WIN!`,'green');

    }else{

    }

    e.preventDefault();
});

function setMessage(msg , color){
    message.style.color = color;
    message.textContent = msg;

}


      