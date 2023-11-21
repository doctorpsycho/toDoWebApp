const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , function( req , res ){

    var currentDay = today.getDay;
    var today = new Date();
    var day ="  ";

    if (currentDay === 6 || currentDay === 0 ) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.sendFile(__dirname + "/views/list.ejs");
    }
});



app.listen(3001 , function( res , req ) {
    console.log("Server live at port 3001");
});