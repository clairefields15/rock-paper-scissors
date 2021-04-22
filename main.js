//DOM ELEMENTS
var buttonContainer = document.querySelector('.game-container');
var chooseFighterView = document.getElementById('chooseFighterView');
var homeView = document.getElementById('homeView');
var changeGameButton = document.getElementById('changeGame');
var classicFighters = document.getElementById('classicFighters');
var elementalFighters = document.getElementById('elementalFighters');
var winnerView = document.getElementById('winnerView');
var winnerContainer = document.getElementById('whoWonContainer')

var game;

//EVENT LISTENERS
buttonContainer.addEventListener('click', function() {
  selectGame(event)
});
changeGameButton.addEventListener('click', goHome);
//need something to fire showWinnerView, probably within the game class?


//EVENT HANDLERS AND FUNCTIONS
function showElement(element) {
  element.classList.remove('hidden');
};

function hideElement(element) {
  element.classList.add('hidden');
};

function selectGame() {
  if(event.target.id === 'classicGameButton') {
    showElement(chooseFighterView);
    showElement(classicFighters);
    hideElement(homeView);
    showElement(changeGameButton);
    game = new Game('Classic');
  } else if (event.target.id === 'elementalGameButton'){
    showElement(chooseFighterView);
    showElement(elementalFighters);
    hideElement(homeView);
    showElement(changeGameButton);
    game = new Game('Elemental');
  }
};

function goHome() {
  hideElement(chooseFighterView);
  hideElement(elementalFighters);
  hideElement(classicFighters);
  hideElement(changeGameButton);
  showElement(homeView);
};

function showWinnerView() {
  hideElement(chooseFighterView);
  hideElement(elementalFighters);
  hideElement(classicFighters);
  showElement(winnerView);
  render();
}

function render() {
  winnerContainer.innerHTML = '';
  winnerContainer.innerHTML = `
    <h2>Computer won!</h2>
    <div class="matchupContainer">
      <img src="./assets/paper.png" alt="Paper">
      <img src="./assets/scissors.png" alt="scissors">
    </div>
    <p>Paper < Scissors</p>
  `;
}
