//DOM ELEMENTS
var buttonContainer = document.querySelector('.game-container');
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
buttonContainer.addEventListener('click', function() {
  selectGame(event)
});
changeGameButton.addEventListener('click', goHome);
classicFighters.addEventListener('click', selectFighter);
elementalFighters.addEventListener('click', selectFighter);
window.addEventListener('load', renderAsides);

//EVENT HANDLERS AND FUNCTIONS
function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function renderAsides() {
  asideLeft.innerHTML = `
  <p>Player: ${game.playerOne.name}</p>
  <img src="./assets/${game.playerOne.token}.png" alt="Human head">
  <p>Wins: ${game.playerOne.wins}</p>
  `;
  asideRight.innerHTML= `
  <p>Player: ${game.playerTwo.name}</p>
  <img src="./assets/${game.playerTwo.token}.png" alt="Robot head">
  <p>Wins: ${game.playerTwo.wins}</p>
  `;
}

function selectGame() {
  showGamePage();
  if(event.target.id === 'classicGameButton') {
    showElement(classicFighters);
    game = new Game('Classic');
    game.chooseGameType();
  } else if (event.target.id === 'elementalGameButton'){
    showElement(elementalFighters);
    game = new Game('Elemental');
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
}

function selectFighter() {
  for(var i = 0; i < allInputs.length; i ++) {
    if(allInputs[i].checked) {
      game.playerOne.fighter = allInputs[i].id
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
    setTimeout(game.resetGameBoard, 2000)
  }else {
    winnerContainer.innerHTML = `
    <h2>It's a draw!</h2>
    <div class="matchup-container">
      <img class="winner" src="./assets/${game.matchup.playerOne}.png" alt="${game.matchup.playerOne}">
      <img class="winner" src="./assets/${game.matchup.playerTwo}.png" alt="${game.matchup.playerTwo}">
    </div>
    `;
    setTimeout(game.resetGameBoard, 2000)
  }
};
