

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