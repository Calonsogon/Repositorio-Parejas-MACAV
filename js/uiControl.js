function displayCards(cards, level) {
    let deck = document.querySelector('.deck');
    deck.innerHTML = '';

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


function displayPoints()  {

    const pointsElement = document.getElementById("points");
    pointsElement.textContent = points;
}

export { displayCards, displayPoints };