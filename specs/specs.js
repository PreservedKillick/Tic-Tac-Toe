describe("Player", function() {
  describe("initialize", function() {
    it("determines whether a player will be O", function() {
      var testPlayer = Object.create(Player);
      testPlayer.symbol = "O";
      testPlayer.symbol.should.equal("O");
    });
    it("determines whether a player will be X", function() {
      var testPlayer = Object.create(Player);
      testPlayer.symbol = "X";
      testPlayer.symbol.should.equal("X");
    }); 
  });
  describe("create", function() {
    it("creates a new instance of Player", function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("returns a space by it's coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2)
      testSpace.coordinateX.should.equal(1);
      testSpace.coordinateY.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new instance of Space", function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("fullCoordinates", function() {
    it("returns the set of full coordinates", function() {
      var testSpace = Space.create();
      testSpace.coordinateX = 1;
      testSpace.coordinateY = 2;
      testSpace.fullCoordinates().should.equal('1, 2');
    });
  });
  describe("markBy", function() {
    it("lets a player mark a space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1,2);
      testSpace.markBy(testPlayer);
      testSpace.mark.should.equal(testPlayer);
    });
  });
});
describe("Board", function() {
  describe("initialize", function() {
    it("creates a board with 9 spaces when initialized", function() {
    var testBoard = Object.create(Board);
    testBoard.initialize();    
    testBoard.allCoordinates[3].fullCoordinates().should.equal("2, 1");
    });
  });
  describe("create", function() {
    it("creates an instance of Board", function() {
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
});
describe("Game", function() {
  describe("initialize", function() {
    it("creates a game of tic tac toe with two players", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.players.length.should.equal(2);
      Player.isPrototypeOf(testGame.players[0]).should.equal(true);
    });
    it("creates a game with one board", function() {
      var testGame = Object.create(Game);
      var newBoard = Object.create(Board);
      testGame.initialize();
      testGame.newBoard.allCoordinates[3].fullCoordinates().should.equal("2, 1");
    });
  }); 
  describe("create", function() {
    it("creates an instance of Game", function() {
      var testGame = Object.create(Game);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe("nextMove", function() {
    it("indicates which player should go next", function() {
      var testGame = Object.create(Game);
      var testSpace = Object.create(Space);
      testGame.nextMove(testSpace.markBy("X")).should.equal("O");
    })
  })
});
   
