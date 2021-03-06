import './style.css';
// const Battleship= require('../src/app-modules/ship');
// const Gameboard = require('./app-modules/gameboard');
// const Player = require('../src/app-modules/player');
// const Gameplay = require('./app-modules/gameplay');
const MainGameLoop = require('./app-modules/maingameloop');
const OpenInNewTab = require('./app-modules/openInNewTab');
import githubSVG from './graphics/icons/github/github-original-wordmark.svg';
import myLogoPNG from './graphics/icons/dev_logo.png';

//#region Open Jobs  
/*
todo    Gameboard placement does not correspond with receivAttack - Axis are changed
*/
//#endregion


//#region User interface
// ? Declaration
const languageTranslate = document.querySelector(`.language-translate`);
const startPage_container = document.querySelector(`.start-page-container`);

// Headline
const page_headline = document.createElement(`h1`);
page_headline.classList.add(`page-headline`);
startPage_container.appendChild(page_headline);

// Descriptio
const game_description = document.createElement(`p`);
game_description.classList.add(`game-description`);
startPage_container.appendChild(game_description);

// Choose player name
const player_name = document.createElement(`input`);
player_name.type = `text`;
player_name.minLength = 3;
player_name.maxLength = 15;
player_name.classList.add(`choose-name-input`);
startPage_container.appendChild(player_name);
if(localStorage.PlayerName !== undefined) player_name.value = localStorage.PlayerName;


// Start Game button
const startGame_btn = document.createElement(`button`);
startGame_btn.classList.add(`.start-game-btn`);
startPage_container.appendChild(startGame_btn);

// About section 
// Get and create images
const myLogo = new Image();
const githubLogo = new Image();
myLogo.src  = myLogoPNG;
githubLogo.src = githubSVG;
myLogo.classList.add(`myLogo`, `contact-logos`);
githubLogo.classList.add(`githubLogo`, `contact-logos`);
// Create wrapper & append elements
const section_about = document.createElement(`section`);
section_about.classList.add(`section-about`);
section_about.appendChild(myLogo);
section_about.appendChild(githubLogo);
startPage_container.appendChild(section_about);

//#endregion


//#region Main game 

startGame_btn.addEventListener(`click`, () => {
  // ? Name Validation and storing
  let PlayerName = document.querySelector(`.choose-name-input`).value;
  console.log(PlayerName);
  if(PlayerName.length < 3){
    alert(
    localStorage.language === "en" 
      ? `Player Name must be at least 3 characters long` 
      : `Der Spielername muss mindestens 3 Zeichen lang sein`
    )
    throw new RangeError(`Player name was ${PlayerName.length} characters long but must have at least 3 characters.`);
  };
  localStorage.PlayerName = PlayerName;
  
  MainGameLoop();
});

myLogo.addEventListener(`click`, () => {
  OpenInNewTab(`https://stefanbartl.github.io/Portfolio/`);
});
githubLogo.addEventListener(`click`, () => {
  OpenInNewTab(`https://github.com/StefanBartl/Battleships`);
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
  // Start Page
  languageTranslate.innerText = `de.`;
  page_headline.innerText = `Battleship Online`;
  game_description.innerText = `Welcome to 'Battleship Online'. 
  Choose your name and click the Start button to start the game. 
  You start at level 1`;
  player_name.title = `Choose your name`;
  startGame_btn.innerText = `Start Game`;
  startGame_btn.title = `Click here to start the game`;
  myLogo.title = `Click to go to my personal portfolio page`;
  githubLogo.title = `Click to go to this project's Github repository (including README file)`;
};

function German() {
  // Start page
  languageTranslate.innerText = `en.`;
  page_headline.innerText = `Battleship Online`;
  game_description.innerText = `Willkommen bei 'Battleship Online'. 
  W??hle deinen Namen und klicke auf den Start Button um das Spiel zu starten. 
  Du startest bei Level 1`;
  player_name.title = `W??hle deinen Namen`;
  startGame_btn.innerText = `Spiel starten`;
  startGame_btn.title = `Klicke um das Spiel zu starten`;
  myLogo.title = `Klicke um zu meiner pers??nlichen Portfolio-Seite zu kommen`;
  githubLogo.title = `Klicke um zum Github-Repository dieses Projects zu kommen (inklusive README-Datei)`;
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
