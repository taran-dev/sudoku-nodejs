var BoardModel = require("../models/board");

var appRouter = (app) => {

    app.get("/sudoku/board", (req, res) => {
        
        BoardModel.getBoard((result) => {
            console.log(result);          
            res.json(result);
        });
    });

}

module.exports = appRouter;