var Player = require('./player.js');

class Game {
  constructor(gameType) {
    this.playerOne = new Player('Human', '🤩');
    this.playerTwo = new Player('Computer', '🤖');
    this.gameType = gameType;
    this.fighters = [];
  }

  chooseGameType() {
    if(this.gameType === 'Classic') {
      this.fighters = ['Rock', 'Paper', 'Scissors']
    } else if (this.gameType === 'Elemental') {
      this.fighters = ['Water', 'Air', 'Earth', 'Fire']
    }
  }

  chooseFighters() {
    var playerOneFighter = this.playerOne.takeTurn(this);
    var playerTwoFighter = this.playerTwo.takeTurn(this);
    var matchup = {playerOne: playerOneFighter, playerTwo: playerTwoFighter};
    return matchup
  }

  checkForWinner() {
    var matchup = this.chooseFighters();
    if (this.gameType === 'Classic') {
      console.log(matchup)
      if (matchup.playerOne === 'Rock' && matchup.playerTwo === 'Scissors') {
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Scissors' && matchup.playerTwo ==='Rock') {
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Paper' && matchup.playerTwo === 'Rock') {
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Rock' && matchup.playerTwo === 'Paper') {
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Scissors' && matchup.playerTwo === 'Paper') {
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Paper' && matchup.playerTwo === 'Scissors') {
        console.log(`${this.playerTwo.name} wins!`)
      } else {
        console.log(`It's a draw!`)
      }
    } else if (this.gameType === 'Elemental') {
      console.log(matchup)
      if (matchup.playerOne === 'Water' && matchup.playerTwo === 'Earth'){
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Earth' && matchup.playerTwo === 'Water') {
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Earth' && matchup.playerTwo === 'Fire'){
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Fire' && matchup.playerTwo === 'Earth'){
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Fire' && matchup.playerTwo === 'Air') {
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Air' && matchup.playerTwo === 'Fire') {
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Air' && matchup.playerTwo === 'Water') {
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Water' && matchup.playerTwo === 'Air') {
        console.log(`${this.playerTwo.name} wins!`)
      } else {
        console.log(`It's a draw!`)
      }
    }
  }

  resetGameBoard() {
    //setInterval
  }
};

// update the wins in the player class
// save wins to localStorage
// render wins on the DOM
// start new game

var game1 = new Game('Elemental');
game1.chooseGameType();
game1.checkForWinner();

module.exports = Game;
