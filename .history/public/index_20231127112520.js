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

const defaultItems = [ ];


app.get("/", async function (req, res) {
  const doc = await Item.find({});

if (doc.length === 0) {
await  Item.insertMany(defaultItems);
  res.render("list", { listTitle: "Today", newListItems: doc });
} else {
  res.render("list", { listTitle: "Today", newListItems: doc });
}
});


app.post("/", async function (req, res) {
  let itemName = req.body.newItem;

  if (req.body.list === "Work") {
    const item = new Item({
      name : itemName
    });
    await item.save();
    res.redirect("/work");

  } else {
    const item = new Item({
      name : itemName
    });
    await item.save();
    res.redirect("/");
  }; // ifelse loop

}); //app.post route

app.post("/delete" , async function(req ,res ){
  const checkedItemId = req.body.checkboxInput; 
  await Item.deleteOne({ _id: checkedItemId });
  res.redirect("/");
});

app.get("/:paramName",  async function (req, res) {
  const customRoute = req.params.paramName;
  const doc = await Item.find({});
  
app.post("/", async function (req, res) {
  let itemName = req.body.newItem;
  const item = new Item({
    name : itemName
  });
  await item.save();
});
  res.redirect("/" + customRoute );
  res.render("list", { listTitle: "Today", newListItems: doc });
});


// app.get("/:paramName", async function (req, res) {
//   const customRoute = req.params.paramName;
//   try {
//     const newItem = await Item.create({ name: "New Item" }); // Replace this with your item's details
//     const defaultItems = await Item.find({}); // Assuming defaultItems is the list of all items
//     res.render("list", { listTitle: customRoute, newListItems: defaultItems });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error occurred");
//   }
// });


app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});
