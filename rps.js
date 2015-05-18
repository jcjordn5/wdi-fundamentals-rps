'use strict';
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
  return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "paper"){
            return "computer";
        }
        else if (computerMove === "scissors") {
            return "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "rock"){
            return "player";
        }
        else if (computerMove === "scissors") {
            return "computer";
        }
    }
    else if (playerMove === "scissors") {
         if (computerMove === "rock"){
            return "computer";
        }
        else if (computerMove === "paper") {
            return "player";
        }
    }
}

function playToFive(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    playerWins = 0;
    computerWins = 0;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove);
    while (playerWins || computerWins < 5){
            if (winner === "player"){
            playerWins++;
        }
        else if (winner === "computer") {
            computerWins++;
        }
    }
        
        console.log("Player has chosen '" + playerMove + "' the computer has chosen '" + computerMove + "'.");
        console.log("Winner is: " + winner + ".");
        console.log("The score " + playerWins + " to " + computerWins + ".\n");
        return [playerWins, computerWins];
    }
playToFive();
