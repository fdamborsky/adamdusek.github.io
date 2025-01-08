let paragraph = document.querySelector(".subtitle")
console.log(paragraph);
let paragraphNeW = `
            <h1>Nikdy nezmeškej nový e-mail 
                <img src="resources/imgs/download.webp" alt="">
            </h1>
            <p>E-mailová schránka je někdy chaos.</p>
            <p>E-mail, který si chceš přečíst, může omylem skončit ve složce SPAM nebo v kartě Propagace.</p>
            <p>A ty tak přijdeš o hodnotné lekce z chytrých knížek. <img src="resources/imgs/skull.webp" alt=""></p>
            <p>Abys měl jistotu, že ode mě budeš pravidelně dostávat všechen obsah, postupuj podle těchto jednoduchých kroků:</p>
            `

// Function to check window width and update paragraph
function updateParagraphContent() {
    if (window.innerWidth < 800) {
      paragraph.innerHTML = paragraphNeW
    } 
    console.log("baf");
    
  }
  
  // Check window width on page load
  updateParagraphContent();
  
  // Add an event listener for window resize
  window.addEventListener("resize", updateParagraphContent);