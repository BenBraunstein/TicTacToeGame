var origBoard;
const realPlayer = 'X';
const roboPlayer = 'O';

const winner = [
    [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [2, 4, 6], [6, 7, 8]
];
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }

}

function turnClick(square) {
    turn(square.target.id, realPlayer)
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    console.log(origBoard);
    let gameWon = checkWin(origBoard, player);
    if (gameWon == true) {
        gameOver(gameWon);
    }
}

function checkWin(board, player) {
    let playerSpots = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] == player) {
            playerSpots.push(i);
        }
    }
    console.log(playerSpots);
    for (let i = 0; i < winner.length; i++) {
        if (playerSpots.includes(winner[i][0]) && playerSpots.includes(winner[i][1]) && playerSpots.includes(winner[i][2])) {
            console.log("WINNER!");
        }
    }

}