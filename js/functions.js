
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
    deck.innerHTML = '';

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

    }

}

const cardsChosen = []; 
const cardsChosenId = [];

function flipCard(levels) {
    let cardId = this.getAttribute('data-id');
    const selectedLevel = levels[document.querySelector('.deck').getAttribute('data-level')];
    const card = selectedLevel.data[cardId];
    const cardImg = this.querySelector('img');

    cardImg.setAttribute('src', card.url);

    cardsChosen.push(card.url);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const deck = document.querySelector('.deck');
    const cards = deck.querySelectorAll ('.card img');
    const firstCard = cards[cardsChosenId[0]];
    const secondCard = cards[cardsChosenId[1]];

    if (cardsChosen[0] === cardsChosen[1]) {
        firstCard.parentElement.removeEventListener('click', flipCard);
        secondCard.parentElement.removeEventListener('click', flipCard);
    } else {
        firstCard.setAttribute('src', './assets/back-cardpng.png');
        secondCard.setAttribute('src', './assets/back-cardpng.png');
=======
        setTimeout(() => {
            card.classList.add('animate')
        }, 200 * i);

    }

    cardsChosen.length = 0;
    cardsChosenId.length = 0;
}

export { initializeGame, flipCard };
