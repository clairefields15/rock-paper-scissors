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
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Scissors' && matchup.playerTwo ==='Rock') {
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Paper' && matchup.playerTwo === 'Rock') {
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Rock' && matchup.playerTwo === 'Paper') {
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Scissors' && matchup.playerTwo === 'Paper') {
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Paper' && matchup.playerTwo === 'Scissors') {
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else {
        console.log(`It's a draw!`)
      }
    } else if (this.gameType === 'Elemental') {
      console.log(matchup)
      if (matchup.playerOne === 'Water' && matchup.playerTwo === 'Earth'){
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Earth' && matchup.playerTwo === 'Water') {
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Earth' && matchup.playerTwo === 'Fire'){
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Fire' && matchup.playerTwo === 'Earth'){
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Fire' && matchup.playerTwo === 'Air') {
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Air' && matchup.playerTwo === 'Fire') {
        this.playerTwo.wins++
        console.log(`${this.playerTwo.name} wins!`)
      } else if (matchup.playerOne === 'Air' && matchup.playerTwo === 'Water') {
        this.playerOne.wins++
        console.log(`${this.playerOne.name} wins!`)
      } else if (matchup.playerOne === 'Water' && matchup.playerTwo === 'Air') {
        this.playerTwo.wins++
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
