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

function 

function GraphPlot() {
    let ctx = document.getElementById('chart').getContext('2D');
    let stackedLine = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    stacked: true
                }
            }
        }
    });
     
}
windows.onload = GraphPlot;