document.addEventListener("DOMContentLoaded", function(){
   createBoard(12);
});

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
