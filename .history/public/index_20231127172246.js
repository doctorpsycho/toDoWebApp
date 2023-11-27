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

// const listSchema = mongoose.Schema({
//   name : String,
//   items : [itemsSchema]
// });

const Task = mongoose.model( "Task" , listSchema );

const Item = mongoose.model("Item", itemsSchema);

const defaultItems = [];

app.get("/", async function (req, res) {
  const doc = await Item.find({});
  res.render("list", { listTitle: "Today", newListItems: doc });
});


app.post("/", async function (req, res) {
  let itemName = req.body.newItem;

    const item = new Item({
      name : itemName
    });

    await item.save();
    res.redirect("/");

}); 

app.post("/delete" , async function(req ,res ){
  const checkedItemId = req.body.checkboxInput; 
  await Item.deleteOne({ _id: checkedItemId });
  res.redirect("/");
});


app.get("/:customRoute",  async function (req, res) {  
  const customRoute = req.params.customRoute;

  const list = new Task({
    name : customRoute,
    items : defaultItems
  });


  list.save();

  const customitem = await Task.find({});
  res.render("list", { listTitle: "Today", newListItems: customitem });

});

app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});
