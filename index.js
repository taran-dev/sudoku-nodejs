const express = require("express");
const app = express();

// All routes to be used in this application
var routes = require("./routes/routes.js");
routes(app);

const port = process.env.PORT || 3000;
var server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}...`);
});

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});