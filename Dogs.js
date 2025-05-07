/*REQUIRED BELOW */
function Annyang() {
    if (annyang) {
        // Let's define a command.
        const commands = {
          'hello': () => { 
                alert('Hello world!'); 
                //change the background color
            },
            'Stocks': () => {
                window.location.href = "Stocks.html";
            },
  
            'Home': () => {
                window.location.href = "Assignment-2.html";
            },
  
            'Search Up Afghan Hound': () => {
                let buttons = document.getElementById("DogButtons").getElementsByTagName("button");
                for(let but of buttons) {
                    if (but.innerText == "Afghan Hound") {
                        but.click();
                    }
                }

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
      annyang.pause();
    }
  }
/*REQUIRED ABOVE*/ 

/*Getting The Photo*/
function getPhotoMenu() {
    return 'https://dog.ceo/api/breeds/image/random/10';
}

async function getPictures() {
    //Inputs
    let result = await fetch(getPhotoMenu());
    let data = await result.json();

    //Set the variable to insert in
    let gallery = document.getElementById("InsertDogs");

    //Make sure we create an image and add it to our gallery
    data.message.forEach(dogpic => {
        let Photo = document.createElement("img");
        Photo.src = dogpic;
        Photo.width = 700;
        Photo.height = 700;

        gallery.appendChild(Photo);

    });
    simpleslider.getSlider();
}

/*Getting The Dog Info*/
function getDogInfo() {
    return 'https://dogapi.dog/api/v2/breeds';
}

/*This Function would get the information for each of the dogs */
async function DogInfo() {
    let result = await fetch(getDogInfo());
    let data = await result.json();

    /*Identify The Section*/
    let box = document.getElementById("DogInfo");

    data.data.forEach(dogdes => {
        let info = document.createElement('div');
        info.style.display = "none";
    

    info.innerHTML = 
        `<h3>Name: ${dogdes.attributes.name}</h3>
        <p>Description: ${dogdes.attributes.description}</p>
        <p>Min Life: ${dogdes.attributes.life.min}</p>
        <p>Max Life: ${dogdes.attributes.life.max}</p>`;

    box.appendChild(info);
    });
}

/*Buttons*/
async function DogButtons() {
    let result = await fetch(getDogInfo());
    let data = await result.json();

    /*Identify The Section*/
    let buttons = document.getElementById("DogButtons");
    let box = document.getElementById("DogInfo");

    data.data.forEach((dogpic, index) => { 
        /*Create The Button*/
        let button = document.createElement("button");
        button.innerHTML = dogpic.attributes.name;

       
        button.addEventListener("click", function() {  
            let info = box.querySelectorAll("div"); 
            info.forEach(div => {
                div.style.display = "none"; 
            });

            let listinfo = info[index];  
            if (listinfo) {
                box.style.width = "1700px";
                box.style.height = "300px";
                listinfo.style.display = "block";
            }
        });

        buttons.appendChild(button);
    });
}
window.onload = function() {
    getPictures();
    DogInfo();
    DogButtons();
    Annyang();
}

