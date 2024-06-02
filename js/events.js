import { levels } from './levels.js';
import { initializeGame } from './gameInit.js';
import { intervalID } from './timer.js';
import { restartGame } from './gameEnd.js';



const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');
let time = 60 * 2;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame(level, levels, time);
}
);


document.addEventListener('click', function(event) {
    if (event.target.id === 'restart-game') {
        restartGame(level, levels, intervalID, time);
    }
});











