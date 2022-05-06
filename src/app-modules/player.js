const Player = function (name, human, enemy, game){

    // Argument validation
    if(typeof name !== 'string') throw new TypeError (`The name parameter must be a string.`);
    if(typeof game !== 'object' && game.constructor !== Object) 
        {throw new TypeError('The game parameter must be a "object".')}
         else { // Check if there are players open to play
             if(game.playerCount < 3) {game.newPlayer();}// Sign new player up if possible
                else throw new Error("No more players allowed.") // Or reject
            };  

    this.name = name;
    if(human === false){name = 'Computer'}
    this.enemy = enemy;
    this.game = game;


    // Players can take turns playing the game by attacking the enemy Gameboard.
    attack = (y, x) => {
        enemy.receiveAttack(y, x);
        game.nextRound();
    };

    // The game is played against the computer, so make ‘computer’ players capable of making random plays. 
    // The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

    return { name, human, enemy, attack}

};

module.exports = Player;

/* Assignment:
Create Player.
    - Players can take turns playing the game by attacking the enemy Gameboard.
    - The game is played against the computer, so make ‘computer’ players capable of making random plays. 
    The AI does not have to be smart, but it should know whether or not a given move is legal. 
    (i.e. it shouldn’t shoot the same coordinate twice).
*/