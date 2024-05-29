

import { levels } from './levels.js';
import { initializeGame, startCountdown, endGame } from './functions.js'; //no entiendo pq start.. y end.. no se enlazan



const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');

const card = document.querySelector('.card');

//botón reinicio listener
const restartButton = document.querySelector(".restart-button"); 
restartButton.addEventListener("click", () => { 
    clearInterval(countdownInterval);
    initializeGame(level, levels);
    const twoMinutes = 60 * 2;
    startCountdown(twoMinutes); 
});




document.addEventListener('DOMContentLoaded', initializeGame(level, levels));

card.addEventListener('click', flipCard();

