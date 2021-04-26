class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = undefined;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    var wins = localStorage.getItem(this.name);
    var parsedWins = JSON.parse(wins);
    if (!wins) {
      return this.wins = 0;
    }
    this.wins = parsedWins;
    return this.wins;
  }

  takeTurn(game) {
    if (this.name === 'Human') {
      return this.fighter;
    } else if (this.name === 'Computer') {
      var fighters = game.fighters;
      this.fighter = fighters[Math.floor(Math.random()*fighters.length)];
      return this.fighter;
    }
  }
};
