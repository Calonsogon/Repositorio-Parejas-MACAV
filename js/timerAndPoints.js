import { displayPoints } from "./uiControl.js";
import { endGame } from "./gameLogic.js";


let points = 0;

// Starting and handling timer
function startCountdown(duration) {
    const timerElement = document.getElementById("timer");
    let countdownInterval;

    let timer = duration, minutes, seconds;

    countdownInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            endGame('lost');
        }
    }, 1000);
}



function addPoints() {
    points += 20;
    displayPoints();
}


export  { addPoints, startCountdown }
