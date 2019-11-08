var boardController = require("../controllers/board");

var appRouter = (app) => {

    app.get("/sudoku/board", (req, res) => {
        
        boardController.getBoard((result) => {
            console.log(result);          
            res.json(result);
        });
    });

}

module.exports = appRouter;