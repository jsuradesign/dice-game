import './scss/main.scss';

// Global variables
let dice;

// Dice
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('.dice').src = "images/dice-" + dice + ".svg";

// Footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();
