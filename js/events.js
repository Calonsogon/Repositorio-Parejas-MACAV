import { levels } from './levels.js';
import { initializeGame, restartGame } from './gameLogic.js';
import { intervalID } from './timer.js';



const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');


document.addEventListener('DOMContentLoaded', () => {
    initializeGame(level, levels);
}
);


document.addEventListener('click', function(event) {
    if (event.target.id === 'restart-game') {
        restartGame(level, levels, intervalID);
    }
});











