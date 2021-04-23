//var Player = require('./player.js');

class Game {
  constructor(gameType) {
    this.playerOne = new Player('Human', '🤩');
    this.playerTwo = new Player('Computer', '🤖');
    this.gameType = gameType;
    this.fighters = [];
    this.winner = undefined;
    this.matchup = {playerOne: null, playerTwo: null};
  };

  chooseGameType() {
    if(this.gameType === 'Classic') {
      this.fighters = ['Rock', 'Paper', 'Scissors']
    } else if (this.gameType === 'Elemental') {
      this.fighters = ['Water', 'Air', 'Earth', 'Fire']
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
  };

// rock>Scissors
// refactor this to represent that relationship between the fighters
// compare that relationship between playerone.fighter and playertwo.fighter

  checkClassicMatchups(matchup) {
    if (matchup.playerOne === 'Rock' && matchup.playerTwo === 'Scissors' ||
    matchup.playerOne === 'Paper' && matchup.playerTwo === 'Rock' ||
    matchup.playerOne === 'Scissors' && matchup.playerTwo === 'Paper') {
      this.playerOne.wins++
      this.winner = this.playerOne.name
      return this.winner
    } else if (matchup.playerOne === 'Scissors' && matchup.playerTwo ==='Rock' ||
    matchup.playerOne === 'Rock' && matchup.playerTwo === 'Paper' ||
    matchup.playerOne === 'Paper' && matchup.playerTwo === 'Scissors' ) {
      this.playerTwo.wins++
      this.winner = this.playerTwo.name
      return this.winner
    } else {
      return
    }
  };

  checkElementalMatchups(matchup) {
    if (matchup.playerOne === 'Water' && matchup.playerTwo === 'Earth' ||
    matchup.playerOne === 'Earth' && matchup.playerTwo === 'Fire' ||
    matchup.playerOne === 'Fire' && matchup.playerTwo === 'Air' ||
    matchup.playerOne === 'Air' && matchup.playerTwo === 'Water') {
      this.playerOne.wins++
      this.winner = this.playerOne.name
      return this.winner
    } else if (matchup.playerOne === 'Earth' && matchup.playerTwo === 'Water' ||
    matchup.playerOne === 'Fire' && matchup.playerTwo === 'Earth' ||
    matchup.playerOne === 'Air' && matchup.playerTwo === 'Fire' ||
    matchup.playerOne === 'Water' && matchup.playerTwo === 'Air') {
      this.playerTwo.wins++
      this.winner = this.playerTwo.name
      return this.winner
    } else {
      return
    }
  };

  resetGameBoard() {
    showGamePage();
    hideElement(winnerView);
    if (this.gameType === 'Classic') {
      showElement(classicFighters);
    } else {
      showElement(elementalFighters);
    }
  }
};

// render wins on the DOM
// start new game
// save wins to localStorage

// var game1 = new Game('Elemental');
// game1.chooseGameType();
// game1.checkForWinner();
//
// module.exports = Game;
