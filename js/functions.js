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

        setTimeout(() => {
            card.classList.add('animate')
        }, 200 * i);

    }   
    //limpia arrays para la proxima jugada
     cardsChosen.length = 0;
     cardsChosenId.length = 0;

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
            alert("¡El tiempo ha terminado!");//alert si?? cambiar por popup
            endGame();
        }
    }, 1000);
}

//función fín juego
export function endGame(){
    alert("¡El tiempo ha terminado. Prueba otra vez!");//mensaje si???

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.add("disable"); //clase disable??
        card.removeEventListener("click");
    });
}

let points = 0;

//Función incrementar puntos: aumenta 20 puntos cada vez q se empareja.
 export function increasePoints() {
    points += 20;
    updatePointsDisplay();//actualiza puntos
}

//Función para visualizar los puntos
export function updatePointsDisplay(){
    const pointsElement = document.getElementById ("points");
    pointsElement.textContent = points;
}

//Función sonido
let soundEnable = true;

//encendido/apagado
export function toogleSound() {
    soundEnable = !soundEnable;
}

//reproducción archivo sonido si está activado
export function playSound(soundFile) {
    if (soundEnable) {
        const audio = new Audio (soundFile);
        audio.play();
    }
}

export { initializeGame, startCountdown};
