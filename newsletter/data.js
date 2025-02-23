const dataList = [
    {
      name: "Filip B.",
      title: "Tohle jsem nečekal",
      date: "13.01.2025",
      text: "Ve tvojí akademii jsem se naučil spoustu<br>praktických věcí, které mi každý den pomáhají.<br>A to samé platí o newsletteru."
    },
    {
      name: "Ondřej N.",
      title: "Sleduju veškerou Adamovu tvorbu",
      date: "13.01.2025",
      text: "Newsletter, komunita i akademie jsou super.<br>A to všechno zadarmo – Naprosto šílený. Díky,<br> že pro nás tohle všechno děláš, Adame."
    },
    {
      name: "Veronika S.",
      title: "Nejlepší newsletter v ČR",
      date: "13.01.2025",
      text: "Adame, tvoje maily jsou naprosto super!<br>Prosím, pokračuj v nich."
    },
    {
      name: "Petra W.",
      title: "Můj první newsletter – A jsem nadšená!",
      date: "13.01.2025",
      text: "Nikdy jsem žádný newsletter neodebírala, ale<br>jsem maximálně spokojená. Každá lekce je<br>zajímavá, stručná a hodnotná. Díky!"
    },
    {
      name: "Lucka V.",
      title: "Tento newsletter je naprosto skvělý!",
      date: "20.01.2025",
      text: "Adame, jsi skvělý. Je mi 40, ale i tak jsi pro mě<br>velká inspirace. Vždy se od tebe něco nového<br>naučím. Děkuju."
    },
    {
      name: "Pavel D.",
      title: "Hodnotné, stručné, vtipné – Líbí se mi to",
      date: "13.01.2025",
      text: "Nemám přes den moc času, ale tu 1 minutu<br>si na tvůj newsletter vždycky najdu."
    },
    {
      name: "Karel A.",
      title: "Skvělá služba zadarmo",
      date: "13.01.2025",
      text: "Narazil jsem na tebe náhodou na YouTube<br>a jsem za to moc rád. Jsi jeden z mála lidí,<br>kteří v Česku tvoří smysluplný obsah."
    },
    {
      name: "Simča K.",
      title: "Díky za celý tento projekt!",
      date: "13.01.2025",
      text: "Adame, veškerá tvoje tvorba a emaily mi dávají<br>opravdu hodně. Předáváš lidem obrovskou hodnotu. Děkuji ti za to, co děláš!"
    },
    {
      name: "Petr N.",
      title: "Knížky čtu už roky – Tohle je úžasný",
      date: "13.01.2025",
      text: "Už jsem přečetl spoustu knížek a tenhle projekt<br>naprosto miluju, Adame."
    },
    {
      name: "Ondřej Z.",
      title: "Otevřel jsi mi oči",
      date: "13.01.2025",
      text: "Adame, rozhodně pokračuj dál s tím co děláš.<br>Tvá práce má opravdu smysl a v mnohém mi<br>otevřela oči. Jsem rád, že jsem tě našel."
    },
    {
      name: "Kateřina Z.",
      title: "Vždycky mi zlepšíš den",
      date: "13.01.2025",
      text: "Je šílený, že něco tak skvělého je tady u nás<br>v ČR zadarmo. Díky Adame za tvojí práci,<br>vždycky mi novou lekcí zlepšíš den."
    },
    {
      name: "Eva D.",
      title: "Influencerům nevěřím, ale Adam nezklamal",
      date: "13.01.2025",
      text: "Influencerům všeobecně moc nevěřím, ale tady<br>jsem rozhodně chybu neudělala. Je super<br>se každý den naučit něco nového!"
    },
    {
      name: "Tadeáš L.",
      title: "Děkuju ti, Adame!",
      date: "13.01.2025",
      text: "Svou disciplínu a zodpovědnost jsem si<br>vybudoval díky tobě. Proto ti patří velké díky<br>za to, co pro nás děláš!"
    },
    {
      name: "Adam J.",
      title: "Neuvěřitelná hodnota zadarmo",
      date: "13.01.2025",
      text: "Knížky sice nečtu, ale tohle je fakt bomba.<br>Fakt se mi líbí jak to máš všechno promyšlený."
    },
    {
      name: "Josef H.",
      title: "Lepší než většina placených skupin",
      date: "13.01.2025",
      text: "Už jsem podpořil spoustu influencerů. A to co<br>jsem u tebe dostal zadarmo, jsem často nenašel<br>ani v placených skupinách. Díky!"
    },
    {
      name: "Pavel Š.",
      title: "Newsletter 10/10 – TOP",
      date: "13.01.2025",
      text: "Při cestě do školy se ve vlaku vždycky<br>naučím něco nového – Perfektní!"
    },
    {
      name: "Andrea K.",
      title: "Jsem velmi mile překvapená",
      date: "13.01.2025",
      text: "Nemám ti co vytknout. Ať to každý zkusí a uvidí,<br>že lidem předáváš skvělé znalosti zadarmo.<br>PS: Ty memes na konci mailů jsou super!"
    },
    {
      name: "Jan Z.",
      title: "Adam doručil přesně to co slíbil",
      date: "13.01.2025",
      text: "Každý den se naučím něco nového a cítím se<br>pak nádherně. Zajímavé a zároveň motivující.<br>Vždycky mě to nakopne jít něco dělat."
    }
  ];
  
 
  const renderFeedbacks = () => {
    const container = document.querySelector(".carousel-container");
    container.innerHTML = "";
    
    const rows = [
        dataList.slice(0, 6),
        [...dataList.slice(6, 12)].reverse(),
        dataList.slice(12, 18)
    ];
    
    rows.forEach((feedbacks, index) => {
        const row = document.createElement("div");
        row.classList.add(`carousel`, `row-${index + 1}`);
        
        for (let i = 0; i < 2; i++) {
            const group = document.createElement("div");
            group.classList.add("feedbacks-group");
            
            feedbacks.forEach(({ name, title, date, text }) => {
                const feedback = document.createElement("div");
                feedback.classList.add("OneFeedback");
                feedback.innerHTML = `
                    <div class="name">
                        <section>
                            <h1>${name}</h1>
                            <img class="yes" src="resources/imgs/yes.png" alt="">
                        </section>
                        <p>${date}</p>
                    </div>
                    <img class="stars" src="resources/imgs/stars.webp" alt="">
                    <h1>${title}</h1>
                    <p>${text}</p>
                `;
                group.appendChild(feedback);
            });
            row.appendChild(group);
        }
        container.appendChild(row);
    });

    // ✅ Jakmile je carousel připraven, zobraz ho
    setTimeout(() => {
        container.style.opacity = "1";
        container.style.visibility = "visible";
    }, 100);  
};

renderFeedbacks();


  
  