var Player = require('./player.js');

class Game {
  constructor(gameType) {
    this.playerOne = new Player('Human', '🤩');
    this.playerTwo = new Player('Computer', '🤖');
    this.gameType = gameType;
    this.humanTurn = true;
    this.fighters = [];
  }

  chooseGameType() {
    if(this.gameType === 'Classic') {
      this.fighters = ['Rock', 'Paper', 'Scissors']
    } else if (this.gameType === 'Elemental') {
      this.fighters = ['Water', 'Wind', 'Earth', 'Fire']
    }
  }

  chooseFighters() {
    var playerOneFighter = this.playerOne.takeTurn();
    var playerTwoFighter = this.playerTwo.takeTurn();
    var matchup = [];
    matchup.push(playerOneFighter, playerTwoFighter)
    return matchup
  }

  checkForWinner() {
    var matchup = this.chooseFighters();
    console.log(matchup)
    if (this.gameType === 'Classic') {
      //look at returned fighters from chooseFighters
      //evaluate to see who won
      //list allllll the rules here
    } else if (this.gameType === 'Elemental') {
      //look at returned fighters from chooseFighters
      //evaluate to see who won
      //list allllll the rules here
    }
  }

  resetGameBoard() {

  }

    //a way to keep track of whose turn it is- isn't it always the human turn?
    //a way to check the data for win conditions
    //a way to detect when the game is a draw
    //a setInterval to reset the gameboard
};

// Game starts (human turn)
// human chooses fighter
// computer randomly chooses fighter
// Check for winner or draw
// update the wins in the player class
// save wins to localStorage
// render wins on the DOM
// start new game

var game1 = new Game('Classic');
game1.chooseGameType();
game1.checkForWinner();
