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
     annyang.pause()
   }
 }
 /*REQUIRED ABOVE */
 
 function waiting() {
   let wait = document.getElementById("Quote");
   wait.innerHTML = "Loading.....";
  
 
 
  
 }
 
 /*This Function is responsible for getting the API*/
 function getQuote() {
   //Since this API has restrictions, I used extensive research to figure out why this isn't responding correctly
   return "https://zenquotes.io/api/random" 
 }
 
 /*Main Function For Quotes */
 function GenerateQuote() {
   waiting();
  
   
   setTimeout(async function () {
     /*Setting Our Variables */
     let response = await fetch(getQuote());
     let data = await response.json();
     let placer = document.getElementById("Quote");
     let writer = document.getElementById("Author");
 
     
     /*Setting Up whatever is affrifrated with the quote */
     let Firstquote = data[0];
     let quote = Firstquote.q;
     let author = Firstquote.a;
 
     placer.innerHTML = `${quote}`;
     writer.innerHTML = `${author}`;
 }, 5000);
 
 }
 
window.onload = function() {
    Annyang();
    GenerateQuote();
}
