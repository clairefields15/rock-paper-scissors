class Game {
  constructor(gameType) {
    this.humanPlayer = new Player('Human', 'human');
    this.computerPlayer = new Player('Computer', 'robot');
    this.gameType = gameType;
    this.fighters = [];
    this.winner = undefined;
    this.winConditions = {
      scissors: 'paper',
      paper: 'rock',
      rock: 'scissors',
      water: 'earth',
      earth: 'fire',
      fire: 'air',
      air: ['water', 'earth']
    }
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
    this.checkForWinner(humanFighter, computerFighter);
  };

  checkForWinner(human, computer) {
    if (this.winConditions[human].includes(computer)) {
      this.winner = this.humanPlayer.name;
      this.humanPlayer.wins++;
    } else if (this.winConditions[computer].includes(human)) {
      this.winner = this.computerPlayer.name;
      this.computerPlayer.wins++
    } else {
      this.winner = null;
    }
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
    render(this);
  };

  resetGameBoard() {
    this.humanPlayer.fighter = undefined;
    this.computerPlayer.fighter = undefined;
    this.matchup = {humanPlayer: null, computerPlayer: null};
    this.winner = undefined;
    startNewGame();
  }
};
