const readline = require('readline-sync');

function shuffle(array, numberOfTimes = 5) {
  /*
  This Fisher-Yates shuffle is run at a default of 5 times to get a better mix of cards. This can be modified to increase shuffling.
  */
  for (let i = 0; i < numberOfTimes; i++) {
    for (let index = array.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
    }
  }
}

function createDeck() {
  const DECK = [];
  const CARD = {
    rank: null, /* 1 - 13 */
    suit: null /* clubs (♣), diamonds (♦), hearts (♥) and spades (♠) */
  }
  const NUMBER_OF_CARDS_PER_SUIT = 13;
  const SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];
  SUITS.forEach((suit) => {
    for (let i = 1; i <= NUMBER_OF_CARDS_PER_SUIT; i++) {
      let card = Object.assign({}, CARD);
      card.rank = i;
      card.suit = suit;
      DECK.push(card);
    }
  });
  return DECK;
}

function createNewGame() {
  console.clear();
  let deck = createDeck();
  shuffle(deck);
  let game = {
    deck: deck,
    playersHand: [],
    dealersHand: [],
    playPrompt: 'What do you want to do? 1) Hit or 2) Stay',
    repeatGamePrompt: '\nPlay again? 1) Yes or 2) No',
    validOptions: [1, 2],
  }
  game.playersHand.push(game.deck.pop());
  game.playersHand.push(game.deck.pop());
  game.dealersHand.push(game.deck.pop());
  game.dealersHand.push(game.deck.pop());
  return game;
}

function getUserInput(validOptions, prompt) {
  let input = readline.question(`${prompt}: `);
  while (!validOptions.includes(parseInt(input))) {
    input = readline.question(`Oops! That's not a valid option. ${prompt}: `);
  }
  return parseInt(input);
}

function formatFaceCard(rank) {
  if (rank === 1) return 'Ace';
  if (rank === 11) return 'Jack';
  if (rank === 12) return 'Queen';
  if (rank === 13) return 'King';
  return rank;
}

function displayCards(dealersHand, playersHand) {
  let dealersFirstCard = formatFaceCard(dealersHand[0].rank);
  console.log(`\nDealer's Hand: ${dealersFirstCard} and an unknown card`);
  let formattedString = 'Player\'s Hand: ';
  let cards = playersHand.map(card => formatFaceCard(card.rank));
  if (cards.length === 2) {
    formattedString = formattedString + `${cards[0]} and ${cards[1]}`;
  } else {
    formattedString += cards.join(', ');
  }
  console.log('\n' + formattedString + '\n');
}

function calculateHandScore(hand) {
  let score = 0;
  hand.forEach((card) => {
    if (card.rank >= 2 && card.rank <= 10) {
      score += card.rank;
    }
    if (card.rank > 10) { // 11, 12, and 13 represent Jack, Queen, and King respectively. All face cards are equivalent to 10 points each.
      score += 10;
    }
    if (card.rank === 1) {
      // Ace cards default to a score of 11, UNLESS that pushes the total score
      // above 21. In which case, we deal with that later...
      score += 11;
    }
  });
  if (hand.find((card) => card.rank === 1)) {
    // If the hand contains an Ace card and the current score is above 21,
    // count the Ace as a 1 instead of 11.
    if (score > 21) {
      score -= 10;
    }
  }
  return score;
}

function dealerPlays(hand, deck) {
  let score = calculateHandScore(hand);
  while (score < 17) {
    hand.push(deck.pop());
    score = calculateHandScore(hand);
    if (score > 21) break;
  }
}

function revealHands(playersHand, dealersHand) {
  let playerCards = playersHand.map(card => formatFaceCard(card.rank));
  let dealerCards = dealersHand.map(card => formatFaceCard(card.rank));
  console.log('\n---------------\n');
  if (playerCards.length === 2) {
    console.log(`Player's Cards: ${playerCards[0]} and ${playerCards[1]}`);
  } else {
    let formattedString = playerCards.join(', ');
    console.log(`Player's Cards: ${formattedString}`);
  }
  if (dealerCards.length === 2) {
    console.log(`Dealer's Cards: ${dealerCards[0]} and ${dealerCards[1]}`);
  } else {
    let formattedString = dealerCards.join(', ');
    console.log(`Dealer's Cards: ${formattedString}`);
  }
}

function isBust(score) {
  return score > 21;
}

function isStillInGame(hand) {
  let score = calculateHandScore(hand);
  return isBust(score) ? false : true;
}

function checkForWinner(playersHand, dealersHand) {
  let playerScore = calculateHandScore(playersHand);
  let dealerScore = calculateHandScore(dealersHand);
  if (!isBust(playerScore) && !isBust(dealerScore)) {
    if (dealerScore > playerScore) {
      console.log('\nDealer wins!');  
    } else if (dealerScore < playerScore) {
      console.log('\nYou/the player wins!');  
    } else {
      console.log('\nThere was a tie!');
    }
  } else {
    if (isBust(playerScore)) {
      console.log('\nDealer wins!');
    } else if (isBust(dealerScore)) {
      console.log('\nYou/the player wins!');
    }
  }
  revealHands(playersHand, dealersHand);
}

function play() {
  while (true) {
    let game = createNewGame();
    let {
      deck,
      dealersHand,
      playersHand,
      playPrompt,
      validOptions,
      repeatGamePrompt
    } = game;

    // Show hands and prompt player to decide what to do next.
    dealerPlays(dealersHand, deck);
    displayCards(dealersHand, playersHand);
    let playersMove = getUserInput(validOptions, playPrompt);
    while (playersMove === 1) {
      playersHand.push(deck.pop());
      if (!isStillInGame(playersHand)) break;
      displayCards(dealersHand, playersHand);
      playersMove = getUserInput(validOptions, playPrompt);
    }
    checkForWinner(playersHand, dealersHand);
    let playAgain = getUserInput(validOptions, repeatGamePrompt);
    if (playAgain === 2) {
      break;
    }
  }
  console.log("\nThanks for playing!");
}

play();