const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () => {
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
        });

        // If transitionend doesn't fire (e.g., no transition), force remove loader
        setTimeout(() => {
            if (loader.parentNode) {
                document.body.removeChild(loader);
            }
        }, 500); // Add a small delay to cover transition
    }
}, 3000);

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        const answer = parent.querySelector('.faq-answer');
        const symbol = item.querySelector('span');
        
        if (parent.classList.contains('active')) {
            answer.style.maxHeight = null;
            parent.classList.remove('active');
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            parent.classList.add('active');
        }
    });
});


if (window.innerWidth <= 800){
    const landing_page_title = document.querySelector(".title")
    landing_page_title.innerHTML = `
    <h1>Přestaň zabíjet<br><span class="TitleRed">každou konverzaci</span>!<br>
    Udělej tyto drobné<br>změny a proměň<br>
    nudné rozhovory<br>v <span class="TitleUnderline">silné vztahy</span></h1>
    <h2>Sleduj 2 speciální lekce ZDARMA<br>a ihned zlepšitvoji komunikaci<br>a vztahy jednou provždy</h2>`

    const matous_quote = document.querySelector(".quoteBoxMatous .quote")
    matous_quote.innerHTML= `
    <p class="quote">“Adamův systém lekcí je naprosto úžasný.<br>Dává si neuvěřitelně záležet.
    Díky němu jsem jednou provždy<br>změnil svůj přístup ke komunikaci a ostatním lidem.<br>
    Definitivně se jedná o mé nejlépe investované peníze.”</p>
    `

}