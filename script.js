function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);

  if (x === 0) return "Rock";
  else if (x === 1) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper")
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    else if (computerSelection === "Scissors")
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    else result = "Draw!";
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors")
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    else if (computerSelection === "Rock")
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    else result = "Draw!";
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock")
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    else if (computerSelection === "Paper")
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    else result = "Draw!";
  }
  console.log(playerSelection + " " + computerSelection);
  return result;
}

function game(){
    let counter = 0;
    for(let i=0; i < 5; i++){
        let game = playRound();
        if (game.includes('Win'))
            counter++;
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
