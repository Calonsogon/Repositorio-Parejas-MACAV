

import { levels } from './levels.js';
import { initializeGame } from './functions.js';

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level');

document.addEventListener('DOMContentLoaded', initializeGame(level, levels));

const tempButton = document.querySelector('.popup-toggle');
const popup = document.querySelector('dialog');
tempButton.addEventListener('click', () => {
    popup.showModal();
});


