function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const numberOfDrops = 100; // Ajusta el número de gotas

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');

        // Posición horizontal aleatoria
        drop.style.left = `${Math.random() * 100}vw`;

        // Tamaño y velocidad aleatoria
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Velocidad entre 1s y 3s
        drop.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio

        rainContainer.appendChild(drop);
    }
}

function simulateThunder() {
    const body = document.body;

    // Simula truenos a intervalos aleatorios
    setInterval(() => {
        body.style.animation = 'thunder 0.5s linear';
        setTimeout(() => {
            body.style.animation = '';
        }, 500);
    }, Math.random() * 5000 + 3000); // Intervalo entre 3 y 8 segundos
}

// Iniciar la lluvia, los truenos y las nubes cuando se cargue la página
window.onload = function () {
    createRain();
    simulateThunder();
};
