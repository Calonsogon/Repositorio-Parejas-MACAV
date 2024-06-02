import { startCountdown } from "./timer.js";
import { displayCards } from "./uiControl.js";
import { flipCard } from "./gamePlay.js";


function initializeGame(level, levelData, time) {
    const currentLevel = levelData[level];
    const shuffledCards = shuffle(currentLevel.data);
    displayCards(shuffledCards, level);
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            flipCard(levelData, level, e.currentTarget);
        })
    }
    )
    startCountdown(time);
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}



export { initializeGame }