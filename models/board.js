/*
Sudoku Board API.
Using Backtracking Algorithm (generating empty array and adding item one by one).
----------------------------------------------------------------------------------
>>Plan:
>>1. Generate Empty 9x9 Array
>>2. Run a search to find next empty location in Array. If location not found, array is SOLVED
>>3. Generate new random number between 1 to 9
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

    var rowLength = board.length;
    var colLength = board[0].length;

    //2. Search to find next empty location in array
    var rowLoc = 0;
    var colLoc = 0;
    var IsLocationFound = false;
    for (var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {

            if(_board[i][j] == 0) { //Found Empty location
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


    console.log("Empty Row Location: ", rowLoc);
    console.log("Empty Col Location: ", colLoc);

    res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});