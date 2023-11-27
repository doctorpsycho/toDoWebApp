const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const item1 = "Welcome";
const item2 = "Hi";
const item3 = "Bye";
const defaultItems = [ item1, item2, item3 ];

const itemsSchema = mongoose.Schema({
  name: String,
});

const listSchema = mongoose.Schema({
  name : String,
  items : [itemsSchema]
});

const Task = mongoose.model( "Task" , listSchema );

const Item = mongoose.model("Item", itemsSchema);


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


app.get("/:customRoute",  async function (req, res) {  
  const customRoute = req.params.customRoute;

  const list = new Task({
    name : customRoute,
    items : defaultItems
  });

  list.save();

});

app.listen(3000, function () {
  console.log("Server live at Localhost:3000");
});






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/todolistDB");

// const item1 = "Welcome";
// const item2 = "Hi";
// const item3 = "Bye";

// const defaultItems = [];

// const itemsSchema = mongoose.Schema({
//   name: String,
// });

// const listSchema = mongoose.Schema({
//   name: String,
//   items : [itemsSchema]
// });

// const List = mongoose.model("List", listSchema);

// if ( foundItems.length === 0)

// app.get("/", async function (req, res) {
//   const doc = await Item.find({});
//   res.render("list", { listTitle: "Today", newListItems: doc });
// });


// app.post("/", async function (req, res) {
//   const itemName = req.body.newItem;
//   const listName = req.body.list;
//     const item = new Item({
//       name : itemName
//     });

//     if (listName === "Today"){
//       await item.save();
//       res.redirect("/");  
//     } else {
//       List.findOne({name : listName})
//     }
// }); 

// app.post("/delete" , async function(req ,res ){
//   const checkedItemId = req.body.checkboxInput; 
//   await Item.deleteOne({ _id: checkedItemId });
//   res.redirect("/");
// });

// app.get('/favicon.ico', (req, res) => {
//   res.sendStatus(204); 
// });

// const customItemsSchema = mongoose.Schema({
//   name: String,
// });

// const customItem = mongoose.model("customItem", customItemsSchema);



// app.get("/:customRoute",  async function (req, res) {  
//   const customRoute = req.params.customRoute;

//   let customItemName = req.body.newItem;

//   const item = new customItem({
//     name : customItemName
//   });

//   await item.save();
//   const doc = await Item.find({});

//   res.render("list", { listTitle: customRoute, newListItems: doc });

// });

// app.listen(3000, function () {
//   console.log("Server live at Localhost:3000");
// });
