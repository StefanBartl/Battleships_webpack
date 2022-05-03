import './style.css';

//#region Ship formation
const Battleship= require('../src/app-modules/ship');
const MS_BattleshipBrowser = new Battleship(2);
// MS_BattleshipBrowser.hit(1);
// MS_BattleshipBrowser.hit(2);
// console.log(MS_BattleshipBrowser.sunkenState());
// console.log(MS_BattleshipBrowser.type);
//#endregion

const Gameboard = require('./app-modules/gameboard');
const Gameboard_One = new Gameboard(10,6);
// console.log(Gameboard_One);
Gameboard_One.placement("corvette", [1, 2], [1, 3]);
Gameboard_One.receiveAttack(1,2);
Gameboard_One.receiveAttack(1,3);
console.log(Gameboard_One);

const container = document.querySelector(".container");
const text = document.createElement("p");
text.innerText = "Battleship project test text";
container.appendChild(text);


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
todo    
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

