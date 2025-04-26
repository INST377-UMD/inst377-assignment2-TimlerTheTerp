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
/*Graphing*/

/*This will be able to get the stock info that we need in order to make a graph */
/*Material From the website was able to Override the CORS INSTALLATION*/
async function findingInfo() {
    /*Key*/
    let rest ="Fwovimk6cL3XVJGfDpgJ35_Qet2QAJbu";

    /*Make Variables to identify*/
    let nameStock = document.getElementById("Stocktype").value;
    let Days = document.getElementById("Days").value;

    let url = `https://api.polygon.io/v2/aggs/ticker/${nameStock}/range/1/${Days}/2023-01-15/2023-04-15?adjusted=true&sort=asc&limit=120&apiKey=${rest}`;


    let link = await fetch(url);
    let data = await link.json();

    if(data.results) {
        return data.results;
    };
    return data;
    }
    




async function GraphPlot() {
    let info = await findingInfo();

    let money = []
    let dates = []

    info.forEach(stock => {
        let date = new Date(stock.t);
        money.push(date.toLocaleDateString());
        dates.push(stock.c);
    });

    let ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx,  {
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
            let bull = "https://img.freepik.com/premium-vector/bullish-icon-flat-color-style_755164-645.jpg";
            let pic = document.createElement("img");

            /*Adjusting The Photo*/
            pic.src = bull;
            pic.width = 100;
            pic.height = 100;

            Senti.appendChild(pic);
        } else if  (stocks.sentiment == "Bearish") {
            /*Find The Picture*/
            let bear = "https://img.freepik.com/premium-vector/grizzly-bear-icon-white-background-simple-vector-illustration_404166-1234.jpg";
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
window.onload = Tables;