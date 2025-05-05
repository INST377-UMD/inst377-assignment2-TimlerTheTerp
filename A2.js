/*REQUIRED BELOW */
function Annyang() {
    if (annyang) {
        // Let's define a command.
        const commands = {
          'hello': () => { 
                alert('Hello world!'); 
                //change the background color
            },
            'Home': () => {
                window.location.href = "Assignment-2.html";
            },
  
            'Dogs': () => {
                window.location.href = "Dogs.html";
            },
  
            'Look Up Apple Stock for 30 days': () => {
              document.getElementById("Stocktype").value = "AAPL";
              document.getElementById("Days").value = "30";
              Graph();
            }
          };
  
  
      
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
/*Graphing*/

/*This will be able to get the stock info that we need in order to make a graph */
/*Material From the website was able to Override the CORS INSTALLATION, So this function will work if we go live*/
async function findingInfo() {
    /*Key*/

    /*Make Variables to identify*/
    let nameStock = document.getElementById("Stocktype").value.trim(); 
    let Days = parseInt(document.getElementById("Days").value);

    let DateOne = '';
    let DateTwo = '';

    if (Days == 0) {
        DateOne = '2024-01-01';
        DateTwo = '2024-01-01';
    } else if (Days == 30) {
        DateOne = '2024-01-01';
        DateTwo = '2024-01-31';
    } else if (Days == 60) {
        DateOne = '2024-01-01';
        DateTwo = '2024-03-01';
    } else if (Days == 90) {
        DateOne = '2024-01-01';
        DateTwo = '2024-03-31';
    }

    let url = `https://api.polygon.io/v2/aggs/ticker/${nameStock}/range/1/day/${DateOne}/${DateTwo}?apiKey=Fwovimk6cL3XVJGfDpgJ35_Qet2QAJbu`

    
    let link = await fetch(url);
    let data = await link.json();



    if(data.results) {
        return data.results;
    };
    alert("That's not a Stock Type!")
    return null;
}

let chart;

async function Graph() {
    let info = await findingInfo();


    let money = []
    let dates = []

    info.forEach(stock => {
        let date = new Date(stock.t);
        dates.push(date.toLocaleDateString());
        money.push(stock.c);
    });

    let ctx = document.getElementById('chart');
    if (chart) {
        chart.destroy();
    }
        chart = new Chart(ctx,  {
            type: 'line',
            data: {
            labels: dates,
            datasets: [{
            label: '$Stock Price',
            data: money,
            fill: false,
            borderColor: 'rgb(69, 52, 133)',
            tension: 0.1
                }]
            }
        });
    }


/*Tables*/
function FetchTables() {
    return "https://tradestie.com/api/v1/apps/reddit?date=2022-04-03";
}

async function Tables() {
    let result = await fetch(FetchTables())
    let data = await result.json();

    /*FInding the Top Stocks based of comment count make sure there isn't anynull*/
    let newData = data.filter(stock => stock !== "null");
    let top5 = newData.sort((a,b) => b.no_of_comments-a.no_of_comments).slice(0,5);
    console.log(top5); 
   
    

    /*Table input*/
    let results = document.getElementById('insert');
    

    /*Make a For Loop to insert stocks */
    top5.forEach(stocks =>    {

        /*Identify Rows and Columns*/
        let Row = document.createElement('tr');

        let Tick = document.createElement('td');
        Tick.textContent = stocks.ticker;

        let Com = document.createElement('td');
        Com.textContent = stocks.no_of_comments;

        let Senti = document.createElement('td');
       
        

        /*Condition to see if it's a bull or bear*/
        if (stocks.sentiment == "Bullish") {
            /*Find The Picture*/
            let bull = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Taureau_charolais_au_pr%C3%A9.jpg/250px-Taureau_charolais_au_pr%C3%A9.jpg";
            let pic = document.createElement("img");

            /*Adjusting The Photo*/
            pic.src = bull;
            pic.width = 100;
            pic.height = 100;

            Senti.appendChild(pic);
        } else if  (stocks.sentiment == "Bearish") {
            /*Find The Picture*/
            let bear = "https://plus.unsplash.com/premium_photo-1664298004972-af1ad3b52321?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBiZWFyfGVufDB8fDB8fHww";
            let pic = document.createElement("img");

            /*Adjusting The Photo*/
            pic.src = bear;
            pic.width = 100;
            pic.height = 100;

            Senti.appendChild(pic);
        }
            /*Adding the Results */
            Row.appendChild(Tick);
            Row.appendChild(Com);
            Row.appendChild(Senti);

            results.appendChild(Row);
    });
}
window.onload = function() {
    Tables();
    Annyang();
}
