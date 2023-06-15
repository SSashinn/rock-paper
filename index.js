const choices=["rock","paper","scissors"];
let playerScore = 0;
let compScore = 0;
let tie = 0;

let user = userGuess();
let comp;
// CALLS THE MAIN FUNCTION
document.querySelector('.start').onclick = main;




function main(){
    comp = compGuess();

    // TO COMPARE THE TWO RESULTS
    let playerGuess = document.querySelector('#userGuess').textContent;
    let computerGuess = document.querySelector('#compGuess').textContent; 
    console.log(result(computerGuess, playerGuess));

    // PRINTS RESULT OF COMP ON SCREEN
    document.getElementById('compGuess').style.visibility = 'visible'; 

    console.log("Player score:",playerScore,"\ncomp score:",compScore,"\nTies:",tie);
}


function compGuess(){
    let index = Math.floor(Math.random()*3);
    document.querySelector('#compGuess').textContent = choices[index];
}


// LOOPS THROUGH ALL BUTTONS 
function userGuess(){
    document.querySelectorAll('button').forEach(function(button) {
        // WHEN A PARTICULAR BUTTON IS CLICKED
        button.onclick = () => {
            document.querySelector('div').textContent = button.dataset.input;
        } 
    });
};


function result(computerGuess, playerGuess){
    if (computerGuess === playerGuess){
        tie++;
        return "It was a tie!!"
    }
    else if (computerGuess==='rock'){
        switch (playerGuess) {
            case "paper":
                playerScore++
                return "You WON!!";
            case "scissors":
                compScore++
                return "You LOSE!!";
            default:
                return -1;
        }
    }
    else if (computerGuess==='paper'){
        switch (playerGuess) {
            case "scissors":
                playerScore++
                return "You WON!!";
            case "rock":
                compScore++
                return "You LOSE!!";
            default:
                return -1;
        }
    }
    else if (computerGuess==='scissors'){
        switch (playerGuess) {
            case "rock":
                playerScore++
                return "You WON!!";
            case "paper":
                compScore++
                return "You LOSE!!";
            default:
                return -1;
        }
    }
    
}