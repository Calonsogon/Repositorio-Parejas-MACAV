

import { levels } from './levels.js';
import { initializeGame } from './functions.js';

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');

const card = document.querySelector('.card');


document.addEventListener('DOMContentLoaded', initializeGame(level, levels));

card.addEventListener('click', flipCard();

