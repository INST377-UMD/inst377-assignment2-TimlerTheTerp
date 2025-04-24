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

function cChart() {
    const labels = Utils.months({count: 7});
    const config = {
        type: 'line',
        data: data,
      };
    }

window.onload = cChart
