var queryResult1 = document.querySelector(".top.left");

queryResult1.addEventListener("click", firstClick);

function firstClick() {
    queryResult1.textContent = "x"
}

//states/data:
// whose turn it is
// is the game complete?
// number of moves - make this an object - have a fn that checks each move to see if it's 9 yet
// are there 3 in a row? yes
//tools to work w this data = data types, arrays, objects, numbers, strings

//whose turn it is display x or o as a string, whenever x clicks, toggle to o & vv

// default for when you start game is x's turn, move counter is 0, variable 3 in a row is false

// list that you store that is the potential 3 in a rows and after each move check that list to see if it's met (checking the state of the board)

// winningCombos = [[.top.left, .top.middle,etc.],[]] to be query selected - starting at click 5 (move counter) run thru & check each grouping and see if they're equal to each other
// just like how you can grab textContent, run a fn that takes this array of winning combos for each item & each subarray (2 loops) & loop over each individual array since there are 3 in each one, grab the text content & assign it to test var 1 save it there, then loop run 2nd one, then query select top middle, grab that text content then is test var 1 equal to top middle text content - as soon as any 2 aren't the same, but if they are 2 in a row, save it to test var 2, then grab the 3rd item's .textContent & compare that to test var 2 (compare to see if they're the same - both xs or both os, if is the same), if is the same, don't need to 

//that var runs every time click if it's at least move 5, then check list of winning combos of css classes to use to grab in queryselector text content

// 3 fns run every time a click - chng to x or o, starting @ mv 5 check if a winning combo, 3rd is check if 3 in a row var is true yet, ;;;;;; actually it's 1st fn whenever click, text content of that cell needs to be assigned to whoever's turn it is, and as soon as assign current turn to that person, move turn variable change to other character, 2nd is 3 in a row, accepts an array of winning combos & this one 1st checks is it at least mv 5? If so, for length of whole array & length of inner arrays, select these css items for each one grabbing text content to compare to each other, & as soon as 3 in a row, make global var of is 3 in a row which defaults to false, make that true, 3rd fn is check if game is over which would be mv cntr 9 ||or is fn2 returns 3 in a row var is set to true, game is over, display "[whoever's turn it is] as winner" 

//outer variable 3 in a row = false - make that true if above matches

//for is the board filled, have a move counter that whenever there's a click, increments up by 1 & when game reaches 9 it looks for 3 in a row or it's a draw



//x goes 1st
//x & o alternate
//if 3 of a kind in a row display "[X] or [O] wins"
//if all boxes have letters (no addl moves) say "Draw"
//if addl click, reset game w/ x going 1st again