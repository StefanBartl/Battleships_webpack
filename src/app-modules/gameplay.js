const Gameplay = function (level, name){

    this.level = level;
    this.name = name;
    playerCounter = 0;
    roundCounter = 0;

    newPlayer = () => {playerCounter++}
    nextRound = () => {roundCounter++};

    return { level, name, newPlayer, playerCounter, nextRound, roundCounter };
};


module.exports = Gameplay;
