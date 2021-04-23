var Game = require('./game.js');

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.fighter = undefined;
  }

  saveWinsToStorage() {
    //don't think I'll need to use JSON since the data is v simple
    localStorage.setItem()
  }

  retrieveWinsFromStorage() {
    //don't think I'll need to use JSON since the data is v simple
    localStorage.getItem()
  }

  takeTurn(game) {
    if (this.name === 'Human') {
      this.fighter = 'Water';
      //look at which radio button is checked
      //return which one is checked
      return this.fighter;
    } else if (this.name === 'Computer') {
      //var fighters = game.fighters
      //this.fighter = fighters[Math.floor(Math.random()*fighters.length)];
      this.fighter = 'Earth'
      return this.fighter
    }
  }
};

module.exports = Player;
