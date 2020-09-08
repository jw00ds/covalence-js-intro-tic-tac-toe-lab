//Notes from Luke's YouTube vid lecture from Catalyst prep work in Gravity portal for the exercise:

//Gonna need: document.querySelector, document.querySelectorAll, textContent, the click event passes an object that has a target property, addEventListener
//X goes 1st
//X & O alternate
//if 3 of a kind in a row display "[X] or [O] wins"
//if all boxes have letters (no add'l moves) say "Draw"
//if add'l click, reset game w/ X going 1st again, no matter whose turn was most recent



//My prelim thoughts scribble from before I tried to dive in & create anything:

//states/data:
//whose turn it is
//is the game complete?
//number of moves - make this an object - have a fn that checks each move to see if it's been 9 total moves yet
//be able to somehow validate data that determines if there are 3 in a row for either player
//whose turn it is display X or O as a text string, whenever x clicks, toggle to O & vv
//defaults for when you start game: a) it's X's turn & that's what displays in 1st cell clicked, b) move counter is 0, c) 3 in a row is false
//winningCombos = [[.top.left, .top.middle,etc.],[]] to be query selected - starting at click 5 (move counter) run thru & check each grouping & see if they're equal to each other
//3 fns run every time a click: 1) chng/alternate X to O & vice versa; 2a) starting @ mv 5, check if a winning combo has been achieved/met; 2b) check if 3 in a row condition is true yet; & 3) check if game is over which would be mv cntr = 9 ||or 3-in-a-row condition is met/("true"). @ this pt., game is over, display "[whoever's turn it is] as winner."



//Some prelim work to prove out / tangibly see some of this action in the console I did w/ my friend who helped me a bit w/ this:

//var queryResult1 = document.querySelector(".top.left");

//queryResult1.addEventListener("click", firstClick);

//function firstClick() {
//    queryResult1.textContent = "x"
//}



let showGameStatus = document.querySelector(".gameStatus");
//^Need to figure out how get this to connect w/ the CSS for the html h2 so it'll dynamically display conditionally based upon the result of finalGameMsg fns from lines below & hide display when those conditions aren't met...

let gameActive = true;
let currentPlayer = "X";

//let gameState = [somehow store states,,,,,] - Haven't figured out conceptually how to do this yet (store states iteratively kind of archiving the result into a tbl or something...)...but I feel pretty confident this is doable.
//Thinking that rather than ^, could accomplish same need via just keeping track of how many moves there've been via a counter fn that increments up by 1 via ++ (fn to increase moveCounter++)...

// let moveCounter = 0 {
//     function moveCounterFunction() {
//         document.addEventListener("click")
//         moveCounter++
//         //^Know this needs to incl. "++" & .addEventListener but that's as far as I've gotten...
//     }
// }

function finalGameMessageWin() {
    if (checkIfThreeInARow() === true) {
        return "Player " + currentPlayer + " wins!";
    }
}

function finalGameMessageDraw() {
    if (checkIfThreeInARow() === false && moveCounter > 8)
    return "Draw";
}

let ticCells = document.querySelectorAll(".cell")
for (var ticCell of ticCells) {
    ticCell.addEventListener("click", handleCellPlayed);
    ticCell.addEventListener("click", handlePlayerChange);
}

//Make correct player's marker place text in cell clicked
function handleCellPlayed(e1) {
    return event.target.textContent = currentPlayer;
}

function endGame(e2) {
    //Catch if game is over
    if (gameActive === true) {
        return;
    }
}

//Make marker toggle to X or O appropriately
function handlePlayerChange() {
    if (currentPlayer === "X") {
        return currentPlayer = "O";
    } else {
        return currentPlayer = "X";
    }
}

//Catch & prevent cheating
if (e2.target.textContent !== "") {
    return;
}
//^When I run the code, it gives me an error for the return line above, saying "illegal return statment"

const arrayOfPotentialWinCombinations = [
    [cell[0], cell[1], cell[2]], 
    [cell[3], cell[4], cell[5]], 
    [cell[6], cell[7], cell[8]], 
    [cell[0], cell[3], cell[6]], 
    [cell[1], cell[4], cell[7]], 
    [cell[2], cell[5], cell[8]], 
    [cell[0], cell[4], cell[8]], 
    [cell[6], cell[4], cell[2]]
];
// const arrayOfPotentialWinCombinations = [
//     [".top.left", ".top.middle", ".top.right"], 
//     [".middle.left", ".center", ".middle.right"], 
//     [".bottom.left", ".bottom.middle", ".bottom.right"], 
//     [".top.left", ".middle.left", ".bottom.left"], 
//     [".middle.top", ".center", ".middle.bottom"], 
//     [".top.right", ".middle.right", ".bottom.right"], 
//     [".top.left", ".center", ".bottom.right"], 
//     [".bottom.left", ".center", ".top.right"]
// ];
//^Remember, these CSS classes (to isolate/target the divs) have to be stored in the array as a string/text vals.

checkIfThreeInARow()
//^exe Really struggling to understand when you include parentheses on the end of a fn vs when not to, as well as what parameters, if any - to put inside them / when to include them but leave () contents empty...

function checkIfThreeInARow() {
    let winCellQuery1;
    let winCellQuery2;
    let winCellQuery3;
    for (var winSet of arrayOfPotentialWinCombinations) {
        winCellQuery1 = document.querySelector(winSet[0]).textContent;
        winCellQuery2 = document.querySelector(winSet[1]).textContent;
        winCellQuery3 = document.querySelector(winSet[2]).textContent;
        // console.log(winCellQuery1 === winCellQuery2 === winCellQuery3)
        if (winCellQuery1 === winCellQuery2 === winCellQuery3) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    if (moveCounter > 8) {
        addEventListener("click", window.location.reload());
    }
}