import './style.css';

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