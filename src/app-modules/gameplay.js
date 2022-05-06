const Gameplay = function (){

    playerCounter = 0;
    roundCounter = 0;

    newPlayer = () => {playerCounter++}
    nextRound = () => {roundCounter++};

    return { newPlayer, playerCounter, nextRound, roundCounter };
};


module.exports = Gameplay;
