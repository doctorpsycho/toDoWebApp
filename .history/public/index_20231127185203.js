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

app.get("/", async function (req, res) {
  const doc = await Item.find({});
  res.render("list", { listTitle: "Today", newListItems: doc });
});


app.post("/", async function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
    const item = new Item({
      name : itemName
    });

    if (listName === "Today"){
      await item.save();
      res.redirect("/");  
    } else {
      List.findOne({name : listName})
    }

}); 

app.post("/delete" , async function(req ,res ){
  const checkedItemId = req.body.checkboxInput; 
  await Item.deleteOne({ _id: checkedItemId });
  res.redirect("/");
});

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204); 
});

const customItemsSchema = mongoose.Schema({
  name: String,
});

const customItem = mongoose.model("customItem", customItemsSchema);

// const defaultItems = [];


app.get("/:customRoute",  async function (req, res) {  
  const customRoute = req.params.customRoute;

  let customItemName = req.body.newItem;

  const item = new customItem({
    name : customItemName
  });

  await item.save();
  const doc = await Item.find({});

  res.render("list", { listTitle: customRoute, newListItems: doc });

});

app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});
