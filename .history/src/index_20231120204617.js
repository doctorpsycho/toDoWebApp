const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine", "ejs");

var td = "";
app.use(bodyParser.urlencoded({ extended: true }));

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
    var item = req.body.td;
    res.redirect("/");
});
app.listen(3001, function (res, req) {
    console.log("Server live at port 3001");
});
