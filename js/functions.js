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
//Elemento temporizador
const timerElement = document.getElementById("timer");
let countdownInterval;

//función inicio temporizador
function startCountdown (duration) {
    let timer = duration, minutes, seconds;

    countdownInterval = setInterval(() =>{
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            alert("¡El tiempo ha terminado!");//alert si??
            endGame();
        }
    }, 1000);
}

//función fín juego
function endGame(){
    alert("¡El tiempo ha terminado. Prueba otra vez!");//mensaje si???

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.add("disable"); //clase disable??
        card.removeEventListener("click");
    });
}


export { initializeGame, startCountdown, endGame};
