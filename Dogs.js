/*REQUIRED BELOW */
function Annyang() {
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
  
  function NoAnnyang() {
    if(annyang) {
      annyang.abort()
    }
  }
/*REQUIRED ABOVE */