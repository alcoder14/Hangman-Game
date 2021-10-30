let canvas = document.querySelector("canvas");

canvas.width = 1000;
canvas.height = 600;

let context = canvas.getContext("2d");

let arrayOfCountries = ["SLOVENIA", "CROATIA", "CANADA", "BRAZIL", "POLAND", "GREECE", "INDIA", "NEW ZEALAND", "JAPAN"]

let arrayOfSports = ["BASKETBALL", "SOCCER", "FOOTBALL", "VOLLEYBALL", "HANDBALL", "RUNNING", "SWIMMING"]

let arrayOfCS = ["PROCESSOR", "MEMORY", "GRAPHICS", "HARDWARE", "SOFTWARE", "DRIVER", "KERNEL", "MOTHERBOARD"];

let arrayOfFood = ["PIZZA", "PASTA", "BURGER", "FRIES", "PANCAKES", "RICE", "FISH"];

const select = document.querySelector("select");
const options = document.querySelectorAll("option");
const generate_btn = document.querySelector("#generate-btn");
const inputLetter = document.querySelector("#letter");
const interaction = document.querySelector("#interaction")

generate_btn.addEventListener("click", generateWord);

let arrayOfLetterPlaces = [];

let selectedValue;
let word, div;
let win = false;
function generateWord(){
    selectedValue = select.value;
    if(selectedValue == "auto-select"){
        let arrayOfThemes = ["countries", "sports", "computer-science", "food"];
        selectedValue = arrayOfThemes[Math.floor(Math.random() * arrayOfThemes.length)];
    }
    
    if(selectedValue == "countries"){
        word = arrayOfCountries[Math.floor(Math.random() * arrayOfCountries.length)];
    } else if(selectedValue == "sports"){
        word = arrayOfSports[Math.floor(Math.random() * arrayOfSports.length)];
    } else if(selectedValue == "computer-science"){
        word = arrayOfCS[Math.floor(Math.random() * arrayOfCS.length)];
    } else {
        word = arrayOfFood[Math.floor(Math.random() * arrayOfFood.length)];
    }
    console.log(selectedValue);
    console.log(word)

    div = document.createElement("div");
    div.classList.add("word-container")
    for(let x of word){
        let container = document.createElement("div");
        container.classList.add("letter-place");
        arrayOfLetterPlaces.push(container)
        div.appendChild(container);
    }
    interaction.insertBefore(div, inputLetter);

}

const guess_btn = document.querySelector("#guess-btn");
console.log(guess_btn);

guess_btn.addEventListener("click", guessFunc)

let pickedLetter;
let counterFalse = 0, counterTrue = 0;
function guessFunc(){
    let counter = 0;
    pickedLetter = inputLetter.value;
    pickedLetter = pickedLetter.toUpperCase();
    console.log(pickedLetter);
    if(pickedLetter.length > 1){
        alert("You can enter only one letter at once")
    }

    var x;
    if(word.includes(pickedLetter)){
        for(x of word){
            if(x == pickedLetter){
                counterTrue++;
                arrayOfLetterPlaces[counter].innerHTML = pickedLetter;
                if(counterTrue == word.length){
                    win = true;
                    endMessage();
                    break;
                }
            } 
            counter++;
        }
    } else {
        if(counterFalse == 0){
            context.strokeStyle = "black";
            context.beginPath();
            context.moveTo(300, 500);
            context.lineTo(700, 500)
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 1){
            context.beginPath()
            context.moveTo(500, 500);
            context.lineTo(500, 100);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 2){
            context.beginPath();
            context.moveTo(500, 100)
            context.lineTo(620, 100);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 3){
            context.beginPath();
            context.moveTo(620, 100)
            context.lineTo(620, 180);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 4){
            context.beginPath();
            context.arc(620, 210, 30, 0, Math.PI * 2, false)
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 5){
            context.beginPath();
            context.moveTo(620, 240)
            context.lineTo(620, 330);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 6){
            context.beginPath();
            context.moveTo(620, 270);
            context.lineTo(650, 320);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 7){
            context.beginPath();
            context.moveTo(620, 270);
            context.lineTo(590, 320);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 8){
            context.beginPath();
            context.moveTo(620, 330);
            context.lineTo(660, 380);
            context.stroke();
            counterFalse++;
        } else if(counterFalse == 9){
            context.beginPath()
            context.moveTo(620, 330);
            context.lineTo(580, 380);
            context.stroke();
            win = false;
            endMessage();
        }
    }
    inputLetter.value = "";
}


const modal = document.querySelector("#modal");
const message = document.querySelector("#message");
const play_again = document.querySelector("#play_again");

function endMessage(){
    modal.style.display = "flex";
    if(win){
        message.innerHTML = "Congratulations!";
    } else {
        message.innerHTML = "You lost!";
    }
}

play_again.addEventListener("click", resetGame);

function resetGame(){
    modal.style.display = "none";
    counter = 0;
    counterFalse = 0;
    counterFalse = 0;
    counterTrue = 0;
    win = false;
    arrayOfLetterPlaces.length = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    div.remove()
    select.value = "auto-select";
}



