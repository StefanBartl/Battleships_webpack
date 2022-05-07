import './style.css';
// const Battleship= require('../src/app-modules/ship');
// const Gameboard = require('./app-modules/gameboard');
// const Player = require('../src/app-modules/player');
// const Gameplay = require('./app-modules/gameplay');
const MainGameLoop = require('./app-modules/maingameloop');


//#region Open Jobs  
/*
todo    Gameboard placement does not correspond with receivAttack - Axis are changed
*/
//#endregion


//#region User interface
// ? Declaration
const languageTranslate = document.querySelector(`.language-translate`);
const container = document.querySelector(`.container`);

// Headline
const page_headline = document.createElement(`h1`);
page_headline.classList.add(`page-headline`);
container.appendChild(page_headline);

// Start Game button
const startGame_btn = document.createElement(`button`);
startGame_btn.classList.add(`.start-game-btn`);
container.appendChild(startGame_btn);



//#endregion


//#region Main game 

startGame_btn.addEventListener(`click`, () => {
  MainGameLoop();
});

//#endregion



/* Example: Image  

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


//#region Language translation setup

// Get setted language from local storage or browser language and store it there
const language = localStorage.language || navigator.language;


// ? Setup Translation 
language[0] === "d" && language[1] === "e" ? localStorage.language = "de" : "en";

// ? Initial Translation
localStorage.language === "en" ? English() : German();

// ? Change Language
languageTranslate.addEventListener("click", ()=>{
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
});

//#endregion


//#region Language translation libraries

function English() {
  languageTranslate.innerText = `de.`;
  page_headline.innerText = `Battleship Online`;
  startGame_btn.innerText = `Start Game`;
  startGame_btn.title = `Click here to start the game`;
  startGame_btn.alt = `Button to start the game`;
};

function German() {
  languageTranslate.innerText = `en.`;
  page_headline.innerText = `Battleship Online`;
  startGame_btn.innerText = `Spiel starten`;
  startGame_btn.title = `Klicke um das Spiel zu starten`;
  startGame_btn.alt = `Button um das Spiel zu starten`;
};

//#endregion


//#region Factories

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
// const Gameboard_FirstComputer = new Gameboard(10,6, 'First Computer'); // ? Creates a new Gameboard with 10 rows / 6 columns for the player 'Test player'
// const Gameboard_TestPlayer = new Gameboard(10,6, 'Test Player');
// Gameboard_FirstComputer.enemyGameboardAdd(Gameboard_TestPlayer);
// Gameboard_TestPlayer.enemyGameboardAdd(Gameboard_FirstComputer);

// const FirstComputer = new Player('First Computer', false, Gameboard_FirstComputer, Gameboard_TestPlayer, Gameplay); // ? Create Player
// Gameboard_FirstComputer.placement("battleship", [1, 1], [3, 1]);  // ? Placing a battleship on the gameboard in the 1 column from row 3 to 5

// const TestPlayer = new Player('Test Player', true, Gameboard_TestPlayer, Gameboard_FirstComputer, Gameplay); 
// Gameboard_TestPlayer.placement("battleship", [3, 1], [5, 1]); 

// TestPlayer.humanAttack(2, 1);
// FirstComputer.cpuAttack();

//#endregion

//#endregion
