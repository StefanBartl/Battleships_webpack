import './style.css';
const Battleship= require('../src/app-modules/ship');
const Gameboard = require('./app-modules/gameboard');
const Player = require('../src/app-modules/player');
const Gameplay = require('./app-modules/gameplay');

const Game = new Gameplay(1, "Welcome to Battleship"); // Game object which holds information about the game

//#region Ship factory
// const Battleship= require('../src/app-modules/ship');
// const MS_BattleshipBrowser = new Battleship(2); // ? Create a new ship. The type depends on the length.
// MS_BattleshipBrowser.hit(1); // ? Hit a ship (Returns a error if the argument isn't in the range of ship length)
// console.log(MS_BattleshipBrowser.type); // ? Returns the ship type
// console.log(MS_BattleshipBrowser.sunkenState()); // ? Returns if the ship is sunken
//#endregion

//#region  Gameboard factory
//const Gameboard = require('./app-modules/gameboard');
// const Gameboard_One = new Gameboard(10,6, 'Test player'); // ? Creates a new Gameboard with 10 rows / 6 columns for the player 'Test player'
// Gameboard_One.placement("battleship", [3, 1], [5, 1]);  // ? Placing a battleship on the gameboard in the 1 column from row 3 to 5
// Gameboard_One.receiveAttack(3,1); // ? Attack the gameboard
// console.log(Gameboard_One.shipFormation[0].sectionsState()); // ? Returns the ship sections
// console.log(Gameboard_One.receiveAttack(1,3)); // ? Returns if the attack hits a ship (maybe which section?   )
// console.log(Gameboard_One.alive()); // ? Returns if ships are on the gameboard
//#endregion

//#region Player factory
//const Player = require('../src/app-modules/player');
// ! Create Game
const Gameboard_FirstComputer = new Gameboard(10,6, 'First Computer'); // ? Creates a new Gameboard with 10 rows / 6 columns for the player 'Test player'
const Gameboard_TestPlayer = new Gameboard(10,6, 'Test Player');

const FirstComputer = new Player('First Computer', false, Gameboard_TestPlayer, Game); // ? Create Player
Gameboard_FirstComputer.placement("battleship", [3, 1], [5, 1]);  // ? Placing a battleship on the gameboard in the 1 column from row 3 to 5

const TestPlayer = new Player('Test Player', true, Gameboard_FirstComputer, Game); 
Gameboard_TestPlayer.placement("battleship", [3, 1], [5, 1]); 





// TestPlayer.attack(3,1); // ? Attacks the enemy
// let e = Gameboard_TestEnemy.receiveAttack(4, 1); // Get the attacked ship object 
// console.log('Section state of attacked ship: ',  e.ship.sectionsState()); // ? Get the actual section state of the attacked enemy ship 
// console.log('Health: ', e.ship.health()); // ? Get the health of the attacked enemy ship 
// console.log('Players enemy gameboard: ', TestPlayer.enemy.gameboard); // ? Get the actual gameboard of the enemy


//#endregion



//#region User interface
const container = document.querySelector(".container");
const text = document.createElement("p");
text.innerText = "Battleship project test text";
container.appendChild(text);
//#endregion

// ? Example: Image  
/*
import aircraftICO from './graphics/icons/aircraft.ico';
const aircraft = new Image();
aircraft.src = aircraftICO;
container.appendChild(aircraft);
*/


//#region Table of Content
/*
!                         Battleships Main-Javascript-File
?                                      powered by
!                                      Stefan Bartl
!                        (WKDSteVIE / WKDMinerva)
?                                            2022             
?                  ________________________________                                                                                                                                                                                                  
!                                     Table of content              
?                                       -) Language     
?                                       -)  Open Jobs
todo                 Javascript - what a wonderful language!
*/
//#endregion


//#region Open Jobs  
/*
todo    Gameboard placement does not correspond with receivAttack - Axis are changed
*/
//#endregion


//#region Declaration

// ? Language translation
// Get setted language from local storage or browser language and store it there
const language = localStorage.language || navigator.language;
const languageText = document.querySelector(".language-translate");


//#endregion


//#region Language & Translation

// ? Setup Translation 
language[0] === "d" && language[1] === "e" ? localStorage.language = "de" : "en";


// ! Libraries
// If the page have less text, do library here in script.js
function English() {
}

function German() {
}

// ? Initial Translation
localStorage.language === "en" ? English() : German();

// ? Change Language
languageText.addEventListener("click", ()=>{
  // Check for the actual language
  if(localStorage.language === "en"){
    // Invoke opposite language
    German();
    // Store new language in localStorage
    localStorage.language = "de";
  } else {
    English();
    localStorage.language = "en";
  };
})

//#endregion

