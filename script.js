"use strict";

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playGame));

function playGame(event) {
    let humanScore = 0;
    let computerScore = 0;
    const buttonChoice = event.target.id;
    const humanChoice = getHumanChoice(buttonChoice);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
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


function getHumanChoice(buttonChoice) {

    let humanChoice = null;

    switch(buttonChoice) {
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