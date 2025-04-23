/*REQUIRED BELOW */
function Annyang() {
    let btn = document.querySelector('.VoiceButton');
  if (annyang) {
      // Let's define a command.
      const commands = {
        'hello': () => { 
              alert('Hello world!'); 
              //change the background color
              document.body.style.backgroundColor = "white";
          },
          'Stocks': () => {
              window.location.href = "Stocks.html";
          },
  
          'Dogs': () => {
              window.location.href = "Stocks.html";
          }
          }
  
  
    
      // Add our commands to annyang
      annyang.addCommands(commands);
    
      // Start listening.
      annyang.start();
    }
}
/*REQUIRED ABOVE */

function waiting() {
    let wait = document.getElementById("Quote");
    wait.innerHTML = "Loading.....";

}

/*This Function is responsible for getting the API*/
function getQuote() {
    return fetch("https://zenquotes.io/api/random").then((result) =>
        result.json()
    );
}

async function GenerateQuote() {
   waiting();
   
    /*Setting Our Variables */
    let genQuote = await getQuote();
    let placer = document.getElementById("Quote");
    let writer = document.getElementById("Author");
    
    /*Setting Up whatever is affrifrated with the quote */
    let quote = genQuote[0].q;
    let author = genQuote[0].a;

    placer.innerHTML = `${quote}`;
    writer.innerHTML = `- ${author}`;
}

/*Timer*/
setTimeout(function() {
    wait.style.display = "";
}, 5000);

window.onload = GenerateQuote;
