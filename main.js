import './scss/main.scss';

// Global variables
let dice;

// Dice
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('.dice').src = "images/dice-" + dice + ".svg";


// Pravidla hry
let gameRules = document.querySelector('.game-rules');

// Otevřít pravidla hry
let openBtn = document.querySelector('.btn-open');
openBtn.addEventListener('click', function(e) {
    gameRules.classList.add('show');
});

// Zavřít pravidla hry
let closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', function(e) {
    gameRules.classList.remove('show');
});

// Footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();
