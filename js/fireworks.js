function fireworks() {
    const container = document.getElementById('fireworks-container');

    function createFirework() {
        let firework = document.createElement('div');
        firework.classList.add('firework');

        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(firework);
        animateFirework(firework);
    }

    function animateFirework(firework) {
        let angle = Math.random() * 2 * Math.PI;
        let radius = Math.random() * 100 + 50;
        let x = radius * Math.cos(angle);
        let y = radius * Math.sin(angle);
        firework.style.transition = `all ${Math.random() * 0.5 + 0.5}s ease-out`;
        setTimeout(() => {
            firework.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            firework.style.opacity = 1;
        }, 10);
        setTimeout(() => {
            firework.remove();
        }, 800);
    }

    setInterval(createFirework, 400);
};

export { fireworks }