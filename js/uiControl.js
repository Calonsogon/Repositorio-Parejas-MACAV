function displayCards(cards, level) {
    let deck = document.querySelector('.deck');
    deck.innerHTML = '';

    if (level === "hard") {
        document.styleSheets[4].cssRules[1].cssRules[0].style.gridTemplateColumns = 'repeat(4, 1fr)';
    }

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

function displayPoints(points) {
    const pointsElement = document.getElementById("points");
    pointsElement.textContent = points;
}

function displaySoundButton(button, soundOn) {
    if (soundOn) {
        button.innerHTML = "";
        button.innerHTML = `<i class="fa-solid fa-music"></i><i class="fa-solid fa-toggle-on"></i>`;
    } else {
        button.innerHTML = "";
        button.innerHTML = `<i class="fa-solid fa-music"></i><i class="fa-solid fa-toggle-off"></i>`;
    }
}


// Show the dialog contents when the user wins the game 

function displayEndGameDialog(dialog, outcome) {
    const title = outcome === 'win' ? 'Congratulations! You\'re the winner!' : 'You lost! Try again!';
    const imageFile = outcome === 'win' ? 'winner2.png' : 'looser.png';
    const classToAdd = outcome === 'win' ? 'winner' : 'looser';

    dialog.innerHTML = `
        <h2>${title}</h2>
        <img src="./assets/images/${imageFile}" alt="${outcome}_image">
        <div class="button-wrapper">
            <div class="button">
                <a class="button-content" href="#">Restart</a>
            </div>
            <div class="button">
                <a class="button-content" href="./index.html">Exit</a>
            </div>
        </div>
    `;
    dialog.classList.remove('winner', 'looser');
    dialog.classList.add(classToAdd);
}




export { displayCards, displayPoints, displaySoundButton, displayEndGameDialog};