let showGameStatus = document.querySelector(".gameStatus");
//^Need to figure out how get this to connect w/ the CSS for the html h2 so it'll dynamically display conditionally based upon the result of finalGameMsg fns from lines below & hide display when those conditions aren't met...

let gameActive = true;
let currentPlayer = "X";
let moveCounter = 0;

//let gameState = [somehow store states,,,,,] - Haven't figured out conceptually how to do this yet (store states iteratively kind of archiving the result into a tbl or something...)...but I feel pretty confident this is doable.
//Thinking that rather than ^, could accomplish same need via just keeping track of how many moves there've been via a counter fn that increments up by 1 via ++ (fn to increase moveCounter++)...

function finalGameMessage() {
    if (checkIfThreeInARow()) {
        showGameStatus.textContent = "Player " + currentPlayer + " wins!";
        gameActive = false;
    } else if (!checkIfThreeInARow() && moveCounter > 8) {
        showGameStatus.textContent = "Draw";
        gameActive = false;
    }
}

let ticCells = document.querySelectorAll(".cell")
for (let ticCell of ticCells) {
    ticCell.addEventListener("click", handleCellPlayed);
}

//Make correct player's marker place text in cell clicked
function handleCellPlayed(e) {
    if (!gameActive) {
        window.location.reload();
        return;
    }
    if (e.target.textContent !== "") {
        return;
    }
    e.target.textContent = currentPlayer;
    moveCounter++;
    checkIfThreeInARow();
    finalGameMessage();
    handlePlayerChange();
}

//Make marker toggle to X or O appropriately
function handlePlayerChange() {
    if (currentPlayer === "X") {
        return currentPlayer = "O";
    } else {
        return currentPlayer = "X";
    }
}

const arrayOfPotentialWinCombinations = [
    [".top.left", ".top.middle", ".top.right"],
    [".middle.left", ".center", ".middle.right"],
    [".bottom.left", ".bottom.middle", ".bottom.right"],
    [".top.left", ".middle.left", ".bottom.left"],
    [".middle.top", ".center", ".middle.bottom"],
    [".top.right", ".middle.right", ".bottom.right"],
    [".top.left", ".center", ".bottom.right"],
    [".bottom.left", ".center", ".top.right"]
];

function checkIfThreeInARow() {
    let winCellQuery1, winCellQuery2, winCellQuery3;
    for (let winSet of arrayOfPotentialWinCombinations) {
        winCellQuery1 = document.querySelector(winSet[0]).textContent;
        winCellQuery2 = document.querySelector(winSet[1]).textContent;
        winCellQuery3 = document.querySelector(winSet[2]).textContent;
        // console.log(winCellQuery1 === winCellQuery2 === winCellQuery3);
        if (winCellQuery1 === winCellQuery2 && winCellQuery2 === winCellQuery3 && winCellQuery1 !== "") {
            return true;
        }
    }
    return false;
}

//https://www.youtube.com/watch?v=NJO7w80TIhU