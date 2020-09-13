
//https://www.youtube.com/watch?v=NJO7w80TIhU

//selected html stuff
const cells = document.querySelectorAll(".row > div");
const gameStatus = document.querySelector(".gameStatus");

//game variables nested inside a game object variable so that console logging game status brings up all important attributes not just one at a time; can log game.isOver
let game = {
    currentPlayer: "X",
    moves: 0,
    isOver: false,
    togglePlayer: function () {
        if (game.currentPlayer === "X") {
            game.currentPlayer = "O";
        } else {
            game.currentPlayer = "X";
        }
    },
    reset: function () {
        for (const cell of cells) {
            cell.textContent = "";
        }
        gameStatus.textContent = "";
        game.moves = 0;
        game.currentPlayer = "X";
        game.isOver = false;
    }
};

for (const cell of cells) {
    cell.addEventListener("click", cellClicked);
}

function cellClicked(e) {
    console.log("test"); //to be sure every time you click on the screen it triggers event
    const cell = e.target; //when click a cell, store the click target into an easy variable to reference

    if (game.isOver) {
        game.reset();
        return; //if game is over = true (inherent/implied since don't list false), kill gameplay
    }

    if (cell.textContent !== "") {
        return; //anti-cheat
    }

    //^if neither of those stop the game, then we need to draw who our current player is
    cell.textContent = game.currentPlayer;
    game.moves++; //game increments by one move on the move counter

    checkWin();

    game.togglePlayer(); //toggle player for next click
}

function checkWin() {
    for (const combo of winningCombos) {
        const first = combo[0];
        const second = combo[1];
        const third = combo[2];
        checkCombo(first, second, third);
    }
    
    if (game.moves >= 9) {
        gameStatus.textContent = "Draw. Click any position in grid to reset game.";
        game.isOver = true;
    }
}

function checkCombo(a, b, c) {
    if (
        cells[a].textContent === game.currentPlayer &&
        cells[b].textContent === game.currentPlayer &&
        cells[c].textContent === game.currentPlayer
    ) {
        gameStatus.textContent = game.currentPlayer + " wins. Click any position in grid to reset game.";
        game.isOver = true;
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// function checkWin() {
//     if (
//         checkCombo(0, 1, 2) ||
//         checkCombo(3, 4, 5) ||
//         checkCombo(6, 7, 8) ||
//         checkCombo(0, 3, 6) ||
//         checkCombo(1, 4, 7) ||
//         checkCombo(2, 5, 8) ||
//         checkCombo(0, 4, 8) ||
//         checkCombo(2, 4, 6)
//     ) {
//         gameStatus.textContent = game.currentPlayer + " wins";
//         game.isOver = true;
//     } else if (game.moves >= 9) {
//         gameStatus.textContent = "Draw";
//         game.isOver = true;
//     }
// }
