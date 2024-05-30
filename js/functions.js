function initializeGame(level, levels) {
    const selectedLevel = levels[level];
    const shuffledCards = shuffle(selectedLevel.data);
    displayCards(shuffledCards, level);
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

function displayCards(cards, level) {
    let deck = document.querySelector('.deck');

    deck.setAttribute('data-level', level);

    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('li');
        card.classList.add('card');
        card.setAttribute('data-id', i);
        deck.appendChild(card);

        let cardImg = document.createElement('img');
        cardImg.setAttribute('src', `../assets/images/back-cardpng.png`)
        cardImg.setAttribute('alt', `card ${cards[i].id}`);
        cardImg.classList.add('card-img');
        card.appendChild(cardImg);

        setTimeout(() => {
            card.classList.add('animate');
        }, 200 * i);
    }

}

const cardsChosen = [];
const cardsChosenId = [];
const turnedCards = [];

function flipCard(levels, target) {
    let cardId = target.getAttribute('data-id');
    const selectedLevel = levels[document.querySelector('.deck').getAttribute('data-level')];
    const card = selectedLevel.data[cardId];




    const cardImg = target.querySelector('img');
    cardImg.setAttribute('src', card.url);

    cardsChosen.push(card.url);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch(selectedLevel), 2000);
    }
}


function checkForMatch(level) {
    const cards = document.querySelectorAll('.card img');

    const firstCard = cards[cardsChosenId[0]];
    const secondCard = cards[cardsChosenId[1]];


    if (cardsChosen[0] === cardsChosen[1]) {
        firstCard.parentElement.removeEventListener('click', flipCard);
        secondCard.parentElement.removeEventListener('click', flipCard);
        checkIfAllCardsTurned(level, firstCard);
        checkIfAllCardsTurned(level, secondCard);
    } else {
        firstCard.setAttribute('src', './assets/images/back-cardpng.png');
        secondCard.setAttribute('src', './assets/images/back-cardpng.png');
    }

    cardsChosen.length = 0;
    cardsChosenId.length = 0;


}

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


// End Game

function endGame(outcome) {
    const popUp = document.querySelector('dialog');
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


// Check if all the cards are turned
function checkIfAllCardsTurned(level, card) {
    turnedCards.push(card);
    if(turnedCards.length >= level.cards){
        
        endGame('win')
    }


}

let points = 0;


// Increment point
export function increasePoints() {
    points += 20;
    updatePointsDisplay();//actualiza puntos
}


// Display points
function updatePointsDisplay()  {

    const pointsElement = document.getElementById("points");
    pointsElement.textContent = points;
}



export { initializeGame, startCountdown, flipCard };


