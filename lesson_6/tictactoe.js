const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinOr(arr, delimiter=', ', conjunction='or') {
  if (arr.length <= 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return arr.join(` ${conjunction} `);
  }
  return arr.slice(0, arr.length-1).join(delimiter) + `${delimiter}${conjunction} ${arr[arr.length-1]}`;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  while(true) {
    square = readline.question(`Choose a square(${joinOr(emptySquares(board))}:`).trim();
    if (emptySquares(board).includes(square)) break;
    prompt('Sorry, that is not a valid choice.');
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningCombos = [
    [1, 2, 3], [4, 5, 9], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let combo = 0; combo < winningCombos.length; combo++) {
    let [sq1, sq2, sq3] = winningCombos[combo];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }
  
  displayBoard(board);
  
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}
prompt('Thanks for playing Tic Tac Toe!');

/*
Extensions:

Keep Score
Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to 0 for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.

- Set a global constant for number of games needed to win (5)
- Keep track of totalWinsForPlayer, totalLossesForPlayer
- Keep track of totalWinsForComputer, totalLossesForComputer
- When either reach 5, reset both to 0

Running program until user says stop {
  Match (ongoing games until 5 wins from single player) {
    Game {
      // Stuff
    }
  }
}

Computer AI: Defense
Let's make the computer defensive-minded so that, when an immediate threat exists, it will try to defend the 3rd square. An immediate threat = human player has 2 squares in a row with the 3rd square unoccupied. If there's no immediate threat, the computer can pick a random square.

findAtRiskSquare
hasImmediateThreat(board) // false, pick a random square
// true - pick 3rd square of combo. 

Computer AI: Offense
The defensive-minded AI is pretty cool, but it's still not performing as well as possible. If there are no impending threats, it will pick a square at random. We can improve it by attempting to find a winning move. We're not going to add a complicated algorithm; instead, we'll piggyback on findAtRiskSquare and turn it into an attacking mechanism as well. The logic is simple:

Finding a defensive-minded square means finding an empty square in a line where the other two squares belong to the human player.
Finding an offensive-minded square means finding an empty square in a line where the other two squares belong to the computer.
These two conditions are so similar that we can use the same code to determine both results.

Computer turn refinements
Ideally, if the computer has a chance to win, it should make the winning move. As the program is right now, the computer will first attempt a defensive move, which is backward from the optimal strategy. In other words, if the computer has a chance to win, it should make the winning move rather than the defensive move. Update the code so that it plays the offensive move first.

We can make one more improvement: pick square #5 if it's available. The AI for the computer should first pick the winning move, then the defensive mode, then square #5, and, finally, a random square.

Can you change the game so that the computer moves first? See if you can make this a setting at the top of the program (i.e., a constant) so that you can play the game with either the player or computer going first. Try adding a 3rd option that causes your game to prompt the user for who goes first before play begins. Valid options for the constant used in this feature can be "player", "computer", or "choose".

On Your Own Ideas
Below are some extra ideas you may want to explore on your own. They're challenging and a bit out of scope for this course, but may be fun for the adventurous programmer.

Minimax algorithm You can build an unbeatable Tic Tac Toe by utilizing the minimax algorithm.

Bigger board What happens if the board is 5x5 instead of 3x3? What about a 9x9 board? You'll have to decide for yourself the rules of the game when the board isn't a 3x3 board.

More players When you have a bigger board, you can perhaps have more than 2 players. Would it be interesting to play against 2 computers? What about 2 human players against a computer?
*/