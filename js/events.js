import { levels } from './levels.js';
import { initializeGame, flipCard } from './gameLogic.js';
import { intervalID } from './timer.js';


const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');

let cards = document.querySelectorAll(".card");

document.addEventListener('DOMContentLoaded', () => {
    initializeGame(level, levels);
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            flipCard(levels, level, e.currentTarget);
        })
    }
    )
}
);

const restartButton = document.querySelectorAll('#restart-game');

restartButton.forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(intervalID);
        initializeGame(level, levels)
        let cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            console.log(e.currentTarget)
            card.addEventListener("click", (e) => {
                flipCard(levels, level, e.currentTarget);
            })
        }
        )
    });
}

)










