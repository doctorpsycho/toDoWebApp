const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const json = require("JSON");

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , function( req , res ){
    // res.sendFile(__dirname + ("/index.html"));
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0 ) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.sendFile(__dirname + "/views/list.ejs");
    }
});



app.listen(3000 , function( res , req ) {
    console.log("Server live at port 3000");
});