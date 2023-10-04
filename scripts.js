function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice) {
    const computer = computerChoice();
    

    let result;
    if (playerChoice === computer) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissors" && computer === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    return {result,computer};
}

function display(choice){
    const { result, computer } = play(choice);
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `You chose ${choice}, computer chose ${computer}. ${result}`;
}
