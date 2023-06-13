const choices=["rock","paper","scissors"];
let playerScore = 0;
let compScore = 0;
let tie = 0;
main();


function main(){
    for (let i = 0; i<5; i++){
        let computerGuess = compGuess();
        // console.log("Computer guess is",computerGuess);
    
        let playerGuess = userGuess();
        // console.log(playerGuess);

        console.log("Comp guess is",computerGuess);
        console.log(result(computerGuess, playerGuess));
    }
    console.log("comp score:",compScore,"\nPlayer score:",playerScore,"\nTies:",tie);
}


function compGuess(){
    let index = Math.floor(Math.random()*3);
    return choices[index];
}


function userGuess(){
    while (true){
        let userChoice = prompt("Choose your fighter!");
        userChoice = userChoice.toLowerCase()
        for (let i = 0; i<3; i++){
            if (choices[i] == userChoice){
                return userChoice;
            }
        }
        console.log("INVALID INPUT!!");
    }
}


function result(computerGuess, playerGuess){
    if (computerGuess == playerGuess){
        tie++;
        return "It was a tie!!"
    }
    else if (computerGuess=='rock'){
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
    else if (computerGuess=='paper'){
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
    else if (computerGuess=='scissors'){
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