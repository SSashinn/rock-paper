const choices=["rock","paper","scissors"];
let playerScore = 0;
let compScore = 0;
let tie = 0;

// GETS USER GUESS
let user = userGuess();
let comp;

// CALLS THE MAIN FUNCTION
document.querySelector('.start').onclick = main;


function main(){
    comp = compGuess();

    // TO COMPARE THE TWO RESULTS
    let playerGuess = document.querySelector('#compareUser').textContent;
    let computerGuess = document.querySelector('#compareComp').textContent; 
    console.log(result(computerGuess, playerGuess));

    // PRINTS RESULT OF COMP ON SCREEN
    document.getElementById('compGuess').textContent = `Comp Guess is
    ${document.querySelector('#compareComp').textContent}`;
    document.getElementById('compGuess').style.visibility = 'visible'; 

    console.log("Player score:",playerScore,"\ncomp score:",compScore,"\nTies:",tie);
}


function compGuess(){
    let index = Math.floor(Math.random()*3);
    document.querySelector('#compareComp').textContent = choices[index];
}


// LOOPS THROUGH ALL BUTTONS 
function userGuess(){
    document.querySelectorAll('button').forEach(function(button) {
        // WHEN A PARTICULAR BUTTON IS CLICKED
        button.onclick = () => {
            document.querySelector('#userGuess').textContent = `User Guess is ${button.dataset.input}`;
            document.querySelector('#compareUser').textContent = button.dataset.input;
        } 
    });
};


function result(computerGuess, playerGuess){
    if (computerGuess === playerGuess){
        tie++;
        document.querySelector('.tie').textContent = `No of ties are ${tie}`;
        return 3;
    }
    else if (computerGuess==='rock'){
        switch (playerGuess) {
            case "paper":
                playerScore++
                document.querySelector('.userScore').textContent = `User Score is ${playerScore}`;
                return 1;
            case "scissors":
                compScore++
                document.querySelector('.compScore').textContent = `Computer Score is ${compScore}`;
                return 2;
            default:
                return -1;
        }
    }
    else if (computerGuess==='paper'){
        switch (playerGuess) {
            case "scissors":
                playerScore++
                document.querySelector('.userScore').textContent = `User Score is ${playerScore}`;
                return 1;
                case "rock":
                compScore++
                document.querySelector('.compScore').textContent = `Computer Score is ${compScore}`;
                return 2;
            default:
                return -1;
        }
    }
    else if (computerGuess==='scissors'){
        switch (playerGuess) {
            case "rock":
                playerScore++
                document.querySelector('.userScore').textContent = `User Score is ${playerScore}`;
                return 1;
            case "paper":
                compScore++
                document.querySelector('.compScore').textContent = `Computer Score is ${compScore}`;
                return 2;
            default:
                return -1;
        }
    }
    
}