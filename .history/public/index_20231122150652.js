const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let general = [];
let workItems = [];
let date = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
const today = date.toLocaleDateString("en-US", options);

// Displaying initial page
app.get("/", function(req, res) {
  res.render("list", { listTitle: today, toDo: general });
});

// Handling input from post request
app.post("/", function(req, res) {
  let toDo = req.body.newTask;
  let buttonValue = req.body.button;

  if (buttonValue === "work") {
    workItems.push(toDo);
    res.redirect("/work");
  } else {
    general.push(toDo);
    res.redirect("/");
  }
});

// Displaying work page

app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work List", toDo: workItems });
});

// Handling input on work route from post request
app.post("/work", function(req, res) {
  let work = req.body.newTask;
  workItems.push(work);
  res.redirect("/work");
});
app.listen(3000, function() {
    console.log("Server live at Localhost:3000");
});
