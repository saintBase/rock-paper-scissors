function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if(x === 0)
        console.log('Rock');

    else if(x === 1)
        console.log('Paper');

    else
        console.log('Scissors');
}

function playRound(playerSelection, computerSelection){
    
}

getComputerChoice();