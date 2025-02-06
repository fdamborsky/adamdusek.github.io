const iframe = document.querySelector(".video")
const title2h2 = document.querySelector(".title2 h2")

console.log(iframe.innerHTML);
console.log(title2h2.innerHTML);


if(window.innerWidth < 800){
    iframe.innerHTML = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1052596842?h=029c7c426a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Vítám tě mezi námi! (Phone)"></iframe></div>`
    title2h2.innerHTML = `Jednoduše stačí e-mail otevřít, přesunout ho do&nbsp;doručené pošty a nová lekce ti nikdy neuteče!`
}

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


function createFirework(position) {
    const container = document.getElementById("firework");

    // Určení pozice podle sektoru (levý, střední, pravý)
    let posX;
    if (position === "left") {
        posX = Math.random() * (window.innerWidth / 3); // Levá třetina
    } else if (position === "center") {
        posX = Math.random() * (window.innerWidth / 3) + window.innerWidth / 3; // Prostřední třetina
    } else {
        posX = Math.random() * (window.innerWidth / 3) + 2 * (window.innerWidth / 3); // Pravá třetina
    }

    let posY = Math.random() * window.innerHeight;

    for (let i = 0; i < 70; i++) { // Zvýšeno z 50 na 70 konfet
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Výchozí pozice
        confetti.style.left = `${posX}px`;
        confetti.style.top = `${posY}px`;

        // Výbuch do náhodného směru
        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 300 + 100; // Zvýšeno pro větší rozptyl
        confetti.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        confetti.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        container.appendChild(confetti);

        // Odstranění konfet po 0.8 sekundě (po skončení animace)
        setTimeout(() => {
            confetti.remove();
        }, 800);
    }
}

// Postupně spouští 6 výbuchů během 3 sekund
function startFireworks() {
    const positions = ["left", "center", "right", "left", "center", "right"];
    
    positions.forEach((pos, index) => {
        setTimeout(() => {
            createFirework(pos);
        }, index * 500); // Každý výbuch s 500ms odstupem
    });
}

// Spustí ohňostroj
startFireworks();



