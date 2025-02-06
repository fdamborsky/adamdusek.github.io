const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
            startFireworks(); // Start fireworks after loader is removed
        });
    }
});

// Fallback mechanism to remove the loader after 3 seconds
setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
            startFireworks(); // Start fireworks after loader is removed
        });

        // If transitionend doesn't fire (e.g., no transition), force remove loader
        setTimeout(() => {
            if (loader.parentNode) {
                document.body.removeChild(loader);
                startFireworks(); // Start fireworks after loader is removed
            }
        }, 250); // Add a small delay to cover transition
    }
}, 3000);

function createFirework() {
    const container = document.getElementById("firework");

    let posX = Math.random() * (window.innerWidth - 100);
    let posY = Math.random() * (window.innerHeight - 100);

    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        confetti.style.left = `${posX}px`;
        confetti.style.top = `${posY}px`;

        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 200 + 50;
        confetti.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        confetti.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}

function startFireworks() {
    let fireworkInterval = setInterval(() => {
        createFirework();
    }, 400);

    setTimeout(() => {
        clearInterval(fireworkInterval);
    }, 2000);
}
