//var Player = require('./player.js');

class Game {
  constructor(gameType) {
    this.playerOne = new Player('Human', 'human');
    this.playerTwo = new Player('Computer', 'robot');
    this.gameType = gameType;
    this.fighters = [];
    this.winner = undefined;
    this.matchup = {playerOne: null, playerTwo: null};
  };

  chooseGameType() {
    if(this.gameType === 'Classic') {
      this.fighters = ['rock', 'paper', 'scissors']
    } else if (this.gameType === 'Elemental') {
      this.fighters = ['water', 'air', 'earth', 'fire']
    }
  };

  chooseFighters() {
    var playerOneFighter = this.playerOne.takeTurn(this);
    var playerTwoFighter = this.playerTwo.takeTurn(this);
    this.matchup = {playerOne: playerOneFighter, playerTwo: playerTwoFighter};
    return this.matchup
  };

  checkForWinner() {
    var matchup = this.chooseFighters();
    if (this.gameType === 'Classic') {
      this.checkClassicMatchups(matchup);
    } else if (this.gameType === 'Elemental') {
      this.checkElementalMatchups(matchup);
    }
    showWinnerView();
    render(this);
    renderAsides();
  };

// rock>scissors
// refactor this to represent that relationship between the fighters
// compare that relationship between playerone.fighter and playertwo.fighter

  checkClassicMatchups(matchup) {
    if (matchup.playerOne === 'rock' && matchup.playerTwo === 'scissors' ||
    matchup.playerOne === 'paper' && matchup.playerTwo === 'rock' ||
    matchup.playerOne === 'scissors' && matchup.playerTwo === 'paper') {
      this.playerOne.wins++
      this.winner = this.playerOne.name
      return this.winner
    } else if (matchup.playerOne === 'scissors' && matchup.playerTwo ==='rock' ||
    matchup.playerOne === 'rock' && matchup.playerTwo === 'paper' ||
    matchup.playerOne === 'paper' && matchup.playerTwo === 'scissors' ) {
      this.playerTwo.wins++
      this.winner = this.playerTwo.name
      return this.winner
    } else {
      this.winner = null;
      return
    }
  };

  checkElementalMatchups(matchup) {
    if (matchup.playerOne === 'water' && matchup.playerTwo === 'earth' ||
    matchup.playerOne === 'earth' && matchup.playerTwo === 'fire' ||
    matchup.playerOne === 'fire' && matchup.playerTwo === 'air' ||
    matchup.playerOne === 'air' && matchup.playerTwo === 'water' ||
    matchup.playerOne === 'air' && matchup.playerTwo === 'earth') {
      this.playerOne.wins++
      this.winner = this.playerOne.name
      return this.winner
    } else if (matchup.playerOne === 'earth' && matchup.playerTwo === 'water' ||
    matchup.playerOne === 'fire' && matchup.playerTwo === 'earth' ||
    matchup.playerOne === 'air' && matchup.playerTwo === 'fire' ||
    matchup.playerOne === 'water' && matchup.playerTwo === 'air' ||
    matchup.playerOne === 'earth' && matchup.playerTwo === 'air') {
      this.playerTwo.wins++
      this.winner = this.playerTwo.name
      return this.winner
    } else {
      this.winner = null;
      return
    }
  };

  resetGameBoard() {
    showGamePage();
    hideElement(winnerView);
    startNewGame();
    changeGameButton.disabled = false
  }
};

// save wins to localStorage

// var game1 = new Game('Elemental');
// game1.chooseGameType();
// game1.checkForWinner();
//
// module.exports = Game;
