//DOM ELEMENTS
var allInputs = document.querySelectorAll('input');
var asideLeft = document.getElementById('left');
var asideRight = document.getElementById('right');
var changeGameButton = document.getElementById('changeGame');
var chooseFighterView = document.getElementById('chooseFighterView');
var classicFighters = document.getElementById('classicFighters');
var classicGameButton = document.getElementById('classicGameButton');
var elementalFighters = document.getElementById('elementalFighters');
var elementalGameButton = document.getElementById('elementalGameButton');
var homeView = document.getElementById('homeView');
var winnerContainer = document.getElementById('whoWonContainer');
var winnerView = document.getElementById('winnerView');

var game = new Game('Classic');

//EVENT LISTENERS
classicGameButton.addEventListener('click', function() {
  selectGame(event)
});
elementalGameButton.addEventListener('click', function() {
  selectGame(event)
});
changeGameButton.addEventListener('click', goHome);
classicFighters.addEventListener('click', selectFighter);
elementalFighters.addEventListener('click', selectFighter);
window.addEventListener('load', renderRightAside);
window.addEventListener('load', renderLeftAside);


//EVENT HANDLERS AND FUNCTIONS

const showElement = element => {
  element.classList.remove('hidden')
}

const hideElement = element => {
  element.classList.add('hidden')
}

function renderLeftAside() {
  var wins = game.humanPlayer.retrieveWinsFromStorage();
  asideLeft.innerHTML = `
  <p>Player: Human</p>
  <img src="./assets/human.png" alt="Human head">
  <p>Wins: ${wins}</p>
  `;
}

function renderRightAside() {
  var wins = game.computerPlayer.retrieveWinsFromStorage();
  asideRight.innerHTML= `
  <p>Player: Robot</p>
  <img src="./assets/robot.png" alt="Robot head">
  <p>Wins: ${wins}</p>
  `;
};

function selectGame() {
  showGamePage();
  var buttonId = event.target.closest('button').id
  if(buttonId === 'classicGameButton') {
    game.gameType = 'Classic';
    showElement(classicFighters);
  }
  if (buttonId === 'elementalGameButton'){
    game.gameType = 'Elemental';
    showElement(elementalFighters);
  }
  game.chooseGameType();
};


const showGamePage = () => {
  showElement(chooseFighterView);
  hideElement(homeView);
  showElement(changeGameButton);
};

function selectFighter() {
  allInputs.forEach(element => {
    if (element.checked) {
      game.humanPlayer.fighter = element.id;
      game.chooseFighters();
      element.checked = false;
    }
  })
};

function startNewGame() {
  changeGameButton.disabled = false;
  showGamePage();
  hideElement(winnerView);
  if (game.gameType === 'Classic') {
    showElement(classicFighters);
  }
  if (game.gameType === 'Elemental') {
    showElement(elementalFighters);
  }
};

function goHome() {
  hideElement(chooseFighterView);
  hideElement(elementalFighters);
  hideElement(classicFighters);
  hideElement(changeGameButton);
  hideElement(winnerView);
  showElement(homeView);
};

function showWinnerView() {
  hideElement(chooseFighterView);
  hideElement(elementalFighters);
  hideElement(classicFighters);
  showElement(winnerView);
  changeGameButton.disabled = true;
};

function render(game) {
  showWinnerView();
  changeGameButton.disabled = true;
  if(game.winner) {
    winnerContainer.innerHTML = `
    <h2>${game.winner} won this round!</h2>
    <div class="matchup-container">
      <img class="winner" src="./assets/${game.humanPlayer.fighter}.png" alt="${game.humanPlayer.fighter}">
      <img class="winner" src="./assets/${game.computerPlayer.fighter}.png" alt="${game.computerPlayer.fighter}">
    </div>
    `;
  }else {
    winnerContainer.innerHTML = `
    <h2>It's a draw!</h2>
    <div class="matchup-container">
      <img class="winner" src="./assets/${game.humanPlayer.fighter}.png" alt="${game.humanPlayer.fighter}">
      <img class="winner" src="./assets/${game.computerPlayer.fighter}.png" alt="${game.computerPlayer.fighter}">
    </div>
    `;
  }
  renderLeftAside();
  renderRightAside();
  setTimeout(function() {
    game.resetGameBoard()}, 2000);
};
