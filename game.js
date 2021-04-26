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
    var humanPlayerFighter = this.humanPlayer.takeTurn(this);
    var computerPlayerFighter = this.computerPlayer.takeTurn(this);
    this.matchup = {humanPlayer: humanPlayerFighter, computerPlayer: computerPlayerFighter};
    return this.matchup;
  };

  checkForWinner() {
    var matchup = this.chooseFighters();
    if (this.gameType === 'Classic') {
      this.checkClassicMatchups(matchup);
    }
    if (this.gameType === 'Elemental') {
      this.checkElementalMatchups(matchup);
    }
    showWinnerView();
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
    render(this);
    renderLeftAside();
    renderRightAside();
  };

  checkClassicMatchups(matchup) {
    if (matchup.humanPlayer === 'rock' && matchup.computerPlayer === 'scissors' ||
    matchup.humanPlayer === 'paper' && matchup.computerPlayer === 'rock' ||
    matchup.humanPlayer === 'scissors' && matchup.computerPlayer === 'paper') {
      this.humanPlayer.wins++;
      this.winner = this.humanPlayer.name;
      return this.winner;
    } else if (matchup.humanPlayer === 'scissors' && matchup.computerPlayer ==='rock' ||
    matchup.humanPlayer === 'rock' && matchup.computerPlayer === 'paper' ||
    matchup.humanPlayer === 'paper' && matchup.computerPlayer === 'scissors' ) {
      this.computerPlayer.wins++;
      this.winner = this.computerPlayer.name;
      return this.winner;
    } else {
      this.winner = null;
      return;
    }
  };

  checkElementalMatchups(matchup) {
    if (matchup.humanPlayer === 'water' && matchup.computerPlayer === 'earth' ||
    matchup.humanPlayer === 'earth' && matchup.computerPlayer === 'fire' ||
    matchup.humanPlayer === 'fire' && matchup.computerPlayer === 'air' ||
    matchup.humanPlayer === 'air' && matchup.computerPlayer === 'water' ||
    matchup.humanPlayer === 'air' && matchup.computerPlayer === 'earth') {
      this.humanPlayer.wins++;
      this.winner = this.humanPlayer.name;
      return this.winner;
    } else if (matchup.humanPlayer === 'earth' && matchup.computerPlayer === 'water' ||
    matchup.humanPlayer === 'fire' && matchup.computerPlayer === 'earth' ||
    matchup.humanPlayer === 'air' && matchup.computerPlayer === 'fire' ||
    matchup.humanPlayer === 'water' && matchup.computerPlayer === 'air' ||
    matchup.humanPlayer === 'earth' && matchup.computerPlayer === 'air') {
      this.computerPlayer.wins++;
      this.winner = this.computerPlayer.name;
      return this.winner;
    } else {
      this.winner = null;
      return;
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
