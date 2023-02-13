let playerScore, comScore;
playerScore = comScore = 0;

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);

  if (x === 0) return "Rock";
  else if (x === 1) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  playerSelection =
    playerSelection.substring(0, 1).toUpperCase() +
    playerSelection.substr(1).toLowerCase();
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
  } else {
    console.log("You have entered an invalid input!");
  }
  console.log(
    "Player: " + playerSelection + " Computer : " + computerSelection
  );
  //return result;
  // write result and append to div DOM
  resultDOM = document.createElement("p");
  resultDOM.textContent = result;
  resultDiv.appendChild(resultDOM);
  if (result.includes("Win")) playerScore++;
  else if (result.includes("Lose")) comScore++;

  document.getElementById('scoreText').textContent = `Player: ${playerScore} Computer: ${comScore}`;

  if(playerScore == 5)
    alert("You WIN!");
  else if(comScore == 5)
    alert("You LOSE!");
}

/*function game(){
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
*/

//console.log(playRound(playerSelection, computerSelection));
//console.log(game());

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function () {
  playRound(rockBtn.textContent, getComputerChoice());
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function () {
  playRound(paperBtn.textContent, getComputerChoice());
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function () {
  playRound(scissorsBtn.textContent, getComputerChoice());
});

//creatning result DOM
const resultDiv = document.querySelector("#result");

// creating score DOM
const scoreDiv = document.querySelector("#score");
let initScore = document.createElement("h2");
initScore.textContent = `Player: ${playerScore} Computer: ${comScore}`;
initScore.setAttribute("id", "scoreText");
scoreDiv.appendChild(initScore);

window.addEventListener('load', function(){
  if(playerScore == 5)
    this.alert("You WIN!");
  else if(comScore == 5)
    this.alert("You LOSE!");
});