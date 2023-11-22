// Installing required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set ("view engine" , "ejs");
app.use(bodyParser.urlencoded({ extended : true }) );
app.use(express.static("public"));

// Declaring let variables and getting & formatting date
let array = [];
let workItems = [];
let date = new Date();
let options =  {
  weekday : "long",
  day : "numeric",
  month : "long"
};
today = date.toLocaleDateString( "en-US" , options );

// Displaying initial page
app.get("/" , function ( req ,res ){
  res.render("list" , { listTitle : today , toDo : array });

});

// Displaying work page
app.get( "/work" , function( req , res ) {
  res.render("list" ,  { listTitle : "Work List" , toDo : workItems });
});

// handling input from post request
app.post("/" , function ( req , res ){
  let toDo = req.body.newTask;
  array.push(toDo);
  res.redirect("/");
});

// Accepting post request from work page
app.post("/work" , function( req , res ) {
  let work = req.body.newTask;
  console.log("work");
  workItems.push(work);
  res.redirect("/work");
});

// Hosting server
app.listen( 3000 , function ( req , res ) {
  console.log("Server live at Localhost:3000");
} );