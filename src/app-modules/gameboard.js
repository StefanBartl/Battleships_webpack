const Ship = require('./ship');

const Gameboard = function (sizeX, sizeY){
    // Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    
        // Create a new Gameboard
        let gameboard = [];
        for(y = 1; y <= sizeY; y++){
            let row = [];
            for(x = 1; x <= sizeX; x++){
                row.push(0);
            };
            gameboard.push(row);
        };
        
        shipIDCounter = 1;
        shipFormation = [];
        attackCount = 1;
        missedAttacks = {};  // Gameboards should keep track of missed attacks so they can display them properly.
        // Gameboards should be able to report whether or not all of their ships have been sunk.
        formationCounter = 0;
        destroyed = false;     

        placement = (type, start, end) => {
            // Vailadtion of arguments
            if(typeof type !== 'string') throw new TypeError('Only the strings "cruiser", "corvette", "battleship" or "aircraft-carrier" are allowed as ship type. Default is "cruiser".')
            if(Array.isArray(start) === false || Array.isArray(end) === false) throw new TypeError(`Only 'arrays' are allowed as start & end arguments.`);

            // Create a new ship
            switch (type) {
                case 'cruiser':
                    newShip = Ship(1);
                    break;
                case 'corvette':
                    newShip = Ship(2);
                    break;
                case 'battleship':
                    newShip = Ship(3);
                    break;
                case 'aircraft-carrier':
                    newShip = Ship(4);
                    break;
                default:
                    newShip = Ship(1);
                    break;
            };
            newShip.ID = shipIDCounter;
            shipFormation.push(newShip);
            formationCounter++;

             // Make the placement in the gameboard array
            correctPlacement = false;
            section = 1;
             if(start[0] === end[0]){
                    for(y = start[1]; y <= end[1]; y++){
                        a = gameboard[y];
                        a[start[0]] = {ID: shipIDCounter, Type: type, Section: section};
                        section++;
                    };
                    correctPlacement = true;
            };         
            if(start[1] === end[1]){
                for(x = start[0]; x <= end[0]; x++){
                    a = gameboard[start[1]];
                    a[x] = shipIDCounter;
                };
                correctPlacement = true;
            };       
            shipIDCounter++;

            // Set Gameboard back to alive
            if(destroyed === true) destroyed = false;
            // Inform invoker of placement
            if  (correctPlacement === true) {
                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}.`); 
                return  `Plaement of ${type} fullfilled: ${correctPlacement}.`;
            } else {
                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`);
                return `Plaement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`; 
            };
        };
    

        // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
        receiveAttack = (x, y)=>{
            if(typeof x !== 'number' || typeof y !== 'number') throw new TypeError(`Only 'numbers' are allowed`);
            // Get the attacked cell in the gameboard
            gameboard_row = gameboard[y];
            attackedCell = gameboard_row[x];

            // If the attacked cell is not empty...
            if(attackedCell !== 0) {
                // Set gameboard cell to hitted
                attackedCell.hitted = true;
                // Get the attacked ship and hit it
                attackedShip = shipFormation[attackedCell.ID - 1];
                attackedShip.hit(attackedCell.Section);

        // ? Return if a ship get hitted or the whole formation is erased
                //  If all ships in formation are sunken, return this
                for(let x of shipFormation){
                    if(x.sunkenState() === true){
                        formationCounter--;
                        if(formationCounter === 0){
                            destroyed = true;
                            console.log(`Attach hitted & destroyed last ship!`);
                            return `Attach hitted & destroyed last shipt!`;
                        };
                    };
                };
                    // If the attack hitted a ship, return this
                    console.log(`Attack hitted a ship`);
                    return `Attack hitted a ship`;
                } else {
                    // If the attack didn't hit a ship, return this and keep track of missed attacks
                    missedAttacks[attackCount] = [x, y];
                    console.log(`Attack didn't hitted a ship`);
                    return `Attack didn't hitted a ship`;
                };
        };

        return { gameboard, placement, receiveAttack, attackCount, missedAttacks, formationCounter, destroyed };
};

module.exports = Gameboard;