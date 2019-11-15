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

var BoardController = new Object();

//GET 9x9 Valid Sudoku Array
BoardController.getBoard = (selectedNum, selectedRow, selectedCol) => {
    
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

    //Insert number in Board in selected by User
    if(selectedNum !== 'undefined' && selectedRow !== 'undefined' && selectedCol !== 'undefined')
    {
        board[selectedRow][selectedCol] = selectedNum;
    }

    BoardController.solveBoard(board);

    //6. Return Array of 81 Integers
    var resultArray = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            resultArray.push(board[i][j]);
        }
    }

    return resultArray;
    
};

BoardController.checkValidity = (board, rowLoc, colLoc, num) => {
    
    //a. Check validity by row to insert in location
    if(!BoardController.checkRowValidity(board, rowLoc, num)) {
        return false;
    }

    //b. Check validity by col to insert in location
    if(!BoardController.checkColValidity(board, colLoc, num)) {
        return false;
    }

    //c. Check validity by 3x3 grid (respective to that location) to insert in location
    if(!BoardController.checkBoxValidity(board, rowLoc, colLoc, num)) {
        return false;
    }

    //If the number does not exist anywhere in the above conditions, return true
    return true;

}

BoardController.checkRowValidity = (board, rowLoc, num) => {
    for(var i = 0; i < board.length; i++) {
        if(board[rowLoc][i] == num) {
            return false;
        }
    }
    return true;
}

BoardController.checkColValidity = (board, colLoc, num) => {
    for(var i = 0; i < board.length; i++) {
        if(board[i][colLoc] == num) {
            return false;
        }
    }
    return true;
}

BoardController.checkBoxValidity = (board, rowLoc, colLoc, num) => {
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
    return true;
}

BoardController.shuffleArray = (initRow) => {

    for (let i = initRow.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [initRow[i], initRow[j]] = [initRow[j], initRow[i]];
    }

}

BoardController.findUnassignedLocation = (board, emptyLocArr) => {
    
    for (var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {

            if(board[i][j] == 0) { //Found Empty location
                emptyLocArr.rowLoc = i;
                emptyLocArr.colLoc = j;

                return true;
            }
        }
    }

    return false;
}

BoardController.solveBoard = (board) => {

    var boardLength = board.length; //Since it's a symmetric array, length will be equal on both sides

    //2. Search to find next empty location in array
    var emptyLocArr = {"rowLoc": 0, "colLoc": 0};

    var isLocationFound = BoardController.findUnassignedLocation(board, emptyLocArr);
    
    var rowLoc = emptyLocArr.rowLoc;
    var colLoc = emptyLocArr.colLoc;

    if(!isLocationFound)
    {
        //Return Filled Array
        return true;
    }

    //3. Generate new array with random numbers between 1 to 9
    var initArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    BoardController.shuffleArray(initArr);
    
    for (var i = 0; i < initArr.length; i++) {

        //4. Validate before inserting in found location
        var isValid = BoardController.checkValidity(board, rowLoc, colLoc, initArr[i]);

        if(isValid) {

            //Insert number into board
            board[rowLoc][colLoc] = initArr[i];

            //5. Repeat step 2, until all locations filled
            if(BoardController.solveBoard(board)) {
                return true; //Solving Complete
            } else {
                board[rowLoc][colLoc] = 0;
            }
        }
    }
    return false;
}

module.exports = BoardController;