const board= [];

function play (clickedId){
 const playerSpan = document.getElementById('player');
 let clickedElement = document.getElementById(clickedId);
 if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  } 
  console.log(board);

    let topLeft = board[0];
    let topCenter = board [1];
    let topLeft = board[2];
    let centerLeft = board[3];
    let centerCenter= board [4];
    let centerRight = board [5];
    let bottomLeft = board [6];
    let bottomCenter = board [7];
    let bottomRight = board [8];


    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
      }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
      }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
      }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
      }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
      }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
      }
    
    let boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
    }

function resetBoard(){
    board = [];
    row.innerText = board;
}

const resetBoard = document.getElementById ('clear');
clearButton.addEventListener('click', function(){
    console.log('Board Cleared!')
    resetBoard();
})