/*REQUIRED BELOW*/
if (annyang) {
    // Let's define a command.
    const commands = {
        'Home Page': () => { window.location.href = "Assignment-2.html"; },
        'Stocks Page': () => { window.location.href = "Stocks.html"; },
        'Dogs Page': () => { window.location.href = "Dogs.html"; }
    };
    
    // Add our commands to annyang
    annyang.addCommands(commands);
    
    // Start listening.
    annyang.start();
    }
/*REQUIRED ABOVE*/ 