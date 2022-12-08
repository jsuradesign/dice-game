import './scss/main.scss';

// Global variables
let score;
let roundScore;
let activePlayer;
let dice;
let finalScore;

score = [0, 0];
roundScore = 0;
activePlayer = 0;
finalScore = 25; // Bude 100

// Dice
// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('.dice').src = "images/dice-" + dice + ".svg";

// Schovat kostku před začátkem hry
document.querySelector('.dice-wrap').style.display = 'none';

// Vynulovat score před začátkem hry
document.getElementById('score-1').textContent = "0";
document.getElementById('score-2').textContent = "0";
document.getElementById('round-score-0').textContent = "0";
document.getElementById('round-score-1').textContent = "0";

// Skŕe v kole
// document.querySelector('.round-score-score').textContent = dice;


//
document.querySelector('.btn-play').addEventListener('click', function() {
    console.log('Click on play button');
    dice = Math.floor(Math.random() * 6) + 1;

    // Zobrazit kostku
    let diceDOM = document.querySelector('.dice-wrap');
    diceDOM.style.display = "block";
    // Přidání obrázku
    document.querySelector('.dice').src = "images/dice-" + dice + ".svg";

    // Aktualizovat body v aktuálním kole
    if (dice !== 1) {
        // Přidat body
        roundScore += dice;
        document.querySelector('#round-score-' + activePlayer).textContent = roundScore;
        // console.log(`Aktivní hráč: ${activePlayer}`);
        // console.log(`Bodů v tomto kole: ${roundScore}`);
    } else {
        // Přepnout hráče
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('round-score-0').textContent = "0";
        document.getElementById('round-score-1').textContent = "0";

        document.querySelector('.player-one').classList.toggle('active');
        document.querySelector('.player-two').classList.toggle('active');
    }
});

// Pravidla hry
// let gameRules = document.querySelector('.game-rules');

// Otevřít pravidla hry
// let openBtn = document.querySelector('.btn-open');
// openBtn.addEventListener('click', function(e) {
//     gameRules.classList.add('show');
// });

// Zavřít pravidla hry
// let closeBtn = document.querySelector('.btn-close');
// closeBtn.addEventListener('click', function(e) {
//     gameRules.classList.remove('show');
// });

// Footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();
