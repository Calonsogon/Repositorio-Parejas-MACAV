import { displayCards } from "./uiControl.js";

let cardsChosen = [];
let cardsChosenId = [];
let cardsMatched = [];

function initializeGame(level, levelData) {
    const currentLevel = levelData[level]
    const shuffledCards = shuffle(currentLevel.data);
    displayCards(shuffledCards, level);
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

function flipCard(levels, level, target) {
    let cardId = target.getAttribute('data-id');
    const currentLevel = levels[level];
    const card = currentLevel.data[cardId];

    const cardImg = target.querySelector('img');
    cardImg.setAttribute('src', card.url);

    cardsChosen.push(card.url);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch(currentLevel), 2000);
    }
}



function checkForMatch(currentLevel) {
    const cards = document.querySelectorAll('.card img');

    const firstCard = cards[cardsChosenId[0]];
    const secondCard = cards[cardsChosenId[1]];

    if (cardsChosen[0] === cardsChosen[1]) {
        firstCard.parentElement.removeEventListener('click', flipCard);
        secondCard.parentElement.removeEventListener('click', flipCard);
        checkIfAllCardsMAtched(currentLevel, firstCard);
        checkIfAllCardsMAtched(currentLevel, secondCard);

    } else {
        firstCard.setAttribute('src', './assets/images/back-cardpng.png');
        secondCard.setAttribute('src', './assets/images/back-cardpng.png');
    }
    cardsChosen.length = 0;
    cardsChosenId.length = 0;

}

function endGame(outcome) {
    const popUp = document.querySelector('dialog');
    console.log('I am here')
    if (outcome === 'win') {
        popUp.innerHTML = `
            <h2> Cogratulations!<br/>You're the winner!</h2>
            <img src = "./assets/images/winner2.png" alt = "winner_image">
            <div class="button-wrapper">
                <div class="button">
                    <a class="button-content" href=>Restart</a>
                </div>
                <div class="button">
                    <a class="button-content" href="./index.html">Exit</a>
                </div>
            </div>
            `
    } else {
        popUp.innerHTML = `
        <h2> Cogratulations!<br/>You're the winner!</h2>
        <img src = "./assets/images/looser.png" alt = "looser_image">
        <div class="button-wrapper">
            <div class="button">
                <a class="button-content" href=>Restart</a>
            </div>
            <div class="button">
                <a class="button-content" href="./index.html">Exit</a>
            </div>
        </div>
        `

    }
    popUp.showModal()

}


function checkIfAllCardsMAtched(currentLevel, card) {
    cardsMatched.push(card);
    console.log(currentLevel.cards);
    if (cardsMatched.length >= currentLevel.cards) {

        endGame('win')
    }
}



export { initializeGame, flipCard, endGame } 