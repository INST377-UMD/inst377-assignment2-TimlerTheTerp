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

    /*Timer*/
    setTimeout(function() {
        wait.style.display = "none";
    }, 5000);
}

/*This Function is responsible for getting the API*/
function getQuote() {
    return "https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes/";
}

async function GenerateQuote() {
    waiting();
   
    
     /*Setting Our Variables */
    const response = await fetch(getQuote());
    var data = await response.json();
    let placer = document.getElementById("Quote");
    let writer = document.getElementById("Author");

    /*Random Generator*/
    tab = Math.floor(Math.random() * 51);
    
    /*Setting Up whatever is affrifrated with the quote */
    let Firstquote = data[tab];
    let quote = Firstquote.q;
    let author = Firstquote.a;

    placer.innerHTML = `${quote}`;
    writer.innerHTML = `- ${author}`;
}



window.onload = GenerateQuote;
