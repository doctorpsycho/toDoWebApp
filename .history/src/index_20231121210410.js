
// Installing required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set ("view engine" , "ejs");

app.use(bodyParser.urlencoded({ extended : true }) );

//Declaring variables
var array = [];
var date = new Date();


//formatting date
var options =  {
  weekday : "long",
  day : "numeric",
  month : "long"
};

today = date.toLocaleDateString( "en-US" , options );

//Displaying initial page
app.get("/" , function ( req ,res ){
 res.render("list" , { calendar : today });
});


//Hosting server
app.listen( 3000 , function ( req , res ) {
  console.log("Server live at Localhost:3000");
} );
