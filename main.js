import './scss/main.scss';

// Global variables
let score;
let roundScore;
let activePlayer;
let dice;
let finalScore;
let gameInProgress;

init();

// Schovat kostku před začátkem hry
document.querySelector('.dice-wrap').style.display = 'none';

document.querySelector('.btn-play').addEventListener('click', function() {
    if (gameInProgress) {
        // Náhodné číslo 1-6 pro kostku
        dice = Math.floor(Math.random() * 6) + 1;

        // Zobrazit kostku
        let diceDOM = document.querySelector('.dice-wrap');
        diceDOM.style.display = "block";

        // Přidání obrázku kostky
        document.querySelector('.dice').src = "images/dice-" + dice + ".svg";

        // Aktualizovat body v aktuálním kole
        if (dice !== 1) {
            // Přidat body
            roundScore += dice;
            document.querySelector('#round-score-' + activePlayer).textContent = roundScore;
        } else {
            // Přepnout hráče
            nextPlayer();
        }
    }
});

document.querySelector('.btn-stop').addEventListener('click', function() {
    if (gameInProgress) {
         // Přidat současné body do celkového score
        score[activePlayer] += roundScore;

        // Aktualizovat UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        // Zkontrolovat za hráč již nevyhrál
        if (score[activePlayer] >= finalScore) {
            // Vítězný hráč
            document.querySelector('#player-name-' + activePlayer).textContent = "Vítěz :)";
            document.querySelector('.player-' + activePlayer).classList.remove('active');
            document.querySelector('.player-' + activePlayer).classList.add('winner');
            document.querySelector('.dice-wrap').style.display = 'none';

            gameInProgress = false;

            document.querySelector('.btn-play').classList.add('disabled');
            document.querySelector('.btn-stop').classList.add('disabled');
        } else {
            // Přepnout hráče
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Přepnout hráče
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Vynulovat body v kole pokud hráč klikne na Stop
    document.getElementById('round-score-0').textContent = "0";
    document.getElementById('round-score-1').textContent = "0";

    // Změnit aktivní class u hráčů
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
}

document.querySelector('#new-game').addEventListener('click', init);

function init() {
    // Reset hry
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    finalScore = 25;
    gameInProgress = true;

    document.querySelector('.dice-wrap').style.display = 'none';
    // Vynulovat score před začátkem hry
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('round-score-0').textContent = "0";
    document.getElementById('round-score-1').textContent = "0";

    document.querySelector('#player-name-0').textContent = "Hráč 1";
    document.querySelector('#player-name-1').textContent = "Hráč 2";

    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');

    document.querySelector('.player-0').classList.add('active');

    document.querySelector('.btn-play').classList.remove('disabled');
    document.querySelector('.btn-stop').classList.remove('disabled');

}

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
