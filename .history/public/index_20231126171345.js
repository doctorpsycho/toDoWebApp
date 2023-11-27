const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({name : "Get Food"});
const item2 = new Item ({name : "Cook Food"});
const item3 = new Item ({name : "Eat Food"});

const defaultItems = [ item1, item2, item3 ];

Item.insertMany(defaultItems);

// await Item.find({}) ;

async function fetchItems() {
  try {
    const foundItems = await Item.find({});
    console.log(foundItems);
  } catch (err) {
    console.log(err);
  }
}

fetchItems();



app.get("/", function (req, res) {

  res.render("list", { listTitle: "Today", newListItems: defaultItems });
});


app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {

    workItems.push(item);
    res.redirect("/work");

  } else {

    items.push(item);
    res.redirect("/");

  };

});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: defaultItems });
});
app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});




























// let general = [];
// let workItems = [];
// let date = new Date();
// let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
// };
// const today = date.toLocaleDateString("en-US", options);

// // Displaying initial page
// app.get("/", function(req, res) {
//   res.render("list", { listTitle: today, toDo: general });
// });

// // Handling input from post request
// app.post("/", function(req, res) {
//   let toDo = req.body.newTask;
//   let buttonValue = req.body.button;

//   if (buttonValue === "work") {
//     workItems.push(toDo);
//     res.redirect("/work");
//   } else {
//     general.push(toDo);
//     res.redirect("/");
//   }
// });

// // Displaying work page

// app.get("/work", function(req, res) {
//   res.render("list", { listTitle: "Work List", toDo: workItems });
// });

// // Handling input on work route from post request
// app.post("/work", function(req, res) {
//   let work = req.body.newTask;
//   workItems.push(work);
//   res.redirect("/work");
// });
