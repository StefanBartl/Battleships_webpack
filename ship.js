const TestShip = function (length) {
  // Ships will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk
  
    if(length < 1 || length === undefined) throw new Error("Ship must have a length.");
    this.length = length;

    // Setup the ship sections depending on ther length
    sections = {};
    for(let x = 1; x <= length; x++){
        sections[x] = "ok";
    };

    // Returns the actual states of the sections
    sectionsState = () => {
      actual_ship_state = {};
      for(let x = 1; x <= length; x++){
          actual_ship_state[`Section`+x] = sections[x];
      };
      return actual_ship_state;
    };

    // Returns the actual damage property
    damage = () => {
      damagedSections = 0;
      for(let x = 1; x <= length; x++){
          if(sections[x] === "hitted") damagedSections++;
      };
      return damagedSections;
    };

    // sunkenState should be a function that calculates it based on their length and whether all of their positions are ‘hit’. The result can be returned as boolean or as a string
    sunkenState = (asString)=>{
        if(damage() === length){
            if(asString === true) {return `This ship is sunken.`}
            else return true;
         } else if(asString === true){return `This ship isn't sunken.`}
            else return false;
    };
  
    // Ships should have a hit() function that takes a number and then marks that position as ‘hit’
     hit =  (section)=>{
       // Check for correct argument
        if(typeof section !== 'number' || section < 1 || section > length) throw new Error(`Only a 'number' between 1 an ${length} (ship length) is allowed.`);

        sections[section] = "hitted";   // console.log(`Section ${section} status: ${sections[section]}`);
        return `Ship hitted at section ${section}`;
    };

   return { length, damage, sectionsState, sunkenState, hit };
  };
  
  module.exports = TestShip;