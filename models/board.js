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
    const board = [
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
    
    //Test Solving Board
    // const board = [
    //     [0, 0, 8, 0, 0, 0, 0, 2, 4],
    //     [0, 0, 0, 4, 9, 8, 0, 0, 5],
    //     [4, 6, 0, 0, 0, 5, 8, 0, 0],
    //     [0, 7, 0, 0, 5, 0, 9, 0, 0],
    //     [9, 0, 0, 8, 0, 6, 0, 0, 3],
    //     [0, 0, 5, 0, 4, 0, 0, 6, 0],
    //     [0, 0, 6, 5, 0, 0, 0, 7, 9],
    //     [7, 0, 0, 9, 6, 1, 0, 0, 0],
    //     [1, 8, 0, 0, 0, 0, 4, 0, 0],
    // ];

    //Randomizing first row, to ensure every board generation is randomized
    var initRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = initRow.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [initRow[i], initRow[j]] = [initRow[j], initRow[i]];
    }
    board[0] = initRow;

    solveBoard(board);
    console.log(board);

    //6. Return 9x9 complete array
    res.send(board);
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
    var boxRowStartLoc = rowLoc - rowLoc % size;
    var boxColStartLoc = colLoc - colLoc % size;

    for(var i = boxRowStartLoc; i < boxRowStartLoc + size; i++) {
        for(var j = boxColStartLoc; j < boxColStartLoc + size; j++) {
            if(board[i][j] == num) {
                return false;
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
        return true;
    }

    //3. Generate new number between 1 to 9
    for (var num = 1; num <= arrLength; num++) {

        //4. Validate before inserting in found location
        var isValid = checkValidity(board, rowLoc, colLoc, num);

        if(isValid) {

            board[rowLoc][colLoc] = num;

            if(solveBoard(board, arrLength)) {
                return true; //Solving Complete
            } else {
                board[rowLoc][colLoc] = 0;
            }
        }
    }
    return false;
}