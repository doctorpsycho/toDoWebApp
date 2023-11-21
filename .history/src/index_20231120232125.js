const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

var newListItem = "";
var kindOfDay = "";

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    console.log (kindOfDay);
    res.render("list", { kindOfDay: day });
});

app.post("/", function (req, res) {
    newListItem = req.body.newListItem;
    res.render("list", { newListItem: newListItem }); 
    console.log (newListItem);

    // res.render("list", { newListItem: newListItem });
});
app.listen(3001, function (req, res) {
    console.log("Server live at port 3001");
});