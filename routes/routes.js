var BoardController = require("../controllers/board");

var appRouter = (app) => {

    app.get("/sudoku/board", (req, res) => {
        
        BoardController.getBoard((result) => {
            console.log(result);          
            res.json(result);
        });
    });

}

module.exports = appRouter;