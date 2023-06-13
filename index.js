let computerGuess = compGuess();
console.log(computerGuess);
let playerGuess = userGuess();
console.log(playerGuess); 


function compGuess(){
    const choices=["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

function userGuess(){
    let userChoice = prompt("Choose your fighter!");
    return userChoice.toLowerCase()
}