const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;
let round = 1;

const generalInfo = document.querySelector("#general-info");

generalInfo.textContent =
  "Welcome to Rock Paper Scissors! You will now play five rounds against the computer.";

const humanScoreFeedback = document.querySelector("#human-score");
const computerScoreFeedback = document.querySelector("#computer-score");

humanScoreFeedback.textContent = `Human score: ${humanScore}`;
computerScoreFeedback.textContent = `Computer score: ${computerScore}`;

const roundResult = document.querySelector("#round-result");

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
  if (round == 1) {
    humanScore = 0;
    computerScore = 0;

    humanScoreFeedback.textContent = `Human score: ${humanScore}`;
    computerScoreFeedback.textContent = `Computer score: ${computerScore}`;
  }

  round++;
  generalInfo.textContent = `Now playing round ${round}...`;

  const target = event.target;

  const humanChoice = choices.indexOf(target.id);
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  if (round > 5) {
    if (humanScore > computerScore) {
      generalInfo.textContent = `Game finished! You win!
      Click any button to play again.`;
    } else if (humanScore === computerScore) {
      generalInfo.textContent = `Game finished! It's a tie.
      Click any button to play again.`;
    } else {
      generalInfo.textContent = `Game finished! You lose...
      Click any button to play again.`;
    }
    round = 1;
  }
});

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}

function getHumanChoice() {
    let humanPrompt = prompt("What's your choice: rock, paper or scissors?", );
    if (typeof humanPrompt != 'string') {
        alert('Make a valid choice to play.');
        return getHumanChoice();
    }
    humanPrompt = humanPrompt.toLowerCase();
    if (choices.includes(humanPrompt)) {
        return choices.indexOf(humanPrompt);;
    } else {
        alert("That isn't a valid choice!");
        return getHumanChoice();
    }
}

function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === (computerChoice + 1) % choices.length) {
    roundResult.textContent = `You win! ${capitalizeFirstLetter(choices[humanChoice])} beats ${choices[computerChoice]}`;
    humanScore++;
    humanScoreFeedback.textContent = `Human score: ${humanScore}`;

  } else if (humanChoice === computerChoice) {
    roundResult.textContent = "That's a tie.";
  } else {
    roundResult.textContent = `You lose... ${capitalizeFirstLetter(choices[computerChoice])} beats ${choices[humanChoice]}`;
    computerScore++;
    computerScoreFeedback.textContent = `Computer score: ${computerScore}`;
  }
}