const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set( "view engine" , "ejs" );

app.use(bodyParser.urlencoded({extended : true}));

var TodoList = [];

app.get( "/" , function ( req , res ) { 
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    var day = today.toLocaleDateString("US-en" , options);
    console.log(day);
    res.render("list" , {kindOfDay : day , newListItems : TodoList });
   });

   app.post("/" , function( req , res ){
     var item = req.body.newTodoItem;
     console.log(newTodoItem);
     TodoList.push(newTodoItem);
     res.redirect('/');
   //   res.render("list" , { newListItem : item })
  });
   
 app.listen(3001 , function(){
    console.log("server live at 3001");
 });
