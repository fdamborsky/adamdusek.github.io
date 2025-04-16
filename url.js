const url = window.location.pathname

if (url == "/lekce-zdarma/" || url == "/adamdusek.github.io/lekce-zdarma/" ){
    if (window.innerWidth <= 800){
        const landing_page_title = document.querySelector(".title")
        landing_page_title.innerHTML = `
        <h1>Přestaň zabíjet<br><span class="TitleRed">každou konverzaci</span>!<br>
        Udělej tyto drobné<br>změny a proměň<br>
        nudné rozhovory<br>v <span class="TitleUnderline">silné vztahy</span></h1>
        <h2>Sleduj 2 speciální lekce ZDARMA<br>a ihned zlepši tvoji komunikaci<br>a vztahy jednou provždy</h2>`
    
        const matous_quote = document.querySelector(".quoteBoxMatous .quote")
        matous_quote.innerHTML= `
        <p class="quote">“Adamův systém lekcí je úžasný.<br>Dává si neuvěřitelně záležet.
        Díky němu jsem jednou provždy<br>změnil svůj přístup ke komunikaci a ostatním lidem.<br>
        Definitivně se jedná o mé nejlépe investované peníze.”</p>`}

} else if (url == "/nenech-se-ovlivnovat/" || url == "/adamdusek.github.io/nenech-se-ovlivnovat/"){
    let title = document.querySelector(".title")
    title.innerHTML = `
        <h1>Nenech se každý den <span class="TitleRed">ovlivňovat</span>!<br>
            Odhal psychologické triky, které jsou<br>
            všude kolem tebe a otoč je<br>
            ve <span class="TitleUnderline" style="width: 90%;">tvůj prospěch</span></h1>
        <h2>Sleduj 2 speciální lekce ZDARMA a zjisti,<br>jak být okamžitě sympatičtější a vybudovat autoritu</h2>
    `
    if (window.innerWidth <= 800){
        title.innerHTML = `
        <h1>Nenech se každý den <span class="TitleRed">ovlivňovat</span>!
            Odhal psychologické triky, které jsou
            všude kolem tebe a otoč je
            ve <span class="TitleUnderline" style="width: 90%;">tvůj prospěch</span></h1>
        <h2>Sleduj 2 speciální lekce ZDARMA a zjisti, jak být okamžitě sympatičtější a vybudovat autoritu</h2>
    `
    }
} else if (url == "/ztracena-lekce/" || url == "/adamdusek.github.io/ztracena-lekce/"){
    let title = document.querySelector(".title")
    let subtext = document.querySelector(".landingpageSubtext")
    let MatousQuote = document.querySelector(".quoteBoxMatous")

    title.innerHTML = `
        <h1>Dnes ses ostatním <span class="TitleRed">podřizoval naposledy</span>!<br>
            Objev 6 účinných triků, jak jednoduše<br>
            přesvědčit ostatní a <span class="TitleUnderline" style="width: 90%;">dosáhni svého</span></h1>
        <h2>Sleduj ztracenou lekci ZDARMA a nauč se,<br>jak si kdykoliv vyjednat víc peněz a lepší podmínky</h2>
    `
    subtext.innerHTML = `
        <h1>
            Díky za vyplnění dotazníku! <img src="../akademie_css_js/resources/imgs/hearth.webp" alt="">
        </h1>

        <p>
            Tady ode mě dostáváš speciální slevu 25%<br>
            na první měsíc v naší komunitě.
        </p>

        <div class="button">
            <a href="https://herohero.co/adamdusek/invites/ZSADNVJVXM" target="_blank" class="bluebutton">ZÍSKAT LEKCE SE SLEVOU 25%</a>
            <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/Shield.webp"  alt="">Garance spokojenosti</p>
            <div id="arrow-text" style="top: -10px; right:-150px">
                <p><span style="color: #ffffff">Limitovaná nabídka</span><br>končí už dnes.</p>
                <img src="../akademie_css_js/resources/imgs/arrowWhite.webp" alt="">
            </div>
        </div>

    `
    const perks = document.querySelector(".perks")
    perks.innerHTML = `
    <div class="perk">
          <img src="../akademie_css_js/resources/imgs/ytb.webp" alt="">
          <p>150+ Praktických video-lekcí</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/note.webp" alt="">
          <p>Stručné výpisky každé lekce</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/lightbulb.webp" alt="">
          <p>Jedinečné myšlenkové mapy</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/notescheck.webp" alt="">
          <p>Speciální kurzy</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/windows.webp" alt="">
          <p>Notion návody a šablony</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/mic.webp" alt="">
          <p>Exkluzivní podcast</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/phone.webp" alt="">
          <p>Mobilní aplikace na cesty</p>
      </div>
      <div class="perk">
          <img src="../akademie_css_js/resources/imgs/discord.webp" alt="">
          <p>Přístup do speciálních místností</p>
      </div>
      
      <div class="button">
        <a href="https://herohero.co/adamdusek/invites/ZSADNVJVXM" target="_blank" class="bluebutton">CHCI SE PŘIDAT!</a>
        <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/lock.webp"  alt="">7-denní garance vrácení peněz</p>
      </div>
    `

    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Adame, já ani nevím, jak ti mám poděkovat!<br>
            Díky jedné z tvých lekcí jsem si u klienta vyjednala o 1.500 Kč víc za zakázku.<br>
            Použila jsem přesně ten postup, který jsi ukazoval - A fungovalo to!”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Natalie.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Natálie Š.</p>
    ` 
    if (window.innerWidth <= 800){
        title.innerHTML = `
        <h1>Dnes ses ostatním <span class="TitleRed">podřizoval naposledy</span>!
            Objev 6 účinných triků, jak jednoduše
            přesvědčit ostatní a <span class="TitleUnderline" style="width: 90%;">dosáhni svého</span></h1>
        <h2>Sleduj ztracenou lekci ZDARMA a nauč se, jak si kdykoliv vyjednat víc peněz a lepší podmínky</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Adame, já ani nevím, jak ti mám poděkovat!
            Díky jedné z tvých lekcí jsem si u klienta vyjednala o 1.500 Kč víc za zakázku.
            Použila jsem přesně ten postup, který jsi ukazoval - A fungovalo to!”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Natalie.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Natálie Š.</p>
    ` 
    }
    
} else if (url == "/nepropadni-zlozvykum/" || url == "/adamdusek.github.io/nepropadni-zlozvykum/"){
    let title = document.querySelector(".title")
    let MatousQuote = document.querySelector(".quoteBoxMatous")
    let landingpageSubtext = document.querySelector(".landingpageSubtext")

    title.innerHTML = `
        <h1>Nepropadni zlozvykům jako <span class="TitleRed">92% Čechů</span>!<br>
            Nauč se vybudovat prospěšné návyky<br>
            a překonej prokrastinaci<br>
            jednou <span class="TitleUnderline" style="width: 90%;">provždy</span></h1>
        <h2>Sleduj speciální lekci ZDARMA<br>a přestaň zabíjet tvůj čas špatnými návyky už dnes</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Dlouho jsem se snažil donutit začít cvičit pravidelně.<br>
            Ale teprve až Adamův systém lekcí mě konečně nakopnul k akci.<br>
            Teď chodím 4x týdně cvičit a mám víc energie než kdy dřív.”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Tomas.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Tomáš M.</p>
    ` 
    landingpageSubtext.innerHTML = `
        <h1>
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
            VYZVEDNI SI SVÉ BONUSY
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
        </h1>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Výpisky akademie.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #1 - Stručné výpisky této lekce
        </a>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Myšlenkové mapy.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #2 - Myšlenková mapa
        </a>

        <div class="button">
            <a href="https://herohero.co/adamdusek/subscribe" target="_blank" class="bluebutton">CHCI VŠECHNY LEKCE!</a>
            <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/Shield.webp"  alt="">Garance spokojenosti</p>
        </div>
    `

    if (window.innerWidth <= 800){
        title.innerHTML = `
        <h1>Nepropadni zlozvykům jako <span class="TitleRed">92% Čechů</span>!<br>
            Nauč se vybudovat prospěšné návyky
            a překonej prokrastinaci
            jednou <span class="TitleUnderline" style="width: 90%;">provždy</span></h1>
        <h2>Sleduj speciální lekci ZDARMA a přestaň zabíjet tvůj čas špatnými návyky už dnes</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Dlouho jsem se snažil donutit začít cvičit pravidelně.
            Ale teprve až Adamův systém lekcí mě konečně nakopnul k akci.
            Teď chodím 4x týdně cvičit a mám víc energie než kdy dřív.”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Tomas.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Tomáš M.</p>
    ` 
    }
} else if (url == "/preprogramuj-tvuj-mozek/" || url == "/adamdusek.github.io/preprogramuj-tvuj-mozek/"){
    let title = document.querySelector(".title")
    let MatousQuote = document.querySelector(".quoteBoxMatous")
    let landingpageSubtext = document.querySelector(".landingpageSubtext")

    title.innerHTML = `
        <h1>Přestaň <span class="TitleRed">pohřbívat</span> svoje cíle!<br>
            Přeprogramuj tvůj mozek a donuť ho,<br>
            aby chtěl dělat <span class="TitleUnderline" style="width: 90%;">těžké věci</span></h1>
        <h2>Sleduj speciální lekci ZDARMA a objev 7 kroků,<br>jak najdeš svou vnitřní motivaci a jednoduše hackni tvůj mozek</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Dlouho jsem se snažil donutit začít cvičit pravidelně.<br>
            Ale teprve až Adamův systém lekcí mě konečně nakopnul k akci.<br>
            Teď chodím 4x týdně cvičit a mám víc energie než kdy dřív.”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Tomas.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Tomáš M.</p>
    ` 
    landingpageSubtext.innerHTML = `
        <h1>
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
            VYZVEDNI SI SVÉ BONUSY
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
        </h1>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Výpisky akademie.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #1 - Stručné výpisky této lekce
        </a>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Myšlenkové mapy.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #2 - Myšlenková mapa
        </a>

        <div class="button">
            <a href="https://herohero.co/adamdusek/subscribe" target="_blank" class="bluebutton">CHCI VŠECHNY LEKCE!</a>
            <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/Shield.webp"  alt="">Garance spokojenosti</p>
        </div>
    `

    if (window.innerWidth <= 800){
        title.innerHTML = `
        <h1>Přestaň <span class="TitleRed">pohřbívat</span> svoje cíle!
            Přeprogramuj tvůj mozek a donuť ho,
            aby chtěl dělat <span class="TitleUnderline" style="width: 90%;">těžké věci</span></h1>
        <h2>Sleduj speciální lekci ZDARMA a objev 7 kroků, jak najdeš svou vnitřní motivaci a jednoduše hackni tvůj mozek</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Dlouho jsem se snažil donutit začít cvičit pravidelně.
            Ale teprve až Adamův systém lekcí mě konečně nakopnul k akci.
            Teď chodím 4x týdně cvičit a mám víc energie než kdy dřív.”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Tomas.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Tomáš M.</p>
    ` 
    }
} else if (url == "/zacni-mit-u-prdele/" || url == "/adamdusek.github.io/zacni-mit-u-prdele/"){
    let title = document.querySelector(".title")
    let MatousQuote = document.querySelector(".quoteBoxMatous")
    let landingpageSubtext = document.querySelector(".landingpageSubtext")

    
    landingpageSubtext.innerHTML = `
        <h1>
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
            VYZVEDNI SI SVÉ BONUSY
            <img src="../akademie_css_js/resources/imgs/present.webp" alt="">
        </h1>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Výpisky akademie.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #1 - Stručné výpisky této lekce
        </a>

        <a class="link" href="../akademie_css_js/resources/PDF/Bohatý táta, chudý táta - Myšlenkové mapy.pdf" target="_blank">
            <img src="../akademie_css_js/resources/imgs/link.webp" alt="">
            Bonus #2 - Myšlenková mapa
        </a>

        <div class="button">
            <a href="https://herohero.co/adamdusek/subscribe" target="_blank" class="bluebutton">CHCI VŠECHNY LEKCE!</a>
            <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/Shield.webp"  alt="">Garance spokojenosti</p>
        </div>
    `

    if (window.innerWidth <= 800){
        title.innerHTML = `
        <h1>Začni mít víc <span class="TitleRed">u pr**le</span>!
            Překonej tvá limitující přesvědčení
            a soustřeď se na věci, na kterých
            ti <span class="TitleUnderline" style="width: 90%;">skutečně záleží</span></h1>
        <h2>Sleduj speciální lekci ZDARMA a změň tvou perspektivu a přístup k životu jednou provždy</h2>
    `
    MatousQuote.innerHTML = `
        <section>
            <img src="../akademie_css_js/resources/imgs/stars.svg" class="MatousStars">
            <p class="quote">“Dlouho jsem se snažil donutit začít cvičit pravidelně.
            Ale teprve až Adamův systém lekcí mě konečně nakopnul k akci.
            Teď chodím 4x týdně cvičit a mám víc energie než kdy dřív.”</p>
        </section>
      
        <img src="../akademie_css_js/resources/imgs/Tomas.webp" class="Matous">
        <p class="MatousName"><img src="../akademie_css_js/resources/imgs/Check.webp"  alt="">Tomáš M.</p>
    ` 
    }
}