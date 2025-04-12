let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
  return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, secretNumber) {
  let humanDifference = Math.abs(humanGuess-secretNumber);
  let computerDifference = Math.abs(computerGuess-secretNumber);
  if (humanDifference <= computerDifference) {
    return true;
  }else if (humanDifference > computerDifference) {
    return false;
  }else if (humanDifference === computerDifference){
    return false;
  }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

function advanceRound() {
  currentRoundNumber++;
}
