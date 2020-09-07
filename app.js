// Notes from Luke's YouTube vid lecture from Catalyst prep work in Gravity portal for the exercise:

// Gonna need: document.querySelector, document.querySelectorAll, textContent, the click event passes an object that has a target property, addEventListener
// X goes 1st
// X & O alternate
// if 3 of a kind in a row display "[X] or [O] wins"
// if all boxes have letters (no add'l moves) say "Draw"
// if add'l click, reset game w/ X going 1st again, no matter whose turn was most recent



// My prelim thoughts scribble from before I tried to dive in & create anything:

// states/data:
// whose turn it is
// is the game complete?
// number of moves - make this an object - have a fn that checks each move to see if it's been 9 total moves yet
// be able to somehow validate data that determines if there are 3 in a row for either player
// whose turn it is display X or O as a text string, whenever x clicks, toggle to O & vv
// defaults for when you start game: a) it's X's turn & that's what displays in 1st cell clicked, b) move counter is 0, c) 3 in a row is false
// winningCombos = [[.top.left, .top.middle,etc.],[]] to be query selected - starting at click 5 (move counter) run thru & check each grouping & see if they're equal to each other
// 3 fns run every time a click: 1) chng/alternate X to O & vice versa; 2a) starting @ mv 5, check if a winning combo has been achieved/met; 2b) check if 3 in a row condition is true yet; & 3) check if game is over which would be mv cntr = 9 ||or 3-in-a-row condition is met/("true"). @ this pt., game is over, display "[whoever's turn it is] as winner."



// Some prelim work to prove out / tangibly see some of this action in the console I did w/ my friend who helped me a bit w/ this:

// var queryResult1 = document.querySelector(".top.left");

// queryResult1.addEventListener("click", firstClick);

// function firstClick() {
//     queryResult1.textContent = "x"
// }



let showGameStatus = document.querySelector(".gameStatus");
// ^Need to figure out how get this to connect w/ the CSS for the html h2 so it'll dynamically display conditionally based upon the result of finalGameMsg fns from lines 51:60 below & hide display when those conditions aren't met...

let gameActive = true;

let currentPlayer = "X"

// let gameState = [somehow store states,,,,,] - Haven't figured out conceptually how to do this yet (store states iteratively kind of archiving the result into a tbl or something...)...but I feel pretty confident this is doable.
// Thinking that rather than ^, could accomplish same need via just keeping track of how many moves there've been via a counter fn that increments up by 1 via ++ (fn to increase moveCounter++)...
function moveCounter() {
    // ^Know this needs to incl. "++" but that's as far as I've gotten...
}

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

function handleCellPlayed(event) {
    return event.target.textContent = currentPlayer;
}

// Can't figure out why the logic in below fn isn't working. It doesn't change back to x once it changes from X to O once...
function handlePlayerChange() {
    if (currentPlayer = "X") {
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

checkIfThreeInARow()
// ^exe Really struggling to understand when you include parentheses on the end of a fn vs when not to, as well as what parameters, if any - to put inside them / when to include them but leave () contents empty...

function checkIfThreeInARow() {
    let winQuery1;
    let winQuery2;
    let winQuery3;
    for (var winSet of arrayOfPotentialWinCombinations) {
        winQuery1 = document.querySelector(winSet[0]).textContent;
        winQuery2 = document.querySelector(winSet[1]).textContent;
        winQuery3 = document.querySelector(winSet[2]).textContent;
        // console.log(winQuery1 === winQuery2 === winQuery3)
        if (winQuery1 === winQuery2 === winQuery3) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    // ^Haven't figured out how to address this yet...I know operationally it needs to: 1) clear the text content of all the divs; 2) currentPlayer needs to be defaulted back to X (no matter whose turn happened most recently); 3) only be possible/allowed when moveCounter fn's value > 8; & 4) be initiated by a click anywhere on the board...
}