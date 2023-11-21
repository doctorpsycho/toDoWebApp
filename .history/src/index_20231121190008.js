const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set( "view engine" , "ejs" );

app.use(bodyParser.urlencoded({extended : true}));

var items = [];

app.get( "/" , function ( req , res ) { 
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("US-en" , options);
    console.log(day);
    res.render("list" , {kindOfDay : day , newListItem : items });
   });

   app.post("/" , function( req , res ){
     var item = req.body.newItem;
     console.log(item);
     items.push(item);
     res.redirect('/');
   //   res.render("list" , { newListItem : item })
  });
   
 app.listen(3001 , function(){
    console.log("server live at 3001");
 });
