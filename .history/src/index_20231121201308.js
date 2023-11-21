const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set( "view engine" , "ejs" );

app.use(bodyParser.urlencoded({extended : true}));

var todoList = [];

app.get( "/" , function ( req , res ) { 
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("US-en" , options);
    console.log(day);
    res.render("list" , {kindOfDay : day , newTodo : todoList });
   });

   app.post("/" , function( req , res ){
     var newItem = req.body.newTodoItem;
     console.log(newItem);
     todoList.push(newItem);
     res.redirect("/");
  });
   
 app.listen(3001 , function(){
    console.log("server live at 3001");
 });
