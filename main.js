//DOM ELEMENTS
var buttonContainer = document.querySelector('.game-container');
var chooseFighterView = document.getElementById('chooseFighterView');
var homeView = document.getElementById('homeView');
var changeGameButton = document.getElementById('changeGame');
var classicFighters = document.getElementById('classicFighters');
var elementalFighters = document.getElementById('elementalFighters');
var winnerView = document.getElementById('winnerView');
var winnerContainer = document.getElementById('whoWonContainer');

var game = new Game('Classic');

//EVENT LISTENERS
buttonContainer.addEventListener('click', function() {
  selectGame(event)
});
changeGameButton.addEventListener('click', goHome);
classicFighters.addEventListener('click', function() {
  selectFighter(event)
});
elementalFighters.addEventListener('click', function() {
  selectFighter(event)
});

//EVENT HANDLERS AND FUNCTIONS
function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function selectGame() {
  if(event.target.id === 'classicGameButton') {
    showGamePage();
    showElement(classicFighters);
    game = new Game('Classic');
    game.chooseGameType();
  } else if (event.target.id === 'elementalGameButton'){
    showGamePage();
    showElement(elementalFighters);
    game = new Game('Elemental');
    game.chooseGameType();
  }
};

function showGamePage() {
  showElement(chooseFighterView);
  hideElement(homeView);
  showElement(changeGameButton);
}

function selectFighter() {
 if(event.target.id === 'rock') {
   game.playerOne.fighter = 'Rock'
   game.checkForWinner();
 }
 if(event.target.id === 'paper') {
   game.playerOne.fighter = 'Paper'
   game.checkForWinner();
 }
 if(event.target.id === 'scissors') {
   game.playerOne.fighter = 'Scissors'
   game.checkForWinner();
 }
 if(event.target.id === 'water') {
   game.playerOne.fighter = 'Water'
   game.checkForWinner();
 }
 if(event.target.id === 'air') {
   game.playerOne.fighter = 'Air'
   game.checkForWinner();
 }
 if(event.target.id === 'fire') {
   game.playerOne.fighter = 'Fire'
   game.checkForWinner();
 }
 if(event.target.id === 'earth') {
   game.playerOne.fighter = 'Earth'
   game.checkForWinner();
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
};

function render(game) {
  winnerContainer.innerHTML = '';
  if(game.winner) {
    winnerContainer.innerHTML = `
    <h2>${game.winner} won!</h2>
    <div class="matchupContainer">
    <img src="./assets/${game.matchup.playerOne}.png" alt="${game.matchup.playerOne}">
    <img src="./assets/${game.matchup.playerTwo}.png" alt="${game.matchup.playerTwo}">
    </div>
    <p>${game.playerOne.name} picked ${game.matchup.playerOne} and ${game.playerTwo.name} picked ${game.matchup.playerTwo}</p>
    `;
    game.resetGameBoard()
  }else {
    winnerContainer.innerHTML = `
    <h2>It's a draw!</h2>
    <div class="matchupContainer">
    <img src="./assets/${game.matchup.playerOne}.png" alt="${game.matchup.playerOne}">
    <img src="./assets/${game.matchup.playerTwo}.png" alt="${game.matchup.playerTwo}">
    </div>
    <p>${game.playerOne.name} picked ${game.matchup.playerOne} and ${game.playerTwo.name} picked ${game.matchup.playerTwo}</p>
    `;
    game.resetGameBoard()
  }
};
