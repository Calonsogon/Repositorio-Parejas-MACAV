import { displayPoints } from "./uiControl.js";
import { endGame } from "./gameLogic.js";


let points = 0;
let intervalID;

// Starting and handling timer
function startCountdown(duration) {
    const timerElement = document.getElementById("timer");

    let timer = duration, minutes, seconds;

    intervalID = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalID);
            endGame('lost');
        }
    }, 1000);

    return intervalID ;
}


// Adding points to the board;

function addPoints() {
    points += 20;
    displayPoints(points);
}


export  { addPoints, startCountdown, intervalID}
