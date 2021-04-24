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
      return wins = 0;
    }
    return parsedWins
  }

  // retrieveWinsFromStorage() {
  //   var keys = ['Human','Computer'];
  //   var wins = ;
  //   for (var i = 0; i < keys.length; i ++) {
  //     var player = localStorage.getItem(this.name);
  //     var parsedPlayer = JSON.parse(player);
  //     wins.push(parsedPlayer);
  //   }
  //   if (!wins)) {
  //     return wins = [0,0];
  //   }
  //   return wins
  // }

  takeTurn(game) {
    if (this.name === 'Human') {
      return this.fighter;
    } else if (this.name === 'Computer') {
      var fighters = game.fighters
      this.fighter = fighters[Math.floor(Math.random()*fighters.length)];
      return this.fighter
    }
  }
};
