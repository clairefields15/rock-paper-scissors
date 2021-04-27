class Game {
  constructor(gameType) {
    this.humanPlayer = new Player('Human', 'human');
    this.computerPlayer = new Player('Computer', 'robot');
    this.gameType = gameType;
    this.fighters = [];
    this.winner = undefined;
    this.matchup = {humanPlayer: null, computerPlayer: null};
  };

  chooseGameType() {
    if(this.gameType === 'Classic') {
      this.fighters = ['rock', 'paper', 'scissors'];
    }
    if(this.gameType === 'Elemental') {
      this.fighters = ['water', 'air', 'earth', 'fire'];
    }
  };

  chooseFighters() {
    var humanFighter = this.humanPlayer.takeTurn(this);
    var computerFighter = this.computerPlayer.takeTurn(this);
    this.matchup = {humanPlayer: humanFighter, computerPlayer: computerFighter};
  };

  playGame() {
    this.chooseFighters();
    this.checkForWinner();
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
    render(this);
  };

  checkForWinner() {
    if (this.checkHumanWin()) {
      this.humanPlayer.wins++;
      this.winner = this.humanPlayer.name;
      return this.winner;
    } else if (this.checkForDraw()) {
      this.winner = null
    } else if (!this.checkHumanWin()) {
      this.computerPlayer.wins++;
      this.winner = this.computerPlayer.name;
      return this.winner;
    }
  };

  checkHumanWin() {
    var humanChoice = this.matchup.humanPlayer;
    var computerChoice = this.matchup.computerPlayer;
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'water' && computerChoice === 'earth' ||
    humanChoice === 'earth' && computerChoice === 'fire' ||
    humanChoice ===  'fire' && computerChoice === 'air' ||
    humanChoice === 'air' && computerChoice === 'water' ||
    humanChoice === 'air' && computerChoice === 'earth') {
      return true;
    } else {
      return false
    }
  };

  checkForDraw() {
    if (this.matchup.humanPlayer === this.matchup.computerPlayer) {
      return true
    }
  };

  resetGameBoard() {
    this.humanPlayer.fighter = undefined;
    this.computerPlayer.fighter = undefined;
    this.matchup = {humanPlayer: null, computerPlayer: null};
    this.winner = undefined;
    startNewGame();
  }
};
