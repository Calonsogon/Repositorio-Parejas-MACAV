function initializeGame(level, levels) {
    const selectedLevel = levels[level];
    const shuffledCards = shuffle(selectedLevel.data);
    displayCards(shuffledCards);
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [cards[i], cards[j]] = [cards[j], cards[i]]; 
    }

    return cards;
}

function displayCards(cards) {
    let deck = document.querySelector('.deck');
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('li');
        card.classList.add('card');
        deck.appendChild(card);

        let cardImg = document.createElement('img');

        cardImg.setAttribute('src', `../assets/images/back-cardpng.png`)
        cardImg.setAttribute('alt', `card ${cards[i].id}`);
        cardImg.classList.add('card-img');
        card.appendChild(cardImg);

        setTimeout(() => {
            card.classList.add('animate')
        }, 200 * i);

    }

}

export { initializeGame };
