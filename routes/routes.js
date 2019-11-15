var boardController = require("../controllers/board");

var appRouter = (app) => {

    app.get("/sudoku/board", (req, res) => {
        
        var num = req.query.num;
        var row = req.query.row;
        var col = req.query.col;
        
        var result = boardController.getBoard(num, row, col);
        res.json(result);
        
    });

}

module.exports = appRouter;