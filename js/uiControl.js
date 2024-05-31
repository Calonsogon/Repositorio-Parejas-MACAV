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
        cardImg.setAttribute('src', `../assets/images/card_back.png`)
        cardImg.setAttribute('alt', `card ${cards[i].id}`);
        cardImg.classList.add('card-img');
        card.appendChild(cardImg);

        setTimeout(() => {
            card.classList.add('animate');
        }, 200 * i);
    }

}

function displayPoints(points)  {
    const pointsElement = document.getElementById("points");
    pointsElement.textContent = points;
}

function displaySoundButton(button, soundOn){
    if (soundOn) {
        button.innerHTML = "";
        button.innerHTML = `<i class="fa-solid fa-music"></i><i class="fa-solid fa-toggle-on"></i>`;   
    } else {
        button.innerHTML = "";
        button.innerHTML = `<i class="fa-solid fa-music"></i><i class="fa-solid fa-toggle-off"></i>`; 
    }
}

export { displayCards, displayPoints, displaySoundButton };