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

const defaultItems = [];

//      


app.get("/", async function (req, res) {
  const doc = await Item.find({});
  console.log (doc);
if (doc.length === 0) {
  Item.insertMany(defaultItems);
  res.redirect("/");
} else {
  res.render("list", { listTitle: "Today", newListItems: doc });
}

});


app.post("/", async function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    
    // workItems.push(item);
    res.redirect("/work");

  } else {

    // items.push(item);
    res.redirect("/");

  };

});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: defaultItems });
});
app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});
