let startBtnEl = document.getElementById('start-btn');
let newCardBtnEl = document.getElementById('new-card-btn');
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

let cards = [];
let sumOfCards = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let player = {
  name: 'Paula',
  chips: 500,
};

function renderPlayerChips() {
  playerEl.innerText = `
${player.name} : $ ${player.chips}
`;
}

startBtnEl.addEventListener('click', startGame);
newCardBtnEl.addEventListener('click', newCard);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sumOfCards = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  for (const card of cards) {
    cardsEl.innerText = `Cards: ${cards.join(' ')}`;
  }

  sumEl.innerText = 'Sum: ' + sumOfCards;

  if (sumOfCards <= 20) {
    message = 'Do you want to draw a new card? 🙂';
  } else if (sumOfCards === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.innerText = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomNumber();
    sumOfCards += newCard;
    cards.push(newCard);
    renderPlayerChips();
  }

  renderGame();
}

function clearGame() {
  cardsEl.innerText = '';
  sumEl.innerText = '';
}
