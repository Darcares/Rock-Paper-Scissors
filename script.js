"use strict";

playGame();

function playGame() {
    const buttons = document.querySelectorAll("button");
    const score = document.querySelector(".score");
    const winner = document.querySelector(".winner");
    const versus = document.querySelector(".versus");
    let humanScore = 0;
    let computerScore = 0;
    

     buttons.forEach(button => button.addEventListener("click", event => {
        winner.textContent = ``;
        const buttonChoice = event.target.id;
        const humanChoice = getHumanChoice(buttonChoice);
        const computerChoice = getComputerChoice();
        playRound();
        score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        if(humanScore >= 5 || computerScore >= 5) declareWinner();



        function initializeGame() {
            humanScore = 0;
            computerScore = 0;
            }

        function declareWinner() {
            
            if(humanScore > computerScore) {
                winner.textContent = "Human wins the game!";
            }

            else {
                winner.textContent = "Computer wins the game!";
            }

            initializeGame();
        } 

        function playRound() {

            versus.textContent = `Human's ${humanChoice} VS Computer's ${computerChoice}`;

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
        }
    }));
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