//Función sonido
let soundEnable = true;

//encendido/apagado
function toggleSound() {
    soundEnable = !soundEnable;
}

//reproducción archivo sonido si está activado
function playSound(soundFile) {
    if (soundEnable) {
        const audio = new Audio(soundFile);
        audio.play();
    }
}