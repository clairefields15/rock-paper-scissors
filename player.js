var Game = require('./game.js');

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    //don't think I'll need to use JSON since the data is v simple
    localStorage.setItem()
  }

  retrieveWinsFromStorage() {
    //don't think I'll need to use JSON since the data is v simple
    localStorage.getItem()
  }

  takeTurn() {
    if (this.name === 'Human') {
      const fighter = 'Rock';
      //look at which radio button is checked
      //return which one is checked
      return fighter;
    } else if (this.name === 'Computer') {
      const fighter = 'Paper'
      return fighter
      //var fighters = Game.fighters
      //console.log(fighters[Math.floor(Math.random()*fighters.length)]);

    }
  }
};

module.exports = Player;
