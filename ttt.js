var origBoard;
const realPlayer = 'X';
const roboPlayer = 'O';

const winner = [
    [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [2, 4, 6], [6, 7, 8]
];
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.getElementById('endgame').style.display = "none";
    origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    turn(square.target.id, realPlayer);
    aiTurn(roboPlayer);
}

function aiTurn(player) {
    var rand = Math.floor(Math.random() * 8) + 0;
    while (origBoard[rand] == 'X' || origBoard[rand] == 'O') {
        rand = Math.floor(Math.random() * 8) + 0;
    }
    turn(rand, player);
}

function turn(squareId, player) {
    if (origBoard[squareId] != 'X' && origBoard[squareId] != 'O') {
        origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
        checkWin(origBoard, player);
    }
}

function checkWin(board, player) {
    let playerSpots = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] == player) {
            playerSpots.push(i);
        }
    }
    for (let i = 0; i < winner.length; i++) {
        if (playerSpots.includes(winner[i][0]) && playerSpots.includes(winner[i][1]) && playerSpots.includes(winner[i][2])) {
            if (player == 'X') {
                document.getElementById('endgame').innerText = "Good job human! You beat the Robot";
            }
            if (player == 'O') {
                document.getElementById('endgame').innerText = "Couldn't even win against a Robot?";
            }
            document.getElementById('endgame').style.display = "block";
            for (let j in cells) {
                cells[j].removeEventListener('click', turnClick, false);
            }
        }
    }
}