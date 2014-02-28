var Game = {
  
  initialize: function() {
    this.players = [];
    this.players.push(Player.create('X'));
    this.players.push(Player.create('O'));
    this.newBoard = Board.create();

    this.playerXArray = [];
    this.playerOArray = [];
  },
    
  create: function() {
    var game = Object.create(Game);
    game.initialize();
    return game;
  },
};

var Player = {
  initialize: function(symbol) {
    this.symbol = symbol;
  },
  create: function(symbol) {
    var player = Object.create(Player);
    player.initialize(symbol);
    return player;
  }
};

var Space = {
  initialize: function(coordinateX, coordinateY) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  },
  create: function(coordinateX, coordinateY) {
    var space = Object.create(Space);
    space.initialize(coordinateX, coordinateY);
    return space
  },
  fullCoordinates: function(coordinateX, coordinateY) {
    return this.coordinateX + ", " + this.coordinateY;
  },
  markBy: function(symbol) {
    this.mark = symbol;
  }
};

var Board = {
  create: function() {
    var board = Object.create(Board);
    board.initialize();
    return board
  },

  initialize: function() {
    this.allCoordinates = [];
    for (var x = 1; x <= 3; x++) {
      for (var y =1; y <= 3; y++) {
        this.allCoordinates.push(Space.create(x, y));
      }
    }
  }
}

