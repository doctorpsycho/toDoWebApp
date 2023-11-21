const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

var toDo = "";

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("list", { kindOfDay: day });
});

app.post("/", function (req, res) {
     toDo = req.body.td;
    res.render("list", { toDo: td });
});
app.listen(3001, function (res, req) {
    console.log("Server live at port 3001");
});
