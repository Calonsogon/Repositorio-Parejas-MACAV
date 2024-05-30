import { levels } from './levels.js';
import { initializeGame, startCountdown } from './functions.js';

import { endGame, increasePoints, updatePointsDisplay, toogleSound } from "./functions.js";//no entiendo pq increa.. y end.. no se enlazan

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');

//DOM cargado
document.addEventListener('DOMContentLoaded', () => {
    initializeGame(level, levels);
    const twoMinutes = 60 * 2;
    startCountdown(twoMinutes);
});

//click cartas
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", flipCard);
});

//const card = document.querySelector('.card');

//botón reinicio listener
const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    initializeGame(level, levels);
    const twoMinutes = 60 * 2;
    startCountdown(twoMinutes);
});

//Toggle sonido
const soundToggle = document.getElementById("sound-toggle");
soundToggle.addEventListener("change", toogleSound);




//card.addEventListener('click', flipCard());



