
// Installing required packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended : true }) );

//Declaring variables
var date = get.Date();
var array = [];

var object = new date {
  day = "long",
  day = "numeric",
  month = "long"
};

date = date.toLocaleDateString( "US-en" , object );

//Displaying initial page
app.get("/" , function ( req ,res ){
 res.render("list" , { date : day });
});


//Hosting server
app.listen( 3000 , function ( req , res ) {
  console.log("Server live at Localhost:3000");
} );
