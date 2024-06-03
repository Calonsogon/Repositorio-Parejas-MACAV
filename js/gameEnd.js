import { displayEndGameDialog } from "./uiControl.js";
import {  intervalID } from "./timer.js";
import { endGameSounds } from "./sound.js";
import { stopFireworks } from "./fireworks.js";
import { initializeGame } from "./gameInit.js";
import { resetPoints } from "./scoreManagment.js";


function endGame(outcome) {
    clearInterval(intervalID);
    const dialog = document.querySelector('dialog');

    displayEndGameDialog(dialog, outcome); 
    endGameSounds(outcome);
    dialog.showModal();
}


function restartGame(level, levels, intervalID, time){
    document.querySelector('dialog').close();
    stopFireworks();
    clearInterval(intervalID);
    resetPoints();
    initializeGame(level, levels, time);
}


export { endGame, restartGame }