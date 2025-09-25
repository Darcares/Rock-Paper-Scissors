"use strict";

playGame();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        console.log(`Round ${index + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if(humanChoice === null) {
            index--;
        }

        else {

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
        console.log(`It's a tie!`)
    }

    else if(humanChoice === `rock` && computerChoice === `scissors`) {
        console.log(`Human wins!`)
        humanScore += 1;
    }

    else if(humanChoice === `paper` && computerChoice === `rock`) {
        console.log(`Human wins!`)
        humanScore += 1;
    }

    else if(humanChoice === `scissors` && computerChoice === `paper`) {
        console.log(`Human wins!`)
        humanScore += 1;
    }

    else {
        console.log(`Computer wins!`)
        computerScore += 1;
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