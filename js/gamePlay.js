
import { addPoints } from "./scoreManagment.js";
import { endGame } from "./gameEnd.js";

let cardsToCompare = [];
let cardsToCompareId = [];
let isClickable = true;
let totalPoints = 0;

function flipCard(levels, level, target) {
    if (!isClickable) return;
    let cardId = target.getAttribute('data-id');
    const currentLevel = levels[level];
    const card = currentLevel.data[cardId];

    const cardImg = target.querySelector('img');
    cardImg.classList.add('rotate')
    setTimeout(function() {
        cardImg.setAttribute('src', card.url);
    }, 200);
    setTimeout(function() {
        cardImg.classList.remove('rotate');
}, 400);

    cardsToCompare.push(card.url);
    cardsToCompareId.push(cardId);


    if (cardsToCompare.length === 2) {
        isClickable = false;
        document.querySelector('.deck').classList.add('not-clickable');
        setTimeout(() => checkForMatch(), 500);
    }
}


function checkForMatch() {
const cards = document.querySelectorAll('.card img');
const firstCard = cards[cardsToCompareId[0]];
const secondCard = cards[cardsToCompareId[1]];

if (cardsToCompare[0] === cardsToCompare[1]) {
    firstCard.parentElement.removeEventListener('click', flipCard);
    secondCard.parentElement.removeEventListener('click', flipCard);
    let points = addPoints();
    checkIfWinner(cards, points);

} else {
    firstCard.classList.add('rotate')
    secondCard.classList.add('rotate')
    setTimeout(function() {
    firstCard.setAttribute('src', '../assets/images/card_back.png');
    secondCard.setAttribute('src', '../assets/images/card_back.png');
    }, 100);
    setTimeout(function() {
        firstCard.classList.remove('rotate');
        secondCard.classList.remove('rotate');
}, 500);
};

cardsToCompare.length = 0;
cardsToCompareId.length = 0;
document.querySelector('.deck').classList.remove('not-clickable');
isClickable = true;
}

function checkIfWinner(cards, points) {
    totalPoints = cards.length * 10;
    if (totalPoints === points) {
        endGame('win')
    }
}


export { flipCard, checkForMatch, checkIfWinner };