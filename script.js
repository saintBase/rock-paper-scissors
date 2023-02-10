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
  else {
    console.log("You have entered an invalid input!")
  }
  console.log("Player: " + playerSelection + " Computer : " + computerSelection);
  return result;
}

function game(){
    let player = 0;
    let computer = 0;
    for(let i= 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let game = playRound(playerSelection, computerSelection);
        if (game.includes('Win'))
            player++;
        else if(game.includes('Lose'))
            computer++;
    }
    console.log("Computer: " + computer + ", Player: " + player);
    if(player > computer)
        return "You Win!"
    else if(computer > player)
        return "You Lose!"
    else
        return "No Winners, no Losers!"
}



//console.log(playRound(playerSelection, computerSelection));
console.log(game());