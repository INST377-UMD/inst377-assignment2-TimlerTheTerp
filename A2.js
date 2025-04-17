if (annyang) {
    // Let's define a command.
    const commands = {
      'hello': () => { alert('Hello world!'); }
    };

    //change the background color
    
    document.body.style.backgroundColor = "white";

  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }
