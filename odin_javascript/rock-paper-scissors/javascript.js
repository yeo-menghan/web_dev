function getComputerChoice(){
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Map the random number to rock, paper, or scissors
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // Convert both selections to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Check for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Check for the winning conditions
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection + ".";
  }
}

function playGame(){
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log("The Computer played: " + computerSelection)
    console.log(playRound(playerSelection, computerSelection));  }
}

playGame()
