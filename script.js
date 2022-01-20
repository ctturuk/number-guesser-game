let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, secret) => {
    let humanVar = Math.abs(secret - human);
    let compVar = Math.abs(secret - computer);
    if (humanVar < compVar) {
        return true;
    } else if (humanVar === compVar) {
        return true;
    } else {
        return false;
    }
};
 
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};