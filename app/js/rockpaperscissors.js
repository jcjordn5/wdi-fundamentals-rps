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
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "paper"){
            winner = "computer";
        }
        else if (computerMove === "scissors") {
            winner = "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "rock"){
            winner = "player";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
    }
    else if (playerMove === "scissors") {
         if (computerMove === "rock"){
            winner = "computer";
        }
        else if (computerMove === "paper") {
            winner = "player";
        }
    }return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var outcome = getWinner(playerMove,computerMove);
            if (outcome === "player"){
            playerWins += 1;
        }
        else if (outcome === "computer") {
            computerWins += 1;
        }
       
        console.log("Player has chosen '" + playerMove + "' the computer has chosen '" + computerMove + "'.");
        console.log("Winner is: " + outcome + ".");
        console.log("The score " + playerWins + " to " + computerWins + ".\n");
    }

        return [playerWins, computerWins];
    }
playToFive();
