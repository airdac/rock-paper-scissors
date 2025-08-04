const choices = ['rock', 'paper', 'scissors'];

function getcomputerChoice() {
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      if (
        humanChoice > computerChoice ||
        (humanChoice == 0 && computerChoice == choices.length-1)
      ) {
        console.log(`You win! ${capitalizeFirstLetter(choices[humanChoice])} beats ${choices[computerChoice]}`);
        humanScore++;
      } else if (humanChoice === computerChoice) {
        console.log("That's a tie.");
      } else {
        console.log(
          `You lose... ${capitalizeFirstLetter(choices[computerChoice])} beats ${
            choices[humanChoice]
          }`
        );
        computerScore++;
      }
    }

    console.log('Welcome to Rock Paper Scissors! You will now play three rounds against the computer.')

    for (let i = 1; i <= 3; i++) {
        console.log(`Let's play round ${i}!`)
        let humanChoice = getHumanChoice();
        let computerChoice = getcomputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Game finished! The final scores are
        
        You: ${humanScore}
        Computer: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log('You win the game!')
    } else if (humanScore == computerScore) {
        console.log("The game ends with a tie.")
    } else {
        console.log("You lose the game...")
    }
}

playGame();