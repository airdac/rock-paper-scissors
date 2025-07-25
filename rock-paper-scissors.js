const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * choices.length);
    return choices[randomInt];
}

function getHumanChoice() {
    let humanPrompt = prompt("What's your choice: rock, paper or scissors?", );
    if (typeof humanPrompt != 'string') {
        alert('Make a valid choice to play.');
        return getHumanChoice();
    }
    humanPrompt = humanPrompt.toLowerCase();
    if (choices.includes(humanPrompt)) {
        return humanPrompt;
    } else {
        alert("That isn't a valid choice!");
        return getHumanChoice();
    }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      const humanIdx = choices.indexOf(humanChoice);
      const computerIdx = choices.indexOf(computerChoice);

      if (
        humanIdx > computerIdx ||
        (humanIdx == 0 && computerIdx == choices.length-1)
      ) {
        console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`);
        humanScore++;
      } else if (humanIdx == computerIdx) {
        console.log("That's a tie!");
      } else {
        console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`);
        computerScore++;
      }
    }

    console.log('Welcome to Rock Paper Scissors! You will now play five rounds against the computer.')

    for (let i = 0; i <= 5; i++) {
        console.log(`Let's play round ${i+1}!`)
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Game finished! The final scores are
        
        You: ${humanScore}
        Computer: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log('So you win!')
    } else if (humanScore == computerScore) {
        console.log("So it's a tie.")
    } else {
        console.log("So you lose...")
    }
}

playGame();