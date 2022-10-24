let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

const computerChoice = () => {
    const action = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(` Computer picks: ${action[randomNumber]}`);
    return action[randomNumber];
};

const playRound = () => {
    let computerSelection = computerChoice();
    console.log(computerChoice)
    let playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection.toLowerCase();
    console.log(playerSelection)

    let tieMessage = `Tie! Computer picked ${computerSelection} and Player picked ${playerSelection}`;
    let computerWinMessage = `Computer wins! Computer picked ${computerSelection} and Player picked ${playerSelection}`;
    let playerWinMessage = `Player wins! Computer picked ${computerSelection} and Player picked ${playerSelection}`;

    // tie condition
    if (computerSelection === playerSelection) {
        console.log("Tie!")
        scoreKeeper(tieMessage, "tie")
        // computer wins
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('Computer Wins!')
        scoreKeeper(computerWinMessage, "computer")
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('Computer Wins!')
        scoreKeeper(computerWinMessage, "computer")
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('Computer Wins!')
        scoreKeeper(computerWinMessage, "computer")
        // player wins
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('Player Wins!')
        scoreKeeper(playerWinMessage, "player")
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('Player Wins!')
        scoreKeeper(playerWinMessage, "player")
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('Player Wins!')
        scoreKeeper(playerWinMessage, "player")
    }
};


const scoreKeeper = (message, winner) => {
    for (i = 0; i < 5; i++) {
        roundCounter++
        console.log(`Our loop is in iteration ${roundCounter}`)
        if (winner) {
            if (winner === 'player') {
                console.log(message);
                playerScore++;
                console.log(playerScore);
            } else if (winner === 'computer') {
                console.log(message);
                computerScore++;
                console.log(computerScore);
            } else if (winner === 'tie') {
                console.log(message);
            }
        };
            if (roundCounter < 5) {
                console.log(`we are in round ${roundCounter}`)
                playRound();
            } else if (playerScore >= 3) {
                console.log('GAME OVER! Player wins!')
            } else if (computerScore >= 3) {
                console.log('GAME OVER! Computer wins!')
            } else if (roundCounter >= 5) {
                console.log('GAME OVER! No winner!')
                alert("GAME OVER");
                //window.reload();
        };
    }
}

scoreKeeper();