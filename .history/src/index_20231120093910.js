const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , function( req , res ){

    var today = new Date();
    var currentDay = today.getDay();
    var day ="";

    if (currentDay === 6 || currentDay === 0 ) {
        day = "Week End";
        res.sendFile(__dirname + "/index.html");
    } else {
        day = "Week Day";
        res.render( "list" , { kindOfDay : day } );
    }
});



app.listen(3001 , function( res , req ) {
    console.log("Server live at port 3001");
});