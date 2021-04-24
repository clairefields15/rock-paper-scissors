//DOM ELEMENTS
var classicGameButton = document.getElementById('classicGameButton');
var elementalGameButton = document.getElementById('elementalGameButton');
var chooseFighterView = document.getElementById('chooseFighterView');
var homeView = document.getElementById('homeView');
var changeGameButton = document.getElementById('changeGame');
var classicFighters = document.getElementById('classicFighters');
var elementalFighters = document.getElementById('elementalFighters');
var winnerView = document.getElementById('winnerView');
var winnerContainer = document.getElementById('whoWonContainer');
var asideLeft = document.getElementById('left');
var asideRight = document.getElementById('right');
var allInputs = document.querySelectorAll('input');

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
function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function renderLeftAside() {
  var wins = game.playerOne.retrieveWinsFromStorage();
  asideLeft.innerHTML = `
  <p>Player: Human</p>
  <img src="./assets/human.png" alt="Human head">
  <p>Wins: ${wins}</p>
  `;
};

function renderRightAside() {
  var wins = game.playerTwo.retrieveWinsFromStorage();
  asideRight.innerHTML= `
  <p>Player: Robot</p>
  <img src="./assets/robot.png" alt="Robot head">
  <p>Wins: ${wins}</p>
  `;
};

function selectGame() {
  showGamePage();
  if(event.target.closest('button').id === 'classicGameButton') {
    showElement(classicFighters);
    game.gameType = 'Classic';
    game.chooseGameType();
  }
  if (event.target.closest('button').id === 'elementalGameButton'){
    showElement(elementalFighters);
    game.gameType = 'Elemental';
    game.chooseGameType();
  }
};

function startNewGame() {
  if (game.gameType === 'Classic') {
    showElement(classicFighters);
  } else {
    showElement(elementalFighters);
  }
};

function showGamePage() {
  showElement(chooseFighterView);
  hideElement(homeView);
  showElement(changeGameButton);
};

function selectFighter() {
  for(var i = 0; i < allInputs.length; i ++) {
    if(allInputs[i].checked) {
      game.playerOne.fighter = allInputs[i].id;
      game.checkForWinner();
      allInputs[i].checked = false;
    }
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
  changeGameButton.disabled = true;
  winnerContainer.innerHTML = '';
  if(game.winner) {
    winnerContainer.innerHTML = `
    <h2>${game.winner} won this round!</h2>
    <div class="matchup-container">
      <img class="winner" src="./assets/${game.matchup.playerOne}.png" alt="${game.matchup.playerOne}">
      <img class="winner" src="./assets/${game.matchup.playerTwo}.png" alt="${game.matchup.playerTwo}">
    </div>
    `;
  }else {
    winnerContainer.innerHTML = `
    <h2>It's a draw!</h2>
    <div class="matchup-container">
      <img class="winner" src="./assets/${game.matchup.playerOne}.png" alt="${game.matchup.playerOne}">
      <img class="winner" src="./assets/${game.matchup.playerTwo}.png" alt="${game.matchup.playerTwo}">
    </div>
    `;
  }
  setTimeout(game.resetGameBoard, 2000);
};
