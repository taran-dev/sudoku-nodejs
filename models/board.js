/*
Sudoku Board API.
Using Backtracking Algorithm (generating empty array and adding item one by one).
----------------------------------------------------------------------------------
>>Plan:
>>1. Generate Empty 9x9 Array
>>2. Run a search to find next empty location in Array. If location not found, array is SOLVED
>>3. Generate new number between 1 to 9
>>4. Validate before inserting in found location
>>>>a. Check validity by row to insert in location
>>>>b. Check validity by col to insert in location
>>>>c. Check validity by 3x3 grid (respective to that location) to insert in location
>>>>d. If all validations successful, insert item into Array. Else loop back to step 3.
>>5. Repeat step 2, until all locations filled
>>6. Return 9x9 complete array
*/

const express = require("express");
const app = express();

//GET 9x9 Valid Sudoku Array
app.get("/sudoku/board", (req, res) => {

    //1. Generate default 9x9 Array
    var board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    solveBoard(board);

    res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


function checkValidity(board, rowLoc, colLoc, num) {
    
    //a. Check validity by row to insert in location
    for(var i = 0; i < board.length; i++) {
        if(board[rowLoc][i] == num) {
            return false;
        }
    }

    //b. Check validity by col to insert in location
    for(var i = 0; i < board.length; i++) {
        if(board[i][colLoc] == num) {
            return false;
        }
    }

    //c. Check validity by 3x3 grid (respective to that location) to insert in location
    var size = Math.sqrt(board.length);
    var boxRowStartLoc = rowLoc + rowLoc % size;
    var boxColStartLoc = colLoc + colLoc % size;

    for(var i = boxRowStartLoc; i < boxRowStartLoc + size; i++) {
        for(var j = boxColStartLoc; j < boxColStartLoc + size; j++) {
            if(board[i][j] == num) {
                return false;
            } else {
                console.log("----");
                console.log("boxRowStartLoc: " + boxRowStartLoc);
                console.log("boxColStartLoc: " + boxColStartLoc);
                console.log("Adding num: " + num);
                console.log(`Location: ${i},${j}`);
            }
        }
    }

    //If the number does not exist anywhere in the above conditions, return true
    return true;

}


function solveBoard(board) {
    var arrLength = board.length; //Since symmetric array, length will be equal on both sides
    //var colLength = board[0].length;

    //2. Search to find next empty location in array
    
    var rowLoc = 0;
    var colLoc = 0;
    var IsLocationFound = false;
    for (var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {

            if(board[i][j] == 0) { //Found Empty location
                rowLoc = i;
                colLoc = j;
                IsLocationFound = true;
                break;
            }
        }
        
        if(IsLocationFound) {
            break;
        }
    }
    if(!IsLocationFound)
    {
        //Return Filled Array
    }

    //console.log("Empty Row Location: ", rowLoc);
    //console.log("Empty Col Location: ", colLoc);

    //3. Generate new number between 1 to 9
    //var num = Math.floor(Math.random() * 9) + 1;
    for (var num = 1; num <= arrLength; num++) {

        //4. Validate before inserting in found location
        var isValid = checkValidity(board, rowLoc, colLoc, num);

        if(isValid) {

            board[rowLoc][colLoc] = num;
            console.log("Sudoku Board So Far");
            console.log(board);

            if(solveBoard(board, arrLength)) {
                //Complete
                //6. Return 9x9 complete array
                console.log("Sudoku Board Complete");
                console.log(board);
            } else {
                board[rowLoc][colLoc] = 0;
            }
        }
    }

    
}