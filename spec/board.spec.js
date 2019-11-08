var boardController = require("../controllers/board");

describe("board", () => {

    console.log("SUDOKU BOARD TEST!");
    var emptyBoard;
    var validBoard;
    var invalidBoard;
    var emptyLocArr;

    beforeEach(() => {

        emptyLocArr = {"rowLoc": 0, "colLoc": 0};

        emptyBoard  = [
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

        validBoard = [
            [0, 0, 8, 0, 0, 0, 0, 2, 4],
            [0, 0, 0, 4, 9, 8, 0, 0, 5],
            [4, 6, 0, 0, 0, 5, 8, 0, 0],
            [0, 7, 0, 0, 5, 0, 9, 0, 0],
            [9, 0, 0, 8, 0, 6, 0, 0, 3],
            [0, 0, 5, 0, 4, 0, 0, 6, 0],
            [0, 0, 6, 5, 0, 0, 0, 7, 9],
            [7, 0, 0, 9, 6, 1, 0, 0, 0],
            [1, 8, 0, 0, 0, 0, 4, 0, 0],
        ];

        invalidBoard = [
            [1, 0, 8, 0, 1, 0, 0, 2, 4],
            [0, 0, 0, 4, 9, 8, 0, 0, 5],
            [4, 6, 1, 0, 0, 5, 8, 0, 0],
            [0, 7, 0, 0, 5, 0, 9, 0, 0],
            [9, 1, 0, 8, 0, 6, 0, 0, 3],
            [0, 0, 5, 0, 4, 0, 0, 6, 0],
            [0, 0, 6, 5, 0, 0, 0, 7, 9],
            [7, 0, 0, 9, 6, 1, 0, 0, 0],
            [1, 8, 0, 0, 0, 0, 4, 0, 0],
        ];

        solvedBoard = [
            [5, 9, 8, 6, 1, 3, 7, 2, 4],
            [2, 1, 7, 4, 9, 8, 6, 3, 5],
            [4, 6, 3, 7, 2, 5, 8, 9, 1],
            [6, 7, 1, 3, 5, 2, 9, 4, 8],
            [9, 4, 2, 8, 7, 6, 5, 1, 3],
            [8, 3, 5, 1, 4, 9, 2, 6, 7],
            [3, 2, 6, 5, 8, 4, 1, 7, 9],
            [7, 5, 4, 9, 6, 1, 3, 8, 2],
            [1, 8, 9, 2, 3, 7, 4, 5, 6],
        ];
        
    });

    describe("solve", () => {

        describe("for an invalid board", () => {
            it("returns false", () => {
              expect(boardController.solveBoard(invalidBoard)).toBeFalsy();
            });
        });
        describe("for a valid board", () => {

            it("returns true for empty board", () => {
                expect(boardController.solveBoard(emptyBoard)).toBeTruthy();
              });

            it("returns true for semi filled board", () => {
              expect(boardController.solveBoard(validBoard)).toBeTruthy();
            });

        });
    });

    describe("find unassigned location in partly solved board", () => {
        it("returns true if location found", () => {
            expect(boardController.findUnassignedLocation(validBoard, emptyLocArr)).toBeTruthy();
        });
    });

    describe("find unassigned location in solved board", () => {
        it("returns false if location not found, meaning that the board is solved", () => {
            expect(boardController.findUnassignedLocation(solvedBoard, emptyLocArr)).toBeFalsy();
        });
    });

    describe("validate number insertion in partly solved board", () => {

        var numberToInsert = 9;
        var rowLocation = 0;
        var colLocation = 1;

        it("returns true if insertion of number in 9x9 board is possible", () => {
            expect(boardController.checkValidity(validBoard, rowLocation, colLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in row is possible", () => {
            expect(boardController.checkRowValidity(validBoard, rowLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in col is possible", () => {
            expect(boardController.checkColValidity(validBoard, colLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in 3x3 grid of board is possible", () => {
            expect(boardController.checkBoxValidity(validBoard, rowLocation, colLocation, numberToInsert)).toBeTruthy();
        });

    });
    
    describe("validate number insertion in invalid board", () => {

        var numberToInsert = 1;
        var rowLocation = 0;
        var colLocation = 1;

        it("returns true if insertion of number in 9x9 board is possible", () => {
            expect(boardController.checkValidity(invalidBoard, rowLocation, colLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in row is possible", () => {
            expect(boardController.checkRowValidity(invalidBoard, rowLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in col is possible", () => {
            expect(boardController.checkColValidity(invalidBoard, colLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in 3x3 grid of board is possible", () => {
            expect(boardController.checkBoxValidity(invalidBoard, rowLocation, colLocation, numberToInsert)).toBeFalsy();
        });

    });

    
});