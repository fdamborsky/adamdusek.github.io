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
    <h2>Sleduj 2 speciální lekce ZDARMA<br>a ihned zlepši tvoji komunikaci<br>a vztahy jednou provždy</h2>`

    const matous_quote = document.querySelector(".quoteBoxMatous .quote")
    matous_quote.innerHTML= `
    <p class="quote">“Adamův systém lekcí je naprosto úžasný.<br>Dává si neuvěřitelně záležet.
    Díky němu jsem jednou provždy<br>změnil svůj přístup ke komunikaci a ostatním lidem.<br>
    Definitivně se jedná o mé nejlépe investované peníze.”</p>
    `

    const matous_quote_p = document.querySelector(".quote")
    matous_quote_p.innerHTML = `
    “Adamův&nbsp;systém lekcí je naprosto&nbsp;úžasný. Dává si neuvěřitelně&nbsp;záležet.
    Díky němu jsem jednou&nbsp;provždy změnil svůj přístup ke komunikaci a ostatním lidem.
    Definitivně&nbsp;se jedná o mé nejlépe&nbsp;investované peníze.”
    `

    const is_this_you = document.querySelector(".lastP")
    is_this_you.innerHTML = `
    <img src="resources/imgs/Finger.png" alt="">Pokud ano - Tohle je přesně<br>pro tebe...
    `
    const perks_title = document.querySelector(".CommunityTitle")
    perks_title.innerHTML = `
    <h1 class="PerksTitle"><span>Nauč se každý den<br>něco nového</span><br>
    díky mému systému<br>praktických lekcí<br>z chytrých knih <img src="resources/imgs/books.webp" alt=""></h1>

    <p>Získej ihned přístup k veškerému obsahu<br>a objev prověřené lekce,<br>
    které zlepší tvoji komunikaci,<br>produktivitu, návyky či fungování mozku,<br>a změní tvůj život <span>jednou provždy.</span></p>
    `


    const herohero_title = document.querySelector("#HeroHeroUsers .title")
    herohero_title.innerHTML = `
    Přidej se ke studentům<br>kteří už rostou! <img class="titleIMG" src="resources/imgs/Brain.png" alt="">
    `

    const savemoney_h1 = document.querySelector("#savemoney h1")
    const savemoney_h2 = document.querySelector("#savemoney h2")
    savemoney_h1.innerHTML = `
    Začni se učit <span>10x rychleji</span><br>s mým systémem <img src="resources/imgs/Gear.png" alt="">
    `
    savemoney_h2.innerHTML = `
    Převeď lekce jednoduše do tvého života<br>díky prověřeným postupům a dosáhni<br>svých <span>vytoužených výsledků!</span>
    `


    const warranty_firstP = document.querySelector(".firstP")
    warranty_firstP.innerHTML = `
    <p class="firstP">Tvou spokojeností jsem si už teď jistý,<br>protože mým systémem prošlo<br>430+ lidí, jako jsi ty.
    `

    const warranty_h2 = document.querySelector("#warranty h2")
    warranty_h2.innerHTML = `
    Pokud se v každé lekci nenaučíš<br>něco nového,napiš mi do 7 dní,<br>vrátím ti <span>100% peněz.</span>
    `

    const blue2 = document.querySelector(".blue2")
    blue2.innerHTML = `
    i ve školách po celé České republice.
    `

    const warrenh1 = document.querySelector(".warrenh1")
    warrenh1.innerHTML = `
    Nejlepší investice, kterou můžete udělat, je investice do vás.
    `
}