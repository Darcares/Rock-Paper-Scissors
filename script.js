"use strict";

// playGame();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        const humanChoice = getHumanChoice();
        if(humanChoice === null) {
            index--;
        }

        else {
        console.log(`Round ${index + 1}`);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        }

    }

    if(humanScore > computerScore) {
        console.log("Human wins the game!")
    }

    else if(humanScore < computerScore) {
        console.log("Computer wins the game!");
    }

    else {
        console.log("Draw game!")
    }

    function playRound(humanChoice, computerChoice) {

    console.log(`Human: ${humanChoice} vs Computer: ${computerChoice}`);

    if(humanChoice === computerChoice) {
        // Tie, no score change. Nothing happens here.
    }

    else if(humanChoice === `rock` && computerChoice === `scissors`) {
        humanScore ++;
    }

    else if(humanChoice === `paper` && computerChoice === `rock`) {
        humanScore ++;
    }

    else if(humanChoice === `scissors` && computerChoice === `paper`) {
        humanScore ++;
    }

    else {
        computerScore ++;
    }

     console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    
}

}


function getHumanChoice() {

    const input = prompt("Welcome. Please choose one of the following options. 1 for rock, 2 for paper, 3 for scissors");
    let humanChoice = null;

    switch(input) {
        case "1":
            humanChoice = "rock";
            break;

        case "2":
            humanChoice = "paper";
            break;

        case "3":
            humanChoice = "scissors";
            break;

        default:
            console.log("Not valid human choice");
            break;
    }

    return humanChoice;
}


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = null;

    switch(randomNumber) {
        case 1:
            computerChoice = "rock";
            break;

        case 2:
            computerChoice = "paper";
            break;

        case 3:
            computerChoice = "scissors";
            break;

        default:
            console.log("Not valid computer choice");
            break;
    }

    return computerChoice;
}