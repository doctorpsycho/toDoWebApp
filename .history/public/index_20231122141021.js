// Installing required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set ("view engine" , "ejs");
app.use(bodyParser.urlencoded({ extended : true }) );
app.use(express.static("public"));

// Declaring let variables and getting & formatting date
let general = [];
let workItems = [];
let date = new Date();
let options =  {
  weekday : "long",
  day : "numeric",
  month : "long"
};
today = date.toLocaleDateString( "en-US" , options );

res.render("list" , { listTitle : today , toDo : general });

// Displaying initial page
app.get("/" , function ( req ,res ){
  let toDo = req.body.newTask;

  if ( req.body.button === "work"){
    workItems.push(toDo);
    res.redirect("/work")
  } else {
    general.push(toDo);
    res.redirect("/");
  };

});

// Displaying work page
app.get( "/work" , function( req , res ) {
  res.render("list" ,  { listTitle : "Work List" , toDo : workItems });
});



// handling input on work route from post request
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