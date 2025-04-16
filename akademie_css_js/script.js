const loader = document.querySelector(".loader");

const faqitems = document.querySelector(".FAQQuestions")
    faqitems.innerHTML = `
    <div class="faq-item">
        <div class="faq-question">Knížky nečtu. Je to i pro mě? <span>+</span></div>
        <div class="faq-answer">Jasně! Pokud nečteš - Je to přesně pro tebe. Můj stystém je založený na tom, aby pomohl komukoliv pochopit ty nejdůležitější lekce z chytrých knih a aplikovat je v životě.<br><br>
        Členy naší komunity nespojuje věk, pohlaví a dokonce ani to, jestli jsou studenti, zaměstnanci či podnikatelé. Spojuje náschuť se každý den vzdělávat a růst.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">Jaké lekce v této komunitě sdílíš? <span>+</span></div>
      <div class="faq-answer">Sdílím pouze ty nejlepší lekce o komunikaci, produktivitě psychologii, penězích, lidském chování, mindsetu, marketingu a dalších podobně zajímavých tématech<br><br>
      Každou lekci vždy doplňuji o své příběhy a zkušenosti, takže se vždy naučíš něco nového a budeš to moct okamžitě přenést do tvého života.</div>
  </div>
    
    <div class="faq-item">
        <div class="faq-question">Za jak dlouho získám přístup do&nbsp;komunity? <span>+</span></div>
        <div class="faq-answer">Okamžitě. Jakmile své předplatné aktivuješ, budeš mít kompletní přístup k veškerému obsahu.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Jak funguje 7-denní garance vrácení peněz? <span>+</span></div>
        <div class="faq-answer">Ode dne zakoupení je možné si po dobu následujících 7 kalendářních dnů zažádat o 100% vrácení peněz. A to napsáním na e-mail adam@adamdusek.cz, kde s tebou vše rychle vyřeším.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Můžu předplatné kdykoliv zrušit&nbsp;sám? <span>+</span></div>
        <div class="faq-answer">Ano, samozřejmě. Předplatné můžeš kdykoliv sám jednoduše zrušit na svém HeroHero profilu skrze 2 kliknutí.</div>
    </div>
    
    
    <div class="faq-item">
        <div class="faq-question">Proč nabízíš tohle všechno za&nbsp;tak&nbsp;nízkou&nbsp;cenu? <span>+</span></div>
        <div class="faq-answer">Buďme naprosto upřímní - Moderní doba má problém. Sociální sítě, rozbitá pozornost a nedostatek času. To všechno dnes lidem brání ve čtení knih. Ale právě knihy v sobě skrývají ty nejcennější znalosti, které na internetu nenajdeš.<br><br>Chci proto tímto systémem zpřístupnit co nejvíce lidem ty nejlepší lekce, které jim v životě pomůžou růst a dosahovat jejich cílů, stejně jako pomohly mně.<br><br>Ty knihy bych stejně četl, takže mi dává smysl tento unikátní systém lekcí nabídnout za cenu, kterou si může dovolit každý. A společně s tím vytvořit komunitu stejně smýšlejících lidí, která si bude pomáhat a inspirovat.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Můžu se opravdu vzdělávat kdekoliv a kdykoliv? <span>+</span></div>
        <div class="faq-answer">Ano! Díky mobilní aplikaci si můžeš všechny video-lekce stáhnout a sledovat i bez internetu.<br><br>Lekce jsou navíc dostupné i jako podcast, takže se můžeš vzdělávat při řízení, cvičení nebo na cestě do práce či školy. Prostě kdykoliv se ti to zrovna hodí.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Nenašel jsem odpověď na mé otázky - Co mám dělat? <span>+</span></div>
        <div class="faq-answer">V tomto případě mi jednoduše napiš na e-mail adam@adamdusek.cz nebo na Instagram @adamdus3k, kde ti tvé otázky rád zodpovím :)</div>
    </div>
    `

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


    const is_this_you = document.querySelector(".lastP")
    is_this_you.innerHTML = `
    <img src="../akademie_css_js/resources/imgs/Finger.webp" alt="">Pokud ano - Tohle je přesně<br>pro tebe...
    `
    const perks_title = document.querySelector(".CommunityTitle")
    perks_title.innerHTML = `
    <h1 class="PerksTitle"><span>Nauč se každý den<br>něco nového</span><br>
    díky mému systému<br>praktických lekcí<br>z chytrých knih <img src="../akademie_css_js/resources/imgs/books.webp" alt=""></h1>

    <p>Získej ihned přístup k veškerému obsahu a objev prověřené lekce,
    které zlepší tvoji komunikaci, produktivitu, návyky či fungování mozku a změní tvůj život <span>jednou&nbsp;provždy.</span></p>
    `


    const herohero_title = document.querySelector("#HeroHeroUsers .title")
    herohero_title.innerHTML = `
    Přidej se ke studentům<br>kteří už rostou! <img class="titleIMG" src="../akademie_css_js/resources/imgs/Brain.webp" alt="">
    `

    const savemoney_h1 = document.querySelector("#savemoney h1")
    const savemoney_h2 = document.querySelector("#savemoney h2")
    savemoney_h1.innerHTML = `
    Začni se učit <span>10x rychleji</span><br>s mým systémem <img src="../akademie_css_js/resources/imgs/Gear.webp" alt="">
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
        <img src="../akademie_css_js/resources/imgs/order_mobile.webp" alt="">
        <div class="arrow">
            <img class="circle" src="../akademie_css_js/resources/imgs/circle.webp" alt="">
            <img class="arrow2" src="../akademie_css_js/resources/imgs/arrow2.webp" alt="">
            <p>Tady to celé začalo.</p>
        </div>
    `

    const feedback = document.querySelector(".feedbacks")
    feedback.src = "../akademie_css_js/resources/imgs/FeedbacksMobile.webp"


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
        <a href="https://herohero.co/adamdusek" target="_blank" class="bluebutton">CHCI SE PŘIDAT!</a>
        <p class="bluebuttonP"><img src="../akademie_css_js/resources/imgs/lock.webp"  alt="">7-denní garance vrácení peněz</p>
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
