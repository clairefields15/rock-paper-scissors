class Game {
  constructor(gameType) {
    this.players = ["Human", "Computer"];
    this.gameType = gameType;
    this.humanTurn = true;
  }

  checkForWinner() {

  }

  resetGameBoard() {

  }

    //a way to keep track of the selected game type
    //a way to keep track of whose turn it is- isn't it always the human turn?
    //a way to check the data for win conditions
    //a way to detect when the game is a draw
    //a setInterval to reset the gameboard


};


// on pageload create two players?
  //human
  //computer
// select button creates the game class
// Game starts (human turn)
// human chooses fighter
// computer randomly chooses fighter
// Check for winner or draw
// update the wins in the player class
// save wins to localStorage
// render wins on the DOM
// start new game
