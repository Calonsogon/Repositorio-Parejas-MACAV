let isSoundEnabled = false;
let sound = document.getElementById("backgroundMusic");
let button = document.querySelector(".btn-sound");

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    sound[isSoundEnabled ? 'play' : 'pause'](); 

    
    const icon = button.querySelector('#music-toggle-icon');
    icon.classList.remove(isSoundEnabled ? 'fa-toggle-off' : 'fa-toggle-on');
    icon.classList.add(isSoundEnabled ? 'fa-toggle-on' : 'fa-toggle-off');
}

button.addEventListener("click", toggleSound);