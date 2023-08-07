const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
    ) {
        result = "You won!";
    } else {
        result = "You lose!";
    }

    return `RESULT:\nYou: ${choices[playerSelection]}\nComputer: ${choices[computerSelection]}\n${result}`;
}

let playerSelection = parseInt(prompt(`Select from the following:\n0: Rocks\n1: Papers\n2: Scissors`));

if (isNaN(playerSelection) || playerSelection < 0 || playerSelection > 2) {
    console.log("Invalid input. Please choose 0, 1, or 2.");
} else {
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
