
// ? Ship Object (is it better a class?)
const Ship = function (length, damage, sunken) {
// Ships will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk

    if(length < 1 || length === undefined) throw new Error("Ship must have a length.");
    
    // Declare arguments
    this.length = length;
    this.damage = damage;
    this.sunken = sunken;

    // Setup the ship sections depending on ther length
    let sections = {};
    for(let x = 1; x <= length; x++){
        sections[x] = "ok";  // console.log(sections) // console.table(sections)
    };

    // Ships should have a hit() function that takes a number and then marks that position as ‘hit’
     this.hit =  (section)=>{
        sections[section] = "hitted";   // console.log(`Section ${section} status: ${sections[section]}`);
        // Check for final hit
        if(this.isSunk() === true){
            sunken = true;  // console.log(`Ship sunken: ${sunken}.`);
        }
    };

    // isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.
    this.isSunk = ()=>{
        return new Set(Object.values(sections)).size === 6; // Creates a array from the values, a new set and lastly check if every value have a size of 6, which is 'hitted'. Finally returns true.
    };

    return { length, damage, sunken, sections, hit, isSunk };
};

// ? Gameboard Object
const Gameboard = function (size){
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

    // Create new set of ships
    const cruser1 = Ship(1, 0, false);
    const cruser2 = Ship(1, 0, false);
    const corvette1 = Ship(2, 0, false);
    const corvette2 = Ship(2, 0, false);
    const battleship = Ship(3, 0, false);
    const aircraftCarrier = Ship(4, 0, false);

    // Create Gameboard
    let gameboard = [];
    for(let x = 1; x <= size; x++){
        let row = [];
        for(let y = 1; y <= size; y++){
            row.push(0);
        };
        gameboard.push(row);
    };
    // console.table(gameboard);

    //Gameboards should be able to place ships at specific coordinates by calling the ship factory function.


    // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    this.receiveAttack = ()=>{

    };

    // Gameboards should keep track of missed attacks so they can display them properly.
    // Gameboards should be able to report whether or not all of their ships have been sunk.


    return { gameboard };
};

// ? Player Object
const Player = function (){

    // Players can take turns playing the game by attacking the enemy Gameboard.
    // The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

};

// ! Test calls:
a = new Gameboard(25);

module.exports = Ship;