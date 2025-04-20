/*REQUIRED BELOW */
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
/*REQUIRED ABOVE */

function waiting() {
    let wait = document.getElementById("QuotePlacer")
    wait.innerHTML = "Loading....."

    /*Timer*/
    setTimeout(function() {
        /*using note would make sense because it's part of loadfunction */
        wait.style.display = ""
    }, 10000);
}

/*This Function is responsible for getting the API*/
function getQuote() {
    let getAPI ="https://zenquotes.io/api/quotes/";
}

async function GenerateQuote() {
   waiting();
   
    /*Setting Our Variables */
    let genQuote = await getQuote()
    let placer = document.getElementById("QuotePlacer")
    let items = response.json()

    /*Random Generator
    
    /*Setting Up whatever is affrifrated with the quote */
    let author =
    let 
}
