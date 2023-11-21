
// Installing required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set

app.use(bodyParser.urlencoded({ extended : true }) );

//Declaring variables
var array = [];

//formatting date
var date = new Date();
var object =  {
  weekday : "long",
  day : "numeric",
  month : "long"
};

calendar = date.toLocaleDateString( "US-en" , object );

//Displaying initial page
app.get("/" , function ( req ,res ){
 res.render("list" , { calendar : day });
});


//Hosting server
app.listen( 3000 , function ( req , res ) {
  console.log("Server live at Localhost:3000");
} );
