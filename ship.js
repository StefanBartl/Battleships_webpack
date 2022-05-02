  // ? Ship Object
const TestShip = function (length, damage) {
  // Ships will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk
  
    if(length < 1 || length === undefined) throw new Error("Ship must have a length.");
 
    // Declare arguments
    this.length = length;
    this.damage = damage;
   
    // Setup the ship sections depending on ther length
    let sections = {};
    for(let x = 1; x <= length; x++){
        sections[x] = "ok";  // console.log(sections) // console.table(sections)
    };

    // isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.
    sunkenState = (asString)=>{
        // Creates a array from the values of 'sections' (value can be ok or hitted), than a new set of it and lastly check if every value have a size of 6, which is 'hitted'. Finally returns true if every section is 'hitted'.
        if((new Set(Object.values(sections)).size === 6) === true){
            if(asString === true) {return `This ship is sunken.`}
            else return true;
         } else if(asString === true){return `This ship isn't sunken.`}
            else return false;
    };
  
    // Ships should have a hit() function that takes a number and then marks that position as ‘hit’
     hit =  (section)=>{
        sections[section] = "hitted";   // console.log(`Section ${section} status: ${sections[section]}`);
        return `Ship hitted at section ${section}`;
    };

   return { length, damage, sunkenState, hit };
  };
  
  module.exports = TestShip;