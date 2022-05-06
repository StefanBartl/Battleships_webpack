// ! Test Setup
const Player = require('./player');
const Game = require('./gameplay');
const Gameboard = require('./gameboard');
const TestGame = new Game(1, "Test Game");
const EnemyTestGameboard = new Gameboard(10, 10, 'Test');
EnemyTestGameboard.placement("battleship", [3, 1], [5, 1]); 
const TestPlayer = new Player("Test", true, EnemyTestGameboard, TestGame);


test('Players can take turns playing the game by attacking the enemy Gameboard.', () => {
    expect(TestPlayer.attack(4,1).ship).not.toBe(false); // Get a object back with a string and the attacked ship
});


/* Assignment:
Create Player.
    - Players can take turns playing the game by attacking the enemy Gameboard.
    - The game is played against the computer, so make ‘computer’ players capable of making random plays. 
    The AI does not have to be smart, but it should know whether or not a given move is legal. 
    (i.e. it shouldn’t shoot the same coordinate twice).
*/