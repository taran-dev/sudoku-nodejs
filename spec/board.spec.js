var board = require("../models/board");

describe("board", () => {

    console.log("SUDOKU BOARD TEST!");
    var emptyBoard;
    var validBoard;
    var invalidBoard;

    beforeEach(function() {

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
        
    });

    describe("solve", () => {

        describe("for an invalid board", () => {
            it("returns false", function() {
              expect(board.solveBoard(invalidBoard)).toBeFalsy();
            });
        });
        describe("for a valid board", () => {

            it("returns true for empty board", function() {
                expect(board.solveBoard(emptyBoard)).toBeTruthy();
              });

            it("returns true for semi filled board", function() {
              expect(board.solveBoard(validBoard)).toBeTruthy();
            });

        });
    });

    describe("validate number insertion in partly filled board", () => {

        var numberToInsert = 9;
        var rowLocation = 0;
        var colLocation = 1;

        it("returns true if insertion of number in 9x9 board is possible", function() {
            expect(board.checkValidity(validBoard, rowLocation, colLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in row is possible", function() {
            expect(board.checkRowValidity(validBoard, rowLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in col is possible", function() {
            expect(board.checkColValidity(validBoard, colLocation, numberToInsert)).toBeTruthy();
        });

        it("returns true if insertion of number in 3x3 grid of board is possible", function() {
            expect(board.checkBoxValidity(validBoard, rowLocation, colLocation, numberToInsert)).toBeTruthy();
        });

    });

    
    describe("validate number insertion in invalid board", () => {

        var numberToInsert = 1;
        var rowLocation = 0;
        var colLocation = 1;

        it("returns true if insertion of number in 9x9 board is possible", function() {
            expect(board.checkValidity(invalidBoard, rowLocation, colLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in row is possible", function() {
            expect(board.checkRowValidity(invalidBoard, rowLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in col is possible", function() {
            expect(board.checkColValidity(invalidBoard, colLocation, numberToInsert)).toBeFalsy();
        });

        it("returns true if insertion of number in 3x3 grid of board is possible", function() {
            expect(board.checkBoxValidity(invalidBoard, rowLocation, colLocation, numberToInsert)).toBeFalsy();
        });

    });

    
});