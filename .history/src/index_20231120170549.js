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

//     if (currentDay === 6 || currentDay === 0 ) {
//         day = "Week End";
//         res.sendFile(__dirname + "/index.html");
//     } else {
//         day = " a week day";
//         res.render( "list" , { kindOfDay : day } );
//     }
// });

if ( currentDay === 0 || currentDay === 6){
    res.sendFile(__dirname + "/index.html");
} else if ( currentDay === 1 ) {
    day = "Monday";
    res.render( "list" , {kindOfDay : day } );

} else if ( currentDay === 2 ) {
    day = "Tuesday";
    res.render( "list" , {kindOfDay : day } );

} else if ( currentDay === 3 ) {
    day = "Wednesday";
    res.render( "list" , {kindOfDay : day } );

} else if ( currentDay === 4 ) {
    day = "Thursday";
    res.render( "list" , {kindOfDay : day } );

} else {
    day = "Friday";
    res.render( "list" , {kindOfDay : day } );
}
});


app.listen(3001 , function( res , req ) {
    console.log("Server live at port 3001");
});


