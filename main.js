import './scss/main.scss';

// Global variables
let dice;

// Dice
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('.dice').src = "images/dice-" + dice + ".svg";


// Pravidla hry
let gameRules = document.querySelector('.game-rules');

// Otevřít
let openBtn = document.querySelector('.btn-open');
openBtn.addEventListener('click', function(e) {
    gameRules.classList.add('show');
});

// Zavřít
let closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', function(e) {
    gameRules.classList.remove('show');
    console.log("click");
});

// Footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();
