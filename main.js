document.addEventListener("DOMContentLoaded", function(){
   createBoard(16);
   let popupBtn = document.querySelector("#popup")
   popupBtn.addEventListener('click', function(){
        let size =getSize();
        createBoard(size)
   })
});

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for(let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor="Black";
        })
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
  