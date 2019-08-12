const express = require("./node_modules/express");
const app = express();
const cors = require("./node_modules/cors/lib");
const bodyParser = require("./node_modules/body-parser");
const logger = require("./node_modules/morgan");

const port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;