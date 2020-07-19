const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

let repeat = 'y';
while (repeat === 'y') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    repeat = answer;
  }
}

/*
RPS Bonus Features
Here are a couple of bonus features for the Rock Paper Scissors program.

Lizard Spock This game is a variation on the Rock Paper Scissors game that adds two more options - Lizard and Spock. The full explanation and rules are here. There's also a hilarious Big Bang Theory video about it here.

The goal of this bonus is to add Lizard and Spock to your game.

Shortened Input Typing the full word "rock" or "lizard" is tiring. Update the program so the user can type "r" for "rock," "p" for "paper," and so on. Note that if you do bonus #1, you'll have two words that start with "s." How do you resolve that?

Best of 5 Keep score of the player's and computer's wins. When either the player or computer reaches five wins, the match is over, and the winning player becomes the grand winner. Don't add your incrementing logic to displayResults. Keep your functions simple; they should perform one logical task — no more, no less.

ESLint complaints Run your program through ESLint to see what problems it identifies, and try to fix them.

Case Study
Consider asking for a code review Be sure to ask questions about any part of your code that you're uncertain about.
*/