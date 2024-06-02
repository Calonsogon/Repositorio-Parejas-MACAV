import { endGame } from "./gameEnd.js";
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


export  { startCountdown, intervalID}
