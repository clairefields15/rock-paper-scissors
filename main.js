//DOM ELEMENTS
var buttonContainer = document.querySelector('.game-container');
var chooseFighterView = document.getElementById('chooseFighterView');
var homeView = document.getElementById('homeView');
var changeGameButton = document.getElementById('changeGame');
var classicFighters = document.getElementById('classicFighters');
var elementalFighters = document.getElementById('elementalFighters')

//EVENT LISTENERS
buttonContainer.addEventListener('click', function() {
  selectGame(event)
});

changeGameButton.addEventListener('click', goHome)


//EVENT HANDLERS AND FUNCTIONS
function selectGame() {
  if(event.target.id === 'classicGameButton') {
    showElement(chooseFighterView)
    showElement(classicFighters)
    hideElement(homeView)
    showElement(changeGameButton)

  } else {
    showElement(chooseFighterView)
    showElement(elementalFighters)
    hideElement(homeView)
    showElement(changeGameButton)
  }
}

function goHome() {
  hideElement(chooseFighterView);
  hideElement(elementalFighters);
  hideElement(classicFighters);
  hideElement(changeGameButton);
  showElement(homeView);
}

function showElement(element) {
  element.classList.remove('hidden')
}

function hideElement(element) {
  element.classList.add('hidden')
}
