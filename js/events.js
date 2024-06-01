import { levels } from './levels.js';
import { initializeGame, flipCard } from './gameLogic.js';
import { startCountdown } from './timerAndPoints.js';

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');



document.addEventListener('DOMContentLoaded', () => {
    initializeGame(level, levels);
    const time = 60 * 2;
    startCountdown(time);
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            flipCard(levels, level, e.currentTarget);
        })
    }
    )
    
}
);


// const restartButton = document.querySelector(".restart-button");
// restartButton.addEventListener("click", () => {
//     clearInterval(countdownInterval);
//     initializeGame(level, levels);
//     const twoMinutes = 60 * 2;
//     startCountdown(twoMinutes);
// });

// const soundToggle = document.getElementById("sound-toggle");
// soundToggle.addEventListener("change", toggleSound);









