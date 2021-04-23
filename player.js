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
    console.log("it's human's turn")
    //choose your fighter
    //human chooses, computer is random selection
  }


};

//module.exports = Player;
