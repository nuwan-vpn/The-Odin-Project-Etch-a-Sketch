let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
   createBoard(16);

   document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now, you can draw.";
            } else {
                draw.innerHTML = "Now, you are not allowed to draw";
            }
        }
   });

   let popupBtn = document.querySelector("#popup")
   popupBtn.addEventListener('click', function(){
        let size =getSize();
        createBoard(size);
   })
});

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for(let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Enter your desired size of board:");
    let message = document.querySelector("#message");
    if(input=="" || input<0 || input>100){
        message.innerHTML="Please enter a valid number between 1 and 100";
    } else{
        message.innerHTML = "Now you can play!";
        return input;
    }    
}

function colorDiv(){
    if(click){
        if(color === "random"){
            this.style.backgroundColor = getRandomHSLColor();
        } else{
            this.style.backgroundColor = 'black';
        }
    }       
}

function setColor(colorChoice){
    color = colorChoice;
}
  

function getRandomHSLColor() {
    // Generate random values for hue, saturation, and lightness
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 101); // 0-100 for percentage
    const randomLightness = Math.floor(Math.random() * 101);

    // Combine the components to create an HSL color string
    const randomHSLColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
    return randomHSLColor;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}


