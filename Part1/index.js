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


    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
     alert (`${topLeft} is the winner`)
     return;
    }
    if (centerLeft !== undefined && centerLeft === centerCenter && centerLeft === centerRight){
        alert (`${centerLeft} is the winner`)
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter &&bottomLeft === bottomRight){
        alert (`${bottomLeft} is the winner`)
        return;
    }
    if (topRight !== undefined && topRight === centerRight && topRight === bottomRight){
        alert (`${topRight} is the winner`)
            return;
    }
    if (topCenter !== undefined && topCenter === centerCenter && topCenter === bottomCenter){
        alert (`${topCenter} is the winner`)
        return;
    }
    if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
    alert (`${topLeft} is the winner`)
    return;
   }
   if (topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRight){
    alert (`${topLeft} is the winner`)
    return;
   }
   if (topRight !== undefined && topRight === centerCenter && topRight === bottomLeft){
    alert (`${topRight} is the winner`)
    return;
   }

   let boardFull = true;
   for (let i = 0; i <= 8; i++){
   if (boardFull === undefined){
       boardFull = false;
   }
   }
   if (boardFull === true){
       alert (`It was a CAT's game`)
   }

}

function resetBoard = (){
    board = [];
    row.innerText = board;
}

const resetBoard = document.getElementById ('clear');
clearButton.addEventListener('click', function(){
    console.log('Board Cleared!')
    resetBoard();
})