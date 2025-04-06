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

    <p>Získej ihned přístup k veškerému obsahu a objev prověřené lekce,
    které zlepší tvoji komunikaci, produktivitu, návyky či fungování mozku a změní tvůj život <span>jednou&nbsp;provždy.</span></p>
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
    Převeď lekce jednoduše do tvého života díky prověřeným postupům a dosáhni svých 
    <span>vytoužených&nbsp;výsledků!</span>
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
    i ve školách po celé České&nbsp;republice.
    `

    const blue3 = document.querySelector(".blue3")
    blue3.innerHTML = `
    Roste&nbsp;celá&nbsp;naše&nbsp;komunita.
    `

    const warrenh1 = document.querySelector(".warrenh1")
    warrenh1.innerHTML = `
    Nejlepší investice, kterou můžete udělat, je investice do vás.
    `

    const screenshot = document.querySelector(".firstbook")
    screenshot.innerHTML = `
        <img src="resources/imgs/order_mobile.jpg" alt="">
        <div class="arrow">
            <img class="circle" src="resources/imgs/circle.webp" alt="">
            <img class="arrow2" src="resources/imgs/arrow2.webp" alt="">
            <p>Tady to celé začalo.</p>
        </div>
    `

    const feedback = document.querySelector(".feedbacks")
    feedback.src = "resources/imgs/FeedbacksMobile.png"


    const perks = document.querySelector(".perks")
    perks.innerHTML = `
    <div class="perk">
          <img src="resources/imgs/ytb.webp" alt="">
          <p>150+ Praktických video-lekcí</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/note.webp" alt="">
          <p>Stručné výpisky každé lekce</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/lightbulb.webp" alt="">
          <p>Jedinečné myšlenkové mapy</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/notescheck.webp" alt="">
          <p>Speciální kurzy</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/windows.webp" alt="">
          <p>Notion návody a šablony</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/mic.webp" alt="">
          <p>Exkluzivní podcast</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/phone.webp" alt="">
          <p>Mobilní aplikace na cesty</p>
      </div>
      <div class="perk">
          <img src="resources/imgs/discord.webp" alt="">
          <p>Přístup do speciálních místností</p>
      </div>
      
      <div class="button">
        <a href="https://herohero.co/adamdusek" target="_blank" class="bluebutton">CHCI SE PŘIDAT!</a>
        <p class="bluebuttonP"><img src="resources/imgs/lock.webp"  alt="">7-denní garance vrácení peněz</p>
      </div>
    `

    const pEdit1 = document.querySelector(".pEdit1")
    pEdit1.innerHTML = `
        My nejsme jenom nějaká další komunita...<br><br>
      Jsme komunita, která píše příběhy a skutečně pomáhá lidem.<br><br><span class="blue">Nemáme jen velké sliby - Máme<br>reálné výsledky:</span>
    `
    const pDots3 = document.querySelector(".pDots2")
    pDots3.innerHTML = `
    Zkoušení u tabule z četby? Za&nbsp;pět.&nbsp;Zase.
    `
    
    const p3 = document.querySelector(".p5")
    p3.innerHTML = `
    A já znám přesně ten pocit:<br><br>
      <span class="redBG">Čtení jsem tehdá kvůli škole NESNÁŠEL.</span>Doslova.<br><br>
      <span class="pDots">Čtenářský deník? Dušek - Neodevzdal. Za pět.</span><br>
      <span class="pDots pDots2">Zkoušení u tabule z četby?<br>Za pět. Zase.</span><br>
      <span class="pDots">Zkoušející u maturity: “Vy jste to Adame nečetl, že?“</span><br><br>
      Ale potom se během covidu <span class="yellowBG">všechno změnilo.</span><br><br>
      Došlo mi, že škola nás do života nenaučí hromadu věcí, které ale SKUTEČNĚ potřebujeme.<br><br>
      Finanční gramotnost. Fungování mozku. Komunikace. Produktivita...<br><br>
      Na to ve škole “zapomněli“. A to je škoda.<br><br>
      Takže jsem začal pátrat...<br><br>
      A v roce 2020 jsem si objednal svoji první knihu “Bohatý táta, chudý táta“.
    `

    const p6 = document.querySelector(".p6")
    p6.innerHTML = `
    Fascinovala mě myšlenka, že můžu doslova za pár korun nahlédnout<br>
      do hlavy expertům v jakémkoliv oboru.<br><br>
      A tak začala moje <span class="yellowBG" style="left: 0;">další životní kapitola.</span><span class="lighter"> (The Next Chapter)</span> <br><br>
      Od té doby jsem za knížky utratil už víc než 50.000+ Kč...<br><br>
      A přečetl jich víc než 100.<br><br>
      Trošku se to zvrtlo, já vím...<br><br>
      A kdyby jsi tohle řekl 16 letému<br>Adamovi - Vysmál by se ti.<br><br>
      Ale Adam dnes (21 let) ti řekne, <span class="blueUnderline">že mu to definitivně změnilo život.</span><br><br>
      <span class="pDotsBlue">Znalosti z knih jsem použil a vybudoval díky nim 3 úspěšné YouTube kanály</span>
      <span class="pDotsBlue">Pracoval jsem s obrovskými firmami a&nbsp;známými influencery</span>
      <span class="pDotsBlue">A hlavně - Naučil jsem se věci, které mi budou sloužit už celý život</span>
      PROTO nebudu nikdy litovat toho, že jsem se tehdá dokopal začít.<br><br>
      A proto se teď ptám i tebe:<br><br>
      Kdy začne TVOJE další kapitola?<br>Bude to právě teď?<br><br>
      <span class="center">Přidej se k nám - Držím ti místo!</span>
    `
}