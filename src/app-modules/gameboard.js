const Ship = require('./ship');

const Gameboard = function (sizeX, sizeY, player){

        this.sizeX = sizeX; // X-axis length
        this.sizeY = sizeY; // Y-axis length
        this.player = player; // Owner of the Gameboard object
        shipIDCounter = 1; // Unique ship ID
        shipFormation = []; // Stores all ships
        formationCounter = 0;  // Gameboards should be able to report whether or not all of their ships have been sunk.
        attackCount = 1; // Count al attacks and to keep track which account was failed
        missedAttacks = {};  // Gameboards should keep track of missed attacks so they can display them properly.

        // Create a new Gameboard
        let gameboard = [];
        for(y = 1; y <= sizeY; y++){
            let row = [];
            for(x = 1; x <= sizeX; x++){
                row.push(0);
            };
            gameboard.push(row);
        };

        placement = (type, start, end) => {

            // Argument validation
            if(typeof type !== 'string') throw new TypeError('Only the strings "cruiser", "corvette", "battleship" or "aircraft-carrier" are allowed as ship type. Default is "cruiser".')
            if(Array.isArray(start) === false || Array.isArray(end) === false) throw new TypeError(`Only 'arrays' are allowed as start & end arguments.`);
            if(start.length + end.length !== 4) throw new Error('In each placement array 2 values are allowed: The x and the y coordinate values.');

            //  Create new ship for placement
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
            };
            // Finalize ship 
            newShip.ID = shipIDCounter;
            newShip.Owner = player;
            shipFormation.push(newShip);
            formationCounter++;

            // Validate if placement correspond to ship length
            if(start[0] === end[0]){ // Check direction of the placement: Ship length to Y-axis, like |
                // f.e. if placement is: start 1/2 to end 1/3, get the y coordinates (2&3) & subtract it from each other. This have to be the exact value of the ship length minus 1. If this value is positive or negative depends if the coordinates are f.e. 1/2 to 1/3 or 1/2 to 1/1.  
                if(start[1] - end[1] !== -(newShip.length -1) && start[1] - end[1] !== (newShip.length -1)) throw new Error(`Placement coordinates do not correspond with ship length. For ${newShip.type} the coordinates only can differ ${newShip.length} fields.`)
            };
            // Same as above but if the placement is in  the other direction.   
            if(start[1] === end[1]){ // Check direction of the placement: Ship length to X-axis, like -- 
                if(start[0] - end[0] !== -(newShip.length -1) && start[0] - end[0] !== (newShip.length -1)) throw new Error(`Placement coordinates do not correspond with ship length. For ${newShip.type} the coordinates only can differ ${newShip.length} fields.`)
            };

             //  Make the placement in gameboard array
            correctPlacement = false; 
            section = 1; 
             if(start[0] === end[0]){ // Get the placement direction
                    for(y = start[1]; y <= end[1]; y++){ // Number of fields for placement
                        row = gameboard[y]; // Get corect row in array
                        row[start[0]] = {ID: shipIDCounter, Type: type, Section: section}; // a[start[0]] is the actual field of the placement, set ship informations there
                        section++; // Ship section is placed on the gameboard
                    };
                    correctPlacement = true; // If ship is correct placed on gameboard, placement is done
            };         
            if(start[1] === end[1]){ // Same as above but in the other axis
                for(x = start[0]; x <= end[0]; x++){
                    row = gameboard[x]; 
                    row[start[1]] = {ID: shipIDCounter, Type: type, Section: section}; 
                    section++; 
                };
                correctPlacement = true;
            };       
            shipIDCounter++; // Increase shipID counter so the next ship have a own ID

            // Inform invoker of placement
            if  (correctPlacement === true) {
                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}.`); 
                return  `Placement of ${type} fullfilled: ${correctPlacement}. Coordinates: Start X${start[0]}/Y${start[1]}, End X${end[0]}/Y${end[1]}`;
            } else {
                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`);
                return `Placement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`; 
            };
        };
    
        // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
        receiveAttack = (x, y)=>{

            // Argument validation
            if(typeof x !== 'number' || typeof y !== 'number') throw new TypeError(`Only 'numbers' are allowed`);
            if(x > sizeX || y > sizeY || x < 0 || y < 0) throw new Error(`Only coordinates between 0 and the gameboard size are allowed. (${sizeX}/${sizeY}).`);

            // Get the attacked cell in the gameboard
            gameboard_row = gameboard[y];
            // If the attacked cell is not empty...
            if(gameboard_row[x] !== 0) {
                // Set gameboard cell to hitted
                gameboard_row[x].hitted = true;
                // Get the attacked ship and hit it
                attackedShip = shipFormation[gameboard_row[x].ID - 1];
                attackedShip.hit(gameboard_row[x].Section);

        //  Return if a ship get hitted or maybe the whole formation is erased by the attack
                //  If all ships in formation are sunken, return this
                for(let x of shipFormation){
                    if(x.sunkenState() === true){
                        formationCounter--;
                        if(formationCounter === 0){
                            alive = false;
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

        // Returns if there are ships on the gameboard or not
        alive = () => {
            if(formationCounter > 0) 
                {return true}
                else return false; 
        };

        return { gameboard, placement, receiveAttack, attackCount, missedAttacks, shipFormation, formationCounter, alive };
};

module.exports = Gameboard;

/* Assignment:
Create Gameboard factory
    - Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. 
    You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
    - Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
    - Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship 
    and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    - Gameboards should keep track of missed attacks so they can display them properly.
    - Gameboards should be able to report whether or not all of their ships have been sunk.
*/